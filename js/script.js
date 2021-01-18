"use strict";

window.addEventListener('DOMContentLoaded', () => {
    // Form elements
    const squareRange = document.querySelector("#square-range"),
        squareInput = document.querySelector("#square-input");

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

    calculate();

    function calculate() {
        // Apartment area
        const square = +squareInput.value;

        // Calculate total cost
        const totalPrice = basePricePerMeter * square;

        const formatter = new Intl.NumberFormat("en");
        totalPriceElement.innerText = formatter.format(totalPrice);
    }
});