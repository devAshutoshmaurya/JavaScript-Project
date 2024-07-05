let container = document.querySelector(".container");
let btn = document.querySelector("#btn");
let main = document.querySelector(".main");

// *** add newdiv in body one time but change innertext many times *** //
let newdiv = document.createElement("div");
container.appendChild(newdiv);
newdiv.classList.add("otp");
// newdiv.innerHTML = "OTP"
btn.addEventListener("click",function () {
    let createPass = Math.floor((Math.random() * 900000)) + 100000;
 newdiv.innerHTML = createPass;

//  *** add pass class in newdiv *** //
 newdiv.classList.add("pass"); 
})


