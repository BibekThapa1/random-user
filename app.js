import get from "./utils/getElement.js";
import fetchUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

let btn = get(".random-user")

let showUser = async () =>{
    // Fetching the data
    let person = await fetchUser();

    displayUser(person);
}

window.addEventListener("DOMContentLoaded",showUser);
btn.addEventListener("click",showUser);