$(document).ready(function() {
    $("#show").click(function() {
        var texto = $.ajax({
            url: "txt/texto.txt"
        });
        texto.done(function(response) {
            $("#miDiv").html(response);
        });
    });
});