import get from "./getElement.js";
import removeActive from "./removeActive.js";

// Ascessing the elements
let title = get(".title")
let value = get(".value");
let image = get(".img")
let btns = [...document.querySelectorAll(".icon")];
 
let displayUser = (person)=>{
    value.textContent = person.name;
   image.src = person.img;
   title.textContent = "My name is";
   btns[0].classList.add("active");
   btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        removeActive(btns);
        let label = btn.dataset.label;
        value.textContent = `My ${label} is`;
        value.textContent = person[label];
        btn.classList.add("active");
    })
   })
}

export default displayUser;