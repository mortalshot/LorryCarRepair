$('.owl-carousel').owlCarousel({
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: ['<i class="fas fa-caret-left fa-2x" aria-hidden="true"></i>',
              '<i class="fas fa-caret-right fa-2x" aria-hidden="true"></i>'],
    items: 3,
    margin: 20,
    loop: true,
    nav: true,
    center: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        // breakpoint from 480 up
        480: {
            items: 1
        },
        // breakpoint from 768 up
        768: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})
