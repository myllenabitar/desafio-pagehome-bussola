document.addEventListener("DOMContentLoaded", function () {
    const menuButtons = document.querySelectorAll(".menu-button");

    menuButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const submenu = document.getElementById(targetId);

            if (submenu) {
                submenu.classList.toggle("ativo");
                button.classList.toggle("active");
            }
        });
    });
});
document.querySelector('.menu-hamburguer').addEventListener('click', function() {
    document.querySelector('.menu-lateral').classList.toggle('ativo');
});


