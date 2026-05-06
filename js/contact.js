document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("emailAddress");
    const details = document.getElementById("projectDetails");
    const formMessage = document.getElementById("formMessage");

    const isValid =
      fullName.value.trim().length >= 2 &&
      email.validity.valid &&
      details.value.trim().length >= 20;

    if (!isValid) {
      event.preventDefault();
      formMessage.textContent =
        "Please provide a valid name, email, and at least 20 characters about your project.";
      formMessage.classList.add("form-message-error");
      return;
    }

    formMessage.textContent = "";
    formMessage.classList.remove("form-message-error");
  });
});
