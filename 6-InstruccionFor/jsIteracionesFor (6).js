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
    if(i % 2 == 0)
    {
        contadorpar++;
        console.log(i);
    }


}

alert("numeros pares encontrados: " + contadorpar);

}//FIN DE LA FUNCIÓN