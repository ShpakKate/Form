import ('./scss/main.scss')

function addError(element,type) {    
    element.closest('.fields').classList.add(type, 'field-error');
}

function addRequiredError(element) {
    addError(element,'required');
}

function addCustomError(...element) {
    [...element].forEach(e => addError(e,'custom'))
}

document.addEventListener("DOMContentLoaded", () => {
    
    let form = document.querySelector('.form');
    let login = form.querySelector('.login');
    let emailVal = form.querySelector('.email');
    let password = form.querySelector('.password');
    let passwordConfirm = form.querySelector('.confirm-password');
    let expirience = form.querySelector('.expirience');
    let checkBox = form.querySelector('.accepted');
    let inputFields = form.querySelectorAll('.input-style');
    
    function emptyValiadate() {
        let emptyInputs = Array.from(inputFields).filter(input => input.value === '');
    
        inputFields.forEach( function(input) {
            if ( input.value === "" ) {
                addRequiredError(input);
            }
        });
    
        return emptyInputs.length === 0;
    }
    
    function loginValidate() {
        let arrLogin = login.value.split('');
    
        if ( arrLogin.length < 4 && arrLogin.length > 0 ) {
            addCustomError(login);
            return false;
        }
        return true;
    }
    
    function emailInput(email) {
        const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        return re.test(email);
    }
    
    function emailValidate() {
        if (!emailInput(emailVal.value) && emailVal.value != 0) {
            addCustomError(emailVal);
            return false;
        }
        return true;
    }
    
    function passwordValiadate() {
        if ( !(password.value == passwordConfirm.value) && !(password.value === '' || passwordConfirm.value === '')) {
            addCustomError(password, passwordConfirm);
            return false; 
        }
        return true;
    }
    
    function expirienceValidate() {
        if ( !(Number(expirience.value) >= 0 && Number(expirience.value) < 30) ) {
            addCustomError(expirience);
           return false;
        }
        return true;
    }

    function acceptedValidate() {
        if ( !checkBox.checked) {
            addCustomError(checkBox);
            return false;
        }
        return true;
    }

    form.addEventListener('submit', (event) => {

        event.preventDefault();

        document.querySelectorAll('.fields.field-error').forEach( e => {
            e.classList.remove('field-error', 'required', 'custom');
        })

        if ( [
        emptyValiadate(),
        loginValidate(),
        emailValidate(), 
        passwordValiadate(), 
        expirienceValidate(), 
        acceptedValidate()].some(result => !result)
        ) {
            console.log("validation failed");
            return;
        }
        console.log("validation success");

    });
});