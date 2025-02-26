document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu(buttonId, menuId) {
        const button = document.getElementById(buttonId);
        const menu = document.getElementById(menuId);

        if (menu) {
            menu.classList.toggle("ativo");
            button.classList.toggle("ativo"); // Para girar a seta corretamente
        }
    }

    document.getElementById("menu-perfil").addEventListener("click", function (event) {
        event.preventDefault();
        toggleMenu("menu-perfil", "submenu-perfil");
    });

    document.getElementById("menu-descobrir").addEventListener("click", function (event) {
        event.preventDefault();
        toggleMenu("menu-descobrir", "submenu-descobrir");
    });
});



