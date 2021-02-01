
$(document).ready(function (){
    $("#show").click(function (){
        var request = $.ajax({
        url:"txt/texto.txt"
    });
    request.done(function( msg ) {
        $("#miDiv").html( msg )
    });
    request.fail(function( textStatus ) {
        alert( "Request failed: " + textStatus);
    });
});
});

