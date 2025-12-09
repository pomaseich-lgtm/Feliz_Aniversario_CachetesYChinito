document.addEventListener("DOMContentLoaded", () => {

    // --- Toggle del menú hamburguesa ---
    const toggleBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".navbar-nav");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }

    // --- Animación de cards al entrar en pantalla ---
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-card");
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));

    // --- Voltear card al hacer clic ---
    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });

    // --- Responsive con JS ---
    function updateGrid() {
        const container = document.querySelector(".cards-container .row");
        const width = window.innerWidth;
        let columns;

        if (width >= 1200) columns = 4;
        else if (width >= 992) columns = 3;
        else if (width >= 768) columns = 2;
        else columns = 1;

        container.style.display = "grid";
        container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        container.style.gap = "20px";

        // Ajustar imágenes para que encuadren
        cards.forEach(card => {
            const img = card.querySelector(".card-front img");
            if (img) {
                img.style.width = "100%";
                img.style.height = "auto";
                img.style.objectFit = "cover";
            }
        });
    }

    window.addEventListener("resize", updateGrid);
    updateGrid(); // Ejecutar al cargar
});
