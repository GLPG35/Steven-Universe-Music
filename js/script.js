import { headerAnim, musicCookie, particles, playMusic, setFooter, spinner } from "./envs.js";

spinner();
headerAnim();
particles("particles");

$(document).ready(function() {
    gsap.to('.star', 1, {
        x: '5.5%',
        y: '3.2%',
        scaleX: 0,
        scaleY: 0,
    });

    musicCookie("I'm Still Here.opus", 70280);

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

    setFooter();
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