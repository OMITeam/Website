main = function () {
    $(".navbar-nav li").click(function () {
        var current = $(".active");
        current.removeClass("active");
        $(this).addClass("active");
    });
    $(".dropdown-toggle").click(function () {
        $(".dropdown-menu").toggle();
    });
    $(".dropdown-menu").click(function () {
        $(".dropdown-menu").hide();
    });
    //Collapses the navigation bar when scrolled down
    $(document).scroll(function () {
        var current_scroll_top = $(document).scrollTop();
        if (current_scroll_top >= 50) {
            $(".transperent_nav").removeClass("transperent_nav" , 200);
        }
        else {
            $("#Main_nav").addClass("transperent_nav" , 200);
        }
    });
};


$(document).ready(main);
