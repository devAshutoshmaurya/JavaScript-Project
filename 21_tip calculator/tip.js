let billInput = document.querySelector(".bill-input");
let tipBtn = document.querySelectorAll(".btn");
let customTipValue = document.querySelector(".custom");
let noOfPeople = document.querySelector(".people-no");
let tipAmount = document.querySelector("#tip-amount");
let totalAmount = document.querySelector("#total-amount");


noOfPeople.value = 1;
let tipValue = 0;



billInput.addEventListener("input", () => {
    
    let calculat = () => {
        let tip =  ((billInput.value*tipValue)/noOfPeople.value).toFixed(2);
        // console.log(tip);
        let x = billInput.value/noOfPeople.value;

        let y = tip/noOfPeople.value;
        
     let total = (x + y).toFixed(2);
    //  console.log(total);

        tipAmount.innerHTML = `$${tip}`;
            totalAmount.innerHTML = `$${total}`;
            
    }
    noOfPeople.addEventListener("input", () => {
       if(noOfPeople.value >= 1){
        calculat();
       } 
      })
    
  
        for (const ele of tipBtn) {
            // console.dir(ele);
            ele.addEventListener("click", () => {
                // ele.classList.add("activeBtn");
         tipValue =(ele.value/100);
        calculat();
          
            })
        }   
        
        customTipValue.addEventListener("input", () => {  
             tipValue = (customTipValue.value/100);
            calculat();
            
        })

     calculat();
       
});

let resetBtn = document.querySelector(".reset");
 resetBtn.addEventListener("click", () => {
    console.log("reset");
    billInput.value = null;
    noOfPeople.value = 1;
    tipAmount.innerHTML = `$0.00`;
    totalAmount.innerHTML = `$0.00`;
    // resetBtn.classList.add("activeBtn");

   
 })





