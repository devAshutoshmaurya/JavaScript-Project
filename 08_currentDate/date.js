let date = document.querySelector(".date");

let currentTime = new Date();
let currentYear = currentTime.getFullYear();
let currentDate = currentTime.getDate();

//  *** Get Current Month *** //

let currentMonth = "";
if (currentTime.getMonth() == 0) {
    currentMonth = "January";
} else if (currentTime.getMonth() == 1) {
    currentMonth = "Feburary";
} else if (currentTime.getMonth() == 2) {
    currentMonth = "March";
} else if (currentTime.getMonth() == 3) {
    currentMonth = "April";
} else if (currentTime.getMonth() == 4) {
    currentMonth = "May";
} else if (currentTime.getMonth() == 5) {
    currentMonth = "June";
} else if (currentTime.getMonth() == 6) {
    currentMonth = "July";
} else if (currentTime.getMonth() == 7) {
    currentMonth = "August";
} else if (currentTime.getMonth() == 8) {
    currentMonth = "September";
} else if (currentTime.getMonth() == 9) {
    currentMonth = "October";
} else if (currentTime.getMonth() == 10) {
    currentMonth = "November";
} else {
    currentMonth = "December";
}

//  *** Get Current Day *** //

let currentDay = "";
if (currentTime.getDay() == 0) {
    currentDay = "Sunday";
} else if (currentTime.getDay() == 1) {
    currentDay = "Monday";
} else if (currentTime.getDay() == 2) {
    currentDay = "Tuesday";
} else if (currentTime.getDay() == 3) {
    currentDay = "Wednesday";
} else if (currentTime.getDay() == 4) {
    currentDay = "Thursday";
} else if (currentTime.getDay() == 5) {
    currentDay = "Friday";
} else if (currentTime.getDay() == 6) {
    currentDay = "Saturday";
}
date.innerHTML = `${currentDay} ${currentDate} ${currentMonth} ${currentYear}`;


let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minute");
let seconds = document.querySelector(".second");

hours.innerHTML = `${currentTime.getHours()}`;
minutes.innerHTML = `${currentTime.getMinutes()}`;
seconds.innerHTML = `${currentTime.getSeconds()}`;


setInterval(() => {
    seconds.innerHTML = `${new Date().getSeconds()}`;
    // console.log(new Date().getSeconds());
    // console.log(60000-(new Date().getSeconds())*1000);
    // console.log(3600000 - (new Date().getMinutes()*60*1000));
}, 1000);


// ***  1min = (60se * 1000) milisec  ***  //

setInterval(() => {
    minutes.innerHTML = `${new Date().getMinutes()}`;
}, (60 - new Date().getSeconds()) * 1000);


// *** 1hour = (60min * 60sec * 1000) milisec ***  //

setInterval(() => {
    hours.innerHTML = `${new Date().getHours()}`;
}, ((60 - new Date().getMinutes()) * 60) * 1000);
