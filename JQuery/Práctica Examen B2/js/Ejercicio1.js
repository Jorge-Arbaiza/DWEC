$(document).ready(function() {
    $("#musica").click(function() {
        if (($("#deporte").val('checked'))) {
            $("#datos_php").html("");
        }
    })
    $("#deporte").click(function() {
        if (($("#musica").val('checked'))) {
            $("#div_inputs").html("");
        }
        var get_php = $.get("php/datos.php", { nombre: "Jorge", apellidos: "Arbaiza Martí" }, function(php) {

        });
        get_php.done(function(php) {
            $("#datos_php").html(php);
        })
        get_php.fail(function() {
            alert("error");
        })

    });
    $("#checkbox").click(function() {
        $("body").append("<div id='miDiv'>Hola, aquí el texto!</div>");
        mouse();
    });

    function mouse() {
        $("div").mouseenter(function() {
            $("div").css("background-color", "red");
            $("div").css("opacity", "0.5");
        });
    }
    $("h1").mouseover(function() {
        $("h1").plugin();
    });
});