/*Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) 
, el sexo. (validar el sexo “f” o “m”) 
de 5 jugadores de básquet, informar por alert: 
a) El promedio de las alturas totales. 
b) La altura más baja y el sexo de esa persona. 
c) La cantidad de mujeres que su altura supere los 190 centimetros.*/

function mostrar()
{
    var sexo;
    var altura;
    var promedio;
    var alturabaja;
    var sexobajo;
    var mujeresaltas = 0;
    var acumualtura = 0;
    var flag = 0;

    for(var i = 0; i < 5; i++)
    {
        altura = parseInt(prompt("Ingrese altura (en centimetros):"));

        while(isNaN(altura) || altura < 0 || altura > 250)
        {
            altura = parseInt(prompt("Error. Ingrese altura (en centimetros):"));
        }

        acumualtura = acumualtura + altura;

        sexo = prompt("Ingrese el sexo. f/m.").toLocaleLowerCase();

        while(sexo != "f" && sexo != "m")
        {
            sexo = prompt("Error. Ingrese el sexo. f/m.").toLocaleLowerCase();
        }

        if(flag == 0 || altura < alturabaja)
        {
            alturabaja = altura;
            sexobajo = sexo;
            flag++;
        }

        if(sexo == "f" && altura > 190)
        {
            mujeresaltas++;
        }


    }

    promedio = acumualtura / 5;

    alert("a) El promedio de las alturas totales: " + promedio + "\nb) La altura más baja es: " + alturabaja + " y el sexo de esa persona es: " + sexobajo + "\nc) La cantidad de mujeres que su altura supere los 190 centimetros es: " + mujeresaltas);



}
