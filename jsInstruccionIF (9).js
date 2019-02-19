function Mostrar()
{
	var max;
	var min;
	var num;
	//Genero el número RANDOM entre 1 y 10 

	max = 10;
	
	min = 1;

	num = Math.floor(Math.random()*((max + 1)- min) + min);

	alert(num);
	

}//FIN DE LA FUNCIÓN