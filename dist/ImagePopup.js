
$(document).ready(function() {
    $('.table-item__image img').on("click", function() {
        
       var dir = $(this).attr('src');
       var img = $('.table-item__image');

       var popup = $("<div></div>",{
           class:"popup"
        }).appendTo("body").hide();
        $(popup).fadeIn("5000");
        var popupContainer = $("<div></div>",{
            class:"popup__container"
        }).appendTo(".popup");
        
        var popupImg = $("<img>",{src: dir, class: "popup__img"}).appendTo(".popup__container");
        var popupButton = $("<div></div>",{
            class: "main-nav__menu-icon--popup main-nav__menu-icon--close-x",
            id: "close"
        }).appendTo(popupContainer);
    
        var popupButtonMiddle = $("<div></div>",{
            class: "main-nav__menu-icon__middle"
        }).appendTo(popupButton);
        var prevImg = $(popup).prev().remove();
        
        

       $('#close').on("click", function() {
            $(popup).fadeOut("5000",function() {
                $(popup).remove();
            });
    });
    
    });
});