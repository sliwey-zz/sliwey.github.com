(function($){
    $("#sidebar-toggle").on("click", function() {
        var sidebar = $("#sidebar"),
            CSS_SHOW = "show",
            CSS_OPEN = "open";

        if (sidebar.hasClass(CSS_SHOW)) {
            sidebar.removeClass(CSS_SHOW);
            $(this).removeClass(CSS_OPEN);
        } else {
            sidebar.addClass(CSS_SHOW);
            $(this).addClass(CSS_OPEN);
        }

    })

    // back to top
    $(document).on("scroll", function() {
        var top = $(document).scrollTop(),
            backToTop = $("#backToTop");
        top == 0 && backToTop.removeClass();
        top > 100 && backToTop.addClass("show");
    });

    $("#backToTop").on("click", function() {
        $("html,body").animate({scrollTop: 0}, 600);
        $("#backToTop").addClass("go");
    });
})(jQuery);