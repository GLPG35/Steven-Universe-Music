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

    let gridCS = window.getComputedStyle(grid);

    let gridCC = gridCS.getPropertyValue('grid-template-columns').split(' ').length;

    switch (gridCC) {
        case 2:
            $('.game.3').css('transform', 'translateX(50%)');
            break;
    }

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

let musicClick = 0;

var current_player = "a";
var player_a = document.createElement("audio");
var player_b = document.createElement("audio");

player_a.src = "music/Lion's Mane.opus";
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

    setTimeout(loopIt, 64835);
}

$(document).click(function() {
    if (musicClick == 0) {
        loopIt();
        musicClick = 1;
    }
});

$('.game').mouseenter(function() {
    let episodeName = $(this).attr('class');
    let second = episodeName.split(' ');
    let i = '.' + second[1];
    let n = 0;

    $(i + ' .buttons .A a').mouseenter(function() {
        n = 1;
        $(i + ' .buttons .btn-bg').css('clip-path', 'circle(150% at 42% 50%)');
        $(i + ' .buttons .btn-bg').css('background-color', '#3ddc84');
    });
    
    $(i + ' .buttons .I a').mouseenter(function() {
        n = 2;
        $(i + ' .buttons .btn-bg').css('clip-path', 'circle(150% at 58% 50%)');
        $(i + ' .buttons .btn-bg').css('background-color', '#4086cd');
    });

    $(i + ' .buttons .St a').mouseenter(function() {
        n = 3;
        $(i + ' .buttons .btn-bg').css('clip-path', 'circle(150% at 75% 50%)');
        $(i + ' .buttons .btn-bg').css('background-color', '#162a4a');
    });

    $(i + ' .buttons .P a').mouseenter(function() {
        n = 4;
        $(i + ' .buttons .btn-bg').css('clip-path', 'circle(150% at 75% 50%)');
        $(i + ' .buttons .btn-bg').css('background-color', '#086fb2');
    });

    $(i + ' .buttons .X a').mouseenter(function() {
        n = 5;
        $(i + ' .buttons .btn-bg').css('clip-path', 'circle(150% at 75% 50%)');
        $(i + ' .buttons .btn-bg').css('background-color', '#186918');
    });

    $(i + ' .buttons .Sw a').mouseenter(function() {
        n = 6;
        $(i + ' .buttons .btn-bg').css('clip-path', 'circle(150% at 75% 50%)');
        $(i + ' .buttons .btn-bg').css('background-color', '#d11f2d');
    });

    $(i + ' .buttons').mouseleave(function() {
        switch (n) {
            case 1:
                $(i + ' .buttons .btn-bg').css('clip-path', 'circle(0% at 42% 50%)');
                break;
            
            case 2:
                $(i + ' .buttons .btn-bg').css('clip-path', 'circle(0% at 58% 50%)');
                break;
            
            case 3:
                $(i + ' .buttons .btn-bg').css('clip-path', 'circle(0% at 23% 50%)');
                break;

            case 4:
                $(i + ' .buttons .btn-bg').css('clip-path', 'circle(0% at 41% 50%)');
                break;

            case 5:
                $(i + ' .buttons .btn-bg').css('clip-path', 'circle(0% at 58% 50%)');
                break;

            case 6:
                $(i + ' .buttons .btn-bg').css('clip-path', 'circle(0% at 76% 50%)');
                break;
        }
    });
});

$(window).resize(function() {
    let gridCS = window.getComputedStyle(grid);

    let gridCC = gridCS.getPropertyValue('grid-template-columns').split(' ').length;

    switch (gridCC) {
        case 3:
            $('.game.3').removeAttr('style');
            break;
        
        case 2:
            $('.game.3').css('transform', 'translateX(50%)');
            break;
        
        case 1:
            $('.game.3').removeAttr('style');
            break;
    }
});