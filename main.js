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
                input.classList.remove('phoneError');
            }
            else {
                input.classList.remove('validated');
                input.classList.add('phoneError');
            }
        }
        else if (input.id == "email") {
            if (String(input.value).toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                input.classList.add('validated');
                input.classList.remove('emailError');
            }
            else {
                input.classList.remove('validated');
                input.classList.add('emailError');
            }
        }
        else if (input.id == 'pw') {
            if (String(input.value).length >= 8)  {
                input.classList.add('validated');
                input.classList.remove('pwError');
            }
            else {
                input.classList.remove('validated');
                input.classList.add('pwError');
            }
        }
        else if (input.id == 'confirm_pw') {
            if (String(signUpForm.pw.value) != "" && String(signUpForm.pw.value).length >= 8) {
                if (String(input.value) == String(signUpForm.pw.value)) {
                    input.classList.add('validated');
                    input.classList.remove('pwMismatch');
                }
                else {
                    input.classList.remove('validated');
                    input.classList.add('pwMismatch');
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
        const error = document.querySelector("#error_" + input.id);
        if (!input.classList.contains('validated')) {
            input.classList.add("invalid-input");
            input.classList.remove("valid-input");
            label.classList.add("invalid-label");
            label.classList.remove("valid-label");
            validAll = false;

            // Check if filled out inputs
            if (input.value != "") {
                // Check for input type specific error classes
                if (input.classList.contains('pwError')) {
                    error.textContent = "Password must exceed 8 characters."
                }

                if (input.classList.contains('pwMismatch')) {
                    error.textContent = "Passwords do not match."
                }

                if (input.classList.contains('emailError')) {
                    error.textContent = "Invalid email address."
                }

                if (input.classList.contains('phoneError')) {
                    error.textContent = "Only numbers please."
                }
            }

        }

        else {
            input.classList.remove("invalid-input");
            input.classList.add("valid-input");
            label.classList.remove("invalid-label");
            label.classList.add("valid-label");
            error.textContent = "";
        }
    });

    if (validAll) {
        console.log('Valid form - submitting')
        // signUpForm.submit();
        content.style.display = 'none';
        signedUpOverlay.classList.remove('disabled');
        
    }

})


