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

            //checking for patterns
            let text = "";
            inputs.forEach(function(item, i, arr) {
                //console.log(inputs[i].pattern, inputs[i].value);
                if (validatePattern(item)) {
                    console.log("ok");
                    isValid *= isValid;
                } else {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        html: text,
                    });
                    //alert("Please enter correct email");
                    isValid = false;
                    item.classList.add(errors.pattern);
                }

            });

            function validatePattern(input) {
                //console.log(input.pattern, input.value);
                let regex = new RegExp(input.pattern, "i");
                if (regex.exec(input.value)) {
                    return true;
                } else {
                    if (input.type == "email") {
                        text = text + 'Please enter correct email!<br>';
                    } else if (input.type == "password") {
                        text = text + 'Password must contain 8 or more characters that are of at least one number, and one letter ';
                    }
                }
            }

            // function validateEmail(email) {
            //     let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            //     return re.test(String(email).toLowerCase());
            // }

            // function validatePassword(password) {
            //     let re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            //     return re.test(String(password).toLowerCase()) && password.length > 7;
            // }


            // if (validateEmail(femail.value)) {
            //     console.log("ok");
            //     isValid = true;
            // } else {
            //     swal({
            //         type: 'error',
            //         title: 'Oops...',
            //         text: 'Please enter correct email!'
            //     });
            //     //alert("Please enter correct email");
            //     isValid = false;
            //     femail.classList.add(errors.pattern);

            // }

            // if (validatePassword(fpassword.value)) {
            //     console.log("ok");
            //     isValid = true;
            // } else {
            //     swal({
            //         type: 'error',
            //         title: 'Oops...',
            //         text: 'Password must contain 8 or more characters that are of at least one number, and one letter ',
            //         footer: '<a href>Why do I have this issue?</a>'
            //     });
            //     // alert("Password must contain 8 or more characters that are of at least one number, and one letter ");
            //     fpassword.classList.add(errors.pattern);
            //     isValid = false;
            //     // fpassword.reset();
            // }
            // AJAX


            function sendForm() {
                formData.append(email, password);
                var request = new XMLHttpRequest();
                request.open("POST", "http://foo.com/submitform.php");
                request.send(formData);
            }

            // var form = document.forms.namedItem("fileinfo");
            // form.addEventListener('submit', function(ev) {

            //     var oOutput = document.querySelector("div"),
            //         oData = new FormData(form);

            //     oData.append("CustomField", "This is some extra data");

            //     var oReq = new XMLHttpRequest();
            //     oReq.open("POST", "stash.php", true);
            //     oReq.onload = function(oEvent) {
            //         if (oReq.status == 200) {
            //             oOutput.innerHTML = "Uploaded!";
            //         } else {
            //             oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
            //         }
            //     };

            //     oReq.send(oData);
            //     ev.preventDefault();
            // }, false);

            // Success messages
            if (isValid) {
                //sendForm();
                //alert("Success!  The form has been completed, validated");
                swal(
                    'Good job!',
                    'You log in!',
                    'success'
                )
                form.querySelector('.btn').disabled = true;
            } else {
                form.reset();

            }
        }

        function setToDefaultStyles() {
            inputs.forEach(element => {
                element.classList.remove(errors.default, errors.required, errors.pattern);
            });
        }

    }
})();