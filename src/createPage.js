const createPage= () =>{
    const body=document.querySelector('body');
    const view=document.createElement('div');

    const header=document.createElement('div');
    const nav=document.createElement('div');
    const bodyDiv=document.createElement('div');
    view.classList.add('view');
    header.classList.add('header');
    nav.classList.add('nav');
    bodyDiv.classList.add('body');
    body.appendChild(view);
    view.appendChild(header);
    view.appendChild(nav);
    view.appendChild(bodyDiv);
}

export default createPage;