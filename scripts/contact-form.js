import { validateFirstName, validateLastName, validatePhone, validateEmail, validateTextarea, showError } from './validations.js';

export function validateContactForm() {

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const businessName = document.getElementById("businessName").value.trim();
    const description = document.getElementById("description").value.trim();

    if (firstName === "" || !validateFirstName(firstName)) {
        showError('#firstName-label');
        document.getElementById("firstName").focus();
        return false;
        
    }

    if (lastName === "" || !validateLastName(lastName)) {
        showError('#lastName-label');
        document.getElementById("lastName").focus();
        return false;
    }

    if (email === "" || !validateEmail(email)) {
        showError('#email-label');
        document.getElementById("email").focus();
        return false;
    }

    if (phone === "" || !validatePhone(phone)) {
        showError('#phone-label');
        document.getElementById("phone").focus();
        return false;
    }


    if (description === "" || !validateTextarea(description)) {
        showError('#description-label');
        document.getElementById("description").focus();
        return false;
    }

    return true; // Si todas las validaciones pasan, retorna true
}


