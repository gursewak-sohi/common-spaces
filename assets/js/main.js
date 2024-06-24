document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // loop: true,
        slidesPerView: 1,
        spaceBetween: 12,
        grabCursor: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
      });
});
 

 


 
 