function Mostrar()
{

	var contador=1;
	var acumulador=0;
	var num;


	while (contador < 6 )
	{
		num = parseInt(prompt("Ingrese el numero"));

		acumulador = acumulador + num;

		contador++;

	}

	

	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN