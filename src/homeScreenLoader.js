export function homeLoad(){
    const container=document.querySelector(".container");

    const h=document.createElement("h1");
    const block=document.createElement("div");
    const p=document.createElement("p");

    block.classList.add("block");

    p.innerHTML="Lorem ipsum absadjsdahfnkadsjhfkjasdhfkjhads"
    h.innerHTML="BEST PIZZA IN TOWN!";

    block.appendChild(p);

    container.appendChild(h);
    container.appendChild(block);
}

export function clearHome(){
    
    const container=document.querySelector(".container");

    container.innerHTML=""
}