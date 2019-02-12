/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var tempF;
    var tempC;

    tempF = parseInt(document.getElementById("Temperatura").value);

    tempC = (tempF - 32) / 1.8;

    alert(parseInt(tempF) + " Farenheit son " + parseInt(tempC) + " centigrados" );
	
}

function CentigradosFahrenheit () 
{
    var tempF;
    var tempC;

    tempC = parseInt(document.getElementById("Temperatura").value);

    tempF = tempC * 1.8 + 32;

    alert(parseInt(tempC) + " centigrados son " + tempF + " Farenheit");
	
}
