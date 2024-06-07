let body = document.querySelector("body");
let selBox = document.querySelectorAll(".box");
let h1 = document.querySelector("h1");
selBox.forEach(function(selBox){
selBox.addEventListener("click",function(e){
    // console.dir(e.target);
body.style.backgroundColor = e.target.style.backgroundColor;

// console.log(e.target.classList);

// this is wrong 
// body.classList = e.target.classList;

// *** change h1 color ***//
// h1.style.color = e.target.style.backgroundColor;
})
});


  