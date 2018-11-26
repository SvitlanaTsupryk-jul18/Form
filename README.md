# [Form](https://svitlanatsupryk-jul18.github.io/Form/)


Юра!  
``` inputs.forEach(function(item, i, arr) {
                ////!!!!!здесь выводит!!!!
                console.log(inputs[i].pattern, inputs[i].value);
                if (validatePattern(inputs)) {
                    console.log("ok");
                    isValid = true;
                } else {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Please enter correct email!'
                    });
                    //alert("Please enter correct email");
                    isValid = false;
                    intuts[i].classList.add(errors.pattern);

                }

            });

            function validatePattern(input) {
                ///// !!!! здесь нет!!!
                console.log(inputs.pattern, inputs.value);
                let re = inputs.pattern;
                return re.test(String(input.value).toLowerCase());
            }
 ```

1. посмотри вадидацию на паттерны
2. send ajax
3. как очистить input?  form.reset() нормально?
4. почему всё что есть про ajax на jQuery? что по поводу метода fetch?

