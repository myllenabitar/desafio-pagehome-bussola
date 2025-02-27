
    /*function toggleMenu(menuLinkId, menuId) {
        const menuLink = document.getElementById(menuLinkId);
        const menu = document.getElementById(menuId);

        if (menu) {
            menu.classList.toggle("active");
            menuLink.classList.toggle("active"); 
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
*/
//código otimizado:

    document.addEventListener("click", function (event) {
        const menuLink = event.target.closest("[data-menu]");
    
        if (!menuLink) return;
    
        event.preventDefault();
    
        const menuId = menuLink.dataset.menu;
        const menu = document.getElementById(menuId);
    
        if (menu) {
            menu.classList.toggle("active");
            menuLink.classList.toggle("active");
        }
    });
    
