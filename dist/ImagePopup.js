$(document).ready(function() {
    
        $('.popup').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            closeMarkup: '<div class="main-nav__menu-icon--popup main-nav__menu-icon--close-x main-nav__menu-icon--close-x--popup main-nav__menu-icon--popup"><div class="main-nav__menu-icon__middle"></div></div>',
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out'
            }
            
})});