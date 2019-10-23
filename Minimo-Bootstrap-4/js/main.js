$readMoreJS.init({
    target: '.collapsed p',
    numOfWords: 60,
    toggle: true,
    moreLink: 'read more ...',
    lessLink: 'read less'
});

$(".load-more").on("click", function () {
    const btn_link = $(this);
    const loader = btn_link.find("span");
    $.ajax({
        url: 'data.html',
        type: 'GET',
        beforeSend: function () {
            btn_link.attr('disabled', true);
            loader.addClass('d-inline-block');
        },
        success: function (responce) {
            setTimeout(function () {
                loader.removeClass('d-inline-block');
                btn_link.attr('disabled', false);
                $('.after-posts').before(responce);
            }, 2000);
        },
        error: function () {
            alert("error, Server Not Found");
            loader.removeClass('d-inline-block');
            btn_link.attr('disabled', false);
        }
    });
});