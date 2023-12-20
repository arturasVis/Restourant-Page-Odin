import {createPage,clearContainer}from "./createPage";
import loadHeader from "./headerLoader";
import loadTabs from "./tabLoader";
import { homeLoad } from "./homeScreenLoader";
function loadPage(){
    createPage();
    loadHeader();
    loadTabs();
    homeLoad();
}

export default loadPage;