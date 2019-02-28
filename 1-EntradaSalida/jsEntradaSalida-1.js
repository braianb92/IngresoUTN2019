/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) y el sexo 
(validar el sexo “f”  o “m”)  de 100 alumnos, informar por alert:
a)
el promedio de las notas totales.
b)
la nota más baja.
c)
la cantidad de varones que su nota haya sido mayor o igual a  6 */
function Mostrar() {
	var nota;
	var sexo;
	var promedio;
	var notabaja;
	var contadorvarones = 0;
	var acumulador = 0;
	var flag = 0;
	var sexonotabaja;
	var cantidad = 3;

	for (var i = 0; i < cantidad; i++) {
		nota = parseInt(prompt("Ingrese nota"));

		while (nota < 0 || nota > 10 || isNaN(nota)) {
			nota = parseInt(prompt("Error. Ingrese nota"));
		}

		sexo = prompt("Ingrese sexo f/m").toLowerCase();

		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Error. Ingrese sexo f/m").toLowerCase();
		}

		acumulador = acumulador + nota;

		if (sexo == "m" && nota >= 6) {
			contadorvarones++;
		}

		if (nota < notabaja || flag == 0) {
			notabaja = nota;
			sexonotabaja = sexo;
			flag = 1;
		}



	}


	promedio = acumulador / cantidad;

	alert("Promedio de las notas: " + promedio + "\nNota mas baja: " +
	 notabaja + "\nVarones con nota mayor o igual a 6: " + contadorvarones +
	  "\nSexo nota mas baja: " + sexonotabaja); //\n es lo mismo que el <br>

}

