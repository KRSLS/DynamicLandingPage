window.addEventListener('scroll', (event) => {
    // console.log(`Scroll Value: ${scrollY}`);

    var pages;


});

window.addEventListener('load', (e) => {
    changePage(1);
});

window.addEventListener('wheel', (e) => {
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

    console.log(pageSelected);
    changePage(pageSelected);
});

var pageSelected = 1;
var virtualPageSelected = 1;

var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

function changePage(page) {
    pageSelected = page;
    // console.log(pageSelected);

    if (pageSelected === 1) {
        document.getElementById('p1').scrollIntoView();
        c1.classList.add('circleActive');
        c1.focus();
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
        c2.focus();
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
        c3.focus();
        document.getElementById('p1').classList.remove('pageZoomAnimation');
        document.getElementById('p2').classList.remove('pageZoomAnimation');
        document.getElementById('p3').classList.add('pageZoomAnimation');

        document.getElementById('p1').classList.add('pageZoomResetAnimation');
        document.getElementById('p2').classList.add('pageZoomResetAnimation');
        document.getElementById('p3').classList.remove('pageZoomResetAnimation');

    }
}

function scrollToTop() {
    document.body.scrollTo(0, 0);
}