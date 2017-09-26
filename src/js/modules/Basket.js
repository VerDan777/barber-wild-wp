import $ from 'jquery';

class Basket {
    constructor() {
        this.button = $("#add");
        this.buttonClear = $("#clear");
        this.addToCard();
    }

    ClickEvent() {
        //Added basket
        button.on("click",addToCard);

        //Opening basket
        buttonClear.on("click",opeCart);

        //Remove basket
        buttonClear.on("click",(e)=> {
            $.removeCookie('cart');
            cartCont.text('Корзина очищена');
        });
    };
}