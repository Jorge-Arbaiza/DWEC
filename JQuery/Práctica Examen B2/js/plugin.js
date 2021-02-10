jQuery.fn.plugin = function() {
    this.each(function() {
        elem = $(this);

        elem.animate({
            color: "blue"
        });
        elem.queue(function() {

            elem.css("font-size", "16px");
        });
        elem.animate({
                opacity: "0"
            }),
            elem.animate({
                opacity: "1"
            });
        elem.queue(function() {

            elem.css("font-size", "25px");
        });
        elem.dequeue();





    });
    return this;
};