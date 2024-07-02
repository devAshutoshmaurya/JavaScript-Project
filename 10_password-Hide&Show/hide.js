// let main = document.querySelector(".main");
let icon = document.querySelector(".icon");
let pass = document.querySelector(".pass");
let placeholder = document.querySelectorAll("::placeholder");
icon.addEventListener("click", function(){
  
    console.log(placeholder);
    if (pass.type == "password") {
        pass.type = "text";
        icon.classList.add("fa-eye") ;
        icon.classList.remove("fa-eye-slash") ;
       

    }else{
        pass.type = "password";
        icon.classList.remove("fa-eye") ;
     icon.classList.add("fa-eye-slash");
    }
})
