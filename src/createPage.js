const createPage= () =>{
    const body=document.querySelector('body');
    const view=document.createElement('div');

    const header=document.createElement('div');
    const container=document.createElement('div');
    const bodyDiv=document.createElement('div');

    view.classList.add('view');
    header.classList.add('header');
    container.classList.add('container');
    bodyDiv.classList.add('body');

    bodyDiv.appendChild(container);

    body.appendChild(view);
    view.appendChild(header);
    view.appendChild(bodyDiv);
}

function clearContainer(){
    const container=document.querySelector('.container');
    container.innerHTML="";
}
export {createPage,clearContainer};