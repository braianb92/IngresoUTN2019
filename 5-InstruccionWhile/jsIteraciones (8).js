function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;
	var flag = true;
	var respuesta;
do
{
	num = parseInt(prompt("Ingrese un numero:"));
	
	while (isNaN(num))
	{
		num = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
	}
	
	if (num >= 0)
	{	
	positivo = positivo + num;
	}
	else
	{
	flag = false;
	negativo = negativo * num;
	}
	
	respuesta = confirm("¿Desea continuar?")

} while (respuesta );




document.getElementById('suma').value=positivo;

if (flag)
{
	negativo = 0;
}

document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN