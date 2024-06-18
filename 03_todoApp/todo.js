let task = document.querySelector("input");
let ul = document.querySelector("ul");
let del = document.querySelector(".icon");



task.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        todoItem(this.value);
       task.value = "";
}
});

let todoItem = () => {
    let liItem = document.createElement("li");
    ul.appendChild(liItem);
    liItem.innerHTML = `${task.value} <i class="fa-solid icon fa-xmark"></i>`;

    liItem.addEventListener("click", function(){
        this.classList.toggle("done");
    })
    liItem.querySelector("i").addEventListener("click", function(){
        liItem.remove();
    })
}





