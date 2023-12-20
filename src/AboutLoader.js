export function loadAbout(){
    const container=document.querySelector(".container");
    const block=document.createElement("div");
    const h=document.createElement("h1");
    const p=document.createElement("p");
    block.classList.add("block");
    h.innerHTML="About";
    p.innerHTML="We are the best pizza place ever made come hang out and read some lorem ipsum text";
    block.appendChild(p);
    container.appendChild(h);
    container.appendChild(block)

}