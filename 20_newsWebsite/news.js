let API_Key = "a805364e690f439e86a020faeadf9020";
let url = "https://newsapi.org/v2/everything?q=";


window.addEventListener("load", () => fetchNews("india"));

function reload(){
    window.location.reload();
}
let home = document.getElementById("news-logo");
home.addEventListener("click", () => {
    reload();
})

async function fetchNews(query) {

    let res = await fetch(`${url}${query}&apikey=${API_Key}`);
    let data = await res.json();
    console.log(data);
    console.log(data.articles);

    let articles = data.articles;

    const cardsContainer = document.getElementById("cards-container");

    cardsContainer.innerHTML = "";

    articles.forEach(article => {
        if (!article.urlToImage) return;

        let cardClone = document.createElement("div")
        cardsContainer.appendChild(cardClone);

        // let date = new Date(article.publishedAt).toLocaleSrting("en-US", {
        //     timeZone: "Asia/Jakarta"
        // });
        let date = new Date(article.publishedAt).toLocaleString
        ("en-US", {
                 timeZone: "Asia/Jakarta"
        });

        // console.log(date);

        cardClone.innerHTML = `<div class="card">
            <div class="card-header">
                <img src="${article.urlToImage}" alt="news-image">
            </div>
            <div class="card-content">
                <h3 id="news-title" class="news-title">${article.title}</h3>
                <h6 id="news-source" class="news-source">${article.source.name} :${date}</h6>
                <p id="news-desc" class="news-desc">${article.description}
                </p>
            </div>
        </div>`
        //  const cardClone = cardsTemplate.content.cloneNode(true);
        //  fillDataInCard(cardClone, article);
        // cardsContainer.appendChild(cardClone);
      
        cardClone.firstElementChild.addEventListener("click", () => {
            window.open(article.url, "_blank");
        })


    });
}


// function fillDataInCard(cardClone, article){
//     const newsImg = cardClone.querySelector("#news-img");
//     let newsTitle = cardClone.querySelector("#news-title");
//     let newsDate = cardClone.querySelector("#news-source");
//     let newsDesc = cardClone.querySelector("#news-desc");
//     newsImg.src = article.urlToImage;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML = article.description;
// }

let curSelectedNav = null;
function onNavItemClick(id){
    fetchNews(id);
 const navItem = document.getElementById(id);
 curSelectedNav?.classList.remove("active");
 curSelectedNav = navItem;
 curSelectedNav.classList.add("active");
}


let input = document.querySelector(".news-input");
let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    inputQuery =  input.value;
    if(!inputQuery) return;
    fetchNews(inputQuery);
    curSelectedNav.classList.remove("active");
    // let curSelectedNav = null;
});


// let home = document.getElementById("news-logo");
// home.addEventListener("click", () => {
//    fetchNews("india");
//    curSelectedNav.classList.remove("active");
// })