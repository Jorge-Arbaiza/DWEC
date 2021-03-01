$(document).ready(function (){
    $("h1").mouseover(function() {
        $("h1").plugin();
    });
    $("#pekin").click(function() {
        $("#datos_php").html("<label for='nombre'>Nombre: </label><input type=text id='nombre'><label for='mail'>Email: </label><input type=text id='mail'><button id='boton'>Enviar</button>");
        $("#boton").click(function(){
            
            var nombre=$("#nombre").val();
            var mail=$("#mail").val();
            var parametros= {"nombre" : nombre,
            "mail" : mail}
            
            var request = $.ajax({
                url:"php/datos.php",
                method: "GET" ,
                data: parametros
                });
                request.done(function(msg) {
                    $("#miDiv").append( msg )
                    
                });
    
                request.fail(function( jqXHR, textStatus ) {
                    alert( "Request failed: " + jqXHR.status + ' ' + textStatus);
                });
           
        })
        if (!($("#marruecos").prop('checked'))) {
            
            $("#div_txt").html('');
        }
        

    });
    $("#checkbox").click(function() {
        if ($("#checkbox").prop('checked')) {
            $("body").append("<img src='img/agencia.jpg' id='imagen'>");
            mouse_in();
            mouse_out();
        } else {
            $("#imagen").remove();
        }
    });
    function mouse_in() {
        $("#imagen").mouseover(function() {
            $("#imagen").slideUp("slow");
            $("#imagen").slideDown("slow");
            $("#imagen").animate({
                width: "50%"
            });
            $("#imagen").fadeOut("slow");
        });
    }

    function mouse_out() {
        $("#imagen").mouseout(function() {
            $("#imagen").stop();
        });
    }
    
});
