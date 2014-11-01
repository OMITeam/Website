main = function () {
    $(".navbar-nav li").click(function () {
        var dropdown = $(".dropdown");
        if (dropdown.hasClass("activate")) { /*dropdown checking*/
            $(".dropdown-menu").hide();
        }
        var current = $(".activate");
        current.removeClass("activate");
        $(this).addClass("activate");
    });
    $(".dropdown-toggle").click(function () { /*dropdown toggling*/
        $(".dropdown-menu").toggle();
    });
    $(".dropdown-menu").click(function () { /*dropdown hiding*/
        $(".dropdown-menu").hide();
    });
};


$(document).ready(main);
