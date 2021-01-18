$(document).ready(function () {
    $("#pikachu").fadeOut(2000, function () {
        $('#pikachu').slideDown(3000, function () {
            $('#pikachu').slideUp(1000);
        });
    });
});