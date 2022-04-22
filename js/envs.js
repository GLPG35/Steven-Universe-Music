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

export function musicCookie(trackV, msV) {
    if (Cookies.get('music') == undefined) {
        setTimeout(function() {
            $('.header').before(`<div class="cookies">
                <div class="saveDialog">
                    <button class="closeDialog"><i class="fas fa-chevron-up"></i></button>
                    <span class="msg1">This site has ambient music to improve the user experience.</span>
                    <span class="msg2">Do you want to enable it?</span>
                    <div class="yesnoT">
                        <div class="toggle">
                            <i class="fas fa-check"></i>
                            <i class="fas fa-times"></i>
                            <div class="circle"><i class="fas fa-music"></i></div>
                        </div>
                    </div>
                    <input type="checkbox" id="yesno" class="yesno">
                </div>
            </div>`);
        }, 1000);

        $('body').on('click', '.toggle', function() {
            if (!($('.yesno').is(':checked'))) {
                $('.toggle').addClass('active');
                $('.yesno').prop('checked', true);
            } else {
                $('.toggle').removeClass('active');
                $('.yesno').prop('checked', false);
            }
        });

        $('body').on('click', '.closeDialog', function() {
            if (!($('.yesno').is(':checked'))) {
                Cookies.set('music', 0, { expires: 1 });
                cookieInitial = 0;
                $('.header .menu ul').after(`<div class="toggleC">
                    <div class="toggleM">
                        <i class="fas fa-check"></i>
                        <i class="fas fa-timess"></i>
                        <div class="circle"><i class="fas fa-music"></i></div>
                    </div>
                    <input type="checkbox" class="yesnoM">
                    <i class="fas fa-sync-alt"></i>
                </div>`);
            } else {
                Cookies.set('music', 1, { expires: 1 });
                cookieInitial = 1;
                playMusic(trackV, msV);
                $('.header .menu ul').after(`<div class="toggleC">
                <div class="toggleM active">
                    <i class="fas fa-check"></i>
                    <i class="fas fa-timess"></i>
                    <div class="circle"><i class="fas fa-music"></i></div>
                </div>
                <input type="checkbox" class="yesnoM">
                <i class="fas fa-sync-alt"></i>
            </div>`);
            }

            $('.cookies').addClass('active');
            setTimeout(function() {
                $('.cookies').remove();
            }, 1000);
        });
    } else {
        $('.header .menu ul').after(`<div class="toggleC">
            <div class="toggleM">
                <i class="fas fa-check"></i>
                <i class="fas fa-timess"></i>
                <div class="circle"><i class="fas fa-music"></i></div>
            </div>
            <input type="checkbox" class="yesnoM">
            <i class="fas fa-sync-alt"></i>
        </div>`);

        if (Cookies.get('music') == 1) {
            playMusic(trackV, msV);
            $('.toggleM').addClass('active');
            $('.yesnoM').prop('checked', true);
        }
    }

    var cookieInitial;

    if (Cookies.get('music') != undefined) {
        cookieInitial = Cookies.get('music');
    }

    $('body').on('click', '.toggleM', function() {
        if (!($('.yesnoM').is(':checked'))) {
            if (cookieInitial == 0) {
                $('.fa-sync-alt').addClass('active');
            } else if ((cookieInitial == 1) && ($('.fa-sync-alt').hasClass('active'))) {
                $('.fa-sync-alt').removeClass('active');
            }

            Cookies.set('music', 1, { expires: 1 });
            $('.toggleM').addClass('active');
            $('.yesnoM').prop('checked', true);
        } else {
            if (cookieInitial == 1) {
                $('.fa-sync-alt').addClass('active');
            } else if ((cookieInitial == 0) && ($('.fa-sync-alt').hasClass('active'))) {
                $('.fa-sync-alt').removeClass('active');
            }

            Cookies.set('music', 0, { expires: 1 });
            $('.toggleM').removeClass('active');
            $('.yesnoM').prop('checked', false);
        }
    });

    $('body').on('click', '.fa-sync-alt', function() {
        if (cookieInitial == 1) {
            var volume = 1.00;

            if (current_player == 'a') {
                var fade = setInterval(function() {
                    if (volume > 0.01) {
                        volume -= 0.1;
                        player_a.volume = volume;
                    } else {
                        clearInterval(fade);
                        window.location.reload(false);
                    }
                }, 100);
            } else {
                var fade = setInterval(function() {
                    if (volume > 0.01) {
                        volume -= 0.1;
                        player_b.volume = volume;
                    } else {
                        clearInterval(fade);
                        window.location.reload(false);
                    }
                }, 100);
            }
        } else {
            window.location.reload(false);
        }
    });

    $('.menu a').click(function(e) {
        let link = $(this).attr('href');
        e.preventDefault();
        
        if (cookieInitial == 1) {
            var volume = 1.00;

            if (current_player == 'a') {
                var fade = setInterval(function() {
                    if (volume > 0.01) {
                        volume -= 0.1;
                        player_a.volume = volume;
                    } else {
                        clearInterval(fade);
                        window.location.href = link;
                    }
                }, 100);
            } else {
                var fade = setInterval(function() {
                    if (volume > 0.01) {
                        volume -= 0.1;
                        player_b.volume = volume;
                    } else {
                        clearInterval(fade);
                        window.location.href = link;
                    }
                }, 100);
            }
        } else {
            window.location.href = link;
        }
    });
}

var current_player;
var player_a;
var player_b;

export function playMusic(track, ms) {
    var volume = 0.00;
    var firstTime = true;
    current_player = "a";
    player_a = document.createElement("audio");
    player_b = document.createElement("audio");

    player_a.src = `music/${track}`;
    player_b.src = player_a.src;

    function loopIt() {
        var player = null;

        if(current_player == "a") {
            player = player_b;
            current_player = "b";
        }

        else {
            player = player_a;
            current_player = "a";
        }

        if (firstTime == true) {
            player.volume = 0.00;
            player.play();

            var fadeIn = setInterval(function() {
                if (volume < 0.95) {
                    volume += 0.05;
                    let rVolume = (Math.ceil(volume*20)/20).toFixed(2)
                    player.volume = rVolume;
                } else {
                    firstTime = false;
                    clearInterval(fadeIn);
                }
            }, 50);
        } else {
            player.play();
        }

        setTimeout(loopIt, ms);
    }

    loopIt();
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
