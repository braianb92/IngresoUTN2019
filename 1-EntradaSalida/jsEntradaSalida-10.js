/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var importe;
    var parcial;
    var resultado;

    importe = parseInt(document.getElementById("importe").value);

    parcial = (importe * 25) / 100;

    resultado = importe - parcial;

    document.getElementById("resultado").value = resultado;
	
}
