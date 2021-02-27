$(document).ready(function() {
    $('.slider-items').slick({
        dots: true,
        variableWidth: true,
        centerMode: true,
        slidesToShow: 3,
    });
});

$(document).ready(function() {
    $('.menu-burger').click(function() {
        $('.menu-burger').toggleClass('open-menu');
        $('.menu-item').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});