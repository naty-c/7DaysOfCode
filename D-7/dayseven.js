// 7 Days of Code D-7 | Alura + Rafaella Ballerini

// Functions for each operation
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Function to start the calculator
function startCalculator() {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous result

    while (true) {
        let operation = prompt("Choose an operation: add (+), subtract (-), multiply (*), divide (/), or exit.").toLowerCase();

        if (operation === 'exit') {
            resultDiv.innerHTML = "See you another time!";
            break;
        }

        let num1 = parseFloat(prompt("Enter the first number:"));
        let num2 = parseFloat(prompt("Enter the second number:"));
        let result;

        switch (operation) {
            case 'add':
            case '+':
                result = `The result of ${num1} + ${num2} = ${add(num1, num2)}`;
                break;
            case 'subtract':
            case '-':
                result = `The result of ${num1} - ${num2} = ${subtract(num1, num2)}`;
                break;
            case 'multiply':
            case '*':
                result = `The result of ${num1} * ${num2} = ${multiply(num1, num2)}`;
                break;
            case 'divide':
            case '/':
                result = `The result of ${num1} / ${num2} = ${divide(num1, num2)}`;
                break;
            default:
                alert("Ops! Invalid operation. Please try again.");
                continue; // Continue to the next iteration of the loop
        }

        resultDiv.innerHTML = result;
        alert(result); // Show result in alert box keeping the loop

        // Clear the result after 5 seconds
        setTimeout(() => {
            resultDiv.innerHTML = '';
        }, 5000);
    }
}
