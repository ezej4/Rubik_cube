const keyboardModal = document.getElementById("keyboard-modal");
const keyboardModalClose = document.getElementById("keyboard-modal-close");
const keyboardModalOpen = document.getElementById("keyboard-modal-trigger");

const openKeyboardModal = (mode) => {
  if (mode === "show") {
    keyboardModal.classList.add("show");
    keyboardModal.classList.remove("hide");
    loadImagesLazy();
  } else {
    keyboardModal.classList.add("hide");
    keyboardModal.classList.remove("show");
  }
};

keyboardModalOpen.addEventListener("click", (event) => {
  openKeyboardModal("show");
});

keyboardModalClose.addEventListener("click", (event) => {
  openKeyboardModal("hide");
});
