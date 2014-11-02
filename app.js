main = function () {
    /*Navigation bar*/
        $(".navbar-nav li").click(Navnar_highlight);
        /*dropdown menu*/
            $(".dropdown-toggle").click(function () {
                $(".dropdown-menu").toggle(600);
            });
            $(".dropdown-menu").click(function () {
                $(".dropdown-menu").hide(600, "easeInElastic");
            });

    /*Collapses the navigation bar when scrolled down*/
        $(document).scroll(Navigation_collaps);
};
/*Navigation bar collapse function*/
var Navigation_collaps = function () {


    var current_scroll_top = $(document).scrollTop();
    var current_scroll_bot = $(window).height() - current_scroll_top;

    if (current_scroll_top >= 50) {
        $(".transperent_nav").removeClass("transperent_nav", 200);
    } else {
        $("#Main_nav").addClass("transperent_nav", 200);
    }
    //600 - 1282 = about - collapse
    var current = $(".activate");
    if (current !== null) {
        current.removeClass("activate");
    }
    var about = $(".about_us");
    var Aoffset = $(".about_us").offset();
    var Atop = Aoffset.top;
    var Abot = Atop - about.height();
    if (current_scroll_top >= Atop) {
        $(".about").addClass("activate");
    } else {
        $(".home").addClass("activate");
    }
}

/*Highlight the selected item
 * Input:none
 * Output:Highlights the current tab
 */
var Navnar_highlight = function () {
    var current = $(".activate");
    if (current !== null) {
        current.removeClass("activate", 600);
    }
    if (!$(this).hasClass("dropdown")) {
        $(this).addClass("activate", 600);
    }
}

$(document).ready(main);
