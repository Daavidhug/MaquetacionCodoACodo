const PRECIO = 200 ;

function resumen(){
    let cantidadDeEntrada = document.getElementById('cantidadEntrada').value
    let categoriaSeleccionada = document.getElementById('categoriaDeDescuento').value
    let precioTotal = PRECIO * cantidadDeEntrada;

    console.log(precioTotal);
    console.log(categoriaSeleccionada);
}