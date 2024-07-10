let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

let btn = document.querySelector("#btn");
let sound = document.querySelector("#sound");
let result = document.querySelector(".result")
// console.log(sound);


btn.addEventListener("click", () => {
    let inputData = document.querySelector("input").value;
    fetch(`${url}${inputData}`)
    .then((res) => 
        res.json()
    )
    .then((data) => {
        // console.log(data);
        result.innerHTML = `<div class="word">
        <h1>${inputData}</h1>
        <button onclick="playSound()" class="icon">
        <i class="fa-solid fa-volume-high"></i>
        </button>
    </div>
    <div class="details">
    <p>${(data[0].meanings[0].partOfSpeech) || ""} </p>
    <p>${(data[0].phonetic  || data[0].phonetics[2].text) || ""}</p>
</div>
    <h2>${(data[0].meanings[1].definitions[0].definition) || ""}</h2>
    <h3>${(data[0].meanings[1].definitions[0].example || data[0].meanings[2].definitions[0].example) || ""}
    </h3>
    </div>`;
sound.setAttribute("src" , `${(data[0].phonetics[0].audio) || (data[0].phonetics[1].audio)}`);
    })
    .catch(() => {
        result.innerHTML = "<h2> Couldn't Find The Word Please enter another word</h2>";
    })
  
})
function playSound() {
   sound.play();
}
