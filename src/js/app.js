document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
  darkMode();
});

const darkMode = () => {
  const prefiereDarkMode = window.matchMedia("(prefers-color-schema:dark)");
  //console.log(prefiereDarkMode.matches);
  if (prefiereDarkMode.matches) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  prefiereDarkMode.addEventListener("change", function () {
      if (prefiereDarkMode.matches) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
  })
  const botonDarkMode = document.querySelector(".dark-mode-boton");
  botonDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
};

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
    navegacion.classList.toggle("mostrar"); //el toggle hace lo mismo que el código anterior pero en una linea
  }
};
