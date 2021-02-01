
$(document).ready(function (){
      var request = $.getJSON("https://restcountries.eu/rest/v2/region/europe", function(data){
        var items = [];
        $.each( data, function( key, val){
            items.push("<li id='" + key + "'>" + val.name + "</li>");
        });
        request.done(function (){
            $("#miUl").html(items.join(""))
        });
        });
        
        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + jqXHR.status + ' ' + textStatus);
        });
       });
    
