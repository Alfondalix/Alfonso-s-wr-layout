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

    repeatPassword.onblur = checkPassword;

    function checkPassword(){
        if(password.value !== repeatPassword.value){
            console.log("Passwords doesn't match")
        }else{
            console.log("okay")
        }
    }

    age.onblur = checkAge;

    function checkAge(){
        if(age.value <= 18){
            console.log("You must be 18 or above to submit");
        }else if(!Number.isInteger(age.value)){
            console.log("age must be an integer");
        }else{
            console.log("okay")
        }
    }

    phoneNumber.onblur = checkPhoneNumber;

    function checkPhoneNumber(){
        if (/\D\w\S/.test(phoneNumber.value)) {
            console.log("Phone number must no contain spaces or signs");
        }else if(phoneNumber.value.length < 7){
            console.log("Number is too short");
        }else {
            console.log("okay");
        }
    }

    address.onblur = checkAddress;

    function checkAddress(){
        if (address.value.length < 5) {    
            console.log("address is too short")   
        }else if(/\w\s\d/.test(address.value)){
            console.log("okay m8")
        }else{
            console.log("Formato de direccón invalido")
        }
    }

    city.onblur = checkCity;

    function checkCity(){
        if (city.value.length < 3) {
            console.log("city's name must be longer than 3");
        }else{
            console.log("okay");
        }
    }

    postalCode.onblur = checkPostalCode;

    function checkPostalCode(){
        if (postalCode.value.length < 3) {
            console.log("postal code must be longer than 3");
        }else{
            console.log("okay");
        }
    }

    idNumber.onblur = checkId;

    function checkId(){
        if(idNumber.value.length < 7){
            console.log("the id number is incorrect can't be under 7 digits");
        }else if(idNumber.value.length > 8){
            console.log("the id number is incorrect can't be longer 8 digits");
        }else{
            console.log("okay")
        }
    }
}

