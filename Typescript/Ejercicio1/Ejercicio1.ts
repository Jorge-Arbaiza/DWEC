class Numeros {
    numero_1: number;
    numero_2: number;
    numero_3: number;
    numero_4: number;
    numero_5: number;

    constructor(uno: number, dos: number, tres: number, cuatro: number, cinco: number) {
        this.numero_1 = uno;
        this.numero_2 = dos;
        this.numero_3 = tres;
        this.numero_4 = cuatro;
        this.numero_5 = cinco;
    }
    Suma(uno: number, dos: number, tres: number, cuatro: number, cinco: number) {
        var total_suma: number = uno + dos + tres + cuatro + cinco;
        var total_suma_strg: string = total_suma.toString();
        return total_suma_strg;
    }
    mayorCien(uno: number, dos: number, tres: number, cuatro: number, cinco: number) {
        var contador: number = 0;
        if (uno > 100) {
            contador++;
        }
        if (dos > 100) {
            contador++;
        }
        if (tres > 100) {
            contador++;
        }
        if (cuatro > 100) {
            contador++;
        }
        if (cinco > 100) {
            contador++;
        }
        return contador;
    }
};
window.onload = () => {
    var boton = document.getElementById("boton");

    boton.onclick = function () {
        var uno = (<HTMLInputElement>document.getElementById("uno")).value;
        var uno_n = parseInt(uno);
        var dos = (<HTMLInputElement>document.getElementById("dos")).value;
        var dos_n = parseInt(dos);
        var tres = (<HTMLInputElement>document.getElementById("tres")).value;
        var tres_n = parseInt(tres);
        var cuatro = (<HTMLInputElement>document.getElementById("cuatro")).value;
        var cuatro_n = parseInt(cuatro);
        var cinco = (<HTMLInputElement>document.getElementById("cinco")).value;
        var cinco_n = parseInt(cinco);
        var obj = new Numeros(uno_n, dos_n, tres_n, cuatro_n, cinco_n);
        var total_suma = obj.Suma(obj.numero_1, obj.numero_2, obj.numero_3, obj.numero_4, obj.numero_5);
        var nums_mayor_cien = obj.mayorCien(obj.numero_1, obj.numero_2, obj.numero_3, obj.numero_4, obj.numero_5);
        document.getElementById("contenedor").innerHTML = "La sumna de todos los números es: " + total_suma + "</br>Y " + nums_mayor_cien + "  de los números introducidos son mayores de 100.";

    }
}
