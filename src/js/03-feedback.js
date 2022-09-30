import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),

};

const FEEDBACK_MSG = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_MSG);
};

function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem(FEEDBACK_MSG, message);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem('FEEDBACK_MSG');
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}
