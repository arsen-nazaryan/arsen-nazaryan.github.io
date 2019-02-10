var images = [
    {name: 'image1.jpg', text: "Armenia - Yerevan"},
    {name: 'image2.jpg', text: "Russian - Moscow"},
    {name: 'image3.jpg', text: "Georgia - Tbilisi"},
    {name: 'image4.jpg', text: "Iran - Tehran"},
            ],
    currentImageIndex = 0,
    speed = 1500,
    delay = 2500,
    intervalIdentifier = null;

var showText = function (text) {

    $('.slider-text').stop().animate({
        top: -100
    }, speed, function () {
        if (typeof text != 'undefined') {
            $('.slider-text').text(text);
            $('.slider-text').animate({
                top: 0
            }, speed)
        }
    });
};

var drawImage = function () {

    $(".slider-container").stop().fadeOut(speed, function () {
        $(".slider-container").css('background-image', 'url("images/' + images[currentImageIndex].name + '")');
        $('.thumb.active').removeClass("active");
        $('.thumb').eq(currentImageIndex).addClass('active');
        $(".slider-container").fadeIn(speed);
    });
    showText(images[currentImageIndex].text);
};


var next = function() {
    currentImageIndex++;
    if (currentImageIndex == images.length) {
        currentImageIndex = 0;
    }
    drawImage();

};

var prev = function() {
    currentImageIndex--;
    if (currentImageIndex == -1) {
        currentImageIndex = images.length - 1;
    }
    drawImage();

};

var createThumbnails = function() {
    $.each(images, function (index, image) {
        $('#thumbnails').append('<a href="#" class="thumb"><img src="images/' + image.name + '" alt="' + (image.text ? image.text : '') + '"/></a>')
    })
};

var createSlider = function() {
    $("#my-slider").append('<div class="box">' +
        '        <div class="slider-container"></div>' +
        '        <p class="slider-text"></p>' +
        '    </div>' +
        '    <div id="thumbnails"></div>' +
        "    <div class=\"slider-controls\">\n" +
        "        <a href=\"#\" class=\"slider-control prev\"> < </a>" +
        "        <a href=\"#\" class=\"slider-control next\"> > </a>" +
        "        <a href=\"#\" class=\"slider-control play\"> play </a>" +
        "        <a href=\"#\" class=\"slider-control pause\"> pause </a>" +
        "    </div>"
    )
};

var play = function() {
    if (intervalIdentifier) {
       return;
    }
    intervalIdentifier = setInterval(function () {
        next();
    }, delay + 2 * speed);
};

var pause = function() {
    clearInterval(intervalIdentifier);
    intervalIdentifier = null;
};

$(document).ready(function () {

    createSlider();
    drawImage();
    createThumbnails();
    play();

    $("#my-slider").on('click', '.next', function () {
        next();
    });

    $("#my-slider").on('click', '.prev', function () {
        prev();
    });

    $("#my-slider").on('click', '.play', function () {
        play();
    });

    $("#my-slider").on('click', '.pause', function () {
        pause();
    });

    $('#my-slider').on('click', '.thumb', function () {
        currentImageIndex = $(this).index();
        drawImage()
    });

});