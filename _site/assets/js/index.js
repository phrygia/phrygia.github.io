$(function(){
    $('.post > p > img[alt]').replaceWith(function () {
        return '<a href="' + $(this).attr('src') + '" class="mg-link">'
            + '<img src="' + $(this).attr('src') + '"/></a>';
    });

    $('.mg-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true
    });
})