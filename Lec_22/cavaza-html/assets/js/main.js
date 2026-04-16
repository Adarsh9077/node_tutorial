import lightGallery from "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/lightgallery.es5.min.js";

import lgZoom from "https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/plugins/zoom/lg-zoom.es5.min.js";

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

$(document).ready(function () {
    const mySwiper = new Swiper('#swiper-container', {
        // grabCursor: true,
        // effect: "fade",
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        // pagination: {
        //     el: ".swiper-pagination",
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                // spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                // spaceBetween: 40,
            },
            1024: {
                // slidesPerView: 5,
                slidesPerView: 4.25,
                // slidesPerView: "auto",
                // spaceBetween: 50,
            },
        },
    });





    // https://www.lightgalleryjs.com/docs/getting-started/
    // https://www.lightgalleryjs.com/demos/html-markup/



    const $lgContainer = document.getElementById("swiper-container");

    const lg = lightGallery($lgContainer, {
        speed: 500,
        showZoomInOutIcons: true,
        actualSize: false,
        controls: true,
        hideScrollbar: true,
        selector: '.swiper-slide > a',
        plugins: [lgZoom]
    });
});