function validateInput() {
    const inputs = document.querySelectorAll(".sign-up-input");
    // Functions to validate each input
    inputs.forEach( function (input) {
        const label = document.querySelector("label[for=" + input.id + "]");
        
        if (input.id == "first_name" || input.id == "last_name") {  
            if (input.value != "") {
                input.classList.add('validated');
            }
            else {
                input.classList.remove('validated');
            }
        }
        else if (input.id == "phone") {
            if (String(input.value) != "" && String(input.value).match(/^[0-9]+$/)) {
                input.classList.add('validated');
            }
            else {
                input.classList.remove('validated');
            }
        }
        else if (input.id == "email") {
            if (String(input.value).toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                input.classList.add('validated');
            }
            else {
                input.classList.remove('validated');
            }
        }
        else if (input.id == 'pw') {
            if (String(input.value).length >= 8)  {
                input.classList.add('validated');
            }
            else {
                input.classList.remove('validated');
            }
        }
        else if (input.id == 'confirm_pw') {
            if (String(signUpForm.pw.value) != "" && String(signUpForm.pw.value).length >= 8) {
                if (String(input.value) == String(signUpForm.pw.value)) {
                    input.classList.add('validated');
                }
                else {
                    input.classList.remove('validated');
                }
            }
            else {
                input.classList.remove('validated');
            }
        }
    });
}

// Validate all inputs to have class 'validated'


const submit = document.querySelector('#submit-btn');
const signedUpOverlay = document.querySelector('.sign-up-success');
const content = document.querySelector('.content');
submit.addEventListener('click', (e) => {
    console.log('submit')
    e.preventDefault();
    const inputs = document.querySelectorAll(".sign-up-input");
    let validAll = true;
    inputs.forEach( function(input) {
        const label = document.querySelector("label[for=" + input.id + "]");
        if (!input.classList.contains('validated')) {
            input.classList.add("invalid-input");
            input.classList.remove("valid-input");
            label.classList.add("invalid-label");
            label.classList.remove("valid-label");
            validAll = false;
        }
        else {
            input.classList.remove("invalid-input");
            input.classList.add("valid-input");
            label.classList.remove("invalid-label");
            label.classList.add("valid-label");
        }
    });

    if (validAll) {
        console.log('Valid form - submitting')
        // signUpForm.submit();
        content.style.display = 'none';
        signedUpOverlay.classList.remove('disabled');
        
    }

})


