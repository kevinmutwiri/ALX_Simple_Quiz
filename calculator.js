// Wrap the entire script in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    function add(number1, number2) {
        return number1 + number2;
    }

    function subtract(number1, number2) {
        return number1 - number2;
    }

    function multiply(number1, number2) {
        return number1 * number2;
    }

    function divide(number1, number2) {
        if (number2 === 0) {
            return "Cannot divide by zero!";
        }
        return number1 / number2;
    }

    function performCalculation(operation) {
        const number1Input = document.getElementById('number1');
        const number2Input = document.getElementById('number2');
        const calculationResultSpan = document.getElementById('calculation-result');

        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;

        // Perform the calculation using the provided operation function.
        const result = operation(number1, number2);

        // Display the result in the span.
        calculationResultSpan.textContent = result;
    }

    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');

    // Add click event listeners to each button
    if (addButton) {
        addButton.addEventListener('click', () => performCalculation(add));
    } else {
        console.error('Add button not found!');
    }

    if (subtractButton) {
        subtractButton.addEventListener('click', () => performCalculation(subtract));
    } else {
        console.error('Subtract button not found!');
    }

    if (multiplyButton) {
        multiplyButton.addEventListener('click', () => performCalculation(multiply));
    } else {
        console.error('Multiply button not found!');
    }

    if (divideButton) {
        divideButton.addEventListener('click', () => performCalculation(divide));
    } else {
        console.error('Divide button not found!');
    }
});
