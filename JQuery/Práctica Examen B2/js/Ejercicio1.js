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
            $("#miDiv").html(php);
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
    $(".miSelect").change(function() {
        $("select option:selected").each(function() {
            if ($(this).val() == "verde") {
                $("body").append("<div id='miDiv2'>VERDE</div>");
                $("#miDiv3").remove();
                $("#miDiv4").remove();
                $("#miDiv2").mouseover(function() {
                    $("#miDiv2").css("background-color", "green");
                    $("#miDiv2").css("opacity", "0.5");
                });
                $("#miDiv2").mouseout(function() {
                    $("#miDiv2").css("background-color", "");
                    $("#miDiv2").css("opacity", "1");
                });
            }
            if ($(this).val() == "rojo") {
                $("body").append("<div id='miDiv3'>ROJO</div>");
                $("#miDiv2").remove();
                $("#miDiv4").remove();
                $("#miDiv3").mouseover(function() {
                    $("#miDiv3").css("background-color", "red");
                    $("#miDiv3").css("opacity", "0.5");
                });
                $("#miDiv3").mouseout(function() {
                    $("#miDiv3").css("background-color", "");
                    $("#miDiv3").css("opacity", "1");
                });
            }
            if ($(this).val() == "azul") {
                $("body").append("<div id='miDiv4'>AZUL</div>");
                $("#miDiv3").remove();
                $("#miDiv2").remove();
                $("#miDiv4").mouseover(function() {
                    $("#miDiv4").css("background-color", "blue");
                    $("#miDiv4").css("opacity", "0.5");
                });
                $("#miDiv4").mouseout(function() {
                    $("#miDiv4").css("background-color", "");
                    $("#miDiv4").css("opacity", "1");
                });
            }
        });


    })
});