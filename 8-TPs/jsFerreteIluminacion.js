/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    //Declaro variables
    var cantidad;
    var marca;
    var precio;
    var preciodescuento;
    var descuento;
    var importefinal;
    var iibb;
    var mensaje = "El importe a pagar es $";

    cantidad = parseInt(document.getElementById("Cantidad").value);

    marca = document.getElementById("Marca").value;

    precio = 35;

    importefinal = precio * cantidad;

    if (cantidad >= 6)
    {
        descuento = precio * 50 / 100;
        preciodescuento = precio - descuento;
        importefinal = preciodescuento * cantidad;
    }

    else if (cantidad == 5)
    {
        if (marca == "ArgentinaLuz")
        {
            descuento = precio * 40 / 100;
            preciodescuento = precio - descuento;
            importefinal = preciodescuento * cantidad;
        }
        else
        {
            descuento = precio * 30 / 100;
            preciodescuento = precio - descuento;
            importefinal = preciodescuento * cantidad;   
        }

    }

    else if (cantidad == 4)
    {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            descuento = precio * 25 / 100;
            preciodescuento = precio - descuento;
            importefinal = preciodescuento * cantidad; 
        }
        else
        {
            descuento = precio * 20 / 100;
            preciodescuento = precio - descuento;
            importefinal = preciodescuento * cantidad; 
        }

    }

    else if (cantidad == 3)
    {
        if (marca == "ArgentinaLuz")
        {
            descuento = precio * 15 / 100;
            preciodescuento = precio - descuento;
            importefinal = preciodescuento * cantidad; 
        }
        else if (marca == "FelipeLamparas")
        {
            descuento = precio * 10 / 100;
            preciodescuento = precio - descuento;
            importefinal = preciodescuento * cantidad; 
        }
        else
        {
            descuento = precio * 5 / 100;
            preciodescuento = precio - descuento;
            importefinal = preciodescuento * cantidad; 
        }

    }

    else
    {
        descuento = 0;

        importefinal = cantidad * precio;

        document.getElementById("precioDescuento").value = descuento;

        alert(mensaje + importefinal);
    }

    if (importefinal > 120)
    {
        iibb = importefinal * 10 / 100;
        importefinal = iibb + importefinal;
        alert("Usted pago " + iibb + " de IIBB");

    }
        

    document.getElementById("precioDescuento").value = preciodescuento.toFixed(2);

    alert(mensaje + importefinal);

}
