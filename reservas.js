let horario;
let personas;
let comida;
const dias = [
`martes`,
` miercoles`,
` jueves`,
` viernes`,
` sabados`,
` domingos`,
]
const pasos = [
    `1° Tabla de quesos y salames curados`,
    `2° brochetas de carne y vegetales grillados`,
    `3° porterhouse a las brazas con ensalada de verdes`,
    `4° creme brûlée`,
]
const numero = 1127700861;
function abiertos() {
    alert("Estamos abiertos los dias " + dias)
}

horario = prompt(`Bienvenido ¿En que horario querrias visitarnos? tomamos reservas de 11 a 15 y de 20 a 24`)
switch (horario) {
case `11`:
break;
case `11:30`:
break;
case `12`:
break;
case `12:30`:
break;
case `13`:
break;
case `13:30`:
break;
case `14`:
break;
case `14:30`:
break;
case `15`:
break;
case `20`:
break;
case `20:30`:
break;
case `21`:
break;
case `21:30`:
break;
case `22`:
break;
case `22:30`:
break;
case `23`:
break;
case `23:30`:
break;
case `24`:
break;
default: alert(`¡A esa hora estamos cerrados!`)
}
personas = prompt(`¿cuantas personas vendrian?`)
if (personas <=2, personas <=10) {alert (`Vendrian ${personas} personas`)
}
else {
    alert(`Para reservas de mas de 10 personas comunicate a este numero ${numero}`)
}
for (let i = 0; i < pasos.length; i++){
    alert(`los pasos son:  ${pasos[i]}`)
}
comida = prompt('¿preferiran menu a carta o menu pre-armado de 4 pasos? para elegir ingresar "carta o pasos"')
switch (comida) {
    case `carta`:
    alert (`piden en el lugar por carta, los esperamos`)
    break;  
    case `pasos`:
    alert(`esperamos a ${personas} personas a las ${horario} horas`)
    break;
}
