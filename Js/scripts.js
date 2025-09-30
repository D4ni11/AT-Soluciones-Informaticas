// ==== LISTA DE PRODUCTOS (simulación) ====
 const products = [
  {
    name: "Mini Pc HP Elitebook 800 G3 Tiny",
    price: 450,
    image: "https://www.infinit.com.uy/imgs/productos/productos3_37992.jpg",
    link: "Productos/Mini-Pc-HP-Elitebook-800-G3-Tiny.html"
  },
  {
    name: "Notebook DELL Latitude 5400",
    price: 399,
    image: "https://www.infinit.com.uy/imgs/productos/productos33_38622.jpg",
    link: "Productos/Notebook-DELL-Latitude-5400.html"
  },

  { name: "PC Gamer AMD Ryzen 5 5600G", 
    price: 425, 
    image: "https://www.infinit.com.uy/imgs/productos/productos3_22522.jpg",
    link: "Productos/PC-Gamer-AMD-Ryzen-5-5600G.html"
  },

  { name: "Notebook DELL Latitude 7390", 
    price: 428, 
    image: "https://www.infinit.com.uy/imgs/productos/productos33_38679.jpg",
    link: "Productos/Notebook-DELL-Latitude-7390.html"
  },
  { name: "Notebook HP 15-fc0037wm", 
    price: 480, 
    image: "https://www.infinit.com.uy/imgs/productos/productos33_36527.jpg",
    link: "Productos/Notebook-HP-15-fc0037wm.html"
  },
  { name: "Equipo Pc Refabricado Hp Elitedesk 705 Amd A10-8770 3.8Ghz Ram 16Gb Ssd 240G Video Vega 7 Wifi Coa Win10 64bit Pro", 
    price: 295, 
    image: "https://www.infinit.com.uy/imgs/productos/productos33_21173.jpg",
    link: "Productos/Equipo-Pc-Refabricado-Hp-Elitedesk-705-Amd-A10-8770-3.8Ghz-Ram-16Gb-Ssd-240G-Video-Vega-7-Wifi-Coa-Win10-64bit-Pro.html"
  },
  { name: "Equipo Ultra Mini Pc Lenovo Tiny M83 Intel Core i5 4590t 2.0Ghz Ram 16Gb Ddr3 Ssd 480Gb Vga y 2x Dp Win10 64bit", 
    price: 390, 
    image: "https://www.infinit.com.uy/imgs/productos/productos33_23880.jpg",
    link: "Productos/Equipo-Ultra-Mini-Pc-Lenovo-Tiny-M83-Intel-Core-i5-4590t-2.0Ghz-Ram-16Gb-Ddr3-Ssd-480Gb-Vga-y-2x-Dp-Win10-64bit.html"
  },

  { name: "PC Gamer AMD Ryzen 3 5300G (4 Núcleos) - RAM 16Gb - Ssd 512Gb - Wifi/Bt Windows 11 Pro", 
    price: 613, 
    image: "https://www.infinit.com.uy/imgs/productos/productos33_35604.jpg",
    link: "Productos/PC-Gamer-AMD-Ryzen-3-5300G-(4 Núcleos)-RAM-16Gb-Ssd 512Gb-Wifi-Bt-Windows-11-Pro.html"
  },
  { id: 9, name: "Equipo PC INTEL Core i3 13100 13va Gen", price: 576, image: "https://www.infinit.com.uy/imgs/productos/productos3_38323.jpg" },
  { id: 10, name: "PC Gamer AMD Ryzen 7 5700G", price: 636, image: "https://www.infinit.com.uy/imgs/productos/productos3_19809.jpg" }
];

// ==== MOSTRAR PRODUCTOS EN LA GRILLA ====
function displayProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = ""; // limpiar por si ya hay productos
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p><b>USD ${p.price}</b></p>
      <div class="product-actions">
        <a href="${p.link}" class="btn-ver-mas"><button>Ver más</button></a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==== CARRITO (simulado con alert) ====
function addToCart(productName) {
  alert(`${productName} agregado al carrito 🛒`);
}

// ==== INICIO ====
window.onload = displayProducts;


// ==== CARRITO MINI ====
document.addEventListener('DOMContentLoaded', function() {
  const cartIcon = document.querySelector('.cart-icon');
  const miniCart = document.getElementById('miniCart');

  // Mostrar/ocultar mini carrito al hacer clic en el icono
  cartIcon.addEventListener('click', function() {
    if (miniCart.classList.contains('active')) {
      miniCart.classList.remove('active');
    } else {
      mostrarMiniCarrito();
      miniCart.classList.add('active');
    }
  });

  // Cerrar mini carrito al hacer clic fuera
  document.addEventListener('click', function(e) {
    if (!miniCart.contains(e.target) && !cartIcon.contains(e.target)) {
      miniCart.classList.remove('active');
    }
  });

  // Función para mostrar el contenido del carrito
  function mostrarMiniCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    // Si guardas IDs, aquí deberías tener acceso a los productos
    // Ejemplo simple: solo muestra los IDs
    if (carrito.length === 0) {
      miniCart.innerHTML = '<span class="close-cart" title="Cerrar">&times;</span><h3>Carrito</h3><div class="empty">El carrito está vacío</div>';
      return;
    }
    let html = '<span class="close-cart" title="Cerrar">&times;</span><h3>Carrito</h3><ul>';
    carrito.forEach((id, idx) => {
      html += `<li>Producto ${id}</li>`;
    });
    html += '</ul>';
    html += `<button class="btn-primary" onclick="window.location.href='carrito.html'">Ver carrito completo</button>`;
    miniCart.innerHTML = html;

    // Botón para cerrar el mini carrito
    miniCart.querySelector('.close-cart').onclick = () => miniCart.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
    // Opcional: cerrar al hacer clic fuera
    document.addEventListener('click', function(e) {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  }
});

