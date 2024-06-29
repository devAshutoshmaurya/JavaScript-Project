// let endDate = prompt("enter time (Date Month Year Time AM/PM) ") ;
let endDate = "6 july 2024 9:00 AM";

 document.querySelector("#end-date").innerHTML = endDate;
 let inputs = document.querySelectorAll("input");


function clock(){
    let end = new Date(endDate);
    // console.log(end);
    let now = new Date();
    // console.log(now);
    let diff = (end - now) / 1000;
    // console.log(diff);

    // 1 day = 24 hours = 86400 seconds
    // 1 hours = 60 minutes = 3600 seconds
    // 1 minutes = 60 second

      // convert into days

    let days = Math.floor(diff/(24*3600));
    inputs[0].value = days; // use value for input

    // convert into hours

    let hours = Math.floor((diff/3600)) % 24;
    inputs[1].value = hours;

     // convert into minutes

    let minutes = Math.floor((diff/60)) % 60;
    inputs[2].value = minutes;

     // convert into seconds

    let seconds = Math.floor(diff) % 60;
    inputs[3].value = seconds;

}


setInterval(() => {
  clock();
}, 1000);




