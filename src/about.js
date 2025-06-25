import homepageImage from '../asset/resource/homepage-image.png';


export default function aboutLoad() {
    const contentReference = document.querySelector("#content");
    contentReference.innerHTML = "";

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutHeader = document.createElement("h2");
    aboutHeader.classList.add("about-header");
    aboutHeader.textContent = "About Our Restaurant";

    const aboutText = document.createElement("p");
    aboutText.classList.add("about-text");
    aboutText.textContent = "Founded in 2020, our restaurant blends tradition with creativity. We serve hand-crafted meals using locally sourced ingredients, in a warm and welcoming atmosphere that feels like home.";

    const aboutImage = document.createElement("img");
    aboutImage.classList.add("about-image");
    aboutImage.src = homepageImage; 
    aboutImage.alt = "Inside the restaurant";

    aboutContainer.appendChild(aboutHeader);
    aboutContainer.appendChild(aboutText);
    aboutContainer.appendChild(aboutImage);

    contentReference.appendChild(aboutContainer);
}