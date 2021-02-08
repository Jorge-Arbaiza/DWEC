
$(document).ready(function (){
    $("#show").click(function (){
        $.post("php/datos.php", {"nombre" : "Jorge", "apellidos" : "Arbaiza Martí"}, function(response){
            $("#miDiv").html(response);
        });
        
    });
    });