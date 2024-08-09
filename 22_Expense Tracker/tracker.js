// ***** select require element  ***** //
let calculateBtn = document.querySelector(".cal");
let budget = document.querySelector("#budget");
let budgetAmount = document.querySelector(".budget-amount");
let detail = document.querySelector("#details");
let amount = document.querySelector("#amount");
let expenseVal = document.querySelector(".expense-val");
let balanceVal = document.querySelector(".balance-val");
let expenseCalBtn = document.querySelector(".exp");

let ul = document.querySelector("ul");

//    ***** Alert message  *****  //

let alertMsg = (message) => {
    alert(message);
}


//    *****  Calculate butoon working  ***** //

calculateBtn.addEventListener("click", () => {
    if (budget.value == "" || budget.value < 0) {
        alertMsg("please enter budget amount greater than zero");
    }
    else {
        // console.log(budget.value);
        budgetAmount.innerHTML = `$ ${budget.value}`;
        balanceVal.innerHTML = `+ $ ${budget.value}`;
    }

});



//    *****  Add expense and balance   *****  //

let total = [];

let expenseCal = () => {
    total.push(Number(amount.value));
    let sum = total.reduce((acc, val) => {
        return acc + val;
    });
    expenseVal.innerHTML = `$ ${sum}`;
    let balanceCal = budget.value - sum;
    balanceVal.innerHTML = `+ $ ${balanceCal}`;
}



// *****   Add expense history ***** // 

let expHistory = (list, deletBtn) => {

    list.innerHTML = ` <span class="product">
        ${detail.value}
        </span>
                      <span class="value">
                         ${amount.value}
                        </span>`;
    ul.appendChild(list);
    list.appendChild(deletBtn);
}
//  *****  Delet expense history  ***** //

let delList = () => {
    let delet = document.querySelectorAll(".delet");
    for (const ele of delet) {
        ele.addEventListener("click", () => {
            ele.parentElement.remove();
            budgetAmount.innerHTML = `$0.00`;
            expenseVal.innerHTML = `$0.00`;
            balanceVal.innerHTML = `$0.00`;
           total.pop(Number(amount.value));
        //    console.log(total);
        budget.value = '';


        })
    }
}

//    *****  Add Expense btn working  *****  //

expenseCalBtn.addEventListener("click", () => {

    if (detail.value == "" || amount.value == '' || amount.value < 0 || budget.value == "") {
        alertMsg("please enter budget/expense details or enter expense amount greater than zero")
    } else {
     
        expenseCal();

        //  Create  li and button for history 
        let list = document.createElement("li");
        let deletBtn = document.createElement("button");
        deletBtn.classList.add("delet")
        deletBtn.innerHTML = "Delet";

        expHistory(list, deletBtn);
        delList();
        detail.value = '';
        amount.value = '';

    }
});





