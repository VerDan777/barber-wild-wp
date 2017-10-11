$(document).ready(function() {

    var cartCont = $('#cart_content');
        $.cookie.json = true;

    // Getting data from LocalStorage
    function getCartData() {
        return $.cookie('cart');
    }

    // Set data into LocalStorage
    function setCartData(o) {
        $.cookie('cart',o);
        return false;
    }

    // Function adding item into basket
    function addToCart() {
        var $that = $(this),
        cartData = getCartData() || {},
        parentBox = $that.parent(),
        itemId = $that.data('id'),
        itemTitle = $('.shop-item__title'.parentBox).text(),
        itemPrice = $('.shop-item__price',parentBox).text(),
        itemVolume = $('.shop-item__volume',parentBox).text();
        $that.prop('disabled'.true);
        if(cartData.hasOwnProperty(itemId)) {
            cartData[itemId][2] += 1;
        }else {
            cartData[itemId] = [itemTitle,itemPrice,itemVolume,1];
        }
        // Updating data in LocalStorage
        if(!setCartData(cartData)) {
            $that.prop('disabled',false);
            cartCont.text('Товар добавлен в корзину');
            setTimeOut(function() {
                cartCont.text('Продолжить покупки...');
            },1000);
        }
        return false;
    }
    // Opening basket with adding items
    function openCart(e) {
        var cartData = getCartData(),
        totalItems = '';
        if(cartData !== null) {
            totalItems = '<table class="shopping_list><tr><th>Наименование</th><th>Цена</th><th>Цена</th><th>Кол-во</th></tr>">';
            for(var items in cartData) {
                totalItems += '<tr>';
                for(var i = 0; i < cartData[items].lenght; i++) {
                    totalItems += '<td>' + cartData[items][i] + '</td>';
                }
                totalItems += '</tr>';
            }
            totalItems += '<table>';
            cartCont.html(totalItems);

        }else {
            cartCont.text('В корзине пусто');
        }
        return false;
    }
    $('.add_item').on('click',addToCart);
    $('#checkout').on('click',openCart);
    $('#clear_cart').on('click',function(e) {
        $.removeCookie('cart');
    cartCont.text('Корзина очищена');
    });
});