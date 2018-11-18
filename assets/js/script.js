(function() {
    // invocations
    jsForm();






    function jsForm() {
        let form = document.querySelector('.js-form');
        // check if form exists
        if (!form) return console.log('Форма не найдена');

        // turn off default validation
        form.setAttribute('novalidate', 'true');

        let inputs = form.querySelectorAll('.form__input');
        let isValid = true;
        let errorClass = 'form__error';
        let errors = {
            default: errorClass,
            required: errorClass + '--required',
            pattern: errorClass + '--pattern'
        }



        form.addEventListener('submit', function(e) {
            // Event -> e, evt, event
            e.preventDefault();
            // here event=submit, this cancel submit, dont send to server

            // set to default
            isValid = true;
            setToDefaultStyles();

            // validate inputs
            validateInputs();

            // try to submit
            submitForm();
        });

        function validateInputs() {
            inputs.forEach(element => {
                isValid = checkOnRequired(element) && isValid; // true or false
            });

        };

        function checkOnRequired(input) {
            if (input.hasAttribute('required')) {
                if (input.value.trim() === '') {
                    input.classList.add(errors.default, errors.required);
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        }

        function submitForm() {
            if (!isValid) return console.log('NOT VALID');
            var femail = form.querySelector(".js-email");
            var fpassword = form.querySelector(".js-password");


            if (validateEmail(femail.value)) {
                console.log("ok");
                isValid = true;
            } else {
                alert("Please enter correct email");
                isValid = false;
                femail.classList.add(errors.default, errors.pattern);
            }

            if (validatePassword(fpassword.value)) {
                console.log("ok");
                isValid = true;
            } else {
                alert("Password must contain 8 or more characters that are of at least one number, and one letter ");
                fpassword.classList.add(errors.default, errors.pattern);
                isValid = false;
            }
            // AJAX

            // Success messages
            //alert("Success!  The form has been completed, validated");
            //
            form.querySelector('.btn').disabled = true;
        }
        //test	Метод RegExp, который тестирует совпадение в строке. Возвращет либо истину либо ложь.
        function validateEmail(email) {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }

        function validatePassword(password) {
            let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            return re.test(String(password).toLowerCase()) && password.length > 7;
        }

        function setToDefaultStyles() {
            inputs.forEach(element => {
                element.classList.remove(errors.default, errors.required, errors.pattern);
            });
        }

    }
})();