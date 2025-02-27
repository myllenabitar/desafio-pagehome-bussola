document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll("[data-menu]").forEach(menuLink => { 
        menuLink.addEventListener("click", function (event) {
            const menuId = menuLink.dataset.menu;
            const menu = document.getElementById(menuId);

            if (!menu) return; 

            event.preventDefault(); 

            menu.classList.toggle("active");
            menuLink.classList.toggle("active");
        });
    });
});



    
    
