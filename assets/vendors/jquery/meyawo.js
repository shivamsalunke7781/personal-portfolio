
    $(document).ready(function () {
        $('#nav-toggle').click(function () {
            $(this).toggleClass('is-active');
            $('.nav').toggleClass('show');
        });

        $('a[href*="#"]').on('click', function (e) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        });
    });
    