//validator functions
function validateFullname(e){
    var errorName = document.getElementById("error-name");
    var fullnameValue = e.target.value;
    if(fullnameValue.length > 6 && fullnameValue.includes(" ")){
        errorName.style.visibility = "hidden";
    }else{
        errorName.style.visibility = "visible";
    }
 }

 function validateEmail(e){
     var errorEmail = document.getElementById("error-email");
     var emailValue = e.target.value;
    if(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(emailValue)){
        errorEmail.style.visibility = "hidden";
    }else{
        errorEmail.style.visibility = "visible";
    }
}

function validatePassword(e){
    var errorPass = document.getElementById("error-password");
    var passValue = e.target.value;
    if (passValue.length < 8){
        errorPass.style.visibility = "visible";
    }  else if(passValue.search(/\d/) == -1) {
        errorPass.style.visibility = "visible";
    }else if(passValue.search(/[a-zA-Z]/) == -1){
        errorPass.style.visibility = "visible";
    } else{
        errorPass.style.visibility = "hidden";  
    }
}

function checkPassword(e){
    var errorRepPass = document.getElementById("error-rep-password");
    var ex = e.target.value;
    if(password.value !== ex){
        errorRepPass.style.visibility = "visible";
    }else{
        errorRepPass.style.visibility = "hidden";
    }
}

function validateAge(e){
    var errorAge = document.getElementById("error-age");
    var ageValue = e.target.value;
    if(isNaN(ageValue)){
        errorAge.style.visibility = "visible";
    }else{
        if ((ageValue % 1 ===0) && (ageValue >=18)) {
            errorAge.style.visibility = "hidden";
        }else {
            errorAge.style.visibility = "visible";
        }
    }
}

function validatePhoneNumber(e){
    var phoneValue = e.target.value;
    var errorPhone = document.getElementById("error-phone");
    if (/\D\w\S/.test(phoneValue) || phoneValue.length < 7) {
        errorPhone.style.visibility = "visible";
    }else {
        errorPhone.style.visibility = "hidden";
    }
}

function validateAddress(e){
    var errorAddress = document.getElementById("error-address");
    var addressValue = e.target.value;
    if (addressValue.length < 5) {   
        errorAddress.style.visibility = "visible";
    }else if(/\w\s\d/.test(addressValue) == false){
        errorAddress.style.visibility = "visible";
    }else{
        errorAddress.style.visibility = "hidden";
    }
}

function validateCity(e){
    var errorCity = document.getElementById("error-city");
    var cityValue = e.target.value;
    if (cityValue.length < 3) {
        errorCity.style.visibility = "visible";
    }else{
        errorCity.style.visibility = "hidden";
    }
}

function validatePostalCode(e){
    var errorPostal = document.getElementById("error-postal");
    var postalValue = e.target.value;
    if (postalValue.length < 3) {
        errorPostal.style.visibility = "visible"
    }else{
        errorPostal.style.visibility = "hidden";
    }
}

function validateId(e){
    var errorId = document.getElementById("error-id");
    var idValue = e.target.value;
    if(idValue.length < 7){
        errorId.style.visibility = "visible";
    }else if(idValue.length > 8){
        errorId.style.visibility= "visible";
    }else{
        errorId.style.visibility= "hidden";
    }
}


//Display name in title
function displayName(e){
    document.getElementById("welcome").innerText = ": Hello, " + e.target.value;
}

//input alerts

