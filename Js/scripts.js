// ==== LISTA DE PRODUCTOS (simulación) ====
const products = [
  { id: 1, name: "Mini Pc HP Elitebook 800 G3 Tiny", price: 383, image: "https://www.infinit.com.uy/imgs/productos/productos3_37992.jpg" },
  { id: 2, name: "Notebook DELL Latitude 5400", price: 399, image: "https://www.infinit.com.uy/imgs/productos/productos33_38622.jpg" },
  { id: 3, name: "PC Gamer AMD Ryzen 5 5600G", price: 405, image: "https://www.infinit.com.uy/imgs/productos/productos3_22522.jpg" },
  { id: 4, name: "Notebook DELL Latitude 7390", price: 428, image: "https://www.infinit.com.uy/imgs/productos/productos33_38679.jpg" },
  { id: 5, name: "Notebook HP 15-fc0037wm", price: 480, image: "https://www.infinit.com.uy/imgs/productos/productos33_36527.jpg" },
  { id: 6, name: "APPLE Macbook Air BMT12LL/A 2017", price: 501, image: "https://www.infinit.com.uy/imgs/productos/productos33_34109.jpg" },
  { id: 7, name: "Notebook ASUS Vivobook Go 15 E1504GA-NJ535W", price: 547, image: "https://www.infinit.com.uy/imgs/productos/productos33_38450.jpg" },
  { id: 8, name: "Notebook DELL Latitude 3420", price: 613, image: "https://www.infinit.com.uy/imgs/productos/productos33_31003.jpg" },
  { id: 9, name: "Equipo PC INTEL Core i3 13100 13va Gen", price: 576, image: "https://www.infinit.com.uy/imgs/productos/productos3_38323.jpg" },
  { id: 10, name: "PC Gamer AMD Ryzen 7 5700G", price: 636, image: "https://www.infinit.com.uy/imgs/productos/productos3_19809.jpg" }
];

// ==== MOSTRAR PRODUCTOS EN LA GRILLA ====
function displayProducts() {
  const grid = document.getElementById("productGrid");
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p> USD ${p.price}</p>
      <div class="product-actions">
       <a href="productos.html" class="btn-ver-mas"> <button>Ver más</button> </a>
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
