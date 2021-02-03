jQuery.fn.fecha = function(){
    this.each(function(){
        elem = $(this);
        var fecha = new Date();
        var fecha_sistema = fecha.getDay() + "-" + ((fecha.getMonth())+1) + "-" + fecha.getFullYear();
        elem.html(fecha_sistema);
    });
    return this;
};