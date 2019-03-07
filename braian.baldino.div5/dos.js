/*A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx
 y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".*/

function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;
  var sumapeso;
  var promediopeso;

  nombre1 = prompt("Ingrese un nombre:");
  nombre2 = prompt("Ingrese el nombre de su pareja");

  peso1 = parseInt(prompt(nombre1 + ", ingrese su peso."));
  peso2 = parseInt(prompt(nombre2 + ", ingrese su peso."));

  sumapeso = peso1 + peso2;

  promediopeso = sumapeso / 2;

  alert("Ustedes se llaman " + nombre1 + " y " + nombre2 + "\nPesan " + peso1 + " kilos y " + peso2 + " kilos, que sumados son " + sumapeso +" y el promedio de peso es " + promediopeso );

  
}
