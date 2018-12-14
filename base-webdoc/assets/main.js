function scrollY() {
    var posY = window.pageYOffset;
    
    if (posY >= window.innerHeight - 10) {
        document.querySelector('.top-button').style.opacity = 1;
    } 
    else {
        document.querySelector('.top-button').style.opacity = 0;
    };
};

function goTop () {
    let topbtn = document.querySelector('.top-button');
    let top = window.pageYOffset;
    
    let intervalTimer = setInterval(function() {
        if (top > 0) {
            top -= 15;
            window.scrollTo(0, top);
        }
        else {
            topbtn.style.opacity = 0;
            clearInterval(intervalTimer);
        }
    }, 0.5);
}

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
}
function titleShow() {
    let text = document.querySelectorAll('.span');
    let p = window.pageYOffset + window.innerHeight;
    let q = window.pageYOffset + window.innerHeight * 2;
   
    for (let i = 0; i < text.length; i++) {
        if (p < text[i].offsetTop && text[i].offsetTop < q) {
            // text[i].style.opacity = 1;
            text[i].classList.add('textPop');
        };
    };
};

let isComplete = true;

function wheel(e) {
    if (isComplete == true) { 
        isComplete = false;
        
        //  For IE, Chrome
        if (e.wheelDelta) { 
            stopScroll();
            if (e.wheelDelta > 0) { 
                let arrivePoint = window.pageYOffset - window.innerHeight;
                
                arrivePoint = arrivePoint < 0 ? 0 : arrivePoint;
                setAnimation(arrivePoint);
            }
            
            if (e.wheelDelta < 0) { 
                let arrivePoint = window.pageYOffset + window.innerHeight;
                let maxBottom = document.body.offsetHeight - window.innerHeight;
                
                arrivePoint = arrivePoint > maxBottom ? maxBottom : arrivePoint;
                setAnimation(arrivePoint);
                titleShow();
            };
        }
        // For Firefox
        else if (e.detail) {
            if (e.detail < 0) { 
                let arrivePoint = document.documentElement.scrollTop - window.innerHeight;
                
                arrivePoint = arrivePoint < 0 ? 0 : arrivePoint;
                setAnimation(arrivePoint);
            }
            if (e.detail > 0) { 
                let arrivePoint = document.documentElement.scrollTop + window.innerHeight;
                let maxBottom = document.body.offsetHeight - window.innerHeight;
                
                arrivePoint = arrivePoint > maxBottom ? maxBottom : arrivePoint;
                setAnimation(arrivePoint);
                titleShow();
            };
        };
    };
};

function keyboard(e) {
    if (isComplete == true) {
        isComplete == false;
        
        if (e.keyCode == 32 || e.keyCode == 40) {
            let arrivePoint = window.pageYOffset + window.innerHeight;
            let maxBottom = document.body.offsetHeight - window.innerHeight;
            
            arrivePoint = arrivePoint > maxBottom ? maxBottom : arrivePoint;
            setAnimation(arrivePoint);
            titleShow();
        }
        else if (e.keyCode == 38) {
            let arrivePoint = window.pageYOffset - window.innerHeight;
            
            arrivePoint = arrivePoint < 0 ? 0 : arrivePoint;
            setAnimation(arrivePoint);
            titleShow();
        };
    };
};

function stopScroll() {
    let keys = { 
        32: 1,
        37: 1, 
        38: 1, 
        39: 1, 
        40: 1 
    };
    
    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
        e.preventDefault();
        e.returnValue = false;
    };
};

document.addEventListener('scroll', scrollY);
document.addEventListener('keydown', keyboard);
document.addEventListener('DOMMouseScroll', wheel, false);
document.addEventListener('mousewheel', wheel, false); 