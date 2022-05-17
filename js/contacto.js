let form = document.getElementById("form")
let reservo = document.getElementById("reservas")

detalles();

let arrayPrecios = [{precios: "Uñas Esculpidas N1 Y 2 $1400"}, {precios: "Uñas Esculpidas N3 Y 4 $1600"}, {precios: "Uñas Esculpidas N5 Y N6 $1800"}, {precios: "Capping Gel $1000"}, {precios: "Esmaltado Semi Permanente $800"}]

let preciosJSON = JSON.stringify(arrayPrecios)

localStorage.setItem("listaPrecios", preciosJSON)

form.addEventListener("submit",() =>{
    //  event.preventDefault()

    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let gmail = document.getElementById("email").value
    let consulta = document.getElementById("mensaje").value
    let dias = document.querySelector("#dias").value
    let precio = document.querySelector("#precios").value
     
    localStorage.setItem('nombres', nombre);
    localStorage.setItem('apellidos', apellido);
    localStorage.setItem('gmails', gmail);
    localStorage.setItem('mensajes', consulta);
    localStorage.setItem('dia', dias);
    localStorage.setItem('valor', precio);

    


    //  let name = localStorage.getItem('nombres');
    //  let ape = localStorage.getItem('apellidos');
    //  let mail = localStorage.getItem('gmails');
    //  let msg = localStorage.getItem('mensajes');
    //  let day = localStorage.getItem('dia');
    //  let pre = localStorage.getItem('valor');

    //  console.log(name)
    //  console.log(ape)
    //  console.log(mail)
    // console.log(msg)
    //  console.log(day)
    //  console.log(pre)
})



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
