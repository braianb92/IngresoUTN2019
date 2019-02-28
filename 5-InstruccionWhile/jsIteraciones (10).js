function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta;
	var num;
	var flag;
	var acumuladorneg = 0;
	var acumuladorpos = 0;
	var contadorneg = 0;
	var contadorpos = 0;
	var contadorceros = 0;
	var contadorpar = 0;
	var prompos;
	var promneg;
	var diferencia;
	
	do
	{
		//pido dato
		num = parseInt(prompt("Ingrese un numero:"));
		
		//validacion
		while (isNaN(num))
		{
			num = parseInt(prompt("Eso no es un numero. Ingresa un numero:"));
		}
		
		if (num > 0)
		{
			//positivos
			acumuladorpos = acumuladorpos + num;
			contadorpos++;
		}

		else if(numero == 0)
		{
			//cero
			contadorceros++;
		}

		else
		{
			//negativos
			acumuladorneg = acumuladorneg + num;
			contadorneg++;
		}
		
		// "%" se usa para saber el resto de la division. (0 es par / 1 es impar)
		if(num % 2 == 0)
		{
			//pares
			contadorpar++;
		}
	
		
		respuesta = confirm("¿Desea continuar?");
	
	} while (respuesta );

	if(contadorneg != 0) //la division por 0 esta prohibida
	{
		promneg = acumuladorneg / contadorneg;
	}
	else
	{
		promneg = 0;
	}

	if(contadorpos != 0)
	{
		prompos = acumuladorpos / contadorpos;
	}
	else
	{
		prompos = 0;
	}

	diferencia = contadorpos - contadorneg;
	
	document.write("1-suma de los negativos: " + acumuladorneg + "<br>");
	document.write("2-suma de los positivos: " + acumuladorpos + "<br>");
	document.write("3-cantidad de positivos: " + contadorpos + "<br>");
	document.write("4-cantidad de negativos: " + contadorneg + "<br>");
	document.write("5-cantidad de ceros: " + contadorceros + "<br>");
	document.write("6-scantidad de numeros pares: " + contadorpar + "<br>");
	document.write("7-promedio de positivos: " + prompos + "<br>");
	document.write("8-promedio de negativos: " + promneg + "<br>");
	document.write("9-diferencia entre positivos y negativos: " + diferencia + "<br>");

}//FIN DE LA FUNCIÓN