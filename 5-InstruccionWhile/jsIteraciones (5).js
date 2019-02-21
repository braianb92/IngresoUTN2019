function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (!(sexo == "f" || sexo == "m"))
{

    sexo = prompt("No es un dato valido. Ingrese f ó m .");
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN