import $ from 'jquery';
import Validator from 'jquery-validation';

class OrderFormSender {
    constructor() {
        this.submitButton = $('#order-submit');
        this.orderForm = $('#order-form');

        this.okButton = $('#order-popup .order-popup__button');

        this.setupPopup();
        this.setupValidator();
    }

    setupPopup() {
        let $orderProgress = $('#order-popup .order-popup__progress');
        $orderProgress.show();

        function rotate() {
            $orderProgress.css({transform: 'rotate('+ rotate.degree + 'deg)'});
            rotate.degree += 5;
            setTimeout(rotate, 25);
        };
        rotate.degree = 0;
        rotate();

        let self = this;
        this.okButton.on('click', function(event) {
            self.hidePopup();
            event.preventDefault();
        });
    }

    showPopup() {
        let $orderPopup = $('#order-popup');
        let $orderPopupContent = $('#order-popup .order-popup__content');
        $orderPopup.addClass('order-popup--shown');
        $orderPopupContent.addClass('order-popup__content--shown');
        $('#order-popup .order-popup__button').hide();
    }

    hidePopup() {
        let $orderPopup = $('#order-popup');
        let $orderPopupContent = $('#order-popup .order-popup__content');
        $orderPopup.removeClass('order-popup--shown');
        $orderPopupContent.removeClass('order-popup__content--shown');
    }

    setupValidator() {
        let self = this;

        $('#order-form').validate({
            rules: {
                fullname: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                },
                address: 'required'
            },
            messages: {
                fullname: "Пожалуйста введите свое имя",
                phone: "Пожалуйста введите номер телефона",
                email: "Пожалуйста введите адрес электронной почты",
                address: "Пожалуйста введите адрес доставки"
            },
            submitHandler: function(form) {
                self.parseForm();
            }
        });
    }

    parseForm() {
        let self = this;

        this.showPopup();

        let $orderTable = $('<table></table>');

        $('#form-output').css('font-size', '32px');

        // Creating customer info
        let customer = {
            name: this.orderForm.find('input[name="fullname"]').val(),
            phone: this.orderForm.find('input[name="phone"]').val(),
            email: this.orderForm.find('input[name="email"]').val(),
            address: this.orderForm.find('input[name="address"]').val()
        }

        // Creating table: (Item name, Quantity)
        $('#order-form .table-item').each(function(index, row) {
            let $row = $(row);
            let $rowInput = $row.find('.spinner__input')
            if ($rowInput.val() && $rowInput.val() * 1 > 0) {
                $orderTable.append('<tr><td>'+ $row.find('.table-item__name').html() + '</td><td>' + $(row).find('.spinner__input').val() + '</td></tr>');
            }
        });

        let $fullOrder = $('<div></div>');
        $fullOrder.append('<div><span>Фамилия Имя Отчество: </span>'+ customer.name +'</div>');
        $fullOrder.append('<div><span>Номер телефона: </span>'+ customer.phone +'</div>');
        $fullOrder.append('<div><span>Электронная почта: </span>'+ customer.email +'</div>');
        $fullOrder.append('<div><span>Адрес доставки: </span>'+ customer.address +'</div>');
        $fullOrder.append($orderTable);

        let dataToSend = {
            'subject': "Products order",
            'content': $fullOrder.html()
        };

        $.ajax({
            type: 'POST',
            // url: 'http://localhost/bw/order.php',
            url: 'http://barberwild.com/order.php',
            data: dataToSend,
            success: onSuccess,
            error: onError
            // complete: onComplete
        });

        function onSuccess() {
            $('#order-popup .order-popup__title').html('Спасибо! Ваша заявка успешно принята.<br> В скором времени мы с вами свяжемся.');
            // setTimeout(self.hidePopup, 2000);
            $('#order-popup .order-popup__progress').hide();
            $('#order-popup .order-popup__button').show();
            self.orderForm[0].reset();
        }

        function onError() {
            $('#order-popup .order-popup__title').text('Ошибка отправки. Проверьте соединение или попробуйте позже.');
            $('#order-popup .order-popup__progress').hide();
            $('#order-popup .order-popup__button').show();
            setTimeout(self.hidePopup, 2000);
        }
    }
}

export default OrderFormSender;