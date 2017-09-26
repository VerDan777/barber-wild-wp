var minOrderValue = 4000;

if($(".table-item__summ")<minOrderValue) {
    $(".table-item__summ").addClass("table-item__summ--warn");
    $("#order-submit").addClass("#order-submit");
    $("#order-submit").attr("disabled", true);
    $(".form__warning").addClass("form__warning--warn");
}else {
    $(".table-item__summ").removeClass("table-item__summ--warn");
    $("#order-submit").removeClass("disabled",true);
    $("#order-submit").attr("disabled",false);
    $(".form__warning").removeClass("form__warning--warn");
    alert('warn');
}