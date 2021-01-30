
$(document).ready(function (){
       $.getJSON("https://restcountries.eu/rest/v2/region/europe", function(data){
        var items = [];
        $.each( data, function( key, val){
            items.push("<li id='" + key + "'>" + val.name + "</li>");
        });
        $("#miUl").html(items.join(""));
       
       });
    });
