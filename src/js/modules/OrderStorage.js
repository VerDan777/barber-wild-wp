import $ from "jquery";

class OrderStorage {
    constructor() {
        // saveSession();
        // saveContacts();
    }

    saveSession() {
        if (sessionStorage) {
            var elementIds = $(".table-item__id");
            var saveObj = {};
            // console.log(elementIds);

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

    // saveContacts() {
    //     if (localStorage) {
    //         var contacts = {
    //             name: $(""),
    //             phone: $(""),
    //             email: $(""),
    //             address: $(""),
    //             delivery: $("")
    //         };

    //         localStorage.setItem("orderContacts", JSON.stringify(contacts));
    //         console.log($(".form__input"));
    //     }
    // }

    // loadContacts() {
    //     if (localStorage && localStorage.getItem("orderContacts")) {
    //         var contacts = JSON.parse(localStorage.getItem("orderContacts"));
    //     }
    // }
}

export default OrderStorage;