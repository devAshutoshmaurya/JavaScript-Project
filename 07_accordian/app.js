
// let accordianItems = document.querySelectorAll(".accordian-item");

let title = document.querySelectorAll(".accordian-title");
let content = document.querySelectorAll(".accordian-content");

// console.log(title);
// console.log(content);

for (const item of title) {
  item.addEventListener("click", () => {
    // console.log(item.nextElementSibling);

    if (item.nextElementSibling.style.display == "none" || item.nextElementSibling.style.display == "") {
      content.forEach((e) => {
        e.style.display = "none";
        // console.log( e.style.display);
      });
      item.nextElementSibling.style.display = "block";
      // console.log(item.nextElementSibling.style.display);
    } else {
      item.nextElementSibling.style.display = "none";
      // console.log(item.nextElementSibling.style.display);
    }

  })

}








