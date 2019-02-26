function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var num;
do
{
	num = parseInt(prompt("Ingrese un numero:"));

	while (isNaN(num))
	{
		num = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
	}
	acumulador = acumulador + num;
	contador++;

	respuesta = confirm("¿Desea continuar?")

} while (respuesta );
	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN