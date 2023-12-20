import { homeLoad } from "./homeScreenLoader";
import { loadMenu } from "./menuLoader";
import { loadAbout } from "./AboutLoader";

function loadTabs(){
    const header=document.querySelector('.header');
    const nav=document.createElement('div');
    const homeButton=document.createElement('button');
    const menuButton=document.createElement('button');
    const aboutButton=document.createElement('button');

    homeButton.classList.add('nav-buttons');
    menuButton.classList.add('nav-buttons');
    aboutButton.classList.add('nav-buttons');
    homeButton.innerHTML="Home";
    menuButton.innerHTML="Menu";
    aboutButton.innerHTML="About us";

    homeButton.addEventListener("click", (e) =>{
        clear();
        homeLoad();
    })
    menuButton.addEventListener("click",(e) =>{
        clear();
        loadMenu();
    })
    aboutButton.addEventListener("click",(e) => {
        clear();
        loadAbout();
    })

    nav.classList.add('nav');

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    header.appendChild(nav);
}
function clear()
{
    const container=document.querySelector(".container");
    container.innerHTML="";
}



export default loadTabs;
