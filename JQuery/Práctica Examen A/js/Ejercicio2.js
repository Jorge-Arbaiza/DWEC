$(document).ready(function() {
    var respuesta = $.ajax({
        url: "html/box.html"
    });
    respuesta.done(function(html) {
        $("#box").html(html);
    });
    $("#validar").click(function(event) {
        event.preventDefault();
        var serial = $("form").serialize();
        if ($("#box").val('checked')) {

            window.location = "ejercicio3.html?" + serial
        } else {
            window.location = "ejercicio3.html?" + serial
        }
    })

});