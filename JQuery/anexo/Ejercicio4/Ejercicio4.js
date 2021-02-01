
$(document).ready(function (){
    var serial = $("form").on("submit", function (e){
       e.preventDefault();
       var serialize = serial.serialize();
       
       $.ajax({
           url: "php/datos.php",
           method: "GET",
           data: serialize,
           success: function( msg ) {
            $("#miDiv").html( msg )
        }
       });
});
});