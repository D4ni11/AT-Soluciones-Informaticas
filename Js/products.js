// Cambia la imagen principal al hacer clic en una miniatura con animación
document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.querySelector('.main-image');
  const thumbnails = document.querySelectorAll('.product-secondimages img');
  thumbnails.forEach(img => {
    img.addEventListener('click', function() {
      if (mainImage.src !== this.src) {
        // Slide out a la izquierda
        mainImage.classList.add('slide-out');
        setTimeout(() => {
          // Cambia la imagen y la desliza a la derecha
          mainImage.src = this.src;
          mainImage.alt = this.alt;
          mainImage.classList.remove('slide-out');
          mainImage.classList.add('slide-in');
          setTimeout(() => {
            mainImage.classList.remove('slide-in');
          }, 400); // Debe coincidir con el tiempo del transition en CSS
        }, 400);
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const btnCarrito = document.querySelector('.btn-primary[data-id]');
  if (btnCarrito) {
    btnCarrito.addEventListener('click', function() {
      const productoId = this.getAttribute('data-id');
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito.push(productoId);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      alert('¡Producto agregado al carrito!');
    });
  }
});