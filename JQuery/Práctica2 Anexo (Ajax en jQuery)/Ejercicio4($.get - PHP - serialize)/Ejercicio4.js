
$(document).ready(function (){
    var serial = $("form").on("submit", function (e){
       e.preventDefault();
       var serialize = serial.serialize();
       
       $.get("php/datos.php", serialize, function( msg ) {
            $("#miDiv").html( msg );
        });
       });
});
