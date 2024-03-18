const img = document.querySelector("#image-header-desktop");

function atualizarImagem() {
  if (window.innerWidth <= 768) {
    img.setAttribute("src", "./images/image-header-mobile.jpg");
  } else {
    img.setAttribute("src", "./images/image-header-desktop.jpg");
  }
}

atualizarImagem();

window.addEventListener("resize", atualizarImagem);