function submData(){
    var err = [];
    var sub = [];

    var fulln = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var postalC = document.getElementById("postal-code").value;
    var id = document.getElementById("id-number").value;
    
    

    // name err
    if(fulln.length > 6 && fulln.includes(" ")){
        document.getElementById("error-name").style.visibility ="hidden";
        sub.push("name: " + fulln)
    }else{
        document.getElementById("error-name").style.visibility ="visible";
        err.push("name: invalid name");
    }

    //email err
    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regexEmail.test(email)){
        document.getElementById("error-email").style.visibility ="hidden";
        sub.push("email: " + email);
    }else{
        document.getElementById("error-email").style.visibility ="visible";
        err.push("email: invalid email");
    }

    //password err
    
    if(pass.length < 8){
        document.getElementById("error-password").style.visibility = "visible";
        err.push("password: invalid password");   
    }else if(pass.search(/\d/) == -1){
        document.getElementById("error-password").style.visibility = "visible";
        err.push("password: invalid password");
    }else if(pass.search(/[a-zA-Z]/) == -1){
        document.getElementById("error-password").style.visibility = "visible";
        err.push("password: invalid password");
    }else{
        document.getElementById("error-password").style.visibility = "hidden";
        sub.push("password: " + password);
    }

    //age err
    if(isNaN(age)){
        document.getElementById("error-age").style.visibility = "visible";
        err.push("age: invalid age");
    }else if(age < 18){
        document.getElementById("error-age").style.visibility = "visible";
        err.push("age: invalid age");
    }else{
        document.getElementById("error-age").style.visibility = "hidden";
        sub.push("age: "+ age);
    }

    //phone err
    if(/\D\w\S/.test(phone) || phone.length < 7){
        document.getElementById("error-phone").style.visibility = "visible"
        err.push("phone: invalid phone number");
    }else{
        document.getElementById("error-phone").style.visibility = "hidden"
        sub.push("phone: "+ phone);
    }

    //address err
    var addressReg = /\w/g;
    var addSpace = /\s\d/g;
    if(address.length >= 5 && addressReg.test(address) && addSpace.test(address)){
        document.getElementById("error-address").style.visibility = "hidden"
        sub.push("address: " + address);
    }else{
        document.getElementById("error-address").style.visibility = "visible"
        err.push("address: invalid addres");
    }

    //city err
    var cityReg = /[a-zA-Z]/g;
    if(city.length >= 3 && cityReg.test(city)){
        document.getElementById("error-city").style.visibility = "hidden";
        sub.push("city: " + city);
    }else{
        document.getElementById("error-city").style.visibility = "visible";
        err.push("city: invalid city");
    }

    //postal err
    var postalReg = /\d/g;
    if(postalC.length >= 3 && postalReg.test(postalC)){
        document.getElementById("error-postal").style.visibility = "hidden";
        sub.push("postal: "+ postalC);
    }else{
        document.getElementById("error-postal").style.visibility = "visible";
        err.push("postal: invalid postal code");
    }

    //id err
    var idReg = /\d/g;
    if(id.length >= 7 && id.length <= 8 && idReg.test(id)){
        document.getElementById("error-id").style.visibility = "hidden";
        sub.push("ID: "+ id);
    }else{
        document.getElementById("error-id").style.visibility = "visible";
        err.push("ID: invalid ID");
    }

    //display alerts
    if(err == []){
        alert(sub.join("\n"));
    }else{
        alert(sub.join("\n"));
    }
}



window.onload = function(){

    var fullName = document.getElementById("full-name");
    fullName.onblur = validateFullname;
    fullName.addEventListener("focus", function(){
        document.getElementById("error-name").style.visibility =" hidden";
    });
    fullName.addEventListener("keydown", displayName);

    var email = document.getElementById("email");
    email.onblur = validateEmail;
    email.addEventListener("focus", function(){
        document.getElementById("error-email").style.visibility = "hidden";
    })

    var password = document.getElementById("password");
    password.onblur = validatePassword;
    password.addEventListener("focus", function(){
        document.getElementById("error-password").style.visibility = "hidden";
    })

    var repeatPassword = document.getElementById("rep-password");
    repeatPassword.onblur = checkPassword;
    repeatPassword.addEventListener("focus", function(){
        document.getElementById("error-rep-password").style.visibility = "hidden";
    })

    var age = document.getElementById("age");
    age.onblur = validateAge;
    age.addEventListener("focus", function(){
        document.getElementById("error-age").style.visibility = "hidden";
    })

    var phoneNumber = document.getElementById("phone");
    phoneNumber.onblur = validatePhoneNumber;
    phoneNumber.addEventListener("focus", function(){
        document.getElementById("error-phone").style.visibility = "hidden";
    })

    var address = document.getElementById("address");
    address.onblur = validateAddress;
    address.addEventListener("focus", function(){
        document.getElementById("error-address").style.visibility = "hidden";
        });
    
    var city = document.getElementById("city");
    city.onblur = validateCity;
    city.addEventListener("focus", function(){
        document.getElementById("error-city").style.visibility = "hidden";
    })

    var postalCode = document.getElementById("postal-code");
    postalCode.onblur = validatePostalCode;
    postalCode.addEventListener("focus", function(){
        document.getElementById("error-postal").style.visibility = "hidden";
    })

    var idNumber = document.getElementById("id-number");
    idNumber.onblur = validateId;
    idNumber.addEventListener("focus", function(){
        document.getElementById("error-id").style.visibility = "hidden";
    })

    var btn = document.getElementById("btn-submit");
    btn.addEventListener("click", function(e){
        e.preventDefault();
        submData();
    })

}

