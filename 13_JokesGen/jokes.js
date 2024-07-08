let btn = document.querySelector(".btn");
let jokesContainet = document.querySelector(".joke-container");


let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single&idRange=0-100";


// Function to fetch random joke from the Chuck Norris API
async function fetchRandomJoke() {
    try {
        // Make a GET request to the API
        const response = await fetch(url);
        
        // Parse the JSON response
        const data = await response.json();
        // console.log(data);
        jokesContainet.innerHTML = data.joke;
        // console.log(jokesContainet.textContent);
    } catch (error) {
        console.error('Error fetching random joke:', error);
    }
}
// fetchRandomJoke();

btn.addEventListener("click", async () => {
      fetchRandomJoke();
})
