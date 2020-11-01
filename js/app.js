// Selectors

window.onload = function(){
    var fullName = document.getElementById("full-name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var repeatPassword = document.getElementById("rep-password");
    var age = document.getElementById("age");
    var phoneNumber = document.getElementById("phone");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var postalCode = document.getElementById("postal-code");
    var idNumber = document.getElementById("id-number");
    var regForm = document.getElementById("form-body");


    fullName.onblur = validateFullname;

    function validateFullname(){
       if(fullName.value.length < 6){
           console.log("el nombre debe tener mas de 6 caracteres");
       }
       if (!fullName.value.includes(" ")) {
           console.log("el nombre debe tener un espacio entre medio")
       }
    }

    email.onblur = validateEmail;

    function validateEmail(){
        if(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(email.value)){
            console.log("correo aceptado");
        }else{
            console.log("la dirección de email no es válida")
        }
    }

    password.onblur = validatePassword  ;

    function validatePassword(){
        if (password.value.length < 8) {
            console.log("password is too short");
        } else if (password.value.search(/\d/) == -1) {
            console.log("password needs to have a number");
        } else if (password.value.search(/[a-zA-Z]/) == -1) {
            console.log("password needs to have a character");
        } else {
            console.log("continue");
        }
    }

    function checkPassword(){
        if(password.value !== repeatPassword.value){
            console.log("Passwords doesn't match")
        }
    }
    
}

