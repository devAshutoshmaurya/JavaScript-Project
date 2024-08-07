let billInput = document.querySelector(".bill-input");
// console.log(billInput.value)
let tipBtn = document.querySelectorAll(".btn");
let customTipValue = document.querySelector(".custom");
let noOfPeople = document.querySelector(".people-no");
let tipAmount = document.querySelector("#tip-amount");
let totalAmount = document.querySelector("#total-amount");

billInput.value = 5.00;
 let bill = parseFloat(billInput);
console.log(bill)
// billInput.addEventListener("input", () =>{
//     let billValue = billInput.value;
//     console.log(billValue);
//     calculate();
// })

// for (const ele of tipBtn) {
//     console.log(ele.value);
//     calculate();
// }
// noOfPeople.value = 1;
// noOfPeople.addEventListener("input", () => {

//     if (noOfPeople.value >= 1) {
//         calculate();
//     } else {
        
//     }

// })
// function calculate() {
//     let tip = (billValue * (ele.value / 100)).toFixed(2);
//      let tipPerPerson = tip / noOfPeople.value; 
//      let totalPerPerson = ((tip + tipPerPerson ) / noOfPeople.value).toFixed(2);
// }




