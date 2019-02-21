function Mostrar()
{

	var contador=0;
	var acumulador=0;

	while (acumulador < 6 )
	{
		acumulador = parseInt(prompt("Ingrese el numero"));

		contador = acumulador + contador;

		acumulador++



	}

	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN