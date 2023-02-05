$(document).ready(function () {
    $('#small a').click(function (e) {
        if ($('#big img').attr('src') != $(this).attr('href')) {
            $('#big img').hide().attr('src', $(this).attr('href'));
            $('#big img').load(function () {
                $(this).fadeIn(2000);
            });
        }
        e.preventDefault();
    });
    $('#gallery').hide();
    $('#SH').toggle(function () {
        $('#gallery').slideDown(3000);
        $(this).text('hide gallery');
    }, function () {
        $('#gallery').slideUp(3000);
        $(this).text('open gallery');
    });
    $('#small a img').click(function () {
        $('#small a img').fadeTo(0, 1).css('border', 'none')
        $(this).fadeTo(0, 0.6).css('border', '1px solid red')
    });
});
