jQuery.fn.miPlugin = function (cosasVarias, opciones) {
    var configuracion = { dato1: "Jorge", dato2: 41 }

    jQuery.extend(configuracion, opciones);

    this.each(function () {
        elem = $(this);

        var datos = "Mi nombre es " + configuracion.dato1 + " y tengo " + configuracion.dato2 + " años."
        elem.html(datos);
    });
    return this;
};


