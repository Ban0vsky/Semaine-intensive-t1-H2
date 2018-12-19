// function titleShow() {
//     let text = document.querySelectorAll('.span');
//     let p = window.pageYOffset + window.innerHeight;
//     let q = window.pageYOffset + window.innerHeight * 2;

//     for (let i = 0; i < text.length; i++) {
//         if (p < text[i].offsetTop && text[i].offsetTop < q) {
//             // text[i].style.opacity = 1;
//             text[i].classList.add('textPop');
//         };
//     };
// };

// Fullpage management

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
                let maxBottom = document.body.offsetHeight - window.innerHeight;
                
                arrivePoint = arrivePoint > maxBottom ? maxBottom : arrivePoint;
                setAnimation(arrivePoint);
                // titleShow();
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
                let maxBottom = document.body.offsetHeight - window.innerHeight;
                
                arrivePoint = arrivePoint > maxBottom ? maxBottom : arrivePoint;
                setAnimation(arrivePoint);
                // titleShow();
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
