let nombre = prompt("Ingrese su nombre");
let opcion;
let existe2 = 0;
let vendio = 0;
const dias = ["LUNES","MARTES","MIERCOLES", "JUEVES","VIERNES"];
let mensaje = document.getElementById("reserva");

alert(`Bienvenido ${nombre} a Lala Nails!`);

class Unias {

    constructor( servicio,precio){

        this.servicio = servicio;
        this.precio = parseFloat(precio);
    }

    calcular_iva(){

        this.precio = this.precio + (this.precio * 0.21);
    }


}


// function calcular(resultado,desc){

//     resultado = acumular + (acumular*0.21);

//     if(desc >= 3){

//         resultado = resultado - (resultado*0.15);
//     }
    
//     return resultado;
// }

function comprobarDia(existe){
    
    existe = -1;

    while(existe == -1){
        
        for(let i = 0; i <5; i++){

            if(diaHabil == dias[i] ){
                
                existe = i;
            }
        }

        if(existe == -1){
            alert("el dia que ingreso es incorrecto");
            diaHabil = prompt("Elija el dia que quiere reservar su turno (trabajamos solo de lunes a viernes)\nRECUERDE INGRESAR EL DIA SOLO EN MAYUSCULAS");
        }
        else{
            alert(`Reservaste tu turno para el proximo ${dias[existe]}`);
        }
        
    }

    existe2 = existe;

    return existe;

}

const esculpidasN1 = new Unias("Uñas Esculpidas N 1 y 2", 1400);
const esculpidasN3 = new Unias("Uñas Esculpidas N 3 y 4", 1600);
const esculpidasN5 = new Unias("Uñas Esculpidas N 5 y 6", 1800);
const cappingGel = new Unias("Capping Gel", 1000);
const esmaltadoSP = new Unias("Esmaltado Semi Permanente", 800);


let diaHabil = prompt("Elija el dia que quiere reservar su turno (trabajamos solo de lunes a viernes)\nRECUERDE INGRESAR EL DIA SOLO EN MAYUSCULAS");
comprobarDia(existe2);


alert("Ingrese el numero del tipo de servicio que quiere realizarse\nN = numero de largo de las uñas");
opcion = parseInt(prompt("UÑAS ESCULPIDAS\n 1- N 1 y 2 | $1400\n 2- N 3 y 4 | $1600\n 3- N 5 y 6 | $1800\n4- CAPPING GEL | $1000\n5- ESMALTADO SEMI PERMANENTE | $800\n6- SALIR"));



do{
    switch (opcion) {

        case 1:
            alert("Gracias por tu compra");
            vendio = 1;
            esculpidasN1.calcular_iva()
            // alert(`El precio final a abonar + iva incluido es de $${esculpidasN1.precio}\nlo esperamos este ${dias[existe2]}`);
            mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()} tu reserva quedo agendada para el proximo ${dias[existe2]} </h2> <br> <h3> Monto a abonar $${esculpidasN1.precio} ARS </h3>`;
            break;

        case 2:
            alert("Gracias por tu compra");
            esculpidasN3.calcular_iva()
            mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()} tu reserva quedo agendada para el proximo ${dias[existe2]} </h2> <br> <h3> Monto a abonar $${esculpidasN3.precio} ARS </h3>`;
            vendio = 1;
            break;

        case 3:
            alert("Gracias por tu compra");
            esculpidasN5.calcular_iva()
            mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()} tu reserva quedo agendada para el proximo ${dias[existe2]} </h2> <br> <h3> Monto a abonar $${esculpidasN5.precio} ARS </h3>`;
            vendio = 1;
            break;

        case 4:
            alert("Gracias por tu compra");
            cappingGel.calcular_iva()
            mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()} tu reserva quedo agendada para el proximo ${dias[existe2]} </h2> <br> <h3> Monto a abonar $${cappingGel.precio} ARS </h3>`;

            vendio = 1;
            break;
        case 5:
            alert("Gracias por tu compra");
            esmaltadoSP.calcular_iva()
            mensaje.innerHTML = `<h2> <br> ${nombre.toUpperCase()} tu reserva quedo agendada para el proximo ${dias[existe2]} </h2> <br> <h3> Monto a abonar $${esmaltadoSP.precio} ARS </h3>`;
            vendio = 1;
            break;
        case 6:
            vendio = 1;
            break;

        default:
            alert("numero incorrecto, vuelva a ingresarlo");
            break;

    }
    if(opcion != 6 && vendio == 0 ){
    opcion = parseInt(prompt("UÑAS ESCULPIDAS\n 1- N 1 y 2 | $1400\n 2- N 3 y 4 | $1600\n 3- N 5 y 6 | $1800\n4- CAPPING GEL | $1000\n5- ESMALTADO SEMI PERMANENTE | $800\n6- SALIR"));
    }
    if(opcion == 6){
        mensaje.innerHTML = ("<h2>Hasta Luego!</h2>");
    }
    
} while ( vendio != 1  );



