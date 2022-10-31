const PRECIO = 200 ;

function resumen(){
    let cantidadDeEntrada = document.getElementById('cantidadEntrada').value
    let descuentoPorCategoria = document.getElementById('categoriaDeDescuento').value
    let subTotal = (PRECIO * cantidadDeEntrada);
    let descuento = (descuentoPorCategoria / 100) * subTotal ;
    let precioTotal = subTotal - descuento;

    console.log(precioTotal);
}