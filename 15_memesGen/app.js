let btn = document.getElementById("btn");
let memeImg = document.createElement("img");

async function getMeme() {
  try{
    let url = "https://meme-api.com/gimme";
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    memeImg.setAttribute("src", `${data.url}`)
  }
  catch{
    console.log("404 Page Not Found");
  }
}

btn.addEventListener("click", async () => {
  getMeme();
  let meme = document.querySelector(".meme");
   meme.appendChild(memeImg);
})