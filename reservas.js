let horario;
let personas;
let comida;
let nombre;
let Restriccion;
nombre = prompt (`ingresa tu nombre`)
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
comida = prompt (`Hola ${nombre} queres comida por pasos o mediante la carta, para elegirn ingrese "pasos o carta"`)
switch (comida) {
    case `pasos`:
    alert (`${nombre} ha reservado una mesa para ${personas} personas a las ${horario} horas con menu de pasos`)
    break;
    case `carta`:
    alert(`${nombre} ha reservado una mesa para ${personas} personas a las ${horario} horas, piden en el lugar`)
    break;
}

Restriccion = prompt (`¿alguno de ustedes tiene alguna restriccion al comer? ¿cual?`)
function Exclusividad (restriccion) {
    if (restriccion === `si`) {
        return function(nombre) {
            alert(`${nombre} para personas con restricciones como ${Restriccion} tenemos una espera de 1 semana`)
        }
    } else {
        return function(nombre) {
            alert (`los esperamos`)
        }
    }
}
const DietaRestringida = Exclusividad(`si`)
DietaRestringida(nombre);
const DietaNoRestringida = Exclusividad(`no`)
DietaNoRestringida(nombre);