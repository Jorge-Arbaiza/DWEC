$(document).ready(function() {
    $("#musica").click(function() {
        var box = "<input type='checkbox' name='despliega' id='despliega'>";
        $("#box").html(box);
        add_inputs();

    });

    $("#deporte").click(function() {
        var box = '';
        $("#box").html(box);
    });

    $("#cine").click(function() {
        var box = '';
        $("#box").html(box);
    });

    $("#box").click(function() {
        if ($("#despliega").val('checked')) {
            var inputs = '<label for="musico">Músico: </label><input type="text" id="musico" class="musico" name="musico"><label for="album">Álbum: </label><input type="text" id="album" name="album"><label for="fecha">Fecha: </label><input type="text" id="fecha" name="fecha"><button type="submit" id="validar" name="validar">Validar</button>'
            $("#inputs").html(inputs);
        };
    });

    function add_inputs() {
        $("#box").click(function() {
            if ($("#despliega").val('checked')) {
                var inputs = $.ajax({ url: "html/inputs.html" });
                inputs.done(function(html) {
                    $("#inputs").html(html);
                    validar();
                    auto_completar();
                });
            };
        });
    }

    function validar() {
        var expre_regul = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/
        var fecha = $("#fecha");
        var musico = $("#musico");
        var album = $("#album");

        $("#validar").on({
            click: function(event) {
                event.preventDefault();
                if (expre_regul.test(fecha.val())) {
                    alert("Múscio: " + musico.val() + "\nÁlbum: " + album.val() + "\nFecha: " + fecha.val())
                } else {
                    alert("Fecha incorrecta, por favor introduce este tipo de formato 25/02/2021")
                }
            }
        });
    }

    function auto_completar() {
        $("#musico").keyup(function() {
            var fecha = $("#fecha");
            var musico = $("#musico");
            var album = $("#album");
            if (musico.val() == 'M') {
                musico.val("Manolo");
                album.val("Lúgubre Ciudad");
                fecha.val("18/02/1979");

            }
        });
    }




});