window.addEventListener('scroll', (event) => {
    // console.log(`Scroll Value: ${scrollY}`);
});

window.addEventListener('load', (e) => {
    changePage(1);
});

var cooldown = 1;

setInterval(() => {
    window.addEventListener('wheel', (e) => {
        if (cooldown <= 0) {
            if (e.deltaY > 1) {
                if (pageSelected >= 3) {
                    pageSelected = 1;
                }
                else pageSelected += 1;
            }
            else {
                if (pageSelected <= 1) {
                    pageSelected = 3;
                }
                else pageSelected -= 1;
            }
            changePage(pageSelected);
            cooldown = 1;
        }
    });

    console.log(cooldown);
    if (cooldown < 0) cooldown = 0;
    if (cooldown > 0) cooldown -= 0.3;

    console.log(`Scroll cooldown: ${cooldown}`);
}, 200);

var pageSelected = 1;
var virtualPageSelected = 1;

var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

function changePage(page) {
    pageSelected = page;

    if (pageSelected === 1) {
        document.getElementById('p1').scrollIntoView();
        c1.classList.add('circleActive');
        c2.classList.remove('circleActive');
        c3.classList.remove('circleActive');
        document.getElementById('p1').classList.add('pageZoomAnimation');
        document.getElementById('p2').classList.remove('pageZoomAnimation');
        document.getElementById('p3').classList.remove('pageZoomAnimation');

        document.getElementById('p1').classList.remove('pageZoomResetAnimation');
        document.getElementById('p2').classList.add('pageZoomResetAnimation');
        document.getElementById('p3').classList.add('pageZoomResetAnimation');

    } else if (pageSelected === 2) {
        document.getElementById('p2').scrollIntoView();
        c1.classList.remove('circleActive');
        c2.classList.add('circleActive');
        c3.classList.remove('circleActive');

        document.getElementById('p1').classList.remove('pageZoomAnimation');
        document.getElementById('p2').classList.add('pageZoomAnimation');
        document.getElementById('p3').classList.remove('pageZoomAnimation');

        document.getElementById('p1').classList.add('pageZoomResetAnimation');
        document.getElementById('p2').classList.remove('pageZoomResetAnimation');
        document.getElementById('p3').classList.add('pageZoomResetAnimation');

    }
    else if (pageSelected === 3) {
        document.getElementById('p3').scrollIntoView();
        c1.classList.remove('circleActive');
        c2.classList.remove('circleActive');
        c3.classList.add('circleActive');
        document.getElementById('p1').classList.remove('pageZoomAnimation');
        document.getElementById('p2').classList.remove('pageZoomAnimation');
        document.getElementById('p3').classList.add('pageZoomAnimation');

        document.getElementById('p1').classList.add('pageZoomResetAnimation');
        document.getElementById('p2').classList.add('pageZoomResetAnimation');
        document.getElementById('p3').classList.remove('pageZoomResetAnimation');

    }
}