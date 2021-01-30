
$(document).ready(function (){
    $("#show").click(function (){
        $.ajax({
        data: {"nombre" : "Jorge", "apellidos" : "Arbaiza Martí"},
        url:"php/datos.php",
        type: "post",
        success: function (response) {
        $("#miDiv").html(response);
        }
    });
});
});