// SLIDER DENGAN TRANSISI HALUS [cite: 4, 5]
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    // Sembunyikan semua slide
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    index++;
    // Reset index jika melebihi jumlah slide
    if (index > slides.length) { index = 1; }

    // Tampilkan slide aktif
    if (slides.length > 0) {
        slides[index - 1].style.display = "block";
    }

    // Ganti slide setiap 3 detik
    setTimeout(showSlide, 3000);
}

// Jalankan slider saat halaman dimuat
document.addEventListener("DOMContentLoaded", showSlide);

// DARK MODE DENGAN INTERAKSI IKON [cite: 11]
const btn = document.getElementById("darkMode");

btn.onclick = function() {
    document.body.classList.toggle("dark");
    
    // Memberikan feedback visual pada tombol
    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️ Light";
    } else {
        btn.innerHTML = "🌙 Dark";
    }
};

// Smooth Scroll untuk Navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
