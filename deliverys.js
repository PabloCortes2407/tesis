        const nombredeli = document.getElementById('nombredeli');
        const localidad = document.getElementById('localidad');
        const calle = document.getElementById('calle');
        const productoscarrito = document.getElementsByClassName("carrito-productos")[0];
        const carritoItems = [];
    
        nombredeli.addEventListener("change", () => {
            const nombrepedido = nombredeli.value;
            console.log(`Tu nombre es ${nombrepedido}`);
        });
    
        localidad.addEventListener("change", () => {
            const localidadpedido = localidad.value;
            localidadpedido != '' ? console.log(`Tu localidad es ${localidadpedido}`) : alert(`No ingresaste localidad`);
        });
    
        calle.addEventListener("change", () => {
            const callepedido = calle.value;
            callepedido != '' ? console.log(`Tu calle es ${callepedido}`) : alert(`No ingresaste la calle`);
        });
    
        function comprar() {
            const totalcarrito = carritoItems.reduce((acum, item) => {
                return acum + item.productoPrecio * item.cantidad;
            }, 0);
    
            alert(`Muchas gracias por su compra, el valor total es de ${totalcarrito.toFixed(2)}$, lo estaremos enviando a ${calle.value}`);
            while (productoscarrito.firstChild) {
                productoscarrito.removeChild(productoscarrito.firstChild);
            }
        }
    
        const limpiar = document.getElementById("comprar");
    
        limpiar.addEventListener("click", function () {
            carritoItems.length = 0;
        });
    
  
        function añadirProducto(productoNombre, productoPrecio, cantidad= 1) {
            const item = document.createElement("li");
            item.classList.add("carrito-producto");
            item.innerHTML = `
                <span>${productoNombre}</span>
                <span>$${productoPrecio.toFixed(2)}</span>
            `;
            productoscarrito.appendChild(item);
            carritoItems.push({ productoNombre, productoPrecio, cantidad });
        }