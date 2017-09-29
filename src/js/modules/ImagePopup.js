import $ from 'jquery';

class ImagePopup {

    constructor() {
        this.Img = $(".table-item__image img");
        this.popupClass = $(".popup");
        this.popupImgClass = $(".popup__img");
        this.popupButtonClass = $(".main-nav__menu-icon--popup main-nav__menu-icon--close-x");
        this.popupButtonMiddleClass = $(".main-nav__menu-icon__middle");
        this.popup;
        this.popupContainer = $(".popup__container");
        this.events();
    }
    events() {
        this.Img.click(()=>{
            this.attr("src");
            GeneratePopup();
            GenerateImg();
            GenerateButton();
            DeletePrevElement();
        });
        this.popupButton.click(()=>{
            this.popup.fadeOut("5000",()=> {
                this.popup.remove();
            });
        });
    };
    
    GeneratePopup() {
        this.popup = $("<div></div>",{class: this.popupClass}).appendTo("body").hide().fadeIn("5000");
        this.popup_container = $("<div></div>",{class: this.popupContainer}).appendTo(this.popupClass);
    }
    GenerateImg() {
        this.popupImg = $("<img>",{class: this.popupImgClass}).appendTo(this.popupContainer);
    };
    GenerateButton() {
        this.popupButton = $("<div></div>",{class: this.popupButtonClass,id: "close"}).appendTo(this.popup_container);
        this.popupButtonMiddle = $("<div></div>", {class: this.popupButtonMiddleClass}).appendTo(this.popupButton);
    };
    DeletePrevElement() {
        this.popupClass.prev().remove();
    };
}
export default ImagePopup;