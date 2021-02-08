$(document).ready(function () {
   $("#mover").click(function (){
    cubo = $(".cubo");  
    cubo.queue(function(continua){
        cubo.animate({
            left: 900
        },2000);
        cubo.animate({
            top: 900
        },2000);
        cubo.animate({
            left: 0
        },2000);
        cubo.animate({
            top: 0
        },2000);
        continua();
    })
    
    
   });
   $("#parar").click(function (){
      
    cubo.stop(true);
    
   });
   
   
        });
  