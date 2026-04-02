// DARK MODE
const btn = document.getElementById("darkMode");

btn.onclick = () => {
document.body.classList.toggle("dark");
};

// ANIMASI SCROLL
const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
items.forEach(item => {
const position = item.getBoundingClientRect().top;

if(position < window.innerHeight - 100){
item.style.opacity = "1";
item.style.transform = "translateY(0)";
}
});
});

// INIT
items.forEach(item=>{
item.style.opacity="0";
item.style.transform="translateY(50px)";
item.style.transition="0.5s";
});
