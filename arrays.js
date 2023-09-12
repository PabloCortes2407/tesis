const entradas =[`ENTRADAS`,
`\n Chorizo {$$}`,
`\n Morcilla {$$}`,
`\n Matrimonio {$$$} (1 chorizo y 1 morcilla)`,
`\n Provoleta de la casa {$$$}` ,
`\n Chinchulines {$$}`  ,
`\n Empanadas {$$} (empanada de carne a cuchillo o J&Q fritas)` ,
`\n Mollejas con crema {$$$$} Mollejas a la parrilla con salsa de crema`,
`\n Aros de cebolla {$$}`,
`\n Mix de achuras {$$$} ½ chorizo ½ morcilla ½ porción de chinchulines y 1 provoleta`,
]
const fuego =[`\n ASADO`,
    `\n Pata-muslo con manteca de hierbas {$$}`,
    `\n Entraña {$$$$}`,
    `\n Vacío {$$$}`,
    `\n Costillar {$$$$}`,
    `\n Porter-house {$$$$$}`,
    `\n T-bone {$$$}`,
    `\n Matambre de cerdo {$$$}`,
]
const ahumados =[`AHUMADOS`,
`\n Ribs a la barbacoa {$$$$}`,
`\n Bondiola con reducción de cerveza negra {$$$$}`,
`\n Sándwich de brisket ahumado {$$$}`,
]
const parrilladas =[`\n PARRILLADA`,
`\n de la casa (entraña, bondiola, porter-house, provoleta, chorizo y una ensalada a elección)`  , 
`\n Ahumada {$$$$$} (ribs a la barbacoa, bondiola con reducción de cerveza negra, morcilla y una ensalada a elección)`,
]
const platos =[`\n COCINA`,
 `\n Ravioles con salsa {$} (crema, pure de tomate o mezcla)` ,  
`\n Pasta caccio e pepe (veggie) {$$} (tagliatelle con salsa de queso y pimienta)`,
`\n Pechuga de pollo rellena de queso azul {$$} (viene con acompañamiento)`,
`\n Milanesa de pollo con bechamel y quesos {$$$} (viene con acompañamiento)`,
`\n Milanesa de carne {$} (viene con acompañamiento)`,
]
const acompañamientos =[`\n ACOMPAÑAMIENTOS`,
`\n Papas fritas {$$}`,
`\n Batatas fritas {$$}`,
`\n Pure de papa {$$}`,
`\n Papas a caballo {$$$}`,
`\n Ensalada de 4 verduras {$$}`,
`\n Dos huevos fritos {$}`,
]
const trago =[` \n TRAGOS`,
`\n Gin tonic {$$}`,
`\n Negroni {$$}` ,
`\n Aperol sprit {$$}`,
`\n Americano {$$}`,
`\n Fernet con cola {$$}`,
]
const postre =[`\n POSTRES`,
`\n Creme brulee {$$$}`,
`\n Flan con crema, dulce o mixto {$$}`,
`\n Brownie con helado {$$$}`,
`\n Crumble de manzana {$$$$}`,
`\n Cheesecake de frutos rojos {$$$$}` ,  
]
const vino =[`\n VINOS`,
`\n Copa de vino {$$} (malbec, merlot o Cabernet Sauvignon)`,
`\n Botella de Malbec {$$$$}`,
`\n Botella de Cabernet Sauvignon {$$$$}`,
`\n Botella de Pinot noir {$$$$}`,
`\n Botella de Merlot {$$$$}`,
`\n Botella de Rosado {$$$$}`,
`\n Botella de Espumante {$$$$$}`,
]


function entrada() {
   console.log (`en nuestras entradas tenemos ${entradas}`) 
}
function parrilla() {
   console.log (`en nuestra parrilla tenemos ${fuego}`) 
}
function ahumado() {
   console.log (`en nuestros ahumados tenemos ${ahumados}`) 
}
function parrillada() {
   console.log (`en nuestras parrilladas tenemos ${parrilladas}`) 
}
function cocina() {
   console.log (`en nuestra cocina tenemos ${platos}`) 
}
function acompañamiento() {
   console.log (`para primeros platos tenemos ${acompañamientos}`) 
}
function tragos() {
    console.log (`para tomar tenemos ${trago}`) 
 }
 function postres() {
    console.log (`de postre tenemos ${postre}`) 
 }
 function vinos() {
    console.log (`nuestros vinos son ${vino}`) 
 }