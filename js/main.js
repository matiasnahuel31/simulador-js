let nombre = prompt("Ingrese su nombre");
let opcion,capping,acrilicas,esculpidas;
let acumular = 0;
let resultadoF = 0;
let descuento = 0;
let existe2 = 0;
const dias = ["LUNES","MARTES","MIERCOLES", "JUEVES","VIERNES"];
capping = 500; acrilicas = 700; esculpidas = 300;

alert(`Bienvenido ${nombre} a Lala Nails!`);

function calcular(resultado,desc){

    resultado = acumular + (acumular*0.21);

    if(desc >= 3){

        resultado = resultado - (resultado*0.15);
    }
    
    return resultado;
}

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

let diaHabil = prompt("Elija el dia que quiere reservar su turno (trabajamos solo de lunes a viernes)\nRECUERDE INGRESAR EL DIA SOLO EN MAYUSCULAS");
comprobarDia(existe2);


alert("Ingrese el numero del tipo de servicio que quiere realizarse, recuerde que si compra 3 servicios o mas se realizara un descuento del 15%");
opcion = parseInt(prompt("1- Capping $500\n2-Acrilicas $700\n3-Esculpidas $300\n4-Salir"));

do{
    switch (opcion) {

        case 1:
            alert("Gracias por tu compra");
            descuento++;
            acumular = acumular + capping;
            calcular(resultadoF,descuento);
            break;
        case 2:
            alert("Gracias por tu compra");
            acumular = acumular + acrilicas;
            calcular(resultadoF,descuento);
            descuento++;
            break;
        case 3:
            alert("Gracias por tu compra");
            acumular = acumular + esculpidas;
            calcular(resultadoF,descuento);
            descuento++;
            break;

        case 4:
            break;

        default:
            alert("numero incorrecto, vuelva a ingresarlo");
            break;

    }
    if(opcion != 4){
    opcion = parseInt(prompt("1- Capping $500\n2-Acrilicas $700\n3-Esculpidas $300\n4-Salir"));
    }
    if(opcion == 4){
        alert("gracias por elegirnos!");
    }
    
} while (opcion != 4);

alert(`El precio final a abonar + iva incluido y descuentos es de $${calcular(resultadoF,descuento)}\nlo esperamos este ${dias[existe2]}`);

