$(function() {
    $('#js-btnHamburger').on('click', function(event) {
        event.preventDefault()
        $e = $(event.currentTarget)

        if ($e.hasClass('close')) {
            $('.gnav').slideUp()
            $e.removeClass('close')
            $('.gnav').addClass('collapse')
        } else {
            $('.gnav').slideDown()
            $e.addClass('close')
            $('gnav').removeClass('collapse')
        }
    });
});