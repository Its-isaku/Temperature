let celcius = document.getElementById("celcius");

function convert(){
    let celcius = prompt("Enter temperature in Celsius:");
    let resultElement = document.getElementById("result");

    if (celcius !== null && !isNaN(celcius) && celcius.trim() !== "") { //? validate the input for numbers
        let fahrenheit = celcius * 9/5 + 32;
        resultElement.innerHTML = `The temperature in Fahrenheit is ${fahrenheit}`;
        resultElement.classList.remove("hidden", "error");
        resultElement.classList.add("visible");
    } else {
        resultElement.innerHTML = "Please enter a valid number";
        resultElement.classList.remove("hidden", "visible");
        resultElement.classList.add("error");
    }
}