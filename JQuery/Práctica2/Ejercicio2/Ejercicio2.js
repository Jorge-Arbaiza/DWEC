
$(document).ready(function (){
    $("#show").click(function (){
        $.ajax({
        url:"html/index.html",
        success: function (response) {
        $("#miDiv").html(response)
    }
    });
});
});