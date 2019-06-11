"use strict";

$('.remove-priority').on('click', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});

$(".burger").on('click', function (e) {
    $("header").toggleClass("active");
});