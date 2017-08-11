import $ from 'jquery';

class OrderStorage {
    constructor() {
        // saveSession();
    }

    saveSession() {
        if (sessionStorage) {
            var elementIds = $('.table-item__number');
            var saveObj = {}
            console.log(elementIds);

            $.each(elementIds, function(index, value) {
                var id = $(value).html();
                var count = $(value).parent().find('.table-item__count input').val();
                saveObj[id] = count;
            });
            
            sessionStorage.setItem('orderSave', JSON.stringify(saveObj));

            console.log(saveObj);
        } else {
            console.log('no LS');
        }
    }

    loadSession() {
        if (sessionStorage && sessionStorage.getItem('orderSave')) {
            var saveObj = JSON.parse(sessionStorage.getItem('orderSave'));
            var elementIds = $('.table-item__number');

            $.each(elementIds, function(index, value) {
                var id = $(value).html();
                $(value).parent().find('.table-item__count input').val(saveObj[id]);
            });

            console.log(saveObj);
        }
    }

    clearSession() {

    }
}

export default OrderStorage;