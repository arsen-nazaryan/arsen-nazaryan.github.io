$(".more").hover(function () {
    let cursesBox = $(this).parent('.curses_box');
    $(cursesBox).css('box-shadow', "none");
}, function () {
    let cursesBox = $(this).parent('.curses_box');
    $(cursesBox).css('box-shadow', "1px 1px 20px #E1E2E1");
});

var typed = new Typed('.type', {
    strings: ["english", "անգլերեն"],
    typeSpeed: 100,
    backSpeed: 20,
});

new WOW().init();
var wow = new WOW(
    {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        callback: function (box) {
        },
        scrollContainer: null
    }
);
wow.init();

$('.head_menu .nav-link').click(function () {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top
    }, 1500);
});

function hasTouch() {
    return 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {
    }
}