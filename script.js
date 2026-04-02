// DARK MODE
const btn = document.getElementById("darkMode");
btn.onclick = function() {
    document.body.classList.toggle("dark");
    btn.innerHTML = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
};

// SMOOTH SCROLL (Efek geser halus saat klik menu)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
