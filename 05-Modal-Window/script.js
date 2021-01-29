"use strict";
let hideMe = document.querySelector(".close-modal");
hideMe.onclick = () => {
    document.querySelector(".hidden").style.display = "none";
}
let showMe = document.querySelectorAll(".show-modal");
showMe.forEach(data=> {
    data.onclick = ()=> {
        document.querySelector(".hidden").style.display = "block";
    }
})
