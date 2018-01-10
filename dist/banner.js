// $(function() {
//     // Get coordinates of banner
//     var offset = $('.barbershop-owner').offset();
//     var banner = $('.barbershop-owner');
//     var screen = parseInt($(window).width());
//     var topPadding = 15;

//         // If user scroll more then, banner position, begin animate
//         $(window).scroll(function() {
//             if($(window).scrollTop() > offset.top) {
//                 $(banner).stop().animate({
//                     marginTop:
//         $(window).scrollTop() - offset.top + topPadding
        
//         });
//             } else {
//                 $(banner).stop().animate({
//                     marginTop: 0
//                 });
//             };
//         })
// })
if ($('.barbershop-owner') && ($(window).width() > 1000)) {
    scrollSidebar();
}

function scrollSidebar() {
    var $sidebar = $('.barbershop-owner'),
        $window = $(window),
        offset = $sidebar.offset();
        topPadding = 15;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        }else {
            $sidebar.top().stop().animate({
                marginTop: 0
            });
        }
})};