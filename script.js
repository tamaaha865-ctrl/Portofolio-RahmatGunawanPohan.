// SLIDER

let slides = document.querySelectorAll(".slide");

let index = 0;

function showSlide(){

slides.forEach(slide => slide.style.display="none");

index++;

if(index > slides.length){index = 1}

slides[index-1].style.display="block";

setTimeout(showSlide,3000);

}

showSlide();


// DARK MODE

const btn = document.getElementById("darkMode");

btn.onclick = function(){

document.body.classList.toggle("dark");

}