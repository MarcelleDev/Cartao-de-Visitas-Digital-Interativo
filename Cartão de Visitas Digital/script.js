document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelectorAll(".social-link");

    socialLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.2)";
            link.style.transition = "transform 0.2s ease, background 0.3s ease";
            link.style.background = "#b300ff"; /* Roxo neon ao passar o mouse */
        });

        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
            link.style.background = "#5e00a1"; /* Retorna ao roxo médio */
        });
    });

    const skills = document.querySelectorAll(".skills li");

    skills.forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            skill.style.transform = "scale(1.1)";
            skill.style.background = "#b300ff"; /* Destaca a habilidade ao passar o mouse */
        });

        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)";
            skill.style.background = "#5e00a1";
        });
    });
});
