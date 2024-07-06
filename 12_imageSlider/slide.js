let slides = document.querySelectorAll(".slide");
let pre = document.querySelector(".pre");
let next = document.querySelector(".next");


let counter = 0;

slides.forEach((slide, index) => {    //  index = 0
    slide.style.left = `${index * 100}%`;
   
});

let slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}

// *** next button *** //

next.addEventListener("click", function(){
    counter++;
    // slideImage();
    // console.log(counter);
    if (counter < slides.length) {
        slideImage();
        // console.log(counter);
    }else{
        // console.log( `end = ${counter}` );
        counter = slides.length - 1;
    }
})

// *** previous button *** //

pre.addEventListener("click", function(){ 
    counter--;
    // slideImage();
    // console.log(counter);
    if (counter >= 0) {
        slideImage();
        // console.log(counter);
    }else{
        // console.log( `end = ${counter}` );
        counter = 0;
        // console.log(counter);
    }
})
