 
 // *** select h1, button, div *** //

let heading = document.querySelector("#heading");
let button = document.querySelector("#btn");
let div = document.querySelector(".box")

// *** create random color on button click ***

button.addEventListener("click",function(){
    let x = Math.floor((Math.random()*255) + 1);
// console.log(x);
let y = Math.floor((Math.random()*255) + 1);
// console.log(y);
let z = Math.floor((Math.random()*255) + 1);
// console.log(z);
let randomColor = `rgb(${x},${y},${z})`;
// console.log(randomColor);

// *** assign the value of randomColor in heading ***

    heading.innerHTML = randomColor;

 // *** change div backgroundColor according to randomColor ***//

    div.style.backgroundColor = randomColor;

    // *** change button color *** //

    button.style.color = randomColor;

    // *** change randomColor color *** //

    heading.style.color = randomColor;

});
