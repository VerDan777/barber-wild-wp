import $ from "jquery";
import Validator from 'jquery-validation';

$(document).ready(function() {
    // console.log($('#order-form').validate());
    $('#order-form').validate({
        rules: {
            fullname: 'required',
            phone: 'required',
            email: {
                required: true,
                email: true
            },
            address: 'required'
        }
    });
})