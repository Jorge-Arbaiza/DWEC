class Total {
    precio_articulo: number;
    iva: number;

    constructor(articulo: number) {
        this.precio_articulo = articulo;
        this.iva = 21;
    }
    calcularIva(precio: number, iva: number) {
        var total_precio = precio + ((precio * iva) / 100);

        var convertir_total_string = total_precio.toString();
        var dos_decimales = parseFloat(convertir_total_string).toFixed(2);
        return dos_decimales;

    }

};
window.onload = () => {
    var boton = document.getElementById("boton");


    boton.onclick = function () {
        var precio_sin = (<HTMLInputElement>document.getElementById("precio_sin")).value;
        var precio_sin_n = parseInt(precio_sin);
        var obj = new Total(precio_sin_n);
        var total_mas_iva = obj.calcularIva(obj.precio_articulo, obj.iva);
        document.getElementById("contenedor").innerHTML = "El precio mas el 21% de IVA es: " + total_mas_iva + "€";

    }
}
