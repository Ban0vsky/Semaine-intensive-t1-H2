// Resize
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
});

// Parallax cursor
const cursorParallaxes = document.querySelectorAll('.parallax-cursor');

window.addEventListener('mousemove', (_event) => {
    const ratioX = _event.clientX / windowWidth - 0.5;
    const ratioY = _event.clientY / windowHeight - 0.5;
    
    for (const cursorParallax of cursorParallaxes) {
        const depth = parseFloat(cursorParallax.dataset.parallaxCursorDepth);
        const translateX = depth * ratioX * 100;
        const translateY = depth * ratioY * 100;
        
        cursorParallax.style.transform = `translate(${translateX}%, ${translateY}%)`;
    };
});

const slides = document.querySelectorAll('.section');
const slideOne = document.querySelector('.currentSlide');
const slideTwo = document.querySelector('.currentSlideTwo');
const slideThree = document.querySelector('.currentSlideThree');

// Know More management
const more = document.querySelector('.knowMore');
const quitMore1 = document.querySelector('.currentSlide .moreQuit');
const quitMore2 = document.querySelector('.currentSlideTwo .moreQuit');
const quitMore3 = document.querySelector('.currentSlideThree .moreQuit');

let selected = document.querySelectorAll('.more');
let selectedOne = document.querySelector('.currentSlide .more');
let selectedTwo = document.querySelector('.currentSlideTwo .more');
let selectedThree = document.querySelector('.currentSlideThree .more');

// function showMore() {
//     for (i = 0; i < selected.length; i++) {
//         for (i = 0; i < slides.length; i++) {
//             if (selected[i] === event.target && selected[i] === slides[i]) {
//                 more.addEventListener('click', () => {
//                     selected[i].classList.toggle('moreSelected');
//                 });
//             };
//         };
//     };
// }; showMore();
more.addEventListener('click', () => {
    selectedOne.classList.toggle('moreSelected')
});
quitMore1.addEventListener('click', () => {
    selectedOne.classList.toggle('moreSelected')
});
// FULLPAGE MANAGEMENT
// - Go top anchor
function goTop () {
    let topbtn = document.querySelector('.home');
    let top = window.pageYOffset;
    
    let intervalTimer = setInterval(function() {
        if (top > 0) {
            top -= 50; // Back on top speed
            window.scrollTo(0, top);
            emptyBar();
        }
        else {
            clearInterval(intervalTimer);
        };
    }, 0.5);
};

let isComplete = true;

// - Set transition between div
function setAnimation(arrivePoint) {
    let flag = true;
    let timer = setInterval(function () {
        let pathY = window.pageYOffset;
        let speed = (arrivePoint - pathY) / 6;
        
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); 
        
        if (pathY || pathY == 0) {
            window.scrollTo(0, pathY + speed);
        }
        if (arrivePoint !== pathY) {
            flag = false;
        } else {
            flag = true;
        }
        if (flag) {
            clearInterval(timer);
            isComplete = true;
        }
    }, 13);
};

// - Text animation on div reveal
function titleShow() {
    let text = document.querySelectorAll('.text');
    let p = window.pageYOffset + window.innerHeight;
    let q = window.pageYOffset + window.innerHeight * 2;
    
    for (let i = 0; i < text.length; i++) {
        if (p < text[i].offsetTop && text[i].offsetTop < q) {
            text[i].classList.add('textPop');
        };
    };
    for (let i = 0; i < text.length; i++) {
        if (p > text[i].offsetTop && text[i].offsetTop > q) {
            text[i].classList.add('textPop');
        };
    };
};

// Manage progress bar
const progressBar = document.querySelector('.progressionBar');
let achievedProgressBar = document.querySelector('.achieved');

const emptyBar = () => {
    achievedProgressBar.style.transform = 'scaleY(0)';    
}; document.addEventListener('click', emptyBar, false);

function activeSlideOne() {
    if (slideOne === event.target) {
        achievedProgressBar.style.transform = 'scaleY(0)';    
    };
}; document.addEventListener('mouseover', activeSlideOne, false);

function activeSlideTwo() {
    if (slideTwo === event.target) {
        achievedProgressBar.style.transform = 'scaleY(0.5)';    
    };
}; document.addEventListener('mouseover', activeSlideTwo, false);

function activeSlideThree() {
    if (slideThree === event.target) {
        achievedProgressBar.style.transform = 'scaleY(1)';    
    };
}; document.addEventListener('mouseover', activeSlideThree, false);

// - Div change on scroll
function wheel(e) {
    if (isComplete == true) { 
        isComplete = false;
        
        //  -- For IE, Chrome
        if (e.wheelDelta) { 
            stopScroll();
            if (e.wheelDelta > 0) { // Wheel up
                let arrivePoint = window.pageYOffset - window.innerHeight;
                
                arrivePoint = arrivePoint < 0 ? 0 : arrivePoint;
                setAnimation(arrivePoint);
            };
            
            if (e.wheelDelta < 0) { // Whell down
                let arrivePoint = window.pageYOffset + window.innerHeight;
                let maxBottom = document.body.offsetHeight + window.innerHeight;
                
                arrivePoint = arrivePoint > maxBottom ? maxBottom : arrivePoint;
                titleShow();
                setAnimation(arrivePoint);
            };
        }
        // -- For Firefox
        else if (e.detail) {
            if (e.detail < 0) { // Wheel up
                let arrivePoint = document.documentElement.scrollTop - window.innerHeight;
                
                arrivePoint = arrivePoint < 0 ? 0 : arrivePoint;
                setAnimation(arrivePoint);
            };
            if (e.detail > 0) { // Whell down
                let arrivePoint = document.documentElement.scrollTop + window.innerHeight;
                let maxBottom = document.body.offsetHeight + window.innerHeight;
                
                arrivePoint = arrivePoint > maxBottom ? maxBottom : arrivePoint;
                titleShow();
                setAnimation(arrivePoint);
            };
        };
    };
};
// - Prevent scroll bug
function stopScroll() {
    function preventDefault(e) {
        e = e || window.event;
        
        if (e.preventDefault)
        e.preventDefault(); 
        e.returnValue = false;
    };
    
    let oldonwheel, oldontouchmove;
    (function disableScroll() {
        if (window.addEventListener);
        window.addEventListener('DOMMouseScroll', preventDefault, false);
        oldonwheel = window.onwheel;
        window.onwheel = preventDefault; 
        
        oldontouchmove = window.ontouchmove;
        window.ontouchmove = preventDefault; 
    })();
};
document.addEventListener('DOMMouseScroll', wheel, false); 
document.addEventListener('mousewheel', wheel, false); 
document.addEventListener('mousewheel', titleShow, false);