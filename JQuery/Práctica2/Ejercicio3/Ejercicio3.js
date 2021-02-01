
$(document).ready(function (){
    $("#show").click(function (){
        $.get("xml/animales.xml","xml",function (xml) {
        
        $(xml).find("animal").each(function(){
            nombre=$(this).find("nombre").text();
            tipo=$(this).find("tipo").text();
            color=$(this).find("color").text();
            edad=$(this).find("edad").text();
            $("#miDiv").append("<p>El nombre del animal es "+nombre+", el tipo es "+tipo+", su color es "+color+" y su edad es de "+edad+" años.</p>")
        });
        });
    });
});
