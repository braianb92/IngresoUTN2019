function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta;
	var num;
	var flag ;
	var positivo = 0;
	var negativo = 1;
	
	do
	{
		num = parseInt(prompt("Ingrese un numero:"));
		
		while (isNaN(num))
		{
			num = parseInt(prompt("Eso no es un numero. Ingresa un numero:"));
		}
		
		if (num >= 0)
		{	
		positivo = positivo + num;
		}
		else if (num < 0)
		{
		flag = false;
		negativo = negativo * num;
		}
		
		
		

		respuesta = confirm("¿Desea continuar?");
	
	} while (respuesta );
	


	




}//FIN DE LA FUNCIÓN