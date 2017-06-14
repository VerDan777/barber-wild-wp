import $ from 'jquery';
import Validator from 'jquery-validation';
// import Base64 from './Base64.js';

class PartnersFormSender {
    constructor() {
        this.submitButton = $('#partners-submit');
        this.partnersForm = $('#partners-form');

        this.okButton = $('#order-popup .order-popup__button');

        this.setupPopup();
        this.setupValidator();
    }

    setupPopup() {
        let $ordersProgress = $('#order-popup .order-popup__progress');
        $ordersProgress.show();

        function rotate() {
            $ordersProgress.css({transform: 'rotate(' + rotate.degree +'deg)'});
            rotate.degree += 5;
            setTimeout(rotate, 25);
        }
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
    }

    hidePopup() {
        let $orderPopup = $('#order-popup');
        let $orderPopupContent = $('#order-popup .order-popup__content');
        $orderPopup.removeClass('order-popup--shown');
        $orderPopupContent.removeClass('order-popup__content--shown');
    }

    setupValidator() {
        let self = this;

        this.partnersForm.validate({
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
                fullname: 'Пожалуйста введите свое имя',
                phone: 'Пожалуйста введите номер телефона',
                email: 'Пожалуйста введите адрес электронной почты',
                address: 'Пожалуйста введите название города'
            },
            // submitHandler: self.parseForm
            submitHandler: function(form) {
                self.parseForm();
            }
        });
    }

    parseForm() {
        let self = this;

        this.showPopup();

        // creating partner info
        let partner = {
            name: this.partnersForm.find('input[name="fullname"]').val(),
            phone: this.partnersForm.find('input[name="phone"]').val(),
            email: this.partnersForm.find('input[name="email"]').val(),
            address: this.partnersForm.find('input[name="address"]').val(),
            company: this.partnersForm.find('input[name="company"]').val()
        };

        let $fullOrder = $('<div></div>');
        $fullOrder.append('<div><span>Фамилия Имя Отчество: </span>'+ partner.name +'</div>');
        $fullOrder.append('<div><span>Номер телефона: </span>'+ partner.phone +'</div>');
        $fullOrder.append('<div><span>Электронная почта: </span>'+ partner.email +'</div>');
        $fullOrder.append('<div><span>Город: </span>'+ partner.address +'</div>');
        $fullOrder.append('<div><span>Организация (барбершоп): </span>'+ partner.сompany +'</div>');
        
        let dataToSend = {
            // 'subject': this.base64.encode('Заявка на сотрудничество'),
            'subject': 'Partnership order',
            'content': $fullOrder.html()
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost/bw/order.php',
            data: dataToSend,
            success: onSuccess,
            error: onError
            // complete: onComplete
        });

        function onSuccess() {
            $('#order-popup .order-popup__title').html('Спасибо! Ваша заявка успешно принята. <br> В скором времени мы с вами свяжемся.');
            // setTimeout(self.hidePopup, 2000);
            $('#order-popup .order-popup__progress').hide();
            $('#order-popup .order-popup__button').show();
            self.partnersForm[0].reset();
        }

        function onError() {
            $('#order-popup .order-popup__title').text('Ошибка отправки. Проверьте соединение или попробуйте позже.');
            $('#order-popup .order-popup__progress').hide();
            $('#order-popup .order-popup__button').show();
            // setTimeout(self.hidePopup, 2000);
        }
    }
}

export default PartnersFormSender;