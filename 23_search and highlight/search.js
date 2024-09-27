let btn = document.querySelector("button");
let p = document.querySelector(".para");


btn.addEventListener("click", () => {
let input = document.querySelector("input").value;

  if (input !== "") {
    let regExp = new RegExp(input, "gi");                          
    p.innerHTML = p.textContent.replace(regExp, "<mark>$&</mark>");
  }
});
