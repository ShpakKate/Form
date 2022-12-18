




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


emailMessage();
passwordMessage();
expirienceMessage();
acceptedMessage();