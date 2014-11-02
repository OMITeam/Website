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

    var about = collapseItem("about_us", current_scroll_top);
    var contact = collapseItem("contact_us", current_scroll_top);
    if (about || contact) {
        return;
    } else {
        removeActivate();
        $(".home").addClass("activate");
    }
}

var collapseItem = function (id, current) {
    id = "." + id;
    var item = $(id);
    var Ioffset = item.offset();
    var Itop = Ioffset.top - 50;
    var Ibot = Itop - item.height();
    var idl = id.substring(0, id.length-3);

    if ((current >= Itop) && ((current - Ibot) >= (item.height() - 50)) && ((current - Ibot) < Itop)) {
        if (!checkActivate()) {
            return;
        }
        if (getActivate() === $(idl)) {
            return;
        }
        removeActivate();
        $(idl).addClass("activate");
        return true;
    }
}

var checkActivate = function () {
    var current = $(".activate");
    return (current !== null);
}

var getActivate = function () {
    if(!checkActivate()){
        return null;
    }
    var current = $(".activate");
    return current;
}

var removeActivate = function () {
    var current = $(".activate");
    if (current !== null) {
        current.removeClass("activate");
    }
}

/*Highlight the selected item
 * Input:none
 * Output:Highlights the current tab
 */
var Navnar_highlight = function () {
    removeActivate();
    if (!$(this).hasClass("dropdown")) {
        $(this).addClass("activate");
    }
}

$(document).ready(main);
