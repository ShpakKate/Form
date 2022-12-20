import('./scss/main.scss')

function addError(element, type) {
    element.closest('.fields').classList.add(type, 'field-error');
}

function addRequiredError(element) {
    addError(element, 'required');
}

function addCustomError(...element) {
    [...element].forEach(e => addError(e, 'custom'))
}

function emptyValiadate(elements) {
    const emptyInputs = Array.from(elements).filter(input => input.value === '');

    elements.forEach(function (input) {
        if (input.value === "") {
            addRequiredError(input);
        }
    });

    return emptyInputs.length === 0;
}

function loginValidate(el) {
    const arrLogin = el.value.split('');

    if (arrLogin.length < 4 && arrLogin.length > 0) {
        addCustomError(el);
        return false;
    }
    return true;
}

function emailInput(email) {
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return re.test(email);
}

function emailValidate(el) {
    if (!emailInput(el.value) && el.value != 0) {
        addCustomError(el);
        return false;
    }
    return true;
}

function passwordValidate(el, targetEl) {
    if (!(el.value === targetEl.value) && !(el.value === '' || targetEl.value === '')) {
        addCustomError(el, targetEl);
        return false;
    }
    return true;
}

function expirienceValidate(el) {
    if (!(Number(el.value) >= 0 && Number(el.value) < 30)) {
        addCustomError(el);
        return false;
    }
    return true;
}

function acceptedValidate(el) {
    if (!el.checked) {
        addCustomError(el);
        return false;
    }
    return true;
}

function clearErrosMessages(el) {
    document.querySelectorAll(el).forEach(e => {
        e.classList.remove('field-error', 'required', 'custom');
    })
}

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('.form');
    const login = form.querySelector('.login');
    const emailVal = form.querySelector('.email');
    const password = form.querySelector('.password');
    const passwordConfirmElement = form.querySelector('.confirm-password');
    const expiriencePerson = form.querySelector('.expirience');
    const checkBox = form.querySelector('.accepted');
    const inputFields = form.querySelectorAll('.input-style');

    form.addEventListener('submit', (event) => {

        event.preventDefault();

        clearErrosMessages('.fields.field-error');

        if ([
            emptyValiadate(inputFields),
            loginValidate(login),
            emailValidate(emailVal),
            passwordValidate(password, passwordConfirmElement),
            expirienceValidate(expiriencePerson),
            acceptedValidate(checkBox)].some(result => !result)
        ) {
            console.log("validation failed");
            return;
        }
        console.log("validation success");

        event.target.reset();

    });
});