alert("Bienvenido a la Calculadora");
alert("Pasos a seguir de la calculadora:\n A) Ingrese el primer número de la operación \n B) Luego elija la operación que desea realizar Ingresando el numero de referencia \n 1- Sumar \n 2- Restar \n 3- Dividir \n 4- Multiplicar \n 5- Resto \n Luego elija el segundo número de la operación.");

let numero1 = parseInt(prompt("Ingrese el primer número de la operación: ", 0));

let operacion = parseInt(prompt("Seleccione la operación que desea realizar: Ingresando el numero de referencia \n 1- Sumar \n 2- Restar \n 3- Dividir \n 4- Multiplicar \n 5- Resto"));

let numero2 = parseInt(prompt("Ingrese el segundo número de la operación: ", 0));


while (isNaN(numero1) || isNaN(numero2) || isNaN(operacion)) {
    alert("Debe ingresar números para poder operar, intente de nuevo"); 

    numero1 = parseInt(prompt("Ingrese el primer número de la operación: ", 0));

    operacion = parseInt(prompt("Seleccione la operación que desea realizar: Ingresando el numero de referencia \n 1- Sumar \n 2- Restar \n 3- Dividir \n 4- Multiplicar \n 5- Resto"));

    numero2 = parseInt(prompt("Ingrese el segundo número de la operación: ", 0));

    
}
let resultado = 0;

switch (operacion) {
    case 1:
        resultado = numero1 + numero2;
        alert(`El resultado es: ${resultado}`);
        document.write(`${numero1} + ${numero2} = ${resultado}`);
        break;
    case 2:
        resultado = numero1 - numero2;
        alert(`El resultado es: ${resultado}`);
        document.write(`${numero1} - ${numero2} = ${resultado}`);
        break;  
    case 3: 
        resultado = numero1 / numero2;
        if (numero2 === 0) {
            alert("No se puede Dividir por 0");
            break;
        }
        alert(`El resultado es: ${resultado}`);
        document.write(`${numero1} / ${numero2} = ${resultado}`);
        break;   
    case 4: 
        resultado = numero1 * numero2;
        alert(`El resultado es: ${resultado}`);
        document.write(`${numero1} x ${numero2} = ${resultado}`);
        break;
    case 5:
        resultado = numero1 % numero2;
        alert(`El resultado es: ${resultado}`);
        document.write(`${numero1} % ${numero2} = ${resultado}`);
        break;
    default:
        alert("Opción seleccionada inválida");
        break;
}