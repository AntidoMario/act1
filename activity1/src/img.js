
const img = (image) => {
    let div = document.createElement("div")
    div.className = "ClassI"
    div.innerHTML = `
    
    <img src="./images/${image}" title="Kentaro Miura">`
    return div
}   
export {img}