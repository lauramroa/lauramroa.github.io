$(document).ready(function () {
    $('div.hidden').fadeIn(1000).removeClass('hidden');
});

// ======== Image Slider ========= //

var speed = 300;

$(".prev").click(function () {
    var now = $(this).parent().next("ul.gallery").children(":visible"),
        last = $(this).parent().next("ul.gallery").children(":last"),
        prev = now.prev();
    prev = prev.index() == -1 ? last : prev;
    now.fadeOut(speed, function () {
        prev.fadeIn(speed);
    });
});

$(".next").click(function () {
    var now = $(this).parent().next("ul.gallery").children(':visible'),
        first = $(this).parent().next("ul.gallery").children(':first'),
        next = now.next();
    next = next.index() == -1 ? first : next;
    now.fadeOut(speed, function () {
        next.fadeIn(speed);
    });
});


