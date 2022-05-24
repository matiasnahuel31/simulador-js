let reservo = document.getElementById("reservas")

detalles();

function detalles() {

    reservo.innerHTML =
    `
    <div>
    <h3><u>Profesional</u></h3>
        <p>Laura Garcia</p>
    </div>
    <div>
        <h3><u>Forma de pago</u></h3>
        <p>Efectivo o Débito</p>
    </div>
    <div>
        <h3><u>Día y Hora</u></h3>
        <p>${localStorage.getItem('dia')}</p>
    </div>
    <div>
        <h3><u>Ubicación</u></h3>
        <p>Coronel Estomba 3449</p>
    </div>
    <div>
        <h3><u>Precio</u></h3>
        <p>${localStorage.getItem('valor')}</p>
    </div>`;

    // reservo.append(reservo);
};
