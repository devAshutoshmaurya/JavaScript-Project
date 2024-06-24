let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
// console.log(buttons);

let str = "";

Array.from(buttons).forEach( button => {
    button.addEventListener("click", (e) =>{
        // console.log(e.target.innerHTML)
    if (e.target.innerHTML == "=") {
        str = eval(str);
        input.value = `${input.value} = ${str}`;
    }else if (e.target.innerHTML == "C") {
        str = "";    
        input.value = str;   
    }
    else if (e.target.innerHTML == "Del") {
            str = str.slice(0,str.length-1);  
            // first arg start idx, second arg end idx
            // but second arg is not count 
        input.value = str;
        // console.log(input.value);       
    }
    else{
        str = str + e.target.innerHTML ;
        input.value = str;
    }

})
});


