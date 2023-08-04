// Este es el script para resaltar la opción del menú seleccionada
document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos la lista de elementos del menú
    const menuItems = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop(); // Obtenemos el nombre de la página actual
  
    // Recorremos los elementos del menú para agregar eventos
    menuItems.forEach((menuItem) => {
        const href = menuItem.getAttribute("href");
        if (currentPage === href) {
          menuItem.classList.add("active");
        }
      });
    });