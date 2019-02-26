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
	if (num >= 0)
	{	
	positivo += num;
	}
	else
	{
	flag = false;
	negativo *= num;
	}
	respuesta = confirm("¿Desea continuar?")

} while (respuesta );




document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN