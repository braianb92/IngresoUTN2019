/*Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera
 e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)*/

function mostrar()
{
    var letra;
    var numero;
    var numpar = 0;
    var numimpar = 0;
    var ceros = 0;
    var promedio;
    var sumaneg;
    var letramax;
    var nummax;
    var letramin;
    var nummin;
    var acumupos = 0;
    var respuesta;
    var contadorpos = 0;
    var flag = 0;

    do
    {
        letra = prompt("Ingrese una letra.").toLocaleLowerCase();

        while(!(isNaN(letra)))
        {
            letra = prompt("Error. Ingrese una letra.").toLocaleLowerCase();
        }

        numero = parseInt(prompt("Ingrese un numero entre -100 y 100."));

        while(isNaN(numero) || numero < -100 || numero > 100)
        {
            numero = parseInt(prompt("Ingrese un numero entre -100 y 100."));
        }

        if(numero >= 0)
        {
            acumupos = acumupos + numero;
            contadorpos++;
        }
        else
        {
            sumaneg = sumaneg + numero;
        }

        if(numero % 2 == 0)
        {
            numpar++;
        }
        else
        {
            numimpar++;
        }

        if(numero == 0)
        {
            ceros++;
        }

        if(flag == 0 || numero > nummax)
        {
            nummax = numero;
            letramax = letra;
        }
        if(flag == 0 || numero < nummin)
        {
            nummin = numero;
            letramin = letra;
            flag++;
        }




        respuesta = confirm("¿Desea continuar?");
    
        

    }while(respuesta);

    promedio = acumupos / contadorpos;

    document.write("a) La cantidad de números pares es: " + numpar + "<br>b) La cantidad de números impares es: " + numimpar + "<br>c) La cantidad de ceros es: " + ceros + "<br>d) El promedio de todos los números positivos ingresados es: " + promedio + "<br>e) La suma de todos los números negativos es: " + sumaneg + "<br>f) El número y la letra del máximo es : " + nummax + letramax + " y del minimo es: " + nummin + letramin);

}
