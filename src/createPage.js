export const createPage= () =>{
    const body=document.querySelector('body');
    const view=document.createElement('div');
    const footer=document.createElement('footer');

    const header=document.createElement('div');
    const container=document.createElement('div');
    const bodyDiv=document.createElement('div');
    const footerDiv=document.createElement('div');

    footerDiv.innerHTML="Copyright By Arturas";
    footer.appendChild(footerDiv);
    view.classList.add('view');
    header.classList.add('header');
    container.classList.add('container');
    bodyDiv.classList.add('body');

    bodyDiv.appendChild(container);

    body.appendChild(view);
    view.appendChild(header);
    view.appendChild(bodyDiv);
    view.appendChild(footer);
}

