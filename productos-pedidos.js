function Item (producto, plato, precio) {
  this.producto = producto;
  this.plato = plato;
  this.precio = precio;
}
const productos = [
Chorizo = new Item ('chorizo', 'primero', 1500),
Morcilla = new Item ('morcilla', 'primero', 1200),
Matrimonio = new Item ('matrimonio', 'primero', 2300),
Provoleta = new Item ('Provoleta', 'picada', 2700),
Mollejas = new Item ('mollejas', 'primero',  3300),
Empanadas = new Item ('empanadas','primero', 800),
Aros = new Item ('aros', 'primero',  1800),
Mix = new Item ('mix', 'primero', 3800),
Chinchulines = new Item ('chinchulines', 'primero', 1400),
patamuslo = new Item ('patamuslo', 'principal',  4000),
Entraña = new Item ('entraña', 'principal',  5000),
Vacío = new Item ('vacio', 'principal',  4500),
Costillar = new Item ('costillar', 'principal',  6500),
Porterhouse = new Item ('porterhouse', 'principal',  5600),
Tbone = new Item ('tbone', 'principal', 5200 ),
Matambre = new Item ('Matambre', 'principal', 4000),
ribs = new Item ('ribs', 'principal',  6500),
bondiola = new Item ('bondiola','principal',  6000),
brisket = new Item ('brisket', 'principal',  3500),
casa = new Item ('casa','fuerte', 11000),
ahumada = new Item ('ahumada','fuerte', 9800),
Ravioles = new Item ('ravioles', 'principal', 3300),
Pasta = new Item ('pasta', 'principal',  3600),
Pechuga = new Item ('pechuga', 'principal', 3000),
Milanesapollo = new Item ('milanesapollo', 'principal', 3500),
Milanesacarne  = new Item ('milanesacarne', 'principal', 2800),
Papas = new Item ('papas', 'acompañamiento',  1000),
Batatas = new Item ('batatas', 'acompañamiento',  1200),
Pure = new Item ('pure', 'acompañamiento',  1200),
Papascaballo  = new Item ('papascaballo', 'acompañamiento', 1800),
Ensalada  = new Item ('ensalada', 'acompañamiento', 1000),
Doshuevos  = new Item ('doshuevos', 'acompañamiento', 800),
Gin = new Item ('gin', 'trago', 1800),
Negroni = new Item ('negroni', 'trago', 1800),
Aperol = new Item ('aperol', 'trago', 1800),
Americano = new Item ('americano', 'trago', 1800),
Fernet = new Item ('fernet', 'trago', 1800),
brulee = new Item ( 'brulee', 'postre', 2800),
Flan = new Item ( 'flan', 'postre', 2300),
Brownie  = new Item ( 'brownie', 'postre', 3200),
Crumble = new Item ( 'crumble', 'postre', 3300),
Cheesecake = new Item ( 'Cheesecake', 'postre', 3500),
Copa = new Item ('copa','bebida', 2000),
Malbec = new Item ('malbec','bebida', 4000),
CabernetSauvignon = new Item ('cabernetsauvignon','bebida', 4000),
Pinotnoir = new Item ('pinotnoir','bebida', 4000),
Merlot = new Item ('merlot','bebida', 4000),
Rosado = new Item ('rosado','bebida', 4500),
Espumante = new Item ( 'espumante','bebida', 5500)]
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

  const total = deliverys.reduce((acum, product) => acum + product.precio, 0);

  alert(`El total de tu pedido es $${total.toFixed(2)}`);
}
