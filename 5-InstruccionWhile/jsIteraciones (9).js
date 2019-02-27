function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta;
	var num;
	var maximo;
	var minimo;
	var flag = 0;
	
	do
	{
		num = parseInt(prompt("Ingrese un numero:"));
		
		while (isNaN(num))
		{
			num = parseInt(prompt("Eso no es un numero. Ingresa un numero:"));
		}
		
		if(num > maximo || flag == 0)
		{
			maximo = num;

			if (num < minimo || flag == 0)
			{
				minimo = num;
				flag++;
			}
		}
		
		

		respuesta = confirm("¿Desea continuar?");
	
	} while (respuesta );
	
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;




}//FIN DE LA FUNCIÓN