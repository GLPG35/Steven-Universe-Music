$(window).on('load', function() {
    $('.spinner').css('opacity', 0);
    setTimeout(function() {
        $('.spinner').remove();
    }, 1000);
});

function aboutAnim() {
    setTimeout(function() {
        $('#igfd_5').css({
            'opacity': 0,
            'visibility': 'hidden'
        });
        $('#igfrl_11').css({
            'opacity': 1,
            'visibility': 'visible'
        });
        
        setTimeout(function() {
            $('#igfrl_11').css({
                'opacity': 0,
                'visibility': 'hidden'
            });
            $('#ds_7').css({
                'opacity': 1,
                'visibility': 'visible'
            });

            setTimeout(function() {
                $('#ds_7').css({
                    'opacity': 0,
                    'visibility': 'hidden'
                });
                $('#gmc_9').css({
                    'opacity': 1,
                    'visibility': 'visible'
                });

                setTimeout(function() {
                    $('#gmc_9').css({
                        'opacity': 0,
                        'visibility': 'hidden'
                    });
                    $('#githubp_13').css({
                        'opacity': 1,
                        'visibility': 'visible'
                    });

                    setTimeout(function() {
                        $('#githubp_13').css({
                            'opacity': 0,
                            'visibility': 'hidden'
                        });
                        $('#igfd_5').css({
                            'opacity': 1,
                            'visibility': 'visible'
                        });
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 5000);
    }, 5000);
}

let isActive = 0;
let cooldown = 0;

let musicClick = 0;

var current_player = "a";
var player_a = document.createElement("audio");
var player_b = document.createElement("audio");

player_a.src = "music/The Answer.opus";
player_b.src = player_a.src;

function loopIt(){
    var player = null;

    if(current_player == "a"){
        player = player_b;
        current_player = "b";
    }
    else{
        player = player_a;
        current_player = "a";
    }

    player.play();

    setTimeout(loopIt, 60778);
}

$(document).click(function() {
    if (musicClick == 0) {
        loopIt();
        musicClick = 1;
    }
});

$(document).ready(function() {
    gsap.to('.star', 1, {
        x: '5.5%',
        y: '3.2%',
        scaleX: 0,
        scaleY: 0,
    });

    $('.footer').prepend(`<span>&copy; ${(new Date).getFullYear()} Gian Luca Porto</span>`);

    aboutAnim();

    window.setInterval(aboutAnim, 25000);
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