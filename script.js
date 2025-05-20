const form = document.getElementById('form')
const firstname_input = document.getElementById('first-name')
const email_input = document.getElementById('email')
const password_input = document.getElementById('password')
const repeat_password_input = document.getElementById('repeat-password')
const errors_message = document.getElementById('error-message')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    let errors = []
    if (firstname_input) {
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value)
    }
    else {
        errors = getLoginFormErrors(email_input.value, password_input.value)
    }

    if (errors.length > 0)
        e.preventDefault()
    errors_message.innerText = errors.join(". ")

})

function getSignupFormErrors(firstname, email, password, repeatpassword) {
    let errors = [];

    if (firstname === '' || firstname == null) {
        errors.push('First name is required');
        firstname_input.parentElement.classList.add('incorrect');
    }

    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password.length < 8) {
        errors.push('Password must have at least 8 characters');
        password_input.parentElement.classList.add('incorrect');
    }

    if (repeatpassword === '' || repeatpassword == null) {
        errors.push('Repeat password is required');
        repeat_password_input.parentElement.classList.add('incorrect');
    } else if (password !== repeatpassword) {
        errors.push('Password does not match repeated password');
        password_input.parentElement.classList.add('incorrect');
        repeat_password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

function getLoginFormErrors(email,password){
    let errors=[]

    if (email === '' || email == null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }

    if (password === '' || password == null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    return errors;
}


const allinputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input=>input !=null)

allinputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect')

        }
    })
})