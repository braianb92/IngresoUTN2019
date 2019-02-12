/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho;
    var largo;
    var perimetro;
    var alambretotal;

    largo = parseFloat(document.getElementById("Largo").value);

    ancho = parseFloat(document.getElementById("Ancho").value);

    perimetro = (largo * 2) + (ancho * 2);

    alambretotal = perimetro * 3;

    alert("La cantidad de alambre a comprar es " + alambretotal.toFixed(2));

}
function Circulo () 
{
    var radio;
    var perimetro;
    var alambre;

    radio = parseFloat(document.getElementById("Radio").value);

    perimetro = 2 * Math.PI * radio;

    alambre = perimetro * 3;

    alert ("La cantidad de alambre a comprar es " + alambre.toFixed(2));
	
}
function Materiales () 
{
    var ancho;
    var largo;
    var superficie;
    var cal;
    var cemento;

    largo = parseFloat(document.getElementById("Largo").value);

    ancho = parseFloat(document.getElementById("Ancho").value);

    superficie = largo * ancho;

    cal = superficie * 3;

    cemento = superficie * 2;

    alert("Para la superficie de " + superficie.toFixed(2) + ", necesito " + cal + " bolasas de cal y " + cemento + " bolsas de cemento");
	
}