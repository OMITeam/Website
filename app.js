main = function () {
    $(".navbar-nav li").click(function () {
        var dropdown = $(".dropdown");
        if (dropdown.hasClass("activate")) { /*dropdown checking*/
            $(".dropdown-menu").hide(300);
        }
        var current = $(".activate");
        current.removeClass("activate");
        $(this).addClass("activate");
    });

    $(".dropdown-toggle").click(function () { /*dropdown toggling*/
        $(".dropdown-menu").toggle(300);
    });
    $(".dropdown-menu").click(function () { /*dropdown hiding*/
        $(".dropdown-menu").hide(600, "easeInElastic");
    });

    //Collapses the navigation bar when scrolled down
    $(document).scroll(function () {
        var current_scroll_top = $(document).scrollTop();
        if (current_scroll_top >= 50) {
            $(".transperent_nav").removeClass("transperent_nav" , 200);
        } else {
            $("#Main_nav").addClass("transperent_nav" , 200);
        }
    });
};


$(document).ready(main);
