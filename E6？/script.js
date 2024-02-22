$(document).ready(function () {
    for (let i = 0; i < 100000; i++) {
        $('#blocks-container').append('<div class="block"></div>');
    }
});

// Event: Mouseenter
$(document).on('mouseenter', '.block', function () {
    $(this).toggleClass('highlighted');
});

// Event: Click
$(document).on('click', '.block', function () {
    $(this).fadeOut(500, function () {
        $(this).remove();
    });
});

// Event: Keydown
$(document).on('keydown', function (e) {
    if (e.keyCode === 32) { // Space key
        $('.block').fadeIn();
    }
});
