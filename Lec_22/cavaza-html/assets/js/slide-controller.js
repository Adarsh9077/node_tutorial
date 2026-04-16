const prev = '<img src="assets/logo/prev-arrow-icon.svg" alt="" class="img-fluid">';
const next = '<img src="assets/logo/next-arrow-icon.svg" alt="" class="img-fluid">';

$(document).ready(function() {
let rowInput ;
let slidesPerViewInput ;

let ScreenWidth = screen.width;
console.log(ScreenWidth);
if (ScreenWidth>= 900) {
    slidesPerViewInput = 4;
    rowInput = 2;
}
else if( ScreenWidth<= 899 &&ScreenWidth>= 765){
    slidesPerViewInput = 3;
    rowInput = 2;
}
else {
    slidesPerViewInput = 1;
    rowInput = 1;
}

var swiper = new Swiper(".single-row-slider", {
    slidesPerView: slidesPerViewInput,
    grid: {
        rows: 1,
    },
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".menu-of-tiffend-slider", {
    slidesPerView: slidesPerViewInput,
    grid: {
        rows: rowInput,
    },
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
});

$(document).ready(function() {


$('.about-us-img-slider.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    items: 1,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    touchDrag: false,
    mouseDrag: false,
    pullDrag: false,
    // smartSpeed: 500,
    autoplaySpeed: 2000,

});

$('.feast-flavor-slider.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 600,
    loop: true,
    margin: 10,
    dots: false,
    navText: [prev, next],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false,
        },
        1000: {
            items: 4,
            nav: false,
            touchDrag: false,
        mouseDrag: false,
        autoplay: false,
        pullDrag: false,
            // loop: false
        }
    }
});

$('.stories-slider.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 600,
    loop: true,
    margin: 30,
    dots: false,
    navText: [prev, next],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 2.2,
            nav: true,
            // loop: false
        }
    }
});

$('.feast-slider.slick').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: true,
    // aitu
    autoplaySpeed: 4000,
    speed: 1000,
    prevArrow: '<div class="slick-prev"><img src="assets/logo/prev-arrow-icon.svg" alt="" class="img-fluid"></div>',
    nextArrow: '<div class="slick-next"><img src="assets/logo/next-arrow-icon.svg" alt="" class="img-fluid"></div>',
    // fade: true,
    cssEase: 'ease-in-out',
    responsive: [
        {
            breakpoint: 768,
            arrows: false,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ],
}).on('beforeChange', function (event, slick, currentSlideIndex, nextSlideIndex) {
    if (nextSlideIndex > currentSlideIndex) {
        // Animation to go to next slide
        $('.my-carousel .slick-slide[data-slick-index=' + currentSlideIndex + ']').addClass('fadeOutLeft').removeClass('fadeInRight');
        $('.my-carousel .slick-slide[data-slick-index=' + nextSlideIndex + ']').addClass('fadeInRight').removeClass('fadeOutLeft fadeOutRight');
    } else {
        // Animation to go to previous slide
        $('.my-carousel .slick-slide[data-slick-index=' + currentSlideIndex + ']').addClass('fadeOutRight').removeClass('fadeInRight');
        $('.my-carousel .slick-slide[data-slick-index=' + nextSlideIndex + ']').addClass('fadeInLeft').removeClass('fadeOutLeft fadeOutRight');
    }
});



});











// $(document).ready(function(){
    
// })