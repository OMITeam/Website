main = function () {
    $(".navbar-nav li").click(function () {
        var current = $(".active");
        current.removeClass("active");
        $(this).addClass("active");
    });
};


$(document).ready(main);
