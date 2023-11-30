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
    
    });
}


