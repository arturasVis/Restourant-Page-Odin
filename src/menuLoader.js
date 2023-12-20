export function loadMenu(){
    const container=document.querySelector(".container");
    const block=document.createElement("div");
    const h=document.createElement("h1");
    const ul=document.createElement("ul");
    const li=document.createElement("li");
    const li1=document.createElement("li");
    const li2=document.createElement("li");
    const li3=document.createElement("li");
    block.classList.add("block");
    li.innerHTML="Margarita";
    li1.innerHTML="Mighty Meat";
    li2.innerHTML="Pepperoni";
    li3.innerHTML="Arturas Special Pizza";
    h.innerHTML="MENU";

    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    block.appendChild(ul);
    container.appendChild(h);
    container.appendChild(block)

}