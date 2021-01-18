class Numbers {
    numero_1: number;
    numero_2: number;

    constructor(uno: number, dos: number) {
        this.numero_1 = uno;
        this.numero_2 = dos;
    }
    Sumar(uno: number, dos: number) {
        var total_suma = uno + dos;
        var convertir_total_string = total_suma.toString();
        return convertir_total_string;

    }

};
window.onload = () => {
    var boton = document.getElementById("boton");


    boton.onclick = function () {
        var uno = (<HTMLInputElement>document.getElementById("uno")).value;
        var uno_n = parseInt(uno);
        var dos = (<HTMLInputElement>document.getElementById("dos")).value;
        var dos_n = parseInt(dos);
        var obj = new Numbers(uno_n, dos_n);
        var total_suma = obj.Sumar(obj.numero_1, obj.numero_2);
        var contenedor = document.getElementById("contenedor");
        var numberBox = document.createElement("p");
        var nuevoContenido = document.createTextNode("La suma de los dos números es: " + total_suma);
        numberBox.appendChild(nuevoContenido);
        contenedor.appendChild(numberBox);





    }
}
