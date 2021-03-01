jQuery.fn.plugin = function() {
    this.each(function() {
        elem = $(this);

        elem.animate({
            backgroundColor: "green"
        });
        
    });
    return this;
};