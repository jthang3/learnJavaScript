"use strict";
let hideMe = document.querySelector(".close-modal");
let overLay = document.querySelector(".overlay");
hideMe.onclick = () => {
    document.querySelector(".modal").style.display = "none";
    overLay.style.display = "none";
}
let showMe = document.querySelectorAll(".show-modal");
showMe.forEach(data=> {
    data.onclick = ()=> {
        document.querySelector(".modal").style.display = "block";
        overLay.style.display = "block";
    }
})

document.onkeydown = (evt) => {
    if(evt.key === "Escape" && document.querySelector(".modal").style.display == "block") {
        document.querySelector(".modal").style.display = "none";
        overLay.style.display = "none";
    }
}