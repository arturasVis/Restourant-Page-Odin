import {createPage,clearContainer}from "./createPage";
import loadHeader from "./headerLoader";
import loadTabs from "./tabLoader";
function loadPage(){
    createPage();
    loadHeader();
    loadTabs();
}

export default loadPage;