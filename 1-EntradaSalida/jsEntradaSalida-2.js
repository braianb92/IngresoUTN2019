/*realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el 
usuario quiera e informar al terminar el ingreso por document.write: 
a)
la cantidad de números pares.
b)
el promedio de todos los números ingresados.
c)
la suma de todos los números.
d)
El número máximo y el mínimo.*/
function Mostrar() 
{
 //variables
 var num;
 var respuesta;
 var contadorpar = 0;
 var acumulador = 0;
 var maximo;
 var minimo;
 var promedio;
 var contador =0;
 var flag = 0;

//iteracion
do
{
 num = parseInt(prompt("Ingrese un numero positivo"));

//validacion dentro de iteracion
 while(num < 0)
 {
     num = parseInt(prompt("Error. Ingrese un numero positivo"));
 }

//sumo todos los numeros
 acumulador = acumulador + num;

//determino si son pares
if(num % 2 == 0)
{
    contadorpar++;
}

//maximos y minimos
if(num > maximo || flag == 0)
{
    maximo = num;
}

if(num < minimo || flag == 0)
{
    minimo = num;
    flag++;
}



contador++;

//seguir o cancelar
 respuesta = confirm("¿Desea ingresar otro numero?");

}while(respuesta);
//fin de iteracion

//promedio fuera de iteracion
promedio = acumulador / contador;

alert("La cantidad de numeros pares: " + contadorpar + "\nEl promedio de todos los numeros ingresados: " + promedio + "\nLa suma de todos los numeros: " + acumulador +"\nNumero maximo: " + maximo + "\nNumero minimo: " + minimo);

}
