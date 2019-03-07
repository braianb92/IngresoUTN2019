/*Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto,
de lo contrario los sumo. 
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la resta es xxx y superó el 10".*/

function mostrar()
{
    var num1;
    var num2;
    var suma;
    var resta;

    num1 = parseInt(prompt("Ingrese un numero."));
    num2 = parseInt(prompt("Ingrese otro numero."));

    if(num1 == num2)
    {
        alert("Son iguales: " + num1 + num2);
    }

    else if(num1 > num2)
    {
        resta = num1 - num2;
        alert("El primero fue mayor que el segundo, la resta es: " + resta );

        if(resta > 10)
        {
            alert("La resta es: " + resta + " y supero el 10.");
        }
    }

    else
    {
        suma = num1 + num2;
        alert("El segundo fue mayor que el primero, la suma es: " + suma);
    }

    


}
