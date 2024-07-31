
let input = document.querySelector("input");
let inputData = input.value;
let aboutFood = document.querySelector(".about-food");
let searchBtn = document.querySelector(".search-btn");




async function getRecipe() {

    if (input.value == 0) {
        aboutFood.innerHTML = "<h3>Input Field Cannot Be Empty</h3>";
    } else {
        try {
            let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
            let data = await (await fetch(`${url}${input.value}`)).json();
            // console.log(data);

            let myMeal = data.meals[0];
            let count = 1;
            let ingredients = [];
            for (let i in myMeal) {
                let ingredient = "";
                let measure = "";
                if (i.startsWith("strIngredient") && myMeal[i]) {
                    ingredient = myMeal[i];
                    measure = myMeal[`strMeasure` + count];
                    count += 1;
                    ingredients.push(`${measure} ${ingredient}`);
                }
            }
            // console.log(ingredients);
            aboutFood.innerHTML = `<div class="food-img">
        <img src="${myMeal.strMealThumb}" >
        </div>
          <div class="food-name">
             <h2>${input.value}</h2>
             <p>${myMeal.strArea}</p>
          </div>
          <div id="ingredient-con">
          </div>
          <div class="recipe-instruct">
                <h4>Watch full ${input.value} Recipe Video on <span><i id="recipe-video" class="fa-brands fa-youtube"></i></span>
                </h4>
                <h4>Vist ${input.value} Recipe Website <span id="recipe-web">Click Here</span>
                </h4>
          </div>`;

            let ingredientCon = document.getElementById("ingredient-con");
            let parent = document.createElement("ul");

            ingredients.forEach((i) => {
                let child = document.createElement("li");
                child.innerText = i;
                parent.appendChild(child);
                ingredientCon.appendChild(parent);
            });
            let recipeVideo = document.querySelector("#recipe-video");
            recipeVideo.addEventListener("click", () => {
                window.open(myMeal.strYoutube, "_blank");
            });
            let recipeWeb = document.querySelector("#recipe-web")
            recipeWeb.addEventListener("click", () => {
                window.open(myMeal.strSource, "_blank");
            });
        } catch {
            aboutFood.innerHTML = "<h2>Please Enter Right Name</h2>";
        }
    }
}

searchBtn.addEventListener("click", async () => {
    await getRecipe();
});