import { spinner, playMusic, headerAnim, setFooter } from './envs.js';

spinner();

playMusic("The Answer.opus", 60778);

$(document).ready(function() {
    gsap.to('.star', 1, {
        x: '5.5%',
        y: '3.2%',
        scaleX: 0,
        scaleY: 0,
    });

    setFooter();
    aboutAnim();

    window.setInterval(aboutAnim, 25000);
});

headerAnim();

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