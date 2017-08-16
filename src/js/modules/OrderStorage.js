import $ from "jquery";

class OrderStorage {
    constructor() {
        // saveSession();
        // this.saveContacts();
    }

    saveSession() {
        if (sessionStorage) {
            var elementIds = $(".table-item__id");
            var saveObj = {};

            $.each(elementIds, function(index, value) {
                var id = $(value).html();
                var count = $(value).parent().find(".table-item__count input").val();
                count = Number(count) || 0;
                saveObj[id] = count;
            });
            
            sessionStorage.setItem("orderSave", JSON.stringify(saveObj));
        } else {
            console.log("NO sessionStorage!");
        }
    }

    loadSession() {
        if (sessionStorage && sessionStorage.getItem("orderSave")) {
            var saveObj = JSON.parse(sessionStorage.getItem("orderSave"));
            var elementIds = $(".table-item__id");

            $.each(elementIds, function(index, value) {
                var id = $(value).html();
                $(value).parent().find(".table-item__count input").val(saveObj[id]);
            });
        }
    }
}

export default OrderStorage;