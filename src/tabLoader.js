import { clearContainer } from "./createPage";
import { homeLoad,clearHome } from "./homeScreenLoader";

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
        homeLoad();
    })
    menuButton.addEventListener("click",(e) =>{
        clearHome()
    })

    nav.classList.add('nav');

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    header.appendChild(nav);
}



export default loadTabs;
