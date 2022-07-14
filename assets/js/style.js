
// ================== MODAL ========================== //
const regBtn = document.querySelector('.js-reg-btn');
const logInBtn = document.querySelector('.js-log-in-btn');
const modal = document.querySelector('.js-modal');
const modal_login = document.querySelector('.js-modal-log-in');
const modalContainerReg = document.querySelector('.js-modal-container');
const modalContainerLogIn = document.querySelector('.js-modal-container-log-in');
const modalCloseReg = document.querySelector('.js-modal-close');
const modalCloseLogIn = document.querySelector('.js-modal-close-log-in');
const registerBtn = document.querySelector('.js-register-btn');

function showRegForm()
{
    modal.classList.add('open');
}

function hideRegForm()
{
    modal.classList.remove('open');
}

function closeForm(event)
{
    event.stopPropagation();
}

function showLogInForm(){
    modal_login.classList.add('open');
}


function hideLogInForm()
{
    modal_login.classList.remove('open');
}

function closeLogInForm(event)
{
    event.stopPropagation();
}

regBtn.addEventListener('click',showRegForm);
modalCloseReg.addEventListener('click',hideRegForm);
modal.addEventListener('click',hideRegForm);
modalContainerReg.addEventListener('click',closeForm);

logInBtn.addEventListener('click',showLogInForm);
modalCloseLogIn.addEventListener('click',hideLogInForm);
modal_login.addEventListener('click',hideLogInForm);
modalContainerLogIn.addEventListener('click',closeLogInForm);

// SAVE THE USER INFORMATION

var arr = [];

function SaveInfo(){
    var a = document.getElementById("username").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("password").value;
    arr.push(a,b,c);
    console.log(arr[arr.length - 1]);
    console.log(arr[arr.length - 2]);
    alert("Đăng ký thành công");
}
console.log(arr);

registerBtn.addEventListener('click',SaveInfo);

function checkInfo(){
    var a = document.getElementById("email-log-in").value;
    var b = document.getElementById("password-log-in").value;
    if(a !== arr[arr.length - 2] || b !== arr[arr.length - 1]){
        alert("Đăng nhập sai!");
    }
    else if(a === arr[arr.length - 2] && b === arr[arr.length - 1]){
        alert("Đăng nhập thành công!");
    }
}