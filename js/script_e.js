import { particles, headerAnim, playMusic, setFooter, spinner, musicCookie } from "./envs.js";

spinner();
particles("particles");
headerAnim();

$(document).ready(function() {
    gsap.to('.star', 1, {
        x: '5.5%',
        y: '3.2%',
        scaleX: 0,
        scaleY: 0,
    });

    musicCookie("Night Drive.opus", 10679);
    setFooter();
});

$('body').on('mouseenter', '.episode', function() {
    let episodeName = $(this).attr('class');
    let second = episodeName.split(' ');
    let i = '.' + second[1];
    let n = 0;

    $(i + ' .buttons .btn1 a').mouseenter(function() {
        n = 1;
        $(i + ' .buttons .btn-bg').css('clip-path', 'circle(150% at 25% 50%)');
        $(i + ' .buttons .btn-bg').css('background-color', '#7d3a8b');
    });
    
    $(i + ' .buttons .btn2 a').mouseenter(function() {
        n = 2;
        $(i + ' .buttons .btn-bg').css('clip-path', 'circle(150% at 75% 50%)');
        $(i + ' .buttons .btn-bg').css('background-color', '#3a8b41');
    });

    $(i + ' .buttons').mouseleave(function() {
        switch (n) {
            case 1:
                $(i + ' .buttons .btn-bg').css('clip-path', 'circle(0% at 25% 50%)');
                break;
            
            case 2:
                $(i + ' .buttons .btn-bg').css('clip-path', 'circle(0% at 75% 50%)');
                break;
        }
    });
});

$('.movie').mouseenter(function() {
    let n = 0;

    $('.movie .buttons .btn1 a').mouseenter(function() {
        n = 1;
        $('.movie .buttons .btn-bg').css('clip-path', 'circle(150% at 35% 25%)');
        $('.movie .buttons .btn-bg').css('background-color', '#7d3a8b');
    });

    $('.movie .buttons .btn2 a').mouseenter(function() {
        n = 2;
        $('.movie .buttons .btn-bg').css('clip-path', 'circle(150% at 35% 75%)');
        $('.movie .buttons .btn-bg').css('background-color', '#3a8b41');
    });

    $('.movie .buttons').mouseleave(function() {
        switch (n) {
            case 1:
                $('.movie .buttons .btn-bg').css('clip-path', 'circle(0% at 35% 25%)');
                break;

            case 2:
                $('.movie .buttons .btn-bg').css('clip-path', 'circle(0% at 35% 75%)');
                break;
        }
    });
});

let season1 = [];
let season2 = [];
let season3 = [];
let season4 = [];
let season5 = [];
let movie = [];
let season6 = [];
let seasonHeights = {};

let episodeContainer;

function rwEpisodes(season, number, grid) {
    $.get(`./js/${number}.txt`, function(data) {
        let lines = data.split('\n');
        let countE = 1;
    
        lines.forEach(function(n) {
            let index = n.indexOf(', ')
            let split = [n.slice(0, index), n.slice(index + 1)];
    
            let element = {};
            
            element.title = split[0];
            element.span = split[1];
    
            season.push(element);
        });
    
        season.forEach(function(n) {
            if (countE < 10) {
                countE = '0' + countE;
            }

            if (number == 'S03' && countE == 21) {
                countE++;
            } else if (number == 'S04' && countE == 9) {
                countE++;
            } else if (number == 'S05' && countE == 24) {
                countE++;
            }
    
            episodeContainer = `<div class="episode ${number + 'E' + countE}">
                <div class="thumbnail">
                    <img src="thumbnails/${number}${['E' + countE]}.webp">
                </div>
                <div class="name">
                    <h3>${n.title}</h3>
                    <span>${n.span}</span>
                </div>
                <div class="buttons">
                    <div class="btn-bg"></div>
                    <div class="btn1">
                        <a href="https://www.strem.io/s/series/steven-universe-3061046"><i class="fas fa-play"></i> Stremio</a>
                    </div>
                    <div class="btn2">
                        <a href="magnet:?xt=urn:btih:3a02dd3ec52c1fd3460713185a9e02be0c4d8a9a"><i class="fas fa-magnet"></i> Torrent</a>
                    </div>
                </div>
            </div>`;
    
            $(grid).append(episodeContainer);
    
            countE++;
        });
    }, 'text').done(function() {
        for (let h = 1; h < 7; h++) {
            seasonHeights['season' + h] = $(`.ls${h}`)[0].scrollHeight;
        }
    });
}

for (let j = 1; j < 7; j++) {
    let evalvar = eval(`season${j}`)
    rwEpisodes(evalvar, `S0${j}`, `.episodes${j}-grid`);
}

$('summary').on('click', function() {
    let class1 = $(this).parent().attr('class').split(' ');
    let class2 = class1[1];

    console.log(class2);
    if ($(`.${class2}`).hasClass('open')) {
        switch (class2) {
            case 'ls1':
                $('.ls1').removeAttr('style').removeClass('open');
                break;

            case 'ls2':
                $('.ls2').removeAttr('style').removeClass('open');
                break;
                
            case 'ls3':
                $('.ls3').removeAttr('style').removeClass('open');
                break;

            case 'ls4':
                $('.ls4').removeAttr('style').removeClass('open');
                break;

            case 'ls5':
                $('.ls5').removeAttr('style').removeClass('open');
                break;

            case 'ls6':
                $('.ls6').removeAttr('style').removeClass('open');
                break;
        }
    } else {
        switch (class2) {
            case 'ls1':
                $('.ls1').addClass('open');
                $('.ls1').css('height', seasonHeights.season1);
                break;

            case 'ls2':
                $('.ls2').addClass('open');
                $('.ls2').css('height', seasonHeights.season2);
                break;
                
            case 'ls3':
                $('.ls3').addClass('open');
                $('.ls3').css('height', seasonHeights.season3);
                break;

            case 'ls4':
                $('.ls4').addClass('open');
                $('.ls4').css('height', seasonHeights.season4);
                break;

            case 'ls5':
                $('.ls5').addClass('open');
                $('.ls5').css('height', seasonHeights.season5);
                break;

            case 'ls6':
                $('.ls6').addClass('open');
                $('.ls6').css('height', seasonHeights.season6);
                break;
        }
    }
});