import $ from "jquery";
import Validator from "jquery-validation";

class OrderFormSender {
    constructor() {
        this.submitButton = $("#order-submit");
        this.orderForm = $("#order-form");

        this.okButton = $("#order-popup .order-popup__button");

        this.setupPopup();
        this.setupValidator();
    }

    setupPopup() {
        let $orderProgress = $("#order-popup .order-popup__progress");
        $orderProgress.show();

        function rotate() {
            $orderProgress.css({transform: "rotate("+ rotate.degree + "deg)"});
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
        $("#order-popup .order-popup__title").text("Отправка заказа");
        $("#order-popup .order-popup__text").html("");
        $("#order-popup .order-popup__button").hide();
    }

    hidePopup() {
        let $orderPopup = $("#order-popup");
        let $orderPopupContent = $("#order-popup .order-popup__content");
        $orderPopup.removeClass("order-popup--shown");
        $orderPopupContent.removeClass("order-popup__content--shown");
    }

    setupValidator() {
        let self = this;

        $("#order-form").validate({
            errorPlacement: function(error, element) {
                error.appendTo(element.parent(".form__input-group"));
            },
            // highlight: function(element, errorClass, validClass) {
            //     // element.parent('input[type="checkbox"').css('display', 'inline-block');
            // },
            rules: {
                fullname: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                },
                address: "required",
                policy: "required"
            },
            messages: {
                fullname: "Пожалуйста введите свое имя",
                phone: "Пожалуйста введите номер телефона",
                email: "Пожалуйста введите адрес электронной почты",
                address: "Пожалуйста введите адрес доставки",
                policy: "Вы должны согласиться с политикой конфиденциальности"
            },
            submitHandler: function(form) {
                self.parseForm();
            }
        });
    }

    parseForm() {
        let self = this;

        this.showPopup();

        $("#form-output").css("font-size", "32px");


        // Creating customer info
        let customer = {
            name: this.orderForm.find("input[name=\"fullname\"]").val(),
            phone: this.orderForm.find("input[name=\"phone\"]").val(),
            email: this.orderForm.find("input[name=\"email\"]").val(),
            address: this.orderForm.find("input[name=\"address\"]").val(),
            bshop: this.orderForm.find("input[name=\"bshop\"]").val(),

            index: this.orderForm.find("input[name=\"index\"]").val(),
            shipment: this.orderForm.find("input[name=\"delivery\"]:checked").val()
        };

        let phoneClean = customer.phone.replace(/[^0-9 +]+/g, "");

        let $fullOrder = $(`
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0; padding:0; background-color: #e0ddd9; padding: 20px; font-family: Arial, sans-serif;">
      <tr>
        <td height="100%">
          <table border="0" cellpadding="0" cellspacing="0" style="margin:0 auto; padding:0;">
            <tr>
              <td id="table-container" style="background-color: #f1f1f1; max-width:600px; margin: 0 auto; padding: 20px; border-radius: 5px;">
                <h1>Заказ продуктов</h1>
                <table border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0; width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Фамилия Имя Отчество</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">${customer.name}</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Номер телефона</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;"><a href="tel:${phoneClean}">${customer.phone}</a></td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Электронная почта</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;"><a href="mailto:${customer.email}">${customer.email}</a></td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Индекс</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">${customer.index}</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Адрес доставки</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">${customer.address}</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Барбершоп</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">${customer.bshop}</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Способ доставки</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">${customer.shipment}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
        `);

        // Creating order table
        let $orderTable = $("<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"margin:0; padding:0; width: 100%; border-collapse: collapse; margin-top: 20px;\"></table>");

        // Adding items: (Item name, Quantity)
        $("#order-form .table-item").each(function(index, row) {
            let $row = $(row);
            let $rowInput = $row.find(".spinner__input");
            // if ($rowInput.val() && $rowInput.val() * 1 > 0) {
            if ($rowInput.val()) {
                $orderTable.append(`
                    <tr>
                        <td style="border: 1px solid #999999; padding: 5px 10px;">${$row.find(".table-item__name").html()}</td>
                        <td style="border: 1px solid #999999; padding: 5px 10px;">${$(row).find(".spinner__input").val()}</td>
                    </tr>
                `);
            }
        });

        $fullOrder.find("#table-container").append($orderTable);



        let dataToSend = {
            "subject": "Products order",
            "content": $fullOrder.html()
        };

        $.ajax({
            type: "POST",
            // url: 'http://localhost/bw/order.php',
            url: "http://barberwild.com/order.php",
            data: dataToSend,
            success: onSuccess,
            error: onError,
            complete: onComplete
        });

        function onComplete() {
            var sum = $(".table-item__summ").text();

            ga("send", {
                hitType: "event",
                eventCategory: "SUBMIT_ORDER_FORM",
                eventAction: "SUBMIT_ORDER_FORM",
                eventLabel: sum
            });
            console.log("gaSend: SUBMIT_ORDER_FORM", sum);

            var goalParams = {
                order_price: sum,
                currency: "RUB"
            };

            yaCounter45729837.reachGoal("SUBMIT_ORDER_FORM", goalParams);
            console.log("yaReachGoal: SUBMIT_ORDER_FORM");
        }

        function onSuccess() {
            $("#order-popup .order-popup__title").text("Спасибо!");
            $("#order-popup .order-popup__text").html("Ваша заявка успешно принята.<br> В скором времени мы с вами свяжемся.");
            // setTimeout(self.hidePopup, 2000);
            $("#order-popup .order-popup__progress").hide();
            $("#order-popup .order-popup__button").show();
            self.orderForm[0].reset();
        }

        function onError() {
            $("#order-popup .order-popup__title").text("Ошибка отправки.");
            $("#order-popup .order-popup__text").html("Проверьте соединение или попробуйте позже.");
            $("#order-popup .order-popup__progress").hide();
            $("#order-popup .order-popup__button").show();
            // setTimeout(self.hidePopup, 2000);
        }
    }
}

export default OrderFormSender;