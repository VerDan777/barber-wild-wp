import $ from "jquery";
import OrderStorage from "./OrderStorage.js";

class OrderCalculator {
    constructor() {
<<<<<<< HEAD
=======
        // general
        this.minOrderValue = 4000;

>>>>>>> 2ed1ee31200eabc9e408f9f6be6cf0900f01f94e
        // table elements
        this.countInputs = $(".table-item__count input");
        this.costLabels = $(".table-item__cost");
        this.summLabel = $(".table-item__summ");

<<<<<<< HEAD
=======
        // other elements
        this.orderButton = $("#order-submit");
        this.priceWarning = $(".form__warning");

>>>>>>> 2ed1ee31200eabc9e408f9f6be6cf0900f01f94e
        // spinner elements
        this.decButtons = $(".spinner__minus");
        this.incButtons = $(".spinner__plus");
        this.clearButtons = $(".spinner__clear");
        this.clearAllButton = $("#reset-form");

        this.events();

        // storage
        this.storage = new OrderStorage();
        this.storage.loadSession();

        this.calcTotal();
    }

    events() {
        const calc = this;
        let incInterval;
        let decInterval;

        this.countInputs.on("change", function(event) {
            this.calcTotal($(event.target));
            this.storage.saveSession();
        }.bind(this));

        this.incButtons.on("mousedown", function() {
            let input = $(this).parent().children("input");
            calc.incInput(input);
            incInterval = setInterval(() => {
                calc.incInput(input);
            }, 250);
        });

        this.incButtons.on("mouseup", function() {
            // let input = $(this).parent().children("input");
            clearInterval(incInterval);
        });

        this.incButtons.on("mouseout", function() {
            // let input = $(this).parent().children("input");
            clearInterval(incInterval);
        });

        this.decButtons.on("mousedown", function() {
            let input = $(this).parent().children("input");
            calc.decInput(input);
            decInterval = setInterval(() => {
                calc.decInput(input);
            }, 250);
        });

        this.decButtons.on("mouseup", function() {
            // let input = $(this).parent().children("input");
            clearInterval(decInterval);
        });

        this.decButtons.on("mouseout", function() {
            // let input = $(this).parent().children("input");
            clearInterval(decInterval);
        });

        this.clearButtons.on("click", function() {
            let input = $(this).parent().children("input");
            calc.clearInput(input);
        });

        this.clearAllButton.on("click", function(event) {
            // alert("adsf");
            event.preventDefault();
            // alert(calc.countInputs);
            $.each(calc.countInputs, function(index, value) {
                calc.clearInput($(value));
                // alert(value);
            });
        });
    }

    decInput(input) {
        input.val(parseInt(input.val()) > 0 ? parseInt(input.val()) - 1 : 0);
        input.trigger("change");
        this.storage.saveSession();
    }

    incInput(input) {
        input.val(parseInt(input.val()) < 200 ? parseInt(input.val()) + 1 : 200);
        input.trigger("change");
        this.storage.saveSession();
    }

    clearInput(input) {
        input.val(0);
        input.trigger("change");
        this.storage.saveSession();
    }

    calcTotal(input) {
        if (input) {
            this.calcInput(input);
        } else {
<<<<<<< HEAD
            // console.log($('.table-item__count input'));
            var self = this;
            $.each($(".table-item__count input"), function(index, value) {
                // console.log(value);
=======
            var self = this;
            $.each($(".table-item__count input"), function(index, value) {
>>>>>>> 2ed1ee31200eabc9e408f9f6be6cf0900f01f94e
                self.calcInput($(value));
            });
        }
    }

    calcInput(input) {
        let price = parseInt(input.parent().parent().parent().children(".table-item__price").html());
        let count = parseInt( input.val() );
        let cost = input.parent().parent().parent().children(".table-item__cost");
        cost.html(price * count);

        let summ = 0;
        $.each(this.costLabels, function(i, val){
            summ += parseInt($(val).html());
        });
        this.summLabel.html(summ);
<<<<<<< HEAD
=======

        if (summ < this.minOrderValue) {
            this.summLabel.addClass("table-item__summ--warn");
            this.orderButton.addClass("button--disabled");
            this.orderButton.attr("disabled", true);
            this.priceWarning.addClass("form__warning--warn");
        } else {
            this.summLabel.removeClass("table-item__summ--warn");
            this.orderButton.removeClass("button--disabled");
            this.orderButton.attr("disabled", false);
            this.priceWarning.removeClass("form__warning--warn");
        }
>>>>>>> 2ed1ee31200eabc9e408f9f6be6cf0900f01f94e
    }
}

export default OrderCalculator;