
    function toggleMenu(menuLinkId, menuId) {
        const menuLink = document.getElementById(menuLinkId);
        const menu = document.getElementById(menuId);

        if (menu) {
            menu.classList.toggle("ativo");
            menuLink.classList.toggle("ativo"); 
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



