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
    /*Collapses the navigation bar items when scrolled down*/
    $(document).scroll(collapseItems);
};
/*Navigation bar collapse function*/
var Navigation_collaps = function () {
    var current_scroll_top = $(document).scrollTop();

    if (current_scroll_top >= 50) {
        $(".transperent_nav").removeClass("transperent_nav", 200);
    } else {
        $("#Main_nav").addClass("transperent_nav", 200);
    }
    
}

var collapseItems = function () {
    var current_scroll_top = $(document).scrollTop();
    var current_scroll_bot = $(window).height() - current_scroll_top;

    var current = $(".activate");
    if (current !== null) {
        current.removeClass("activate");
    }
    /*About Us -- Variables*/
    var about = $(".about_us");
    var Aoffset = $(".about_us").offset();
    var Atop = Aoffset.top - 50;
    var Abot = Atop - about.height();
    /*Contact -- Variables*/
    var contact = $(".contact_us");
    var Coffset = $(".contact_us").offset();
    var Ctop = Coffset.top - 50;
    var Cbot = Ctop - contact.height();

    if ((current_scroll_top >= Atop) && ((current_scroll_top - Abot) >= (about.height() - 50)) && ((current_scroll_top - Abot) < Atop)) {
        $(".about").addClass("activate");
    } else if ((current_scroll_top >= Ctop) && ((current_scroll_top - Cbot) >= (contact.height() - 50)) && (Ctop > (current_scroll_top - Cbot))) {
        $(".contact").addClass("activate");
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
