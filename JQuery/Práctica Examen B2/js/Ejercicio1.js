$(document).ready(function() {
    $("#musica").click(function() {
        if (!($("#deporte").prop('checked'))) {

            $("#datos_php").html('');
        }
    })
    $("#deporte").click(function() {
        if (!($("#musica").prop('checked'))) {
            $("#div_inputs").html('');
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
        if ($("#checkbox").prop('checked')) {
            $("body").append("<div id='miDiv'>Hola, aquí el texto!</div>");
            mouse_in();
            mouse_out();
        } else {
            $("#miDiv").remove();
        }
    });

    function mouse_in() {
        $("#miDiv").mouseover(function() {
            $("#miDiv").css("background-color", "red");
            $("#miDiv").css("opacity", "0.5");
        });
    }

    function mouse_out() {
        $("#miDiv").mouseout(function() {
            $("#miDiv").css("background-color", "");
            $("#miDiv").css("opacity", "1");
        });
    }
    $("h1").mouseover(function() {
        $("h1").plugin();
    });
});