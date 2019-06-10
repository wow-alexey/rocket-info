"use strict";

$('.remove-priority').on('click', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});