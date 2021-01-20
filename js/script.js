"use strict";

window.addEventListener('DOMContentLoaded', () => {
    // Form elements
    const squareRange = document.querySelector("#square-range"),
        squareInput = document.querySelector("#square-input");

    // Radio buttons
    const typeReconstructionElements = document.querySelectorAll("input[name='type']"),
        typeBuildingElements = document.querySelectorAll("input[name='building']"),
        roomsElements = document.querySelectorAll("input[name='rooms']");

    // Checkboxes
    const ceilings = document.querySelector("input[name='ceiling']"),
        walls = document.querySelector("input[name='walls']"),
        floor = document.querySelector("input[name='floor']");

    // Base price and element for cost output
    const basePricePerMeter = 80;
    const totalPriceElement = document.querySelector("#total-price");

    // Range binding with a text field
    squareRange.addEventListener("input", () => {
        squareInput.value = squareRange.value;
    });

    // Linking a text field with range
    squareInput.addEventListener("input", () => {
        squareRange.value = squareInput.value;
    });

    // We bypass all inputs, and if any input has been changed, we start the cost recalculation
    const inputs = document.querySelectorAll("input");

    inputs.forEach(item => {
        item.addEventListener("input", calculate);
    });

    calculate();

    function calculate() {
        // Apartment area
        const square = +squareInput.value;

        // Repair type
        let typeReconstructionCost;
        typeReconstructionElements.forEach(item => {
            if (item.checked) {
                typeReconstructionCost = +item.value;
            }
        });

        // House type
        let typeBuildingCost;
        typeBuildingElements.forEach(item => {
            if (item.checked) {
                typeBuildingCost = +item.value;
            }
        });

        // Number of rooms
        let roomsCost;
        roomsElements.forEach(item => {
            if (item.checked) {
                roomsCost = +item.value;
            }
        });

        // Additional options
        let ceilingCost = ceilings.checked ? +ceilings.value : 1,
            wallsCost = walls.checked ? +walls.value : 1,
            floorCost = floor.checked ? +floor.value : 1;

        // Calculate total cost
        const totalPrice = basePricePerMeter * square * typeReconstructionCost * typeBuildingCost * roomsCost * ceilingCost * wallsCost * floorCost;

        const formatter = new Intl.NumberFormat("en");
        totalPriceElement.innerText = formatter.format(totalPrice);
    }
});