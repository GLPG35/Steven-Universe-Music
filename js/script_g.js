import { headerAnim, musicCookie, playMusic, setFooter, spinner } from "./envs.js";

spinner();
headerAnim();

$(document).ready(function() {
    gsap.to('.star', 1, {
        x: '5.5%',
        y: '3.2%',
        scaleX: 0,
        scaleY: 0,
    });

    musicCookie("Lion's Mane.opus", 64835);

    let gridCS = window.getComputedStyle(grid);

    let gridCC = gridCS.getPropertyValue('grid-template-columns').split(' ').length;

    switch (gridCC) {
        case 2:
            $('.game.3').css('transform', 'translateX(50%)');
            break;
    }

    setFooter();
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