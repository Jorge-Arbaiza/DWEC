
$(document).ready(function (){
    $("#show").click(function (){
        var request = $.ajax({
        url:"php/dato.php",
        beforeSend:function () {
        $("#miDiv").html('<img src="img/carga.gif" alt="carga" />')
    },
        success: function( msg ) {
            $("#miDiv").html( msg )
        }
        });
        request.done(function() {
            alert("Transferencia completada");
        });
        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + jqXHR.status + ' ' + textStatus);
        });
    });
});