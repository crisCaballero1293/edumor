const btnScrollTop = document.getElementById("btnScrollTop");
const btnWhats = document.getElementById("btnWhats");

window.onscroll = () => {
  if (window.scrollY > 600) {
    btnScrollTop.classList.add("mostrar");
    btnWhats.classList.add("mostrar");
  } else {
    btnScrollTop.classList.remove("mostrar");
    btnWhats.classList.remove("mostrar");
  }
};
