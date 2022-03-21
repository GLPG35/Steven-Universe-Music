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

$(document).click(function() {
    $('.audio')[0].play();
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
});