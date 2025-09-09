// Cambia la imagen principal al hacer clic en una miniatura
document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.querySelector('.main-image');
  const thumbnails = document.querySelectorAll('.product-secondimages img');
  thumbnails.forEach(img => {
    img.addEventListener('click', function() {
      mainImage.src = this.src;
      mainImage.alt = this.alt;
    });
  });
});