let input = document.querySelector("input");
let countryName = input.value;
let result = document.querySelector(".result");
let btn = document.querySelector("#btn");
let Img = document.createElement("img");
let h1 = document.createElement("h1");


async function getCountry() {
  try {
    let url = `https://restcountries.com/v3.1/name/${input.value}?fullText=true`;
    let res = await fetch(`${url}${countryName}`);
    let data = await res.json();
    // console.log(data);
    Img.setAttribute("src", `${data[0].flags.png}`);
    h1.innerHTML = input.value;
    result.innerHTML = `<h4>Capital : <span>${data[0].capital[0]}</span></h4>
    <h4>Continent : <span>${data[0].continents[0]}</span></h4>
    <h4>Population : <span>${data[0].population}</span></h4>
    <h4>Area :   <span>${data[0].area} km <sup>2</sup> </span></h4>
    <h4>Border :  <span>${data[0].borders || "not found"}</span></h4>`;
  }
  catch {
    h1.innerHTML = "Please Enter Valid Country Name"
  }
};

btn.addEventListener("click", async () => {
  await getCountry();
  let countryImage = document.querySelector(".country-image");
  countryImage.appendChild(Img);
  countryImage.appendChild(h1);
})
