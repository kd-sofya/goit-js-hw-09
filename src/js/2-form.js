const form = document.querySelector('.feedback-form');

let formData = { email: "", message: "" };

const saveForm = JSON.parse(localStorage.getItem("feedbackForm"));

if (saveForm) {
    formData = saveForm;
    form.elements.email.value = saveForm.email;
    form.elements.message.value = saveForm.message;
};


form.addEventListener('input', functionForm);
function functionForm(eve) {
  formData[eve.target.name] = eve.target.value;
  localStorage.setItem('feedbackForm', JSON.stringify(formData));
};


form.addEventListener('submit', functionSubmit);
function functionSubmit(eve) {
    eve.preventDefault();
    // console.log(eve);

    if (!formData.email || !formData.message) {
        return alert('Fill please all fields 💔');
    };

    console.log(formData);
};

localStorage.removeItem('feedback-form-state');
formData = { email: '', message: '' };
form.reset();
