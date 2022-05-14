const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()

    const formElements = event.currentTarget.elements;

    // console.log(formElements);

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === '' || password === '') {
       return alert('Все поля должны быть заполнены')
        
    }

    const formData = {
        mail,
        password,
    }

    console.log(formData);

    form.reset()
}




