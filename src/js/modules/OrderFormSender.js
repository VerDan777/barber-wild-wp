import $ from 'jquery';
import Validator from 'jquery-validation';

class OrderFormSender {
    constructor() {
        this.submitButton = $('#order-submit');
        this.orderForm = $('#order-form');

        this.validateForm();
    }

    validateForm() {
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
        let $orderTable = $('<table></table>');

        $('#form-output').css('font-size', '32px');

        // Creating customer info
        let customer = {
            name: this.orderForm.find('input[name="fullname"]').val(),
            phone: this.orderForm.find('input[name="phone"]').val(),
            email: this.orderForm.find('input[name="email"]').val(),
            address: this.orderForm.find('input[name="address"]').val()
        }

        console.log(customer);

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


        // $('#form-output').html($orderTable);
        // $('#form-output').html($fullOrder);

        let dataToSend = {
            'subject': "Now from JS",
            'content': $fullOrder.html()
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost/bw/order.php',
            data: dataToSend,
            success: onSuccsess
        });

        function onSuccsess() {
            alert('hey! form sent');
        }
    }
}

export default OrderFormSender;