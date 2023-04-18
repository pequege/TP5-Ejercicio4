function obtenerFechaHora() {
    let fechaActual = new Date();

    let fecha = document.getElementById('fecha');
    let hora = document.getElementById('hora');
    let mediodia = document.getElementById('mediodia');

    // jueves x de Abril del x
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${monthsOfYear[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`

    let horaActual = fechaActual.getHours(),
        minutosActuales = fechaActual.getMinutes(),
        segundosActuales = fechaActual.getSeconds();

    if (segundosActuales < 10) {
        segundosActuales = '0' + segundosActuales;
    }
    if (minutosActuales < 10) {
        minutosActuales = '0' + minutosActuales;
    }
    if (horaActual < 10) {
        horaActual = '0' + horaActual;
    }
    horaActual >= 12? mediodia.innerHTML = 'PM' : mediodia.innerHTML = 'AM';
    horaActual = horaActual % 12;
    horaActual = horaActual ? horaActual : 12;
    //horaActual > 12? horaActual -=12: horaActual;

    hora.innerHTML = `${horaActual}:${minutosActuales}:${segundosActuales}`
}

setInterval(obtenerFechaHora,1000);