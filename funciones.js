  function abiertos() {
    alert(`Estamos abiertos los dias ${dias}` )
} 
function comprar() {
  alert (`muchas gracias por su compra`)
    while (productoscarrito.firstChild) {
        productoscarrito.removeChild(productoscarrito.firstChild);
    }
}
const limpiar = document.getElementById("comprar");

limpiar.addEventListener("click", function() {
    clearCart();
});