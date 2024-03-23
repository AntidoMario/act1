
const info = (title, para, contactBtn) => {
    let div = document.createElement("div")
    div.className = "ClassZ"
    div.innerHTML = `
    <h1>${title}: <small><i>Kentaro Miura</i></small></h1>
                    <hr>
                     <p class="para">${para}</p>
                     <a href="https://en.wikipedia.org/wiki/Kentaro_Miura"><button class="button">${contactBtn}</button></a>
                     ` 
    return div
}

export {info}
