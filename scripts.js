const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const passwordEye = document.getElementById("passwordEye");
let eyeClosed = true;

emailInput.addEventListener('focus', function(){
    document.querySelector("#email img").src = "./assets/mail-focus.svg"
})

emailInput.addEventListener('blur', function(){
    document.querySelector("#email img").src = "./assets/mail.svg"
})

passwordInput.addEventListener('focus', function(){
    document.querySelector('#password img').src = "./assets/lock-focus.svg"
})

passwordInput.addEventListener('blur', function(){
    document.querySelector('#password img').src = "./assets/lock.svg"
})

const handleToggleEye = () => {
    if(eyeClosed) {
        document.querySelector('#passwordEye svg path:nth-child(1)').style.stroke = "#FFC632";
        document.querySelector('#passwordEye svg path:nth-child(2)').style.stroke = "#FFC632";
        passwordInput.type = "text"
        eyeClosed = false;
    } else {
        document.querySelector('#passwordEye svg path:nth-child(1)').style.stroke = "#AFB6C2";
        document.querySelector('#passwordEye svg path:nth-child(2)').style.stroke = "#AFB6C2";
        passwordInput.type = "password"
        eyeClosed = true;
    }
}

passwordEye.addEventListener('click', handleToggleEye);