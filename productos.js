function Carnes (animal, maduracion, peso) {
    this.animal = animal;
    this.maduracion = maduracion;
    this.peso = peso;
}

const ribs = new Carnes (`cerdo`, 0, `500gr`)
const bondiola = new Carnes (`cerdo`, 45, `750gr`)
const brisket = new Carnes (`vaca`, 45, `180gr`)
const pollo = new Carnes (`pollo`, 0, `750gr`)
const Entraña = new Carnes (`vaca`, 0, `350gr`)
const Vacío = new Carnes (`vaca`, 0, `350gr`)
const Costillar = new Carnes (`vaca`, 45, `750gr`)
const Porterhouse = new Carnes (`vaca`, 45, `500gr`)
const Tbone = new Carnes (`vaca`, 45, `500gr`)
const Matambre = new Carnes (`cerdo`, 0, `350gr`)

function Entradas (producto, plato) {
    this.producto = producto;
    this.plato = plato;
}

const Chorizo = new Entradas (`embutido`, `primero`)
const Morcilla = new Entradas (`embutido`, `primero`)
const Matrimonio = new Entradas (`embutido`, `primero`)
const Provoleta = new Entradas (`queso`, `picada`)
const Chinchulines = new Entradas (`tripa`, `primero`)
const Empanadas = new Entradas (`relleno`, `primero`)
const Mollejas = new Entradas (`glandula`, `primero`)
const Aros = new Entradas (`cebolla`, `primero`)
const Mix = new Entradas (`mix`, `primero`)