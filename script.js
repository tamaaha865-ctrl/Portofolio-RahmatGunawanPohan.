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
/* ANIMASI HOVER CARD */
.timeline-item{
transition:0.3s;
border-left:5px solid #2c7be5;
}

.timeline-item:hover{
transform:translateY(-5px) scale(1.02);
box-shadow:0 10px 30px rgba(0,0,0,0.2);
}

/* HERO LEBIH HIDUP */
.hero{
animation:fadeIn 1.5s ease;
}

@keyframes fadeIn{
from{
opacity:0;
transform:translateY(50px);
}
to{
opacity:1;
transform:translateY(0);
}
}

/* BUTTON LEBIH MENARIK */
.btn-sm{
display:inline-block;
padding:8px 15px;
background:#2c7be5;
color:white;
border-radius:20px;
text-decoration:none;
margin:5px 5px 0 0;
transition:0.3s;
}

.btn-sm:hover{
background:#00c6ff;
transform:scale(1.1);
}

/* SECTION SPACING BIAR RAPI */
section{
padding:80px 10%;
border-bottom:1px solid #eee;
}

/* NAVBAR EFFECT */
nav{
transition:0.3s;
}

nav:hover{
background:rgba(0,0,0,0.85);
}
