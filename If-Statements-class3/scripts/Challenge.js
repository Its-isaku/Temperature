//! --------------Challenge #2--------------

//* Challenge 5: Weather Outfit Suggestion
//* Create a program that suggests an outfit based on the weather.
//* Requirements:
//* If the temperature is below 15°C, suggest wearing a jacket.
//* If the temperature is between 15°C and 25°C, suggest a sweater.
//* If the temperature is above 25°C, suggest wearing a t-shirt.
//* Steps:
//* Prompt the user for the current temperature.
//* Use an if-else structure to suggest the correct outfit.
//* Display the suggestion on the HTML.
//* Example Input:
//* Enter the temperature in °C: 20
//* Example Output:
//* It's a bit chilly, you should wear a sweater.

function weatherOutfit(){
    let temperature = prompt("Enter the temperature in °C: ");
    let outfit = "";
    let resultElement = document.getElementById("result");

    if (temperature !== null && !isNaN(temperature) && temperature.trim() !== "") {

        if(temperature < 15){
            outfit = "jacket";
            resultElement.innerHTML = `It's cold, you should wear a ${outfit}`;
        } else if(temperature >= 15 && temperature <= 25){
            outfit = "sweater";
            resultElement.innerHTML = `It's a bit chilly, you should wear a ${outfit}`;
        } else {
            outfit = "t-shirt";
            resultElement.innerHTML = `It's warm, you should wear a ${outfit}`;
        }

        resultElement.classList.remove("hidden", "error");
        resultElement.classList.add("visible");
    } else {
        resultElement.innerHTML = "Please enter a valid number";
        resultElement.classList.remove("hidden", "visible");
        resultElement.classList.add("error");
    }
}