alert("Bienvenido a la Calculadora");
alert("Pasos a seguir de la calculadora:\n A) Ingrese el primer número de la operación \n B) Luego elija la operación que desea realizar Ingresando el numero de referencia \n 1- Sumar \n 2- Restar \n 3- Dividir \n 4- Multiplicar  \n Luego elija el segundo número de la operación.");

let numero1 = parseInt(prompt("Ingrese el primer número de la operación: ", 0));

let operacion = parseInt(prompt("Seleccione la operación que desea realizar: Ingresando el numero de referencia \n 1- Sumar \n 2- Restar \n 3- Dividir \n 4- Multiplicar \n "));

let numero2 = parseInt(prompt("Ingrese el segundo número de la operación: ", 0));


while (isNaN(numero1) || isNaN(numero2) || isNaN(operacion)) {
    alert("Debe ingresar números para poder operar, intente de nuevo"); 

    numero1 = parseInt(prompt("Ingrese el primer número de la operación: ", 0));

    operacion = parseInt(prompt("Seleccione la operación que desea realizar: Ingresando el numero de referencia \n 1- Sumar \n 2- Restar \n 3- Dividir \n 4- Multiplicar"));

    numero2 = parseInt(prompt("Ingrese el segundo número de la operación: ", 0));

    
}
let resultado = 0;

function sumarNumeros(n1, n2) {
    resultado = (parseInt(n1) + parseInt(n2));
    return resultado;
}

function restarNumeros(n1, n2) {
    resultado = (parseInt(n1) - parseInt(n2));
    return resultado;
}

function multiplicarNumeros(n1, n2) {
    resultado = (parseInt(n1) * parseInt(n2));
    return resultado;
}

function dividirNumeros(n1, n2) {
    resultado = (parseInt(n1) / parseInt(n2));
    return resultado;
}


switch (operacion) {
    case 1:
        resultado = sumarNumeros(numero1, numero2);
        alert(`El resultado es: ${resultado}`);
        break;
    case 2:
        resultado = restarNumeros(numero1, numero2);
        alert(`El resultado es: ${resultado}`);            
        break;  
    case 3: 
        if (numero2 === 0) {
            alert("No se puede Dividir por 0");
            break;
        }
        resultado = dividirNumeros(numero1, numero2);            
        alert(`El resultado es: ${resultado}`);              
        break;
    case 4: 
        resultado = multiplicarNumeros(numero1, numero2) ;
        alert(`El resultado es: ${resultado}`);            
        break;  
         
    default:
        alert("Opción seleccionada inválida");
        break;
}


