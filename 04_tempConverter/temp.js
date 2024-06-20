let celcius = document.querySelector(".celcius");
let fahrenheit = document.querySelector(".fahrenheit");
let kelvin = document.querySelector(".kelvin");

celcius.addEventListener("keyup", () => {
    console.log(celcius.value);
    if (celcius.value == "") {
        fahrenheit.value = "";
        kelvin.value = "";
    } else {
        fahrenheit.value = ((celcius.value * (9/5)) + 32).toFixed(2);
        kelvin.value = (celcius.value + 273.15);
    }

});

fahrenheit.addEventListener("keyup", () => {
    console.log(fahrenheit.value);
    if (fahrenheit.value == "") {
        celcius.value = "";
        kelvin.value = "";
    } else {
        celcius.value = ((fahrenheit.value -32) * (5/9)).toFixed(2);
        kelvin.value =(((fahrenheit.value - 32) * 5/9) +273.15).toFixed(2);
    }

});

kelvin.addEventListener("keyup", () => {
    console.log(kelvin.value);
    if (kelvin.value == "") {
        celcius.value = "";
        fahrenheit.value = "";
    } else {
        celcius.value = (kelvin.value - 273.15).toFixed(2);
        fahrenheit.value = (((kelvin.value -273.15) * 9/5) + 32).toFixed(2);
    }
 
    
});