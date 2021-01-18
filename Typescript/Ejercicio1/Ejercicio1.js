var Numeros = /** @class */ (function () {
    function Numeros(uno, dos, tres, cuatro, cinco) {
        this.numero_1 = uno;
        this.numero_2 = dos;
        this.numero_3 = tres;
        this.numero_4 = cuatro;
        this.numero_5 = cinco;
    }
    Numeros.prototype.Suma = function (uno, dos, tres, cuatro, cinco) {
        var total_suma = uno + dos + tres + cuatro + cinco;
        var total_suma_strg = total_suma.toString();
        return total_suma_strg;
    };
    Numeros.prototype.mayorCien = function (uno, dos, tres, cuatro, cinco) {
        var contador = 0;
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
    };
    return Numeros;
}());
;
window.onload = function () {
    var boton = document.getElementById("boton");
    boton.onclick = function () {
        var uno = document.getElementById("uno").value;
        var uno_n = parseInt(uno);
        var dos = document.getElementById("dos").value;
        var dos_n = parseInt(dos);
        var tres = document.getElementById("tres").value;
        var tres_n = parseInt(tres);
        var cuatro = document.getElementById("cuatro").value;
        var cuatro_n = parseInt(cuatro);
        var cinco = document.getElementById("cinco").value;
        var cinco_n = parseInt(cinco);
        var obj = new Numeros(uno_n, dos_n, tres_n, cuatro_n, cinco_n);
        var total_suma = obj.Suma(obj.numero_1, obj.numero_2, obj.numero_3, obj.numero_4, obj.numero_5);
        var nums_mayor_cien = obj.mayorCien(obj.numero_1, obj.numero_2, obj.numero_3, obj.numero_4, obj.numero_5);
        document.getElementById("contenedor").innerHTML = "La sumna de todos los números es: " + total_suma + "</br>Y " + nums_mayor_cien + "  de los números introducidos son mayores de 100.";
    };
};
