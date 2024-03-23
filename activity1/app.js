import{info} from "./src/info.js"
import{img} from "./src/img.js"




const data ={
    title       : "Author",
    para        : "Miura was born on July 11, 1966, in Chiba, Chiba Prefecture, Japan.<sup>[1]</sup> In 1976, at the age of 10, he created his first manga, entitled Miuranger, which was published for his classmates in a school publication; the series ended up spanning 40 volumes.<sup>[2]</sup> In 1977, Miura created his second manga, Ken e no Michi (剣への道, <q>The Way to the Sword</q>), in which he used India ink for the first time. When he was in middle school in 1979, his drawing techniques improved greatly as he started using professional drawing techniques.<sup>[3]</sup>",
    contactBtn  : "MORE INFO",
    myImage     : "Kentaro_Miura.png"
}

const {title, para, contactBtn, myImage} = data


let sectionOne = document.getElementById("sectionOne")


sectionOne.append(info(title, para, contactBtn))
sectionOne.append(img(myImage))


