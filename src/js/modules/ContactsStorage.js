import $ from "jquery";

class ContactsStorage {
    constructor() {
        this.loadContacts();

        this.inputs = $(".form__input");

        this.events();
    }

    events() {
        var self = this;

        this.inputs.on("change", function() {
            self.saveContacts();
        });
    }

    saveContacts() {
        if (localStorage) {
            console.log($("input.form__input[name='fullname']").val());
            var contacts = {
                name: $("input.form__input[name='fullname']").val(),
                phone: $("input.form__input[name='phone']").val(),
                email: $("input.form__input[name='email']").val(),
                address: $("input.form__input[name='address']").val(),
                bshop: $("input.form__input[name='bshop']").val(),
<<<<<<< HEAD
=======
                index: $("input.form__input[name='index']").val(),
>>>>>>> 2ed1ee31200eabc9e408f9f6be6cf0900f01f94e
                delivery: $("")
            };
            
            localStorage.setItem("orderContacts", JSON.stringify(contacts));
            // console.log(contacts);
        }
    }
    
    loadContacts() {
        if (localStorage && localStorage.getItem("orderContacts")) {
            var contacts = JSON.parse(localStorage.getItem("orderContacts"));
            // console.log(contacts);
            $("input.form__input[name='fullname']").val(contacts.name);
            $("input.form__input[name='phone']").val(contacts.phone);
            $("input.form__input[name='email']").val(contacts.email);
            $("input.form__input[name='address']").val(contacts.address);
            $("input.form__input[name='bshop']").val(contacts.bshop);
<<<<<<< HEAD
=======
            $("input.form__input[name='index']").val(contacts.index);
>>>>>>> 2ed1ee31200eabc9e408f9f6be6cf0900f01f94e
        }
    }
}

export default ContactsStorage;