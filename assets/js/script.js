(function(){
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



    form.addEventListener('submit', function(e){
      // Event -> e, evt, event
      e.preventDefault();

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
          input.classList.add(errors.default,errors.required);
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


      // AJAX
      // Success messages
    }

    function setToDefaultStyles() {
      inputs.forEach(element => {
        element.classList.remove(errors.default, errors.required, errors.pattern);
      });
    }

  }
})();