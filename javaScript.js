const PRECIO = 200 ;

function calcularTotal(){
    let cantidadDeEntradas = document.getElementById('cantidadEntrada').value
    let descuentoPorCategoria = document.getElementById('categoriaDeDescuento').value
    let subTotal = PRECIO * cantidadDeEntradas;
    let descuento = (descuentoPorCategoria / 100) * subTotal ;
    let precioTotal = subTotal - descuento;

    document.getElementById('resumenPago').innerHTML = "Total a pagar: $" + precioTotal;
}