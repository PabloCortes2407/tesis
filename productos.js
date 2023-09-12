function Entrada (producto, plato, precio) {
    this.producto = producto;
    this.plato = plato;
    this.precio = precio;
}

const Chorizo = new Entrada (`embutido`, `primero`, `1500$`)
const Morcilla = new Entrada (`embutido`, `primero`, `1200$`)
const Matrimonio = new Entrada (`embutido`, `primero`, `2300$`)
const Provoleta = new Entrada (`queso`, `picada`, `2700$`)
const Chinchulines = new Entrada (`tripa`, `primero`, `1400$`)
const Empanadas = new Entrada (`relleno`, `primero`, `700$`)
const Mollejas = new Entrada (`glandula`, `primero`, `3300$`)
const Aros = new Entrada (`cebolla`, `primero`, `1800$`)
const Mix = new Entrada (`mix`, `primero`, `3800$`)

function Carne (animal, maduracion, peso, precio) {
    this.animal = animal;
    this.maduracion = maduracion;
    this.peso = peso;
    this.precio = precio;
}

const ribs = new Carne (`cerdo`, 0, `750gr`, `6500$`)
const bondiola = new Carne (`cerdo`, 45, `500gr`, `6000$`)
const brisket = new Carne (`vaca`, 45, `180gr`, `3500$`)
const pollo = new Carne (`pollo`, 0, `750gr`, `4000$`)
const Entraña = new Carne (`vaca`, 0, `350gr`, `5000$`)
const Vacío = new Carne (`vaca`, 0, `350gr`, `4500$`)
const Costillar = new Carne (`vaca`, 45, `750gr`, `6500$`)
const Porterhouse = new Carne (`vaca`, 45, `500gr`, `5600$`)
const Tbone = new Carne (`vaca`, 45, `500gr`, `5200$`)
const Matambre = new Carne (`cerdo`, 0, `350gr`, `4000$`)

function Cocina (producto, precio) {
    this.producto = producto
    this.precio = precio
}

const Ravioles = new Cocina (`pasta`, `3300$`)
const Pasta = new Cocina (`pasta`, `3600$`)
const Pechuga = new Cocina (`pollo`, `3000$`)
const Milanesapollo = new Cocina (`milanesa`, `3500$`)
const Milanesacarne  = new Cocina (`milanesa`, `2800$`)

function Acompañamientos (producto, precio) {
    this.producto = producto
    this.precio = precio
}
const Papas = new Acompañamientos (`fritura`, `1000$`)
const Batatas = new Acompañamientos (`fritura`, `1200$`)
const Pure = new Acompañamientos (`pure`, `1200$`)
const Papascaballo  = new Acompañamientos (`fritura`, `1800$`)
const Ensalada  = new Acompañamientos (`ensalada`, `1000$`)
const Doshuevos  = new Acompañamientos (`huevo`, `800$`)

function Tragos (producto, precio) {
    this.producto = producto
    this.precio = precio
}

const Gin = new Tragos (`aperitivo`,`1800$`)
const Negroni = new Tragos (`digestivo`,`1800$`)
const Aperol = new Tragos (`aperitivo`,`1800$`)
const Americano = new Tragos (`aperitivo`,`1800$`)
const Fernet = new Tragos (`digestivo`,`1800$`)

function Postres (textura, precio) {
    this.textura = textura
    this.precio = precio
}

const brulee = new Postres (`cremosa`,`2800$`)
const Flan = new Postres (`cremosa`,`2300$`)
const Brownie  = new Postres (`semi-rigida`,`3200$`)
const Crumble = new Postres (`crocante`,`3300$`)
const Cheesecake = new Postres (`cremosa`,`3500$`)

function Vinos (peso, precio) {
    this.peso = peso
    this.precio = precio
}

const Copa = new Vinos (`200ml`,`2000$`)
const Malbec = new Vinos (`750ml`,`4000$`)
const CabernetSauvignon = new Vinos (`750ml`,`4000$`)
const Pinotnoir = new Vinos (`750ml`,`4000$`)
const Merlot = new Vinos (`750ml`,`4000$`)
const Rosado = new Vinos (`750ml`,`4500$`)
const Espumante = new Vinos (`750ml`,`5500$`)