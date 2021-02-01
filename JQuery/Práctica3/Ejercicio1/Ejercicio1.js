$(document).ready(function () {
   $("#ocultar").click(function (){
      
    $("#pikachu").fadeOut("slow");

   });
   $("#mostrar").click(function (){
      
    $("#pikachu").fadeIn("slow");
   });
   $("#encoger").click(function (){
      
    $("#pikachu").animate({
        width: 50,
        height: 50
    });
   });
   $("#aumentar").click(function (){
      
    $("#pikachu").animate({
        width: 1000,
        height: 1000
    });
   });
        });
  