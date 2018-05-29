let autorizationForm = document.querySelector('.autorization-form');

if (autorizationForm) {
    let emailInput = document.querySelector('.js-email-input');
    let emailLabel = document.querySelector('.js-email-label');
    let passwordInput = document.querySelector('.js-password-input');
    let passwordLabel = document.querySelector('.js-password-label');
    let passwordToggler = document.querySelector('.js-password-toggler');
    let passwordInputHidden = true

    emailInput.addEventListener('focus', emailFocusHandler);
    emailInput.addEventListener('focusout', emailFocusOutHandler);
    passwordInput.addEventListener('focus', passwordFocusHandler);
    passwordInput.addEventListener('focusout', passwordFocusOutHandler);
    passwordToggler.addEventListener('click', passwordTogglerHandler);

    function emailFocusHandler() {
        emailInput.setAttribute('placeholder','');
        emailLabel.classList.remove('hidden');
    }

    function emailFocusOutHandler() {
        emailInput.setAttribute('placeholder','E-mail');
        emailLabel.classList.add('hidden');
    }

    function passwordFocusHandler() {
        passwordInput.setAttribute('placeholder','');
        passwordLabel.classList.remove('hidden');
        passwordToggler.classList.remove('hidden');
    }

    function passwordFocusOutHandler() {
        passwordInput.setAttribute('placeholder','Пароль');
        passwordLabel.classList.add('hidden');
        // passwordToggler.classList.add('hidden');
    }

    function passwordTogglerHandler() {
        passwordInput.focus();
        if (passwordInputHidden) {
            passwordInputHidden = false;
            passwordInput.setAttribute('type','text');
            passwordToggler.classList.add('autorization-form__password-toggler_shown');
        } else {
            passwordInputHidden = true;
            passwordInput.setAttribute('type','password');
            passwordToggler.classList.remove('autorization-form__password-toggler_shown'); 
        }
    }

    autorizationForm.addEventListener('submit', autorizationFormSubmitHandler);

    function autorizationFormSubmitHandler(event) {
        event.preventDefault();
    }



}