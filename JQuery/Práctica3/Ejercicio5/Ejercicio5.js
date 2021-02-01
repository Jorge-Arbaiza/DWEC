$(document).ready(function () {
     cubo = $(".cubo"); 
     cubo.animate({
        left: 900
    },2000); 
    cubo.delay(2000)
     cubo.queue(function(continua){
         
         cubo.css("background-color", "#000000");
         continua();
  });
  cubo.delay(2000)
  cubo.animate({
    top: 900
},2000);
});
  