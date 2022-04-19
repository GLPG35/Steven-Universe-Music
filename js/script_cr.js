import { headerAnim, playMusic, setFooter, spinner } from "./envs.js";

spinner();
headerAnim();
playMusic("No Gem Wars at the Table.opus", 93510);

$(document).ready(function() {
    gsap.to('.star', 1, {
        x: '5.5%',
        y: '3.2%',
        scaleX: 0,
        scaleY: 0,
    });

    setFooter();
    creditsAnim();

    window.setInterval(creditsAnim, 15000);
});

function creditsAnim() {
    setTimeout(function() {
        $('#SugRocksMusic_9').css({
            'opacity': 0,
            'visibility': 'hidden'
        });
        $('#PhizzyLink_5').css({
            'opacity': 1,
            'visibility': 'visible'
        });
        
        setTimeout(function() {
            $('#PhizzyLink_5').css({
                'opacity': 0,
                'visibility': 'hidden'
            });
            $('#StevenWiki_7').css({
                'opacity': 1,
                'visibility': 'visible'
            });

            setTimeout(function() {
                $('#StevenWiki_7').css({
                    'opacity': 0,
                    'visibility': 'hidden'
                });
                $('#SugRocksMusic_9').css({
                    'opacity': 1,
                    'visibility': 'visible'
                });
            }, 5000);
        }, 5000);
    }, 5000);
}