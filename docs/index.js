const newsLetterForm = document.getElementById('form');
const erroMessage = newsLetterForm.querySelector('span');
const inputField = newsLetterForm.querySelector('input');

const rules = {
    email: 'required|email',
};

const screenOne = document.getElementById('screen-one');
const screenTwo = document.getElementById('screen-two');

const emailPlaceholder = document.getElementById('email-placeholder');

newsLetterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let data = Object.fromEntries(new FormData(e.target));

    let validation = new Validator(data, rules);

    if (validation.fails()) {
        erroMessage.classList.remove('hide');
        inputField.classList.add('exist-error');
        emailPlaceholder.innerText = 'ash@loremcompany.com';
    } else {
        erroMessage.classList.add('hide');
        inputField.classList.remove('exist-error');
        // change the email value in the DOM
        emailPlaceholder.innerText = data.email;
        // Hide first screen and show second screen
        screenOne.classList.add('hide-screen-one');
        screenTwo.classList.add('show-screen-two');
    }
});

const dismissButton = document.getElementById('dismiss-button');

dismissButton.addEventListener('click', function () {
    screenTwo.classList.remove('show-screen-two');
    screenOne.classList.remove('hide-screen-one');
});
