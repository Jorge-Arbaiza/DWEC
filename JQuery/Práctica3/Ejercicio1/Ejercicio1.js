$(document).ready(function () {
   $("#ocultar").click(function (){
      
    $("#pikachu").animate({
        opacity: 0
    });
   });
   $("#mostrar").click(function (){
      
    $("#pikachu").animate({
        opacity: 100
    },1500);
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
  