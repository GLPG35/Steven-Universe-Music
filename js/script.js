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