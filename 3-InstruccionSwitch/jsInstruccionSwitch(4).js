function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
    switch (mesDelAño)
    {
        case "Febrero":
        alert("tiene 28 días");
        break;

        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
        alert("tiene 30 dias");
        break;

        default:
        alert("tiene 31 dias");
        break;
    }
	



}//FIN DE LA FUNCIÓN