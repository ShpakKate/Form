import ('./scss/main.scss')

let form = document.querySelector('form');
let btnValiadate = form.querySelector('.btnValiadate');
let login = form.querySelector('.login');
let email = form.querySelector('.email');
let password = form.querySelector('.password');
let passwordConfirm = form.querySelector('.confirm-password');
let expirience = form.querySelector('.expirience');
let checkBox = form.querySelector('.accepted')
let inputFields = form.querySelectorAll('.input-style');
let elemFields = form.querySelectorAll('.fields');

function createElement(tagName, classList,text) {
    const element = document.createElement(tagName);
    for ( el of classList) {
        element.classList.add(el);
        element.innerHTML = text;
    }
    return element;
}

function errorMessage() {
    let errors = form.querySelectorAll('.error');

    for ( let i = 0; errors.length > i; i++) {
        errors[i].remove();
    }
}

function loginMessage () {
    if ( !login.value ) {
        let errorText = createElement('div',['error'],'this field is requiered');
        login.parentElement.insertAdjacentElement('afterend', errorText);
    } 
    else {
        let arrLogin = login.value.split('');

        console.log(arrLogin.length)

        if ( arrLogin.length < 4 && arrLogin.length > 0 ) {
            let errorText = createElement('div',['error'],'min length this field is 3');
            login.parentElement.insertAdjacentElement('afterend', errorText);
        }
        login.value = '';
    }
}

function emailMessage() {
    if ( !email.value ) {
        let errorText = createElement('div',['error'],'this field is requiered');
        email.parentElement.insertAdjacentElement('afterend', errorText);
    } 
    else {
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        if (!isEmailValid(email.value)) {
            let errorText = createElement('div',['error'],'must be like user@userename');
            email.parentElement.insertAdjacentElement('afterend', errorText);
        }
        
        function isEmailValid(value) {
            return EMAIL_REGEXP.test(value);
        }
    }
}

function passwordMessage() {
    if ( !password.value && !passwordConfirm.value ) {
        let errorText = createElement('div',['error'],'this field is requiered');
        let errorText2 = createElement('div',['error'],'this field is requiered');
        password.parentElement.insertAdjacentElement('afterend', errorText);
        passwordConfirm.parentElement.insertAdjacentElement('afterend', errorText2);
    } 
    else {
        if ( !(password.value == passwordConfirm.value) ) {
            let errorText = createElement('div',['error'],'must equals');
            let errorText2 = createElement('div',['error'],'must equals');
            password.parentElement.insertAdjacentElement('afterend', errorText);
            passwordConfirm.parentElement.insertAdjacentElement('afterend', errorText2);
        }
        password.value = '';
        passwordConfirm.value = '';
    }
}

function expirienceMessage() {
    if ( !expirience.value ) {
        let errorText = createElement('div',['error'],'this field is requiered');
        expirience.parentElement.insertAdjacentElement('afterend', errorText);
    } 
    else {
        if ( !(Number(expirience.value) > 0 && Number(expirience.value) < 30) ) {
            let errorText = createElement('div',['error'],'must be number or DONT LIE ME!');
            expirience.parentElement.insertAdjacentElement('afterend', errorText);
        }

    }
}

function acceptedMessage() {
    if ( !checkBox.checked) {
        let errorText = createElement('div',['error'],'you must accept term for continue');
            checkBox.parentElement.insertAdjacentElement('afterend', errorText);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    errorMessage();

    loginMessage();

    emailMessage();
    
    passwordMessage();

    expirienceMessage();

    acceptedMessage();
});




console.log();
console.log();
console.log();