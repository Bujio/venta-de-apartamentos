document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});

const eventListeners = () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.addEventListener("click", navegacionResponsive);

  function navegacionResponsive() {
    const navegacion = document.querySelector(".navegacion");

    //OPCION 1
    // if (navegacion.classList.contains("mostrar")) {
    //   navegacion.classList.remove("mostrar");
    // } else {
    //   navegacion.classList.add("mostrar");
    // }

    //OPCION 2
    navegacion.classList.toggle("mostrar") //el toggle hace lo mismo que el código anterior pero en una linea
  }
};
