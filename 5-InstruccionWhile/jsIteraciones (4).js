function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while (!(numero >=0 && numero <=10))
	{
		numero = parseInt(prompt("¿Sos boludo?. pone un número entre 0 y 10."));

	}

	alert("Numero correcto!");

}//FIN DE LA FUNCIÓN