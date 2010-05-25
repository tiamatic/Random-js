//MENU CODE
namespace.menu = function () {
    // MOUSE EVENTS
    $("#primaryNav li").hover( function () {
        var submenu = $(this).find("div.subMenu"),
        queueNumber = submenu.queue("fx");
        if (queueNumber < 2) {
            submenu.slideDown();
        }
    },
    function () {
        $(this).find("div.subMenu").slideUp();
    });

    // KEYBOARD NAV
    $('#primaryNavList>li').focusin(function () {
        $(this).find("div.subMenu").slideDown();
        $(this).closest("li").stopTime("closing");
    }).focusout(function () {
        $(this).oneTime(300, "closing", function () { $(this).find("div.subMenu").slideUp(); });
    });

    $('#primaryNav li li').focusin(function () {
        $(this).closest("#primaryNavList>li").stopTime("closing");
    });
}