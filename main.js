const inputs = document.querySelectorAll(".sign-up-input");

// Functions to validate each input
inputs.forEach( function (input) {
    if (input.id == "first_name" || input.id == "last_name") {
        input.addEventListener('keyup', () => {
            if (input.value != "") {
                input.style['border-color'] = 'green';
            }
            else {
                input.style['border-color'] = 'black';
            }
        });
        
    }
});
