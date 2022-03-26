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
                speed: 1.2,
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
let musicClick = 0;

var current_player = "a";
var player_a = document.createElement("audio");
var player_b = document.createElement("audio");

player_a.src = "music/Night Drive.opus";
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

    setTimeout(loopIt, 10679);
}

$(document).click(function() {
    if (musicClick == 0) {
        loopIt();
        musicClick = 1;
    }
});

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
    $('.pinkV').replaceWith(`<img class="bg-img" src="images/temple_pink.webp" />`);
});

$('.fa-times').click(function() {
    $('.bg-img').replaceWith(`<video class="pinkV" loop autoplay muted>
        <source src="images/Temple Pink (Loop).mp4" type="video/mp4">
    </video>`);
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

$(document).scroll(function() {
    let scroll = $(document).scrollTop();

    if (scroll > 300) {
        $('.pinkV').replaceWith(`<img class="bg-img" src="images/temple_pink.webp" />`);
    } else {
        $('.bg-img').replaceWith(`<video class="pinkV" loop autoplay muted>
            <source src="images/Temple Pink (Loop).mp4" type="video/mp4">
        </video>`);
    }
});

let season1 = [];
let season2 = [];
let season3 = [];
let season4 = [];
let season5 = [];
let movie = [];
let season6 = [];

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
    }, 'text');
}

for (let j = 1; j < 7; j++) {
    let evalvar = eval(`season${j}`)
    rwEpisodes(evalvar, `S0${j}`, `.episodes${j}-grid`);
}