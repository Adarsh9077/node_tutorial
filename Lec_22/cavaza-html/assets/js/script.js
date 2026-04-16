$(document).ready(function () {
    AOS.init();

    let ScreenWidth = screen.width;
    console.log(ScreenWidth);
    $(".nav-item").hover(
        function () {
            $(".nav-item.dropdown").find(".dropdown-menu").removeClass("show")
            $(this).find(".dropdown-menu").addClass("show")
        },
        function () {
            $(this).removeClass("show");
            $(this).find(".dropdown-menu").mouseleave(function () {
                $(this).removeClass("show");
            });
        })
    $(document).mouseleave(function () {
        $(".dropdown-menu").removeClass("show");
    });
    $("header").mouseleave(function () {
        $(".dropdown-menu").removeClass("show");
    });
});
$(document).ready(function(){
    $("textarea").attr("rows","1")
})
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom],
    // licenseKey: 'your_license_key',
    // speed: 200,
    speed: 500,
    // showZoomInOutIcons: true,
    selector: '.item',
    hideScrollbar: true,
    slideDelay: 10,
    actualSize: false,
    controls: true,
    // mode: 'lg-rotate',
    // mode: 'lg-fade',
    // controls :false,
    // ... other settings
});