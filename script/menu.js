const openButton = document.querySelector("#Openfsmenu");
const successModal = createModal(".fullscreen-menu");
const body = document.body;

openButton.addEventListener("click", e => {
  body.appendChild(successModal);
})

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("fullscreen-menu");

  const template = document.querySelector("#overlayTemplate");

  overlayElement.innerHTML = template.innerHTML;
  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  })

  const closeElement = overlayElement.querySelector(".fullscreen-menu__close");
  closeElement.addEventListener("click", e => {
    e.preventDefault();
    body.removeChild(overlayElement);
  })

  return overlayElement;
}