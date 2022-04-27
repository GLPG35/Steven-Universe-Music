import { changeVideo, headerAnim, musicCookie, setFooter, spinner } from "./envs.js";

spinner();
headerAnim();

$(document).ready(function() {
    gsap.to('.star', 1, {
        x: '5.5%',
        y: '3.2%',
        scaleX: 0,
        scaleY: 0,
    });

    musicCookie("luv u.opus", 64025);
    setFooter();
    changeVideo('Sunrise Driving (Loop)-1');
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
        
        let charDiv = `<li class="splide__slide">
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
        </li>`;

        $('.splide__list').append(charDiv);
    });
}, 'text').then(function() {
    new Splide( '.splide', {
        speed: 800
    } ).mount();
});