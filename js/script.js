$(document).ready(function() {
    $(".icon").click(function() {
        $('.icon').toggleClass("active");
        $('.header__wrap').toggleClass('jo');
        $('.menu__list').toggleClass('actived');

    });

    // $('div').on('click', (e) => {

    //     setTimeout(() => {

    //         $('.slick-current').addClass('slick-active');

    //     }, 500);

    // });


    $(".menu__list").click(function() {

        $('.menu__list').removeClass('actived');
        $('.icon').removeClass("active");
        $('.header__wrap').removeClass('jo');
    });



    function howewg() {
        $('.slider__title').addClass('center');
    }

    setTimeout(howewg, 500);

    function howewge() {
        $('.slider__description').addClass('center');
    }

    setTimeout(howewge, 500);

    function howew() {
        $('.slider__texts').addClass('center');
    }

    setTimeout(howew, 500);

    function howe() {
        $('.slider__round, .slider__set, .slider__trans').addClass('opacity');
    }

    setTimeout(howe, 500);

    function how() {
        $('.slider__line').addClass('wd');
    }

    setTimeout(how, 100);














    var h = document.querySelector('.slick-active > .content-two__title_1');
    console.log(h);

    function ho() {
        $('.slick-active .content-two__title_1').addClass('center');
    }

    setTimeout(ho, 100);







    var itemsLength = $('.slider__slide').length - 1;
    const slider = $(".slider__wrap");
    slider
        .slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            infinite: false,
            slidesToScroll: 1,
            cssEase: 'linear',

            vertical: true,
            verticalSwiping: true,
            swipe: true,
            touchMove: false,
            draggable: true,
            touchThereshold: 20,
            asNavFor: '.slider-nav',

        });
    var itemsLength = $('.slider__slide').length - 1;
    slider.on('afterChange', function(event, slide, index, slick, currentSlide, nextSlide) {
        console.log(index);

        if (index <= 0) {
            $('.header__bg').removeClass('full');
        } else {
            $('.header__bg').addClass('full');
        }

    });
    slider.on('wheel', (function(e) {
        e.preventDefault();
        if (e.originalEvent.deltaY < 50) {
            $(this).slick('slickPrev');


        } else {
            $(this).slick('slickNext');

        }

    }));

    const slide = $(".slider-nav");
    slide
        .slick({
            slidesToShow: 4,
            // vertical: true,
            asNavFor: '.slider__wrap',
            infinite: false,
            dots: false,
            centerMode: false,
            focusOnSelect: true,
        });










    var itemsLength = $('.slider__slide').length - 1;
    slider.on('afterChange', function(event, slide, index, slick, currentSlide, nextSlide) {
        console.log(index);

        if (index = 1) {
            function ho() {
                $('.slick-active .content-two__title_1,.slick-active .content-two__title_2, .slick-active .content-two__title_3, .slick-active .content-two__title_4').addClass('center');
            }

            setTimeout(ho, 100);
        } else {

        }

    });
    slider.on('afterChange', function(event, slide, index, slick, currentSlide, nextSlide) {
        console.log(index);

        if (index == 3) {
            function h() {
                $('.slick-active .content-four__title').addClass('center');
            }

            $('.slider__scroll').addClass('block');

            setTimeout(h, 100);


        } else {
            $('.slider__scroll').removeClass('block');

        }

    });


    var elem = $('.content-four__input');

    var ele = $('.content-four__input_two');
    var el = $('.content-four__input_three');
    var e = $('.content-four__input_four');


    if (document.documentElement.clientWidth < 767) {
        elem.attr('placeholder', 'Имя');
        ele.attr('placeholder', 'Email');
        el.attr('placeholder', 'Телефон');
        e.attr('placeholder', 'Ваш вопрос');
    } else {
        elem.removeAttr('placeholder', 'Имя');
        ele.removeAttr('placeholder', 'Email');
        el.removeAttr('placeholder', 'Телефон');
        e.removeAttr('placeholder', 'Ваш вопрос');
    };









    if (document.documentElement.clientWidth < 768) {
        // function sds() {

        $(".slider__slide").css("min-height", $(window).height())

        // };
        // setTimeout(sds, 500);
    } else {
        $(".slider__slide").css("min-height", '')
    }



});
screen.orientation.lock('landscape');