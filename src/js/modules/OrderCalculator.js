import $ from 'jquery';

class OrderCalculator {
    constructor() {
        this.countInputs = $('.table-item__count input');
        this.costLabels = $('.table-item__cost');
        this.summLabel = $('.table-item__summ');
        this.events();
    }

    events() {
        this.countInputs.on('change', function(event) {
            this.calcTotal($(event.target));
        }.bind(this));
    }

    calcTotal(input) {
        let price = parseInt(input.parent().parent().children('.table-item__price').html());
        let count = parseInt( input.val() );
        let cost = input.parent().parent().children('.table-item__cost');
        cost.html(price * count);

        let summ = 0;
        $.each(this.costLabels, function(i, val){
            summ += parseInt($(val).html());
        })
        this.summLabel.html(summ);
    }
}

export default OrderCalculator;