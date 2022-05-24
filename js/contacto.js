let form = document.getElementById("form")


let arrayPrecios = [{precios: "Uñas Esculpidas N1 Y 2 $1400"}, {precios: "Uñas Esculpidas N3 Y 4 $1600"}, {precios: "Uñas Esculpidas N5 Y N6 $1800"}, {precios: "Capping Gel $1000"}, {precios: "Esmaltado Semi Permanente $800"}]

let preciosJSON = JSON.stringify(arrayPrecios)
let boton = document.getElementById("btnReservar");

localStorage.setItem("listaPrecios", preciosJSON)

form.addEventListener("submit",(event) =>{
     event.preventDefault()
    // const object = {nombre: document.getElementById("nombre").value, apellido: document.getElementById("apellido").value, gmail: document.getElementById("email").value,consulta: document.getElementById("mensaje").value, dias: document.querySelector("#dias").value,precio: document.querySelector("#precios").value}
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

    
    

    //    let name = localStorage.getItem('nombres');
    //    let ape = localStorage.getItem('apellidos');
    //    let mail = localStorage.getItem('gmails');
    //    let msg = localStorage.getItem('mensajes');
    //    let day = localStorage.getItem('dia');
    //    let pre = localStorage.getItem('valor');

    //   console.log(name)
    //    console.log(ape)
    //    console.log(mail)
    //    console.log(msg)
    //    console.log(day)
    //    console.log(pre)
})


function mostrarAlerta(){

      Swal.fire({
        title: 'Reserva completada!',
        text: 'En la seccion turnos podras encontrar tu turno con la fecha y servicio elegido!',
        icon: 'success',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false
      })



}
