//validators
function validateFullname(e){
    var errorName = document.getElementById("error-name");
    var fullnameValue = e.target.value;
    if(fullnameValue.length < 6){
        errorName.className = "error-invisible";
        errorName.innerText = "Must have more than 6 characters";
    }
    else if (!fullnameValue.includes(" ")) {
        errorName.className = "error-invisible";
        errorName.innerText = "Must have an space between";
    }else{
        errorName.innerText ="";
    }
 }

 function validateEmail(e){
     var errorEmail = document.getElementById("error-email");
     var emailValue = e.target.value;
    if(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(emailValue)){
        errorEmail.innerText = "";
    }else{
        errorEmail.className = "error-invisible";
        errorEmail.innerText = "Invalid email";
    }
}

function validatePassword(e){
    var errorPass = document.getElementById("error-password");
    var passValue = e.target.value;
    if (passValue.length < 8) {
        errorPass.className = "error-invisible";
        errorPass.innerText = "Password is too short";
    } else if (passValue.search(/\d/) == -1) {
        errorPass.className = "error-invisible"
        errorPass.innerText = "Password must have a number";
    } else if (passValue.search(/[a-zA-Z]/) == -1) {
        errorPass.className = "error-invisible"
        errorPass.innerText = "Password must have a character";
    } else {
        errorPass.innerText = "";
    }
}

function checkPassword(e){
    var errorRepPass = document.getElementById("error-rep-password");
    var e = e.target.value;
    if(password.value !== e){
        errorRepPass.className = "error-invisible";
        errorRepPass.innerText = "Passwords doesn't match";
    }else{
        errorRepPass.innerText= "";
    }
}

function validateAge(e){
    var errorAge = document.getElementById("error-age");
    var ageValue = e.target.value;
    parseInt(ageValue);
    if(ageValue <= 18){
        errorAge.className = "error-invisible";
        errorAge.innerText = "You must be 18 or above tu submit";
    }else if(typeof(ageValue) != "number"){;
        errorAge.className = "error-invisible"
        errorAge.innerText = "Age must be an integer";
    }else{
        errorAge.innerText = "";
    }
}

function validatePhoneNumber(e){
    var phoneValue = e.target.value;
    var errorPhone = document.getElementById("error-phone");
    if (/\D\w\S/.test(phoneValue)) {
        errorPhone.className = "error-invisible";
        errorPhone.innerText = "Phone number must no contain spaces or signs";
    }else if(phoneValue.length < 7){
        errorPhone.className = "error-invisible";
        errorPhone.innerText = "Number is too short";
    }else {
        errorPhone.innerText = "";
    }
}

function validateAddress(e){
    var errorAddress = document.getElementById("error-address");
    var addressValue = e.target.value;
    if (addressValue.length < 5) {   
        errorAddress.className = "error-invisible";
        errorAddress.innerText = "Address is too short";  
    }else if(/\w\s\d/.test(addressValue)){
        errorAddress.innerText = "";
    }else{
        errorAddress.className = "error-invisible";
        errorAddress.innerText = "Invalid address format";
    }
}

function validateCity(e){
    var errorCity = document.getElementById("error-city");
    var cityValue = e.target.value;
    if (cityValue.length < 3) {
        errorCity.className = "error-invisible";
        errorCity.innerText = "City's name must be longer than 3 characters";
    }else{
        errorCity.innerText ="";
    }
}

function validatePostalCode(e){
    var errorPostal = document.getElementById("error-postal");
    var postalValue = e.target.value;
    if (postalValue.length < 3) {
        errorPostal.className = "error-invisible";
        errorPostal.innerText = "Postal code must be longer than 3";
    }else{
        errorPostal.innerText = "";
    }
}

function validateId(e){
    var errorId = document.getElementById("error-id");
    var idValue = e.target.value;
    if(idValue.length < 7){
        errorId.className = "error-invisible";
        errorId.innerText = "ID number can't be shorter than 7 digits";
    }else if(idValue.length > 8){
        errorId.className = "error-invisible";
        errorId.innerText = "ID number can't be longer than 8 digits";
    }else{
        errorId.innerText= "";
    }
}

function eraseField(){
    var blank = document.querySelector(".error-invisible");
    blank.className = "error-invisible-action";
}

function displayName(e){
    document.getElementById("welcome").innerText = ": Hello, " + e.target.value;
}

window.onload = function(){

    var fullName = document.getElementById("full-name");
    fullName.onblur = validateFullname;
    fullName.onfocus = eraseField;
    fullName.addEventListener("keydown", displayName);

    var email = document.getElementById("email");
    email.onblur = validateEmail;
    email.onfocus = eraseField;

    var password = document.getElementById("password");
    password.onblur = validatePassword;
    password.onfocus = eraseField;

    var repeatPassword = document.getElementById("rep-password");
    repeatPassword.onblur = checkPassword;
    repeatPassword.onfocus = eraseField;

    var age = document.getElementById("age");
    age.onblur = validateAge;
    age.onfocus = eraseField;

    var phoneNumber = document.getElementById("phone");
    phoneNumber.onblur = validatePhoneNumber;
    phoneNumber.onfocus = eraseField;

    var address = document.getElementById("address");
    address.onblur = validateAddress;
    address.onfocus = eraseField;

    var city = document.getElementById("city");
    city.onblur = validateCity;
    city.onfocus = eraseField;

    var postalCode = document.getElementById("postal-code");
    postalCode.onblur = validatePostalCode;
    postalCode.onfocus = eraseField;

    var idNumber = document.getElementById("id-number");
    idNumber.onblur = validateId;
    idNumber.onfocus = eraseField;

    var btn = document.getElementById("btn-submit");
    btn.addEventListener("click", function(e){
        alert("form sent, " + "full name: " + fullName.value  + ", email: " + email.value + ", age: " + age.value + "phone number: " + phoneNumber.value + ", address: " + address.value + ", city: " + city.value + ", postal code: " + postalCode.value + ", id number: " + idNumber.value + "."
        )
        e.preventDefault();
    })

}

