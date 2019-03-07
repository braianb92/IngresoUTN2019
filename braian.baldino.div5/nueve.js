/*Realizar el algoritmo que permita ingresar 
el nombre de un país, 
cantidad de habitantes en millones entre 1 y 7000 (validar) 
la temperaruta mínima que se registra en su territorio(entre -50 y 50) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre del pais con menos habitantes 
c) la cantidad de paises que superan los 40 grados. 
d) el promedio de habitantes entre los paises ingresados	
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores 
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) ) 
(pais=tunes;habitantes = 10; t =1 ) 
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 ) 
(pais=china;habitantes = 2000; t =-12 )*/


function mostrar()
{
    var pais;
    var menospais;
    var friopais;
    var contpais = 0;
    var paispromediocant = 0;
    var habitantes;
    var menoshabit;
    var temp;
    var partemp = 0;
    var flag = 0;
    var bandera = 0;
    var promedio;
    var mintemp;
    var acumuhabit = 0;



    do
    {
        pais = prompt("Ingrese un pais.");

        while(!(isNaN(pais)))
        {
            pais = prompt("Error. Ingrese un pais.");
        }

        paispromediocant++;

        habitantes = parseInt(prompt("Ingrese el numero de habitantes 1 y 7000 (millones)."));

        while(isNaN(habitantes) || habitantes < 1 || habitantes > 7000)
        {
            habitantes = parseInt(prompt("Error. Ingrese el numero de habitantes 1 y 7000 (millones)."));
        }

        acumuhabit = acumuhabit + habitantes;

        temp = parseInt(prompt("Ingrese la temperatura del territorio."));

        while(isNaN(temp) || temp < -50 || temp > 50)
        {
            temp = parseInt(prompt("Error. Ingrese la temperatura del territorio."));
        }

        if(temp % 2 == 0)
        {
            partemp++;
        }

        if(bandera == 0 || habitantes < menoshabit)
        {
            menoshabit = habitantes;
            menospais = pais;
            bandera++;
        }

        if(temp > 40)
        {
            contpais++;
        }

        if(flag == 0 || temp < mintemp)
        {
            mintemp = temp;
            friopais = pais;
            flag++;
        }



        respuesta = confirm("¿Desea continuar?");
    
        

    }while(respuesta);

    promedio = acumuhabit / paispromediocant;

    document.write("a) La cantidad de temperaturas pares: " + partemp + "<br>b) El nombre del pais con menos habitantes: " + menospais + "<br>c) la cantidad de paises que superan los 40 grados: " + contpais + "<br>d) el promedio de habitantes entre los paises ingresados: " + promedio + "<br>f) la temperatura mínima ingresada :" + mintemp + " y nombre del pais que registro esa temperatura: " + friopais );
}
