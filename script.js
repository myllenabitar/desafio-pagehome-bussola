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
    
function toggleNav() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}

