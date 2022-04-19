import { headerAnim, playMusic, setFooter, spinner } from "./envs.js";

spinner();
headerAnim();
playMusic("luv u.opus", 64025);

$(document).ready(function() {
    gsap.to('.star', 1, {
        x: '5.5%',
        y: '3.2%',
        scaleX: 0,
        scaleY: 0,
    });

    setFooter();
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