/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var parcial;
    var resultado;

    sueldo = parseInt(document.getElementById("sueldo").value);

    parcial = (sueldo * 10) / 100;

    resultado = sueldo + parcial;

    alert("el aumento es de " + "$" + parcial);

    document.getElementById("resultado").value = resultado;
}
