import "./styles.css";
import homeContent from './home';
import menuContent from './menu';
import aboutContent from './about';


alert("HELLOOOOOOO")

homeContent();

/* button event listenrs */

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");

homeButton.addEventListener("click", homeContent);
menuButton.addEventListener("click", menuContent);
aboutButton.addEventListener("click", aboutContent);

