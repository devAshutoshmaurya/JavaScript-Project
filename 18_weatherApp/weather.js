let input = document.querySelector("input");
// let cityValue = input.value;
let btn = document.querySelector("#btn");
let country = document.querySelector(".country")
let result = document.querySelector(".result");

async function getWeather() {
    try {      
            let url = "https://api.openweathermap.org/data/2.5/weather?q=";
            let api_key = "b288b4a7257f8e5e51ae42e2e12f4aa8";
            let res = await fetch(`${url}${input.value}&apiKey=${api_key}`);
            let data = await res.json();
            console.log(data);          
            result.innerHTML = `<div class="country">
        <h1>${input.value}</h1>
        <div class="temp-about">
            <h4>${data.weather[0].description}</h4>
            <h4>${data.weather[0].main}</h4>
        </div>
    </div>
    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
    <div class="temp">
        <h1>${((data.main.temp) - 273.15).toFixed(1)} <sup>0</sup> C</h1>
    </div>
    <div class="min-max">
        <div class="min">
            <h3>min</h3>
            <h4>${((data.main.temp_min) -273.15).toFixed(1)} <sup>0</sup> C</h4>
        </div>
        <div class="max">
            <h3>max</h3>
            <h4>${((data.main.temp_max) - 273.15).toFixed(1)} <sup>0</sup> C</h4>
        </div>
    </div>`;

        }
    catch {
        result.innerHTML = "<h1>City not found</h1>";
    }
}

btn.addEventListener("click", async () => {
    getWeather();
})