// SLIDER OTOMATIS
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => { slide.style.display = "none"; });
    index++;
    if (index > slides.length) { index = 1; }
    if (slides.length > 0) {
        slides[index - 1].style.display = "block";
    }
    setTimeout(showSlide, 3000); // Ganti gambar setiap 3 detik
}

// DARK MODE
const btn = document.getElementById("darkMode");
btn.onclick = function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️ Light";
    } else {
        btn.innerHTML = "🌙 Dark";
    }
};

// SMOOTH SCROLL (Navigasi Halus)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menjalankan Slider
document.addEventListener("DOMContentLoaded", showSlide);
