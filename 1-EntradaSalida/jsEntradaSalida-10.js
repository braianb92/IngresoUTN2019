/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var importe;
    var parcial;
    var resultado;

    importe = parseFloat(document.getElementById("importe").value);

    parcial = (importe * 25) / 100;

    resultado = importe - parcial;

    alert("El descuento efectuado es de $" + parcial.toFixed(2));

    document.getElementById("resultado").value = resultado.toFixed(2);
	
}
