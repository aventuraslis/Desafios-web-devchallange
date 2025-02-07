window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // Mostrar la sección cuando está cerca de la vista
        if (sectionTop < window.innerHeight * 0.70 && sectionBottom > 0) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
            section.style.visibility = "visible"; // Hacerla visible al entrar
        } else {
            section.style.opacity = 0;
            section.style.transform = "translateY(120px)";
            section.style.visibility = "hidden"; // Ocultarla al salir
        }
    });
});
