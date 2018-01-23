$(document).ready(function () {

    $('#menu-button').on('click', function () {
        $('.dropdown-nav').toggleClass('visible');
    });

    $("#scroll-down-button").click(function () {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top
        }, 1500);
    });

});
