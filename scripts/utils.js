export async function apiFetch(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Fetch error:", error);
    }
}



export function createServiceElement(service) {
    const div = document.createElement("div");
    div.classList.add("key-feature-item");

    const title = document.createElement("h3");
    title.textContent = service.title;

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");

    const icon = document.createElement("img");
    icon.setAttribute("src", service.icon);
    icon.setAttribute("alt", `image of ${service.name}`);
    icon.setAttribute("loading", "lazy");
    icon.classList.add("main-icon");

    const description = document.createElement("p");
    description.textContent = service.description;

    iconContainer.appendChild(icon);
    div.appendChild(iconContainer);
    div.appendChild(title);
    div.appendChild(description);

    return div;
}

export function displayServices(services, container) {
    services.forEach(function (service) {
        const serviceElement = createServiceElement(service);
        container.appendChild(serviceElement);
    });
}


export function inputPhoneNumber() {
    document.getElementById('phone').addEventListener('input', function (e) {
        // Eliminar todos los caracteres que no sean dígitos
        let value = e.target.value.replace(/\D/g, '');

        // Limitar a un máximo de 10 dígitos
        if (value.length > 10) {
            value = value.slice(0, 10); // Mantener solo los primeros 10 dígitos
        }

        // Formatear el número
        let formattedValue = '';
        if (value.length > 6) {
            formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
        } else if (value.length > 3) {
            formattedValue = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else if (value.length > 0) {
            formattedValue = `(${value}`;
        }

        // Asignar el valor formateado de vuelta al input
        e.target.value = formattedValue;
    });
}



export function displayModal(card, htmlElement) {
    htmlElement.innerHTML = "";
    htmlElement.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${card.title}</h2>
    <p>${card.description}</p>
    `;

    htmlElement.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        htmlElement.classList.add("closing");
        setTimeout(() => {
            htmlElement.close();
            htmlElement.classList.remove("closing");
        }, 350);
    });


}




// display icons in home


export function createIconElement(service) {
    const div = document.createElement("div");
    div.classList.add("icon-service-card");

    const title = document.createElement("h5");
    title.textContent = service.title;

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-services-container");

    const icon = document.createElement("img");
    icon.setAttribute("src", service.icon);
    icon.setAttribute("alt", `image of ${service.title}`);
    icon.setAttribute("loading", "lazy");
    icon.classList.add("home-services-icon");

    div.addEventListener("click", () => {
        window.location.href = "./services/";
    })

    iconContainer.appendChild(icon);
    div.appendChild(iconContainer);
    div.appendChild(title);

    return div;
}

export function displayIconsServices(services, container) {
    services.forEach(function (service) {
        const serviceElement = createIconElement(service);
        container.appendChild(serviceElement);
    });
}




export function addRequestBtnService(containerList) {


    containerList.forEach(container => {
        const requestBtn = document.createElement("a");
        requestBtn.textContent = "Request a Free Estimate";
        requestBtn.classList.add("cta-3");
        requestBtn.href = "https://wa.me/13854360911?text=" +
            encodeURIComponent("Hi, I am interested in requesting an estimate for cleaning services. Could you please provide more details about... ?");

        requestBtn.target = "_blank";
        requestBtn.rel = "noopener noreferrer";


        container.appendChild(requestBtn);
    });
}

