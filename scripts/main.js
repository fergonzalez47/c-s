
import { apiFetch, displayServices, inputPhoneNumber, displayIconsServices, addRequestBtnService } from "./utils.js";
import { renderServices } from "./services.js";
import { initIntersectionObserver } from "./ioo.js";

import { validateContactForm } from './contact-form.js';

const servicesPath = "scripts/features.json";


//check if the input number exists
window.addEventListener("DOMContentLoaded", async () => {

    if (document.getElementById("key-features")) {
        const services = await apiFetch(servicesPath);
        const keyFeatures = document.getElementById("key-features");
        displayServices(services.services, keyFeatures);
    }

    if (document.getElementById("service-icons")) {
        const servicesIcons = await apiFetch(servicesPath);
        const iconsContainer = document.getElementById("service-icons");
        displayIconsServices(servicesIcons.iconServices, iconsContainer);
    }




    if (document.getElementById("phone")) {
        inputPhoneNumber();
    }

    const timestampInput = document.getElementById("timestamp");
    // Asigna el valor actual de tiempo (timestamp en milisegundos) al campo oculto del formulario mio
    if (timestampInput) {
        timestampInput.value = new Date().getTime();
    }

    const servicesContainer = document.getElementById('services');
    if (servicesContainer) {
        renderServices();
    }


    const ServiceContainerInfoList = document.querySelectorAll(".services-container-inf");
    if (ServiceContainerInfoList) {
        addRequestBtnService(ServiceContainerInfoList);
    }




    initIntersectionObserver();
});



// form

const form = document.querySelector(".form");

if (form) {
    const submitBtn = document.getElementById("customSubmit");
    submitBtn.addEventListener("click", () => {
        let response = validateContactForm();

        if (response) {
            form.submit();
            
        }
    })
}

