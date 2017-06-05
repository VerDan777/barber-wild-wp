import $ from 'jquery';

class OrderFormSender {
    constructor() {
        this.submitButton = $('#order-submit');
        this.orderForm = $('#order-form');

        this.events();
    }

    events() {
        let self = this;
        this.submitButton.on('click', function(event) {
            self.parseForm();
            event.preventDefault();
            event.stopPropagation();
            return false;
        });

        this.orderForm.on('submint', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    }

    parseForm() {
        let $orderTable = $('<table></table>');
        $orderTable.css('font-size', '32px');
        $('#order-form .table-item').each(function(index, row) {
            let $row = $(row);
            let $rowInput = $row.find('.spinner__input')
            if ($rowInput.val() && $rowInput.val() * 1 > 0) {
                $orderTable.append('<tr><td>' 
                                        + $row.find('.table-item__name').html()
                                        + '</td><td>' + $(row).find('.spinner__input').val() 
                                    + '</td></tr>');
            }
        });
        // $('#form-output').html($orderTable);
        $.ajax({
            type: 'POST',
            url: 'http://localhost/bw/order.php',
            data: $orderTable,
            success: onSuccsess
        });

        function onSuccsess() {
            alert('hey! form sent');
        }
    }
}

export default OrderFormSender;