import $ from "jquery";
import Validator from "jquery-validation";
// import Base64 from './Base64.js';

class SamplesFormSender {
    constructor() {
        this.submitButton = $("#partners-submit");
        this.partnersForm = $("#partners-form");

        this.okButton = $("#order-popup .order-popup__button");

        this.setupPopup();
        this.setupValidator();
    }

    setupPopup() {
        let $ordersProgress = $("#order-popup .order-popup__progress");
        $ordersProgress.show();

        function rotate() {
            $ordersProgress.css({transform: "rotate(" + rotate.degree +"deg)"});
            rotate.degree += 5;
            setTimeout(rotate, 25);
        }
        rotate.degree = 0;
        rotate();

        let self = this;
        this.okButton.on("click", function(event) {
            self.hidePopup();
            event.preventDefault();
        });
    }

    showPopup() {
        let $orderPopup = $("#order-popup");
        let $orderPopupContent = $("#order-popup .order-popup__content");
        $orderPopup.addClass("order-popup--shown");
        $orderPopupContent.addClass("order-popup__content--shown");
    }

    hidePopup() {
        let $orderPopup = $("#order-popup");
        let $orderPopupContent = $("#order-popup .order-popup__content");
        $orderPopup.removeClass("order-popup--shown");
        $orderPopupContent.removeClass("order-popup__content--shown");
    }

    setupValidator() {
        let self = this;

        this.partnersForm.validate({
            errorPlacement: function(error, element) {
                error.appendTo(element.parent(".form__input-group"));
            },
            highlight: function(element, errorClass, validClass) {
                // element.parent('input[type="checkbox"').css('display', 'inline-block');
            },
            rules: {
                fullname: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                address: "required",
                company: "required",
                policy: "required"
            },
            messages: {
                fullname: "Пожалуйста введите свое имя",
                phone: "Пожалуйста введите номер телефона",
                email: "Пожалуйста введите адрес электронной почты",
                address: "Пожалуйста введите название города",
                company: "Пожалуйста введите название организации",
                policy: "Вы должны согласиться с политикой конфиденциальности"
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
            name: this.partnersForm.find("input[name=\"fullname\"]").val(),
            phone: this.partnersForm.find("input[name=\"phone\"]").val(),
            email: this.partnersForm.find("input[name=\"email\"]").val(),
            address: this.partnersForm.find("input[name=\"address\"]").val(),
            company: this.partnersForm.find("input[name=\"company\"]").val(),
            promoCode: this.partnersForm.find("input[name=\"promo\"]").val()
        };

        // let $fullOrder = $('<div></div>');
        // $fullOrder.append('<h1>Заявка на халявную косметику</h1>');
        // $fullOrder.append('<div><span>Фамилия Имя Отчество: </span>'+ partner.name +'</div>');
        // $fullOrder.append('<div><span>Номер телефона: </span>'+ partner.phone +'</div>');
        // $fullOrder.append('<div><span>Электронная почта: </span>'+ partner.email +'</div>');
        // $fullOrder.append('<div><span>Город: </span>'+ partner.address +'</div>');
        // $fullOrder.append('<div><span>Организация (барбершоп): </span>'+ partner.company +'</div>');

        let phoneClean = partner.phone.replace(/[^0-9 +]+/g, "");

        let $fullOrder = $(`
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0; padding:0; background-color: #e0ddd9; padding: 20px; font-family: Arial, sans-serif;">
      <tr>
        <td height="100%">
          <table border="0" cellpadding="0" cellspacing="0" style="margin:0 auto; padding:0;">
            <tr>
              <td id="table-container" style="background-color: #f1f1f1; max-width:600px; margin: 0 auto; padding: 20px; border-radius: 5px;">
                <h1>Заявка на бесплатный пробник</h1>
                <table border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0; width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Фамилия Имя Отчество</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">${partner.name}</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Номер телефона</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;"><a href="tel:${phoneClean}">${partner.phone}</a></td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Электронная почта</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;"><a href="mailto:${partner.email}">${partner.email}</a></td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Город</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">${partner.address}</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Организация (барбершоп)</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">${partner.company}</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;"><p style="font-size: 24px; font-family: Arial, sans-serif;">Промокод</p></td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;"><p style="font-size: 24px; font-family: Arial, sans-serif;">${partner.promoCode}</p></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <p style="font-size: 32px; font-family: Arial, sans-serif;">КОД: ${partner.promoCode}</p>
        `);
        
        let dataToSend = {
            // 'subject': this.base64.encode('Заявка на сотрудничество'),
            "subject": "Free samples",
            "content": $fullOrder.html()
        };

        $.ajax({
            type: "POST",
            // url: 'http://localhost/bw/order.php',
            url: "http://barberwild.com/order.php",
            data: dataToSend,
            success: onSuccess,
            error: onError
            // complete: onComplete
        });

        function onSuccess() {
            $("#order-popup .order-popup__title").text("Спасибо!");
            $("#order-popup .order-popup__text").html("Ваша заявка успешно принята.<br> В скором времени мы с вами свяжемся.");
            // setTimeout(self.hidePopup, 2000);
            $("#order-popup .order-popup__progress").hide();
            $("#order-popup .order-popup__button").show();
            self.partnersForm[0].reset();
        }

        function onError() {
            $("#order-popup .order-popup__title").text("Ошибка отправки.");
            $("#order-popup .order-popup__text").text("Проверьте соединение или попробуйте позже.");
            $("#order-popup .order-popup__progress").hide();
            $("#order-popup .order-popup__button").show();
            // setTimeout(self.hidePopup, 2000);
        }
    }
}

export default SamplesFormSender;