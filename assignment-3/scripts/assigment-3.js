let celcius = document.getElementById("celcius-scale");
let fahrenheit = document.getElementById("fahrenheit-scale");
let convertButton = document.getElementById("convert-button");

function scale() {
    if (celcius.checked) {
        return "celcius";
    } else if (fahrenheit.checked) {
        return "fahrenheit";
    }
}

function convertTemperature() {
    let temperature = prompt("Enter temperature:");
    let result;

    if (temperature !== null && !isNaN(temperature) && temperature.trim() !== "") {
        let scaleSelected = scale();

        if (scaleSelected === "celcius") {
            result = temperature * 9 / 5 + 32;
        } else if (scaleSelected === "fahrenheit") {
            result = (temperature - 32) * 5 / 9;
        } else {
            result = "Please select a scale";
        }

        return result;
    } else {
        return "Please enter a valid number ore select a scale";
    }
}

document.getElementById('convert-button').addEventListener('click', function() {
    let result = convertTemperature();

    if (typeof result === "number") {
        result = Math.round(result);
        document.getElementById('result').textContent = `The converted temperature is ${result}`;
        document.getElementById('result').classList.remove('hidden', 'error');
        document.getElementById('result').classList.add('visible');
    } else {
        document.getElementById('result').textContent = result;
        document.getElementById('result').classList.remove('hidden', 'visible');
        document.getElementById('result').classList.add('error');
    }
});