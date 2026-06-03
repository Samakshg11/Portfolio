document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("emailAddress");
  const details = document.getElementById("projectDetails");
  const formMessage = document.getElementById("formMessage");
  const submitButton = form.querySelector('button[type="submit"]');
  if (!fullName || !email || !details || !formMessage) return;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const getErrors = () => {
    const errors = [];
    const nameVal = fullName.value.trim();
    const emailVal = email.value.trim();
    const detailsVal = details.value.trim();

    if (nameVal.length < 2) errors.push({ field: fullName, message: "Name must be at least 2 characters." });
    if (!emailPattern.test(emailVal)) errors.push({ field: email, message: "Enter a valid email address." });
    if (detailsVal.length < 20) errors.push({ field: details, message: "Please provide more details (min 20 characters)." });
    return errors;
  };

  const updateState = () => {
    const errors = getErrors();
    const hasNameError = errors.some(e => e.field === fullName);
    const hasEmailError = errors.some(e => e.field === email);
    const hasDetailsError = errors.some(e => e.field === details);

    fullName.setAttribute("aria-invalid", String(hasNameError));
    email.setAttribute("aria-invalid", String(hasEmailError));
    details.setAttribute("aria-invalid", String(hasDetailsError));
    if (submitButton) submitButton.disabled = errors.length > 0;
    return errors;
  };

  [fullName, email, details].forEach((field) => {
    field.addEventListener("input", () => {
      updateState();
      formMessage.textContent = "";
      formMessage.classList.remove("form-message-error", "form-message-success");
    });
  });

  form.addEventListener("submit", (event) => {
    const errors = updateState();
    const isValid = errors.length === 0;

    if (!isValid) {
      event.preventDefault();
      formMessage.setAttribute("aria-live", "assertive");
      formMessage.textContent = errors.map(e => e.message).join(" ");
      formMessage.classList.add("form-message-error");
      formMessage.classList.remove("form-message-success");
      // focus the first invalid field
      errors[0].field.focus();
      return;
    }

    event.preventDefault();
    formMessage.setAttribute("aria-live", "polite");
    formMessage.textContent = "Thanks for reaching out — your message is ready to send.";
    formMessage.classList.remove("form-message-error");
    formMessage.classList.add("form-message-success");
    form.reset();
    [fullName, email, details].forEach((field) => field.setAttribute("aria-invalid", "false"));
    if (submitButton) {
      submitButton.disabled = true;
      // re-enable after a short delay so user can interact again
      setTimeout(() => submitButton.disabled = false, 1500);
    }
  });

  updateState();
});
