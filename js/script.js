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
$(document).ready(function() {
    $('.footer-slider-one').click(function(event) {
        $('.footer-item.one').toggleClass('.active').next().slideToggle(300);
    });
});

$(document).ready(function() {
    $('.footer-slider-two').click(function(event) {
        $('.footer-item.two').toggleClass('.active').next().slideToggle(300);
    });
});


$(document).ready(function() {
    $('.footer-slider-three').click(function(event) {
        $('.footer-item.three').toggleClass('.active').next().slideToggle(300);
    });
});