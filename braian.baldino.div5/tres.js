/*Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/

function mostrar()
{
    var precio;
    var porcentaje;
    var descuento;
    var preciofinal;

    precio = parseInt(prompt("Ingrese un precio."));

    porcentaje = parseInt(prompt("Ingrese el porcentaje de descuento a aplicar."));

    descuento = precio * porcentaje / 100;

    preciofinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = preciofinal.toFixed(2);

}
