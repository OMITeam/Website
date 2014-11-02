main = function () {
    $(".navbar-nav li").click(function () {
        var current = $(".activate");
        if(current !== null){
            current.removeClass("activate", 600);
        }
        if(!$(this).hasClass("dropdown")){
            $(this).addClass("activate", 600);
        }
    });

    $(".dropdown-toggle").click(function () { /*dropdown toggling*/
        $(".dropdown-menu").toggle(600);
    });

    $(".dropdown-menu").click(function () { /*dropdown hiding*/
        $(".dropdown-menu").hide(600, "easeInElastic");
    });

    //Collapses the navigation bar when scrolled down
    $(document).scroll(function () {
        var current_scroll_top = $(document).scrollTop();
        if (current_scroll_top >= 30) {
            $(".transperent_nav").removeClass("transperent_nav" , 200);
        } else {
            $("#Main_nav").addClass("transperent_nav" , 200);
        }
    });
};


$(document).ready(main);
