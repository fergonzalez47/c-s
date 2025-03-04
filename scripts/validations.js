

export function showError(fieldId) {
    const input = document.querySelector(`${fieldId} input`);
    const errorParagraph = document.querySelector(`${fieldId} .error-message`);
    input.classList.add("error");
    errorParagraph.classList.add("show");

    // Ocultar después de 5 segundos
    setTimeout(() => {
        input.classList.remove("error");
        errorParagraph.classList.remove("show");
    }, 5000);
}

export function validateFirstName(name) {
    const nameRegex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ]+(\s[a-zA-ZÁÉÍÓÚáéíóúÑñ]+)*$/;
    return nameRegex.test(name);
}

export function validateLastName(lastName) {
    const lastNameRegex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ]+(\s[a-zA-ZÁÉÍÓÚáéíóúÑñ]+)*$/;
    return lastNameRegex.test(lastName);
}


export function validateName(name) {
    const nameRegex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ]+(\s[a-zA-ZÁÉÍÓÚáéíóúÑñ]+)+$/;
    return nameRegex.test(name);
}

export function validatePhone(phone) {
    const phoneRegex = /^\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return phoneRegex.test(phone);
}


export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}


export function validateTextarea(text) {
    const textRegex = /^[a-zA-Z0-9ÁÉÍÓÚáéíóúÑñ\s.,'";:?!()-]+$/;
    return textRegex.test(text) && text.length >= 10; // Mínimo 10 caracteres
}
