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
        const calc = this;
        let incInterval;
        let decInterval;

        this.countInputs.on('change', function(event) {
            this.calcTotal($(event.target));
        }.bind(this));

        // this.decButtons.click(function() {
        //     let input = $(this).parent().children('input');
        //     calc.decInput(input);
        // });

        // this.incButtons.click(function() {
        //     let input = $(this).parent().children('input');
        // });

        this.incButtons.on('mousedown', function() {
            let input = $(this).parent().children('input');
            calc.incInput(input);
            incInterval = setInterval(() => {
                calc.incInput(input);
            }, 250);
        });

        this.incButtons.on('mouseup', function() {
            let input = $(this).parent().children('input');
            clearInterval(incInterval);
        });

        this.incButtons.on('mouseout', function() {
            let input = $(this).parent().children('input');
            clearInterval(incInterval);
        });

        this.decButtons.on('mousedown', function() {
            let input = $(this).parent().children('input');
            calc.decInput(input);
            decInterval = setInterval(() => {
                calc.decInput(input);
            }, 250);
        });

        this.decButtons.on('mouseup', function() {
            let input = $(this).parent().children('input');
            clearInterval(decInterval);
        });

        this.decButtons.on('mouseout', function() {
            let input = $(this).parent().children('input');
            clearInterval(decInterval);
        });
    }

    decInput(input) {
        input.val(parseInt(input.val()) > 0 ? parseInt(input.val()) - 1 : 0);
        input.trigger('change');
    }

    incInput(input) {
        input.val(parseInt(input.val()) < 200 ? parseInt(input.val()) + 1 : 200);
        input.trigger('change');
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