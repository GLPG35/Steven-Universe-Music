particlesJS (
    "particles",

    {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: "#f0f0f0"
            },
            shape: {
                type: "star"
            },
            size: {
                value: 7,
                random: true
            },
            move: {
                enable: true,
                speed: 1,
                direction: "bottom-left"
            },
            line_linked: {
                enable: false
            }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: false
                }
            }
        }
    }
);

let isActive = 0;
let cooldown = 0;

$(document).ready(function() {
    $('.spinner').css('opacity', 0);
    setTimeout(function() {
        $('.spinner').remove();
    }, 1000);

    gsap.to('.star', 1, {
        x: '5.5%',
        y: '3.2%',
        scaleX: 0,
        scaleY: 0,
    });
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

$('.al').mouseenter(function() {
    let albumName = this.className;
    let first = albumName.split(' ');
    let i = '.' + first[0];
    let n = 0;

    $(i + ' .buttons .btn1 a').mouseenter(function() {
        n = 1;
        $(':root').css('--color', '#3a8b8b');
        $(':root').css('--album_1', '150% at 25% 50%');
    });
    
    $(i + ' .buttons .btn2 a').mouseenter(function() {
        n = 2;
        $(':root').css('--color', '#823a8b');
        $(':root').css('--album_1', '150% at 75% 50%');
    });

    $(i + ' .buttons').mouseleave(function() {
        switch (n) {
            case 1:
                $(':root').css('--album_1', '0% at 25% 50%');
                break;
            
            case 2:
                $(':root').css('--album_1', '0% at 75% 50%');
                break;
        }
    });
});

$(document).scroll(function() {
    let scroll = $(document).scrollTop();

    if (scroll > 150) {
        $('.floatingchat-container-wrap-mobi').addClass('rmSpan');
        $('.floatingchat-container-wrap').removeClass('show').addClass('hide');
        $('.floatingchat-container-wrap-mobi').removeClass('show').addClass('hide');
    } else {
        $('.floatingchat-container-wrap').removeClass('hide').addClass('show');
        $('.floatingchat-container-wrap-mobi').removeClass('hide').addClass('show');
    }
});

let audio_track = new Audio("music/I'm Still Here.opus");

$(document).click(function() {
    audio_track.play();
});

$(audio_track).on('timeupdate', function() {
    let buffer = .1;
    
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0;
        audio_track.play();
    }
});

$(window).resize(function() {
    let gridCS = window.getComputedStyle(grid);

    let gridCC = gridCS.getPropertyValue('grid-template-columns').split(' ').length;

    switch (gridCC) {
        case 5:
            $('.album10, .album9').removeAttr('style');
            $('.album11').css({
                'grid-column': '3 / 4'
            });
            break;

        case 4:
            $('.album10, .album9').removeAttr('style');
            $('.album11, .album10, .album9').css({
                'transform': 'translateX(50%)'
            });
            break;
        
        case 3:
            $('.album10, .album9').removeAttr('style');
            $('.album11, .album10').css({
                'transform': 'translateX(50%)'
            });
            break;

        case 2:
            $('.album10, .album9').removeAttr('style');
            $('.album11').css({
                'transform': 'translateX(50%)'
            });
            break;
        
        case 1:
            $('.album11, .album9, .album10').removeAttr('style');
            break;
    }
});

$(document).ready(function() {
    $('.floatingchat-container-mobi').contents().find('span').remove();

    let gridCS = window.getComputedStyle(grid);

    let gridCC = gridCS.getPropertyValue('grid-template-columns').split(' ').length;

    switch (gridCC) {
        case 5:
            $('.album11').css({
                'grid-column': '3 / 4'
            });
            break;

        case 4:
            $('.album11, .album10, .album9').css({
                'transform': 'translateX(50%)'
            });
            break;
        
        case 3:
            $('.album11, .album10').css({
                'transform': 'translateX(50%)'
            });
            break;

        case 2:
            $('.album11').css({
                'transform': 'translateX(50%)'
            });
            break;
    }

    $('.footer').prepend(`<span>&copy; ${(new Date).getFullYear()} Gian Luca Porto</span>`)
});

let url = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';

$.getScript(url, function() {
    $('.floatingchat-container-wrap').attr('style', 'z-index: 19 !important');
});