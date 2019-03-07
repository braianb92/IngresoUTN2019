/*una empresa de viajes le solicita ingresar que continente le gustaria visitar 
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras 
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento 
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento 
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5% 
cualquier otro continente tiene un recargo del 20%*/

function mostrar()
{
    var continente;
    var dias;
    var preciodia = 100;
    var descuento;
    var formapago;
    var descpago;
    var recargo;
    var preciofinal;
    

    continente = document.getElementById("Marca").value;

    dias = parseInt(prompt("Ingrese la cantidad de dias que estara en " + continente));

    formapago = prompt("Ingrese forma de pago: debito, mercadoPago o efectivo.");

    switch(continente)
    {
        case "América":  descuento = dias * preciodia * 50 / 100;
        switch(formapago)
        {
            case "debito": descpago = dias * preciodia * 20 / 100;
        }
        break;
        
        case "África": descuento = dias * preciodia * 60 / 100;
        switch(formapago)
        {
            case "mercadoPago":
            case "efectivo":
            descpago = dias * preciodia * 15 / 100;
        }
        break;

        case "Europa": descuento = dias * preciodia * 20 / 100;
        switch(formapago)
        {
            case "debito": descpago = dias * preciodia * 15 / 100;
            break;
            case "mercadoPago" : descpago = dias * preciodia * 10 / 100;
            break;
            case "efectivo": descpago = dias * preciodia * 5 / 100;
            break;
        }
        break;

        default: recargo = dias * preciodia * 20 / 100;
    }

    preciofinal = (dias * preciodia) - descuento;
    precioultimo = preciofinal - descpago;

    alert("El continente elegido es: " + continente + "\nLa forma de pago elegida es: " + formapago + "\nEl precio final es: " + precioultimo);





}
