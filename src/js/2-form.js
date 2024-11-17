const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']")

const FeedbackFormState = "feedback-form-state"

const saveData = localStorage.getItem(FeedbackFormState);
if (saveData) {
    const parsedData = JSON.parse(saveData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    emailInput.value = formData.email;
    messageInput.value = formData.message;
}

emailInput.addEventListener("input", emailInputFoo);
function emailInputFoo(event) {
    const value = event.target.value;
    formData.email = value;
    localStorage.setItem(FeedbackFormState, JSON.stringify(formData));
}

messageInput.addEventListener("input", messageInputFoo);
function messageInputFoo(event) {
    const value = event.target.value;
    formData.message = value;
    localStorage.setItem(FeedbackFormState, JSON.stringify(formData));
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields")
        return;
    }

    console.log(formData);

    localStorage.removeItem(FeedbackFormState);
    formData.email = "";
    formData.message = "";
    form.reset();
})