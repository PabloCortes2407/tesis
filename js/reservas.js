document.addEventListener('DOMContentLoaded', () => {
    const nombre = document.getElementById('nombre');
    const horario = document.getElementById('horario');
    const personas = document.getElementById('personas');
    const restricciones = document.getElementById('restricciones');
    const reservo = document.getElementById('reservo');
nombre.addEventListener ("change", () =>{
const nombreuser = nombre.value
localStorage.setItem('nombre reserva', nombreuser)
})
horario.addEventListener ("change", () =>{
    const horariodefinido = horario.value
    switch (horariodefinido) {
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
        default:
        Swal.fire ({
        text: `¡A esa hora estamos cerrados!`,
         icon: `error`,
         confirmButtonText: `ok`,
        })
        }
})
personas.addEventListener ("change", () =>{
    const cantidadpersonas = personas.value
cantidadpersonas <= 2 || cantidadpersonas > 10 ? localStorage.setItem (`personas reserva`, cantidadpersonas) : Swal.fire ({
    text: `Para reservas de mas de 10 personas comunicate a este numero ${numero}`,
     icon: `error`,
     confirmButtonText: `ok`,
    })

restricciones.addEventListener ("change", () =>{
   const userrestricciones = restricciones.value
userrestricciones === 'si' ? alert(`${nombre.value}, para personas con restricciones tenemos una espera de 1 semana`) : alert('Los esperamos');
})
reservo.addEventListener("click", () => {
    Swal.fire({
        title: `Reservado`,
        text: `Usted ha tomado una reserva a las ${horario.value} horas, vendrán ${personas.value} personas a nombre de ${nombre.value}`,
        icon: `success`,
        confirmButtonText: `Listo`,
    });
});
})
});