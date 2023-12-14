import logo from './logo.png'

function loadHeader() {
    const header = document.querySelector('.header');
    const bar = document.createElement('div');
    const imgContainer= document.createElement('div');
    const img=document.createElement('img');
    const title=document.createElement('div');
    const h=document.createElement('h1');

    header.classList.add('header');
    bar.classList.add('bar');
    imgContainer.classList.add('img-container');
    img.src=logo;
    title.classList.add('title');
    h.innerHTML='Arturas Pizza';

    title.appendChild(h);
    imgContainer.appendChild(img);
    bar.appendChild(imgContainer);
    bar.appendChild(title);
    header.appendChild(bar);

}


export default loadHeader;