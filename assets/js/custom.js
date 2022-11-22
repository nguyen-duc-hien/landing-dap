document.addEventListener( 'DOMContentLoaded', function() {
    let teamSplide = new Splide( '#teamSplide', {
        type   : 'loop',
        drag   : 'free',
        arrows: false,
        perPage: 4,
        breakpoints: {
            525: {
                perPage: 2,
            },
      },
        autoplay: true,
        interval: 1500,
    } );
    teamSplide.mount();

    let partnerSplide = new Splide( '#partnerSplide', {
        type   : 'loop',
        drag   : 'free',
        arrows: false,
        perPage: 2,
        autoplay: true,
        interval: 1500,
    } );
    partnerSplide.mount();

    let newSplide = new Splide( '#newSplide', {
        type   : 'loop',
        drag   : 'free',
        arrows: false,
        focus: 'center',
        perPage: 3,
        breakpoints: {
            525: {
                perPage: 1.5,
            },
      },
        autoplay: true,
        interval: 1500,
    } );
    newSplide.mount();
  } 
);
let body = document.querySelector('body');
let iconMenuMobile = document.getElementById('iconMenuMobile');
let menuMobile = document.getElementById('menuMobile');
let iconCloseMenu = document.getElementById('iconCloseMenu');

iconMenuMobile.addEventListener('click', () => {
    body.classList.add('overflow-hidden');
    menuMobile.classList.remove('hidden');
})

iconCloseMenu.addEventListener('click', () => {
    body.classList.remove('overflow-hidden');
    menuMobile.classList.add('hidden');
})