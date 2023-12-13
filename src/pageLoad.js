import createPage from "./createPage";
import loadHeader from "./headerLoader";
function loadPage(){
    createPage();
    loadHeader();
}

export default loadPage;