const deliverys = [];
let total = 0;
function delivery() {
  while (true) {
    const itemNombre = prompt(`Ingresa en miniscula el producto que quieras pedir o "listo" para finalizar`);
    if (itemNombre.toLowerCase() === "listo") {
      break;
    }
    const ProductoSeleccionado = productos.find((product) => product.producto === itemNombre);
    if (ProductoSeleccionado) {
      deliverys.push(ProductoSeleccionado);
    } else {
      alert(`"${itemNombre}" no es un producto valido.`);
    }
  }
  let itemsDelivery = "";
  deliverys.forEach((product) => {
    itemsDelivery += `${product.producto} - ${product.precio.toFixed(2)}`;
  });
    alert(`Tu pedido tiene: \n ${itemsDelivery}`);

    total = deliverys.reduce((acum, product) => acum + product.precio, 0);
    alert(`El total de tu pedido es ${total.toFixed(2)}$`);
  }

