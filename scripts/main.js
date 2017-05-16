/**
 * Created by artemkopytko on 26.03.17.
 */
$(document).ready(function () {
    $('#star-rating').rating();
    $('.ingredients-carousel').slick({
        slidesToShow: 3,
        slidesToScroll:1,
        // autoplay: true,
        // autoplaySpeed: 2500,
        dots: true
    });

});