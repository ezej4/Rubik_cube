const loadImagesLazy = () => {
  const images = document.querySelectorAll(".keyboard-modal__grid img");
  images.forEach((img) => {
    if (img.src) return;
    
    img.src = img.dataset.src;
  });
};
