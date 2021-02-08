$(document).ready(function() {
    $.urlParam = function(name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        return decodeURI(results[1]) || 0;
    }

    var nombre = $.urlParam('nombre');
    var apellido = $.urlParam('apellido');
    var publi = $.urlParam('publi');

    var palencia = 'Palencia';
    var alicante = 'Alicante';

    $("#nombre").val(nombre);
    $("#apellido").val(apellido);


    $("#poblacion").keyup(function() {

        if ($("#poblacion").val() == 'P') {
            $("#poblacion").val(palencia);
        }
        if ($("#poblacion").val() == 'A') {
            $("#poblacion").val(alicante);
        };
    });

    $("#validar").click(function(event) {
        event.preventDefault();
        var poblacion = $("#poblacion").val();
        if (publi == 'on') {
            alert('Nombre: ' + nombre + '\nApellido: ' + apellido + '\nPoblación: ' + poblacion + '\nTu publicidad aquí.');
        } else {
            alert("Nombre: " + nombre + "\nApellido: " + apellido + "\nPoblación: " + poblacion);
        }
    });

});