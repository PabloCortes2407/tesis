function Carne (animal, maduracion, peso) {
    this.animal = animal;
    this.maduracion = maduracion;
    this.peso = peso;
}

const ribs = new Carne (`cerdo`, 0, `500gr`)
const bondiola = new Carne (`cerdo`, 45, `750gr`)
const brisket = new Carne (`vaca`, 45, `180gr`)
const pollo = new Carne (`pollo`, 0, `750gr`)
const Entraña = new Carne (`vaca`, 0, `350gr`)
const Vacío = new Carne (`vaca`, 0, `350gr`)
const Costillar = new Carne (`vaca`, 45, `750gr`)
const Porterhouse = new Carne (`vaca`, 45, `500gr`)
const Tbone = new Carne (`vaca`, 45, `500gr`)
const Matambre = new Carne (`cerdo`, 0, `350gr`)

function Entrada (producto, plato) {
    this.producto = producto;
    this.plato = plato;
}

const Chorizo = new Entrada (`embutido`, `primero`)
const Morcilla = new Entrada (`embutido`, `primero`)
const Matrimonio = new Entrada (`embutido`, `primero`)
const Provoleta = new Entrada (`queso`, `picada`)
const Chinchulines = new Entrada (`tripa`, `primero`)
const Empanadas = new Entrada (`relleno`, `primero`)
const Mollejas = new Entrada (`glandula`, `primero`)
const Aros = new Entrada (`cebolla`, `primero`)
const Mix = new Entrada (`mix`, `primero`)