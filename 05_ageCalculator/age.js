let input = document.querySelector("input");
// console.log(input);

let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");

input.addEventListener("change", () => {
let DoB = input.value;
let date = new Date(DoB);

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// console.dir(year);

if (currentDate.getDate() >= date.getDate()) {
    day.innerHTML = (currentDate.getDate() - date.getDate())
}else{
    day.innerHTML = (currentDate.getDate() + 30) - date.getDate();
    currentMonth--;   
}
if (currentDate.getMonth() >= date.getMonth()) {
   month.innerHTML = (currentDate.getMonth() - date.getMonth());
}else{
    month.innerHTML = (currentMonth + 12) - date.getMonth();
    currentYear--;
    // console.log(currentYear);
}
if (currentDate.getFullYear() >= date.getFullYear()) {
   year.innerHTML = (currentYear - date.getFullYear());
}else{
alert("Wrong Input! Please Enter Your age");
year.innerHTML = "";
day.innerHTML = "";
month.innerHTML = "";
}
})

let icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
    input.value = "";
    year.innerHTML = "";
    day.innerHTML = "";
    month.innerHTML = "";
})

