function Mostrar()
{
    var num;
    var contadorpar = 0;


    num = parseInt(prompt("Ingrese un numero:"));
    while(isNaN(num))
    {
        num = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
    }

for(var i = 1; i<= num; i++)
{
    if(num % i == 0)
    {
        contadorpar++;
        console.log(i);
    }


}



}//FIN DE LA FUNCIÓN