import "./styles.css";

import homepageImage from "../asset/resource/homepage-image.png";


export default function loadHome() {
    const contentReference = document.querySelector("#content");
    contentReference.innerHTML = "";

    let homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
    

    let homeText = document.createElement("div");
    homeText.classList.add("home-text");
    homeText.textContent = "Welcome to the Restaurant";
    homeContainer.appendChild(homeText);

    let descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    let descriptionText = document.createElement("p")
    descriptionText.classList.add("description-text");
    descriptionText.textContent = "Enjoy authentic cuisine made with fresh ingredients and a touch of passion. Open daily from 12 PM to 10 PM.";

    let descriptionImage = document.createElement("img");
    descriptionImage.classList.add("description-image");
    descriptionImage.src = homepageImage;

    descriptionContainer.appendChild(descriptionText);
    descriptionContainer.appendChild(descriptionImage);


    contentReference.appendChild(homeContainer);
    contentReference.appendChild(descriptionContainer);
}