
$(document).ready(function (){
    $("#show").click(function (){
        var request = $.ajax({
            method: "GET",
        url:"js/texto.js",
        dataType: "script"
    });
    request.done(function( msg ) {
        $("#miDiv").html( msg )
    });
    request.fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " +jqXHR.status+' '+ textStatus);
    });
});
});

