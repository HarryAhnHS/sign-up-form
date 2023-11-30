function validateInput() {
    const inputs = document.querySelectorAll(".sign-up-input");
    // Functions to validate each input
    inputs.forEach( function (input) {
        if (input.id == "first_name" || input.id == "last_name") {
            const nameLabel = document.querySelector("label[for=" + input.id + "]")
            if (input.value != "") {
                input.classList.add('valid-input');
                nameLabel.classList.add('valid-label');
            }
            else {
                input.classList.remove('valid-input');
                nameLabel.classList.remove('valid-label');
            }
        }
        else if (input.id == "email") {
            const emailLabel = document.querySelector("label[for=" + input.id + "]")
            if (String(input.value).toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                // console.log('valid email')
                input.classList.add('valid-input');
                emailLabel.classList.add('valid-label');
            }
            else {
                input.classList.remove('valid-input');
                emailLabel.classList.remove('valid-label');
            }
            
        }
    });
}


