const nombreUsuario = prompt("Ingrese su nombre:");
alert("¡Bienvenido al simulador de cuotas para pagos con tarjetas, " + nombreUsuario + "!");

let totalCompra;
let tipoTarjeta;
let tarjeta;
let recargo = 0;
let descuento = 0;
let cuotas = 1;

// Utilizamos un bucle do-while para asegurar que el usuario ingrese un monto válido
do {
    const montoIngresado = prompt("Ingrese el monto total de la compra:");

    if (!montoIngresado || isNaN(Number(montoIngresado))) {
        alert("Por favor, ingrese un monto válido usando solo números.");
    } else {
        totalCompra = Number(montoIngresado);
    }
} while (isNaN(totalCompra));

// Utilizamos un bucle while para permitir al usuario ingresar la tarjeta nuevamente en caso de opción no válida
while (true) {
    tipoTarjeta = prompt("Seleccione el tipo de tarjeta:\n1. Visa (recargo 10%)\n2. Mastercard (recargo 15%)\n3. MercadoPago (recargo 5%)\n4. Débito (descuento 10%)");

    if (!tipoTarjeta || isNaN(Number(tipoTarjeta))) {
        alert("Por favor, ingrese un número correspondiente a la opción de la tarjeta.");
        continue;
    }

    switch (Number(tipoTarjeta)) {
        case 1:
            tarjeta = "visa";
            recargo = 0.1;
            break;
        case 2:
            tarjeta = "mastercard";
            recargo = 0.15;
            break;
        case 3:
            tarjeta = "mercadopago";
            recargo = 0.05;
            break;
        case 4:
            tarjeta = "debito";
            descuento = 0.1;
            break;
        default:
            alert("Opción no válida. Por favor, seleccione una opción válida.");
            continue; // El bucle continúa si la opción no es válida
    }

    // Verificar si la tarjeta es débito y ajustar la cantidad de cuotas
    if (tarjeta !== "debito") {
        while (true) {
            const cuotasIngresadas = prompt("Ingrese el número de cuotas (1-12):");

            if (!cuotasIngresadas || isNaN(Number(cuotasIngresadas)) || parseInt(cuotasIngresadas) < 1 || parseInt(cuotasIngresadas) > 12) {
                alert("Por favor, ingrese un número entre 1 y 12 para la cantidad de cuotas.");
            } else {
                cuotas = parseInt(cuotasIngresadas);
                break; 
            }
        }
    } else {
        break; 
    }

    break; 
}

// Calcular el monto total con recargo o descuento
const montoConRecargoDescuento = totalCompra * (1 + recargo - descuento);

// Calcular el monto de cada cuota
const montoPorCuota = montoConRecargoDescuento / cuotas;

// Imprimir resultados en la consola
console.log("Tipo de tarjeta: " + tarjeta);
console.log("Recargo: " + recargo * 100 + "%");
console.log("Descuento: " + descuento * 100 + "%");
console.log("Cantidad de cuotas: " + cuotas);
console.log("Monto total con recargo o descuento: " + montoConRecargoDescuento);
console.log("Monto por cuota (" + cuotas + " cuotas): " + montoPorCuota);

// Mostrar resultados en un alert
alert("Tipo de tarjeta: " + tarjeta + "\nRecargo: " + recargo * 100 + "%\nDescuento: " + descuento * 100 + "%\nCantidad de cuotas: " + cuotas + "\nMonto total con recargo o descuento: " + montoConRecargoDescuento + "\nMonto por cuota (" + cuotas + " cuotas): " + montoPorCuota);
