const productoscarrito = document.getElementsByClassName("carrito-productos")[0];

function añadirProducto(productoNombre, productoPrecio) {
    const item = document.createElement("li");
    item.classList.add("carrito-producto");
    item.innerHTML = `
        <span>${productoNombre}</span>
        <span>$${productoPrecio.toFixed(2)}</span>
    `;
    productoscarrito.appendChild(item);
}
