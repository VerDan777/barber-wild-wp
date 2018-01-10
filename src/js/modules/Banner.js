import $ from 'jquery';

class Banner {
    constructor() {
        this.sidebar = $('.barbershop-owner');
        this.offset = $sidebar.offset();
        this.windiw = $(window);
        this.topPadding = 15;
        
    if ($('.sidebar') && ($(window).width() > 1000)) {
        scrollSidebar();
    }
}
    scrollSidebar() {
    $window.scroll(()=> {
        if($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        }else {
            $sidebar.top().animate({
                marginTop: 0
            });
        }
    });
}
}
export default Banner;