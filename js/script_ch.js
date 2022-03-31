$(window).on('load', function() {
    $('.spinner').fadeOut(1000);
    setTimeout(function() {
        $('.spinner').remove();
    }, 1000);
});

let isActive = 0;
let cooldown = 0;

$(document).ready(function() {
    gsap.to('.star', 1, {
        x: '5.5%',
        y: '3.2%',
        scaleX: 0,
        scaleY: 0,
    });

    $('.footer').prepend(`<span>&copy; ${(new Date).getFullYear()} Gian Luca Porto</span>`);
});

$('.fa-bars').mouseenter(function() {
    if (cooldown == 0) {
        gsap.to('.star', 0.5, {
            transformOrigin: '50% 50%',
            rotation: 45,
            scale: 0.12,
            ease: Power2.easeOut
        });
    }
    //$('.star').css('transform', 'scale(0.12) translate(-87%, -185%)');
}).mouseleave(function() {
    if (isActive == 0) {
        gsap.to('.star', 0.5, {
            transformOrigin: '50% 50%',
            rotation: 0,
            scale: 0,
            ease: Power2.easeOut
        });
    }
});

$('.fa-bars').click(function() {
    isActive = 1;
    $(window).scrollTop(0);
    $('body').css('overflow', 'hidden');
    $('.fa-bars').css('pointer-events', 'none');
    $('.fa-times').css('pointer-events', 'all');
    gsap.to('.star', 1, {
        transformOrigin: '50% 50%',
        rotation: 90,
        scale: 10,
        ease: Power2.easeOut
    });
    $('.fa-bars').addClass('active');
    $('.fa-times').addClass('active');
});

$('.fa-times').click(function() {
    isActive = 0;
    cooldown = 1;
    $('body').removeAttr('style');
    $('.fa-times').css('pointer-events', 'none');
    $('.fa-bars').css('pointer-events', 'all');
    gsap.to('.star', 1, {
        transformOrigin: '50% 50%',
        rotation: 0,
        scale: 0,
        ease: Power2.easeOut
    });
    $('.fa-bars').removeClass('active');
    $('.fa-times').removeClass('active');
    setTimeout(function() {
        cooldown = 0;
    }, 1500);
});

let characterList = [];

$.get('./js/characters.txt', function(data) {
    let lines = data.split('\n');

    lines.forEach(function(n) {
        let split = n.split('; ');
        let element = {};

        element.character = split[0];
        element.description = split[1];
        element.icon = split[2];
        element.bg = split[3];

        characterList.push(element);        
    });

    characterList.forEach(function(n) {
        let classN = n.character.toLowerCase();
        
        let charDiv = `<div class="char-container ${classN}">
            <div class="bg ${classN}">
                <img src="${n.bg}" />
            </div>
            <div class="gradient"></div>
            <div class="icon">
                <img src="${n.icon}" />
            </div>
            <div class="tdWrapper">
                <div class="title">
                    <h3>${n.character}</h3>
                </div>
                <div class="desc">
                    <span>${n.description}</span>
                </div>
            </div>
        </div>`;

        $('.char-scroll').append(charDiv);
    });
}, 'text');

let scrollObject = {
    steven: 'translateX(0)',
    garnet: 'translateX(-100%)',
    amethyst: 'translateX(-200%)',
    pearl: 'translateX(-300%)',
    lapislazuli: 'translateX(-400%)',
    peridot: 'translateX(-500%)',
    jasper: 'translateX(-600%)'
}

$('.btn-scroll a').click(function() {
    let element = $(this).attr('id');

    $('.btn-scroll a').removeClass('active');
    $(`#${element}`).addClass('active');

    Object.keys(scrollObject).forEach(key => {
        if (element == key) {
            $('.char-container').css('transform', scrollObject[key]);
        }
    });
});