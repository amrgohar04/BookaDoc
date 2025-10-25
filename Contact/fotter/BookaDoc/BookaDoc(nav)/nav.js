

let navbar=document.querySelector(".links")
let bars = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");
let responsnav = document.querySelector(".responnav");


responsnav.addEventListener("click", ()=>{
    bars.classList.toggle("active")
    xmark.classList.toggle("active");
    navbar.classList.toggle("active");
})

