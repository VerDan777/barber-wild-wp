import $ from 'jquery';

class OrderCalculator {
    constructor() {
        // table elements
        this.countInputs = $('.table-item__count input');
        this.costLabels = $('.table-item__cost');
        this.summLabel = $('.table-item__summ');

        // spinner elemtents
        this.decButtons = $('.spinner__minus')
        this.incButtons = $('.spinner__plus');
        this.events();
    }

    events() {
        this.countInputs.on('change', function(event) {
            this.calcTotal($(event.target));
        }.bind(this));

        this.decButtons.click(function() {
            let input = $(this).parent().children('input');
            input.val(parseInt(input.val()) - 1);
            input.trigger('change');
        });

        this.incButtons.click(function() {
            let input = $(this).parent().children('input');
            input.val(parseInt(input.val()) + 1);
            input.trigger('change');
        })
    }

    calcTotal(input) {
        let price = parseInt(input.parent().parent().parent().children('.table-item__price').html());
        let count = parseInt( input.val() );
        let cost = input.parent().parent().parent().children('.table-item__cost');
        cost.html(price * count);

        let summ = 0;
        $.each(this.costLabels, function(i, val){
            summ += parseInt($(val).html());
        })
        this.summLabel.html(summ);
    }
}

export default OrderCalculator;