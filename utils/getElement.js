const getElement = (selection)=>{
    const element = document.querySelector(selection);
    if(element) return element;
    throw new Error("The element is not found.") 
}

export default getElement;