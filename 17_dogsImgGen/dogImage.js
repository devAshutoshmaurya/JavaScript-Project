let btn = document.querySelector(".btn");
let img = document.createElement("img");
let container = document.querySelector(".container");
async function getImage(){
    try{
        let res = await fetch("https://dog.ceo/api/breeds/image/random");
      let data = await res.json();

    // console.log(data);
    img.setAttribute("src" , data.message)
    }
    catch(err){
       let h1 = document.createElement("h1");
       h1.innerHTML = "<h2>404 Page Not Found</h2>";   
    }
}

btn.addEventListener("click", async () => {
     getImage();
     container.appendChild(img);
})

