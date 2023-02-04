const form = document.querySelector('form.login-form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert('Заповніть поля');
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();

});