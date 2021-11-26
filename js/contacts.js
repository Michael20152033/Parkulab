$(document).ready(function() {

    function showmessage() {
        $('.contacts__title').addClass('center');
    }

    setTimeout(showmessage, 300);

    function s() {
        $('.new__right').addClass('center');
    }

    setTimeout(s, 300);

    function sa() {
        $('.new__left').addClass('center');
    }

    setTimeout(sa, 300);

    function reew() {
        $('.services-inn__right').addClass('center');
    }

    setTimeout(reew, 300);

    function ree() {
        $('.new-inn__blocks').addClass('opacity');
    }

    setTimeout(ree, 900);

    function re() {
        $('.services-inn__block').addClass('opacity');
    }

    setTimeout(re, 900);

    function r() {
        $('.services-inn__icon').addClass('opacity');
    }

    setTimeout(r, 900);

    function rt() {
        $('.services-inn__nav').addClass('opacity');
    }

    setTimeout(rt, 900);

    function t() {
        $('.projectss-inn__top').addClass('center');
    }

    setTimeout(t, 900);

    function ter() {
        $('.new-inn__text').addClass('opacity');
    }

    setTimeout(ter, 900);

    function tere() {
        $('.comand__bg').addClass('center');
    }

    setTimeout(tere, 900);

    function terer() {
        $('.comand__blocks').addClass('opacity');
    }

    setTimeout(terer, 900);

    function terert() {
        $('.contacts__map').addClass('opacity');
    }

    setTimeout(terert, 900);

    function sho() {
        $('.new__tabs').addClass('center');
    }

    setTimeout(sho, 300);

    function showmesage() {
        $('.contacts__line').addClass('width');
    }

    setTimeout(showmesage, 300);

    function showmeage() {
        $('.contacts__block').addClass('opacity');
    }

    setTimeout(showmeage, 500);

    function howmeage() {
        $('.services__block').addClass('normal');
    }

    setTimeout(howmeage, 900);

    function howmeag() {
        $('.services__pagination').addClass('opacity');
    }

    setTimeout(howmeag, 900);

    function howmea() {
        $('.projectss__blocks').addClass('opacity');
    }

    setTimeout(howmea, 900);

    function howm() {
        $('.new__blocks').addClass('opacity');
    }

    setTimeout(howm, 900);

    function ho() {
        $('.new-inn__twit').addClass('center');
    }

    setTimeout(ho, 600);

    function how() {
        $('.comand-inn__slidwrap').addClass('opacity');
    }

    setTimeout(how, 400);

    function howe() {
        $('.comand-inn__list').addClass('opacity');
    }

    setTimeout(howe, 600);

    function howew() {
        $('.comand-inn__points').addClass('center');
    }

    setTimeout(howew, 800);



    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.contacts__blocke').addClass('opacity');
        } else {
            $('.contacts__blocke').removeClass('opacity');
        }
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            function sowmeage() {
                $('.contacts__image_left').addClass('center');
            }

            setTimeout(sowmeage, 300);
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            function sowmeage() {
                $('.contacts__image_right').addClass('center');
            }

            setTimeout(sowmeage, 500);
        }
    });


    $(window).scroll(function() {
        if ($(window).scrollTop() > 1000) {
            function sowmeage() {
                $('.forms').addClass('opacity');
            }

            setTimeout(sowmeage, 700);
        }
    });




    $('.comand-inn__slidwrap').slick({
        dots: false,
        arrows: true,
        fade: true,
        prevArrow: '.comand-inn__prev',
        nextArrow: '.comand-inn__next',

    });









})