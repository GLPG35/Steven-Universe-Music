export function spinner() {
    $(window).on('load', function() {
        $('.spinner').fadeOut(1000);
        setTimeout(function() {
            $('.spinner').remove();
        }, 1000);
    });
}

export function particles(container) {
    particlesJS (
        container,
    
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
                    speed: 1,
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
}

export function playMusic(track, ms) {
    let musicClick = 0;

    var current_player = "a";
    var player_a = document.createElement("audio");
    var player_b = document.createElement("audio");

    player_a.src = `music/${track}`;
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

        setTimeout(loopIt, ms);
    }

    $(document).click(function() {
        if (musicClick == 0) {
            loopIt();
            musicClick = 1;
        }
    });
}

export function setFooter() {
    $('.footer').prepend(`<span>&copy; ${(new Date).getFullYear()} Gian Luca Porto</span>`);
}

export function headerAnim() {
    let isActive = 0;
    let cooldown = 0;

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
        $('body').css('overflow', 'hidden');
        $('.fa-bars').css('pointer-events', 'none');
        $('.fa-times').css('pointer-events', 'all');
        gsap.to('.star', 1, {
            transformOrigin: '50% 50%',
            rotation: 90,
            scale: 15,
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
}