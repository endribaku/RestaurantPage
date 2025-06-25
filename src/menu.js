import "./styles.css";


class MenuItem {
    constructor(name, image, price, description) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
    }
}


const menuItemArray = [];

function addMenuItemToArray(name, image, price, description) {
    menuItemArray.push(new MenuItem(name, image, price, description));
}

// addding items

import pizzaImage from "../asset/resource/pizza.jpg";
import burgerImage from "../asset/resource/burger.jpg";
import pastaImage from "../asset/resource/pasta.jpg";
import saladImage from "../asset/resource/salad.jpg";
import steakImage from "../asset/resource/steak.jpg";
import dessertImage from "../asset/resource/dessert.jpg";

addMenuItemToArray(
    "Margherita Pizza",
    pizzaImage,
    9.99,
    "Classic Italian pizza with tomato, mozzarella, and basil."
);

addMenuItemToArray(
    "Cheeseburger",
    burgerImage,
    8.49,
    "Grilled beef patty, cheddar cheese, lettuce, tomato, and our signature sauce."
);

addMenuItemToArray(
    "Creamy Alfredo Pasta",
    pastaImage,
    11.75,
    "Fettuccine tossed in a rich Alfredo sauce with parmesan and garlic."
);

addMenuItemToArray(
    "Fresh Garden Salad",
    saladImage,
    6.99,
    "Mixed greens, cherry tomatoes, cucumber, red onion, and vinaigrette dressing."
);

addMenuItemToArray(
    "Grilled Ribeye Steak",
    steakImage,
    17.95,
    "Juicy ribeye cooked to your liking, served with roasted vegetables."
);

addMenuItemToArray(
    "Chocolate Lava Cake",
    dessertImage,
    5.50,
    "Warm chocolate cake with a gooey center, served with vanilla ice cream."
);


function displayMenuCards(container) {
    for(let menuItem of menuItemArray) {
        // Create card container
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("menu-card");

        // Image
        let imageElement = document.createElement("img");
        imageElement.src = menuItem.image;
        imageElement.alt = menuItem.name;
        imageElement.classList.add("menu-image");

        // Name
        let nameElement = document.createElement("h3");
        nameElement.textContent = menuItem.name;
        nameElement.classList.add("menu-name");

        // Description
        let descriptionElement = document.createElement("p");
        descriptionElement.textContent = menuItem.description;
        descriptionElement.classList.add("menu-description");

        // Price
        let priceElement = document.createElement("span");
        priceElement.textContent = `$${menuItem.price}`;
        priceElement.classList.add("menu-price");

        // Append elements to the card
        cardContainer.appendChild(imageElement);
        cardContainer.appendChild(nameElement);
        cardContainer.appendChild(descriptionElement);
        cardContainer.appendChild(priceElement);

        // Append card to main container
        container.appendChild(cardContainer);
    }

}

export default function menuLoad() {
    const contentReference = document.querySelector("#content");
    contentReference.innerHTML = "";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    
    const menuHeader = document.createElement("div")
    menuHeader.classList.add("menu-header");
    menuHeader.textContent = "Restaurant Menu";
    
    menuContainer.appendChild(menuHeader);

    const menuCardsContainer = document.createElement("div");
    menuCardsContainer.classList.add("menu-card-container");

    displayMenuCards(menuCardsContainer);

    menuContainer.appendChild(menuCardsContainer);

    contentReference.appendChild(menuContainer);
}