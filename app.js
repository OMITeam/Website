main = function () {
    /*Things to be done once*/
    Do_once();
    $("img.Image_abt").click(function () {
        collaps_about_us(this);
    });
    $("img.Image_srv").click(function () {
        collaps_our_service(this);
    });
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
    /*$("#stiky_about").sticky({ topSpacing: 50 });
    $("#stiky_contact").sticky({ topSpacing: 100 });*/
};




/*Collaps the information
 * Input: image pressed
 * Output: collapses the iformation
 */
function collaps_about_us(item) {
    a = 200;
    name = "#" + $(item).attr('id') + "_about";
    row = document.getElementById($(item).attr('id') + "_row");
    if ($(name).hasClass("active_about_us")) {
        $(name).hide(a).removeClass("active_about_us");
        $(".other_about").delay(a + 10).show(a);
    } else {
        $(".other_about").not(row).hide(a);
        $(name).delay(a).toggle(a).addClass("active_about_us");
    }
};

/*Collaps the information
 * Input: image pressed
 * Output: collapses the iformation
 */
function collaps_our_service(item) {
    a = 200;
    name = "#" + $(item).attr('id') + "_service";
    row = document.getElementById($(item).attr('id') + "_row");
    if ($(name).hasClass("active_our_service")) {
        $(name).hide(a).removeClass("active_our_service");
        $(".other_service").delay(a + 10).show(a);
    } else {
        $(".other_service").not(row).hide(a);
        $(name).delay(a).toggle(a).addClass("active_our_service");
    }
};

/*Navigation bar collapse function
 * Input:Scroll event
 * Output:Changes the navbar from transperent is scrolled
 */
var Navigation_collaps = function () {
    var current_scroll_top = $(document).scrollTop();

    if (current_scroll_top >= 1) {
        $(".transperent_nav").removeClass("transperent_nav", 200);
    } else {
        $("#Main_nav").addClass("transperent_nav", 200);
    }
    
}
/*---------------Ofir section-- 8===========D---*/
var collapseItems = function () {
    var current_scroll_top = $(document).scrollTop();    

    var about = collapseItem("about_us", current_scroll_top);
    var services = collapseItem("services_us", current_scroll_top);
    var contact = collapseItem("contact_us", current_scroll_top);
    if (about || contact || services) {
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
    var idl = id.substring(0, id.length - 3);

    if ((current >= Itop) && ((current - Ibot) >= (item.height() - 50)) && ((Itop + 50.1) > (current - Ibot))) {
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
        $(".dropdown-menu").hide(600);
    }
}

$(document).ready(main);

var Do_once = function () {
    $(".about_info_hide").hide();
    $(".service_info_hide").hide();
}