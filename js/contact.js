document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("emailAddress");
  const details = document.getElementById("projectDetails");
  const formMessage = document.getElementById("formMessage");
  const submitButton = form.querySelector('button[type="submit"]');

  const getErrors = () => {
    const errors = [];
    if (fullName.value.trim().length < 2) errors.push("name");
    if (!email.validity.valid) errors.push("email");
    if (details.value.trim().length < 20) errors.push("project details");
    return errors;
  };

  const updateState = () => {
    const errors = getErrors();
    fullName.setAttribute("aria-invalid", String(errors.includes("name")));
    email.setAttribute("aria-invalid", String(errors.includes("email")));
    details.setAttribute("aria-invalid", String(errors.includes("project details")));
    if (submitButton) submitButton.disabled = errors.length > 0;
    return errors;
  };

  [fullName, email, details].forEach((field) => {
    field.addEventListener("input", () => {
      updateState();
      if (formMessage.classList.contains("form-message-error")) {
        formMessage.textContent = "";
        formMessage.classList.remove("form-message-error");
      }
      formMessage.classList.remove("form-message-success");
    });
  });

  form.addEventListener("submit", (event) => {
    const errors = updateState();
    const isValid = errors.length === 0;

    if (!isValid) {
      event.preventDefault();
      formMessage.textContent = `Please correct: ${errors.join(", ")}.`;
      formMessage.classList.add("form-message-error");
      formMessage.classList.remove("form-message-success");
      if (errors.includes("name")) fullName.focus();
      else if (errors.includes("email")) email.focus();
      else details.focus();
      return;
    }

    event.preventDefault();
    formMessage.textContent = "Thanks for reaching out. Your message is ready to send.";
    formMessage.classList.remove("form-message-error");
    formMessage.classList.add("form-message-success");
    form.reset();
    [fullName, email, details].forEach((field) => field.setAttribute("aria-invalid", "false"));
    if (submitButton) submitButton.disabled = true;
  });

  updateState();
});
