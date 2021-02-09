jQuery.fn.plugin = function() {
    this.each(function() {
        elem = $(this);
        elem.css("font-size", "16px");
        elem.animate({
            color: "blue"
        });
    });
    return this;
};