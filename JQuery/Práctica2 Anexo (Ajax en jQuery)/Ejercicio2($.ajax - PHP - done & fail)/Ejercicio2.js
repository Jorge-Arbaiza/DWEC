
$(document).ready(function (){
    $("#show").click(function (){
        var request = $.ajax({
        url:"php/datos.php",
        beforeSend:function () {
        $("#miDiv").html('<img src="img/carga.gif" alt="carga" />')
    },
        
        });
        request.done(function(msg) {
            $("#miDiv").html( msg )
            alert("Transferencia completada");
        });
        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + jqXHR.status + ' ' + textStatus);
        });
    });
});