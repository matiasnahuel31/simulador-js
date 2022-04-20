let nombre = prompt("Ingrese su nombre");
let opcion,capping,acrilicas,esculpidas;
let acumular = 0;
let resultadoF = 0;
let descuento = 0;
capping = 500; acrilicas = 700; esculpidas = 300;
alert("Bienvenido " + nombre + " a Lala Nails!");

alert("Ingrese el numero del tipo de servicio que quiere realizarse, recuerde que si compra 3 servicios o mas se realizara un descuento del 15%");
opcion = parseInt(prompt("1- Capping $500\n2-Acrilicas $700\n3-Esculpidas $300\n4-Salir"));

function calcular(resultado,desc){

    resultado = acumular + (acumular*0.21);

    if(desc >= 3){

        resultado = resultado - (resultado*0.15);
    }

    return resultado;
}


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
            break

    }
    if(opcion != 4){
    opcion = parseInt(prompt("1- Capping $500\n2-Acrilicas $700\n3-Esculpidas $300\n4-Salir"));
    }
    if(opcion == 4){
        alert("Adios!");
    }
    
} while (opcion != 4);

alert("El precio final a abonar + iva incluido y descuentos es de $"+calcular(resultadoF,descuento))



