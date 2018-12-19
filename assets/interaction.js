// Get slides on DOM
const slides = document.querySelectorAll('.section');
const slideOne = document.querySelector('.currentSlideOne');
const slideTwo = document.querySelector('.currentSlideTwo');
const slideThree = document.querySelector('.currentSlideThree');
const slideFour = document.querySelector('.currentSlideFour');
const slideFive = document.querySelector('.currentSlideFive');
const slideSix = document.querySelector('.currentSlideSix');
const slideSeven = document.querySelector('.currentSlideSeven');
const slideHeight = document.querySelector('.currentSlideHeight');
const slideNine = document.querySelector('.currentSlideNine');
const slideTen = document.querySelector('.currentSlideTen');
const slideEleven = document.querySelector('.currentSlideEleven');
const slideTwelve = document.querySelector('.currentSlideTwelve');
const slideThirteen = document.querySelector('.currentSlideThirteen');
const slideFourteen = document.querySelector('.currentSlideFourteen');
const slideFiveteen = document.querySelector('.currentSlideFiveteen');
const slideSixteen = document.querySelector('.currentSlideSixteen');
const slideSeventeen = document.querySelector('.currentSlideSeventeen');
const slideHeighteen = document.querySelector('.currentSlideHeighteen');
const slideNineteen = document.querySelector('.currentSlideNineteen');
const slideTwenty = document.querySelector('.currentSlideTwenty');
const slideTwentyOne = document.querySelector('.currentSlideTwentyOne');
const slideTwentyTwo = document.querySelector('.currentSlideTwentyTwo');
const slideTwentyThree = document.querySelector('.currentSlideTwentyThree');
const slideTwentyFour = document.querySelector('.currentSlideTwentyFour');

// Get know more on DOM
const more = document.querySelector('.knowMore');
const quitMore = document.querySelectorAll('.moreQuit');
const quitMoreOne = document.querySelector('.currentSlideOne .moreQuit');
const quitMoreTwo = document.querySelector('.currentSlideTwo .moreQuit');
const quitMoreThree = document.querySelector('.currentSlideThree .moreQuit');
const quitMoreFour = document.querySelector('.currentSlideFour .moreQuit');
const quitMoreFive = document.querySelector('.currentSlideFive .moreQuit');
const quitMoreSix = document.querySelector('.currentSlideSix .moreQuit');
const quitMoreSeven = document.querySelector('.currentSlideSeven .moreQuit');
const quitMoreHeight = document.querySelector('.currentSlideHeight .moreQuit');
const quitMoreNine = document.querySelector('.currentSlideNine .moreQuit');
const quitMoreTen = document.querySelector('.currentSlideTen .moreQuit');
const quitMoreEleven = document.querySelector('.currentSlideEleven .moreQuit');
const quitMoreTwelve = document.querySelector('.currentSlideTwelve .moreQuit');
const quitMoreThirteen = document.querySelector('.currentSlideThirteen .moreQuit');
const quitMoreFourteen = document.querySelector('.currentSlideFourteen .moreQuit');
const quitMoreFiveteen = document.querySelector('.currentSlideFiveteen .moreQuit');
const quitMoreSixteen = document.querySelector('.currentSlideSixteen .moreQuit');
const quitMoreSeventeen = document.querySelector('.currentSlideSeventeen .moreQuit');
const quitMoreHeighteen = document.querySelector('.currentSlideHeighteen .moreQuit');
const quitMoreNineteen = document.querySelector('.currentSlideNineteen .moreQuit');
const quitMoreTwenty = document.querySelector('.currentSlideTwenty .moreQuit');
const quitMoreTwentyOne = document.querySelector('.currentSlideTwentyOne .moreQuit');
const quitMoreTwentyTwo = document.querySelector('.currentSlideTwentyTwo .moreQuit');
const quitMoreTwentyThree = document.querySelector('.currentSlideTwentyThree .moreQuit');
const quitMoreTwentyFour = document.querySelector('.currentSlideTwentyFour .moreQuit');

let selected = document.querySelectorAll('.more');
let selectedOne = document.querySelector('.currentSlideOne .more');
let selectedTwo = document.querySelector('.currentSlideTwo .more');
let selectedThree = document.querySelector('.currentSlideThree .more');
let selectedFour = document.querySelector('.currentSlideFour .more');
let selectedFive = document.querySelector('.currentSlideFive .more');
let selectedSix = document.querySelector('.currentSlideSix .more');
let selectedSeven = document.querySelector('.currentSlideSeven .more');
let selectedHeight = document.querySelector('.currentSlideHeight .more');
let selectedNine = document.querySelector('.currentSlideNine .more');
let selectedTen = document.querySelector('.currentSlideTen .more');
let selectedEleven = document.querySelector('.currentSlideEleven .more');
let selectedTwelve = document.querySelector('.currentSlideTwelve .more');
let selectedThirteen = document.querySelector('.currentSlideThirteen .more');
let selectedFourteen = document.querySelector('.currentSlideFourteen .more');
let selectedFiveteen = document.querySelector('.currentSlideFiveteen .more');
let selectedSixteen = document.querySelector('.currentSlideSixteen .more');
let selectedSeventeen = document.querySelector('.currentSlideSeventeen .more');
let selectedHeighteen = document.querySelector('.currentSlideHeighteen .more');
let selectedNineteen = document.querySelector('.currentSlideNineteen .more');
let selectedTwenty = document.querySelector('.currentSlideTwenty .more');
let selectedTwentyOne = document.querySelector('.currentSlideTwentyOne .more');
let selectedTwentyTwo = document.querySelector('.currentSlideTwentyTwo .more');
let selectedTwentyThree = document.querySelector('.currentSlideTwentyThree .more');
let selectedTwentyFour = document.querySelector('.currentSlideTwentyFour .more');

// Manage progress bar and know more
const progressBar = document.querySelector('.progressionBar');
let achievedProgressBar = document.querySelector('.achieved');

// Manage menu background change
let menu = document.querySelector('.menu');

// Manage background change
let sideColorFirst = document.querySelector('.sideColorFirst');
let sideColorSecond = document.querySelector('.sideColorSecond');
let sideColorThird = document.querySelector('.sideColorThird');

let menuBackgroundFirst = document.querySelector('.menuBackgroundFirst');
let menuBackgroundSecond = document.querySelector('.menuBackgroundSecond');
let menuBackgroundThird = document.querySelector('.menuBackgroundThird');

let backgroundFirst = document.querySelector('.backgroundFirst');
let backgroundSecond = document.querySelector('.backgroundSecond');
let backgroundThird = document.querySelector('.backgroundThird');

const emptyBar = () => {
    achievedProgressBar.style.transform = 'scaleY(0)';    
}; document.addEventListener('click', emptyBar, false);

function activeSlideOne(e) {
    if (!e) e = window.event; // To fit with Firefox
    let x = e.target || e.srcElement;
    
    if (slideOne === x) {
        // Manage know more
        more.classList.add('hideKnowMore');
        more.addEventListener('click', () => {
            // selectedOne.classList.add('moreSelected');
            
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreOne.addEventListener('click', () => {
            selectedOne.classList.remove('moreSelected');
        });
        // Manage progress bar
        achievedProgressBar.style.transform = 'scaleY(0)'; 
        
        menuBackgroundFirst.classList.add('isActive');  
        sideColorFirst.classList.add('isActive');
        backgroundFirst.classList.add('isActive');
        
        menuBackgroundSecond.classList.remove('isActive');  
        sideColorSecond.classList.remove('isActive');
        backgroundSecond.classList.remove('isActive');
        
        menuBackgroundThird.classList.remove('isActive');  
        sideColorThird.classList.remove('isActive');
        backgroundThird.classList.remove('isActive');
    };
}; document.addEventListener('mouseover', activeSlideOne, false); 

function activeSlideTwo(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideTwo === x) {
        more.classList.add('hideKnowMore');
        more.addEventListener('click', () => {
            // selectedTwo.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreTwo.addEventListener('click', () => {
            selectedTwo.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.02)';  
        
        menuBackgroundFirst.classList.add('isActive');  
        sideColorFirst.classList.add('isActive');
        backgroundFirst.classList.add('isActive');
        
        menuBackgroundSecond.classList.remove('isActive');  
        sideColorSecond.classList.remove('isActive');
        backgroundSecond.classList.remove('isActive');
        
        menuBackgroundThird.classList.remove('isActive');  
        sideColorThird.classList.remove('isActive');
        backgroundThird.classList.remove('isActive');
    };
}; document.addEventListener('mouseover', activeSlideTwo, false);

function activeSlideThree(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideThree === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedThree.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreThree.addEventListener('click', () => {
            selectedThree.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.06)'; 
    };
}; document.addEventListener('mouseover', activeSlideThree, false);

function activeSlideFour(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideFour === x) {
        more.classList.add('hideKnowMore');
        more.addEventListener('click', () => {
            // selectedFour.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreFour.addEventListener('click', () => {
            selectedFour.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.08)';
        
        menuBackgroundFirst.classList.add('isActive');  
        sideColorFirst.classList.add('isActive');
        backgroundFirst.classList.add('isActive');
        
        menuBackgroundSecond.classList.remove('isActive');  
        sideColorSecond.classList.remove('isActive');
        backgroundSecond.classList.remove('isActive');
        
        menuBackgroundThird.classList.remove('isActive');  
        sideColorThird.classList.remove('isActive');
        backgroundThird.classList.remove('isActive');
    };
}; document.addEventListener('mouseover', activeSlideFour, false);

function activeSlideFive(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideFive === x) {
        more.classList.add('hideKnowMore');
        more.addEventListener('click', () => {
            // selectedFive.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreFive.addEventListener('click', () => {
            selectedFive.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.12)';
        
        menuBackgroundSecond.classList.add('isActive');  
        sideColorSecond.classList.add('isActive');
        backgroundSecond.classList.add('isActive'); 
        
        menuBackgroundFirst.classList.remove('isActive');  
        sideColorFirst.classList.remove('isActive');
        backgroundFirst.classList.remove('isActive');
        
        menuBackgroundThird.classList.remove('isActive');  
        sideColorThird.classList.remove('isActive');
        backgroundThird.classList.remove('isActive');
    };
}; document.addEventListener('mouseover', activeSlideFive, false);

function activeSlideSix(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideSix === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedSix.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreSix.addEventListener('click', () => {
            selectedSix.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.19)';  
    };
}; document.addEventListener('mouseover', activeSlideSix, false);

function activeSlideSeven(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideSeven === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedSeven.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreSeven.addEventListener('click', () => {
            selectedSeven.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.24)';    
    };
}; document.addEventListener('mouseover', activeSlideSeven, false);


function activeSlideHeight(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideHeight === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedHeight.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreHeight.addEventListener('click', () => {
            selectedHeight.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.30)';    
    };
}; document.addEventListener('mouseover', activeSlideHeight, false);

function activeSlideNine(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideNine === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedNine.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreNine.addEventListener('click', () => {
            selectedNine.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.36)';    
    };
}; document.addEventListener('mouseover', activeSlideNine, false);

function activeSlideTen(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideTen === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedTen.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreTen.addEventListener('click', () => {
            selectedTen.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.40)'; 
        
        menuBackgroundSecond.classList.add('isActive');  
        sideColorSecond.classList.add('isActive');
        backgroundSecond.classList.add('isActive'); 
        
        menuBackgroundFirst.classList.remove('isActive');  
        sideColorFirst.classList.remove('isActive');
        backgroundFirst.classList.remove('isActive');
        
        menuBackgroundThird.classList.remove('isActive');  
        sideColorThird.classList.remove('isActive');
        backgroundThird.classList.remove('isActive');   
    };
}; document.addEventListener('mouseover', activeSlideTen, false);

function activeSlideEleven(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideEleven === x) {
        more.classList.add('hideKnowMore');
        more.addEventListener('click', () => {
            // selectedEleven.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreEleven.addEventListener('click', () => {
            selectedEleven.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.46)';   
        
        menuBackgroundThird.classList.add('isActive');  
        sideColorThird.classList.add('isActive');
        backgroundThird.classList.add('isActive');
        
        menuBackgroundFirst.classList.remove('isActive');  
        sideColorFirst.classList.remove('isActive');
        backgroundFirst.classList.remove('isActive');
        
        menuBackgroundSecond.classList.remove('isActive');  
        sideColorSecond.classList.remove('isActive');
        backgroundSecond.classList.remove('isActive');
    };
}; document.addEventListener('mouseover', activeSlideEleven, false);

function activeSlideTwelve(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideTwelve === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedTwelve.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreTwelve.addEventListener('click', () => {
            selectedTwelve.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.50)';    
    };
}; document.addEventListener('mouseover', activeSlideTwelve, false);


function activeSlideThirteen(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideThirteen === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedThirteen.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreThirteen.addEventListener('click', () => {
            selectedThirteen.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.54)';    
    };
}; document.addEventListener('mouseover', activeSlideThirteen, false);

function activeSlideFourteen(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideFourteen === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedFourteen.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreFourteen.addEventListener('click', () => {
            selectedFourteen.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.60)';
        
        menuBackgroundThird.classList.add('isActive');  
        sideColorThird.classList.add('isActive');
        backgroundThird.classList.add('isActive');
        
        menuBackgroundFirst.classList.remove('isActive');  
        sideColorFirst.classList.remove('isActive');
        backgroundFirst.classList.remove('isActive');
        
        menuBackgroundSecond.classList.remove('isActive');  
        sideColorSecond.classList.remove('isActive');
        backgroundSecond.classList.remove('isActive');
    };
}; document.addEventListener('mouseover', activeSlideFourteen, false);

function activeSlideFiveteen(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideFiveteen === x) {
        more.classList.add('hideKnowMore');
        more.addEventListener('click', () => {
            // selectedFiveteen.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreFiveteen.addEventListener('click', () => {
            selectedFiveteen.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.64)';    
        
        menuBackgroundFirst.classList.add('isActive');  
        sideColorFirst.classList.add('isActive');
        backgroundFirst.classList.add('isActive');
        
        menuBackgroundSecond.classList.remove('isActive');  
        sideColorSecond.classList.remove('isActive');
        backgroundSecond.classList.remove('isActive');
        
        menuBackgroundThird.classList.remove('isActive');  
        sideColorThird.classList.remove('isActive');
        backgroundThird.classList.remove('isActive');
    };
}; document.addEventListener('mouseover', activeSlideFiveteen, false);

function activeSlideSixteen(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideSixteen === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedSixteen.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreSixteen.addEventListener('click', () => {
            selectedSixteen.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.74)';    
    };
}; document.addEventListener('mouseover', activeSlideSixteen, false);

function activeSlideSeventeen(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideSeventeen === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedSeventeen.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreSeventeen.addEventListener('click', () => {
            selectedSeventeen.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.79)';    
    };
}; document.addEventListener('mouseover', activeSlideSeventeen, false);

function activeSlideHeighteen(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideHeighteen === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedHeighteen.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreHeighteen.addEventListener('click', () => {
            selectedHeighteen.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.84)';    
        
        menuBackgroundFirst.classList.add('isActive');  
        sideColorFirst.classList.add('isActive');
        backgroundFirst.classList.add('isActive');
        
        menuBackgroundSecond.classList.remove('isActive');  
        sideColorSecond.classList.remove('isActive');
        backgroundSecond.classList.remove('isActive');
        
        menuBackgroundThird.classList.remove('isActive');  
        sideColorThird.classList.remove('isActive');
        backgroundThird.classList.remove('isActive');
    };
}; document.addEventListener('mouseover', activeSlideHeighteen, false);

function activeSlideNineteen(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideNineteen === x) {
        more.classList.add('hideKnowMore');
        more.addEventListener('click', () => {
            // selectedNineteen.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreNineteen.addEventListener('click', () => {
            selectedNineteen.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.89)';    
        
        menuBackgroundSecond.classList.add('isActive');  
        sideColorSecond.classList.add('isActive');
        backgroundSecond.classList.add('isActive'); 
        
        menuBackgroundFirst.classList.remove('isActive');  
        sideColorFirst.classList.remove('isActive');
        backgroundFirst.classList.remove('isActive');
        
        menuBackgroundThird.classList.remove('isActive');  
        sideColorThird.classList.remove('isActive');
        backgroundThird.classList.remove('isActive');   
    };
}; document.addEventListener('mouseover', activeSlideNineteen, false);

function activeSlideTwenty(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideTwenty === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedTwenty.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreTwenty.addEventListener('click', () => {
            selectedTwenty.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.92)';  
        
        menuBackgroundSecond.classList.add('isActive');  
        sideColorSecond.classList.add('isActive');
        backgroundSecond.classList.add('isActive'); 
        
        menuBackgroundFirst.classList.remove('isActive');  
        sideColorFirst.classList.remove('isActive');
        backgroundFirst.classList.remove('isActive');
        
        menuBackgroundThird.classList.remove('isActive');  
        sideColorThird.classList.remove('isActive');
        backgroundThird.classList.remove('isActive');   
    };
}; document.addEventListener('mouseover', activeSlideTwenty, false);

function activeSlideTwentyOne(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideTwentyOne === x) {
        more.classList.add('hideKnowMore');
        more.addEventListener('click', () => {
            // selectedTwentyOne.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreTwentyOne.addEventListener('click', () => {
            selectedTwentyOne.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.94)';    
        
        menuBackgroundThird.classList.add('isActive');  
        sideColorThird.classList.add('isActive');
        backgroundThird.classList.add('isActive');
        
        menuBackgroundFirst.classList.remove('isActive');  
        sideColorFirst.classList.remove('isActive');
        backgroundFirst.classList.remove('isActive');
        
        menuBackgroundSecond.classList.remove('isActive');  
        sideColorSecond.classList.remove('isActive');
        backgroundSecond.classList.remove('isActive');
    };
}; document.addEventListener('mouseover', activeSlideTwentyOne, false);

function activeSlideTwentyTwo(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideTwentyTwo === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedTwentyTwo.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreTwentyTwo.addEventListener('click', () => {
            selectedTwentyTwo.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.96)';    
    };
}; document.addEventListener('mouseover', activeSlideTwentyTwo, false);

function activeSlideTwentyThree(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideTwentyThree === x) {
        more.classList.remove('hideKnowMore');
        more.addEventListener('click', () => {
            selectedTwentyThree.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyFour.classList.remove('moreSelected');
        });
        quitMoreTwentyThree.addEventListener('click', () => {
            selectedTwentyThree.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(0.98)';    
    };
}; document.addEventListener('mouseover', activeSlideTwentyThree, false);

function activeSlideTwentyFour(e) {
    if (!e) e = window.event;
    let x = e.target || e.srcElement;
    
    if (slideTwentyFour === x) {
        more.classList.add('hideKnowMore');
        more.addEventListener('click', () => {
            // selectedTwentyFour.classList.add('moreSelected');
            
            selectedOne.classList.remove('moreSelected');
            selectedTwo.classList.remove('moreSelected');
            selectedThree.classList.remove('moreSelected');
            selectedFour.classList.remove('moreSelected');
            selectedFive.classList.remove('moreSelected');
            selectedSix.classList.remove('moreSelected');
            selectedSeven.classList.remove('moreSelected');
            selectedHeight.classList.remove('moreSelected');
            selectedNine.classList.remove('moreSelected');
            selectedTen.classList.remove('moreSelected');
            selectedEleven.classList.remove('moreSelected');
            selectedTwelve.classList.remove('moreSelected');
            selectedThirteen.classList.remove('moreSelected');
            selectedFourteen.classList.remove('moreSelected');
            selectedFiveteen.classList.remove('moreSelected');
            selectedSixteen.classList.remove('moreSelected');
            selectedSeventeen.classList.remove('moreSelected');
            selectedHeighteen.classList.remove('moreSelected');
            selectedNineteen.classList.remove('moreSelected');
            selectedTwenty.classList.remove('moreSelected');
            selectedTwentyOne.classList.remove('moreSelected');
            selectedTwentyTwo.classList.remove('moreSelected');
            selectedTwentyThree.classList.remove('moreSelected');
        });
        quitMoreTwentyFour.addEventListener('click', () => {
            selectedTwentyFour.classList.remove('moreSelected');
        });
        achievedProgressBar.style.transform = 'scaleY(1)';    
    };
}; document.addEventListener('mouseover', activeSlideTwentyFour, false);


// Go top anchor point
function goTop () {
    let top = window.pageYOffset;
    
    let intervalTimer = setInterval(function() {
        if (top > 0) {
            top -= 120; // Back on top speed
            window.scrollTo(0, top);
            emptyBar();
        }
        else {
            clearInterval(intervalTimer);
        };
    }, 0.5);
};

// Navigation menu
let navMenu = document.querySelector('.navMenu');
let openMenu = document.querySelector('.navMenuOpen');

openMenu.addEventListener('click', () => {
    navMenu.classList.toggle('menuSelected');
});

let homeMenu = document.querySelector('.menuHome');
let unit1 = document.querySelector('.menuUnit1');
let unit2 = document.querySelector('.menuUnit2');
let unit3 = document.querySelector('.menuUnit3');
let unit4 = document.querySelector('.menuUnit4');
let unit5 = document.querySelector('.menuUnit5');
let unit6 = document.querySelector('.menuUnit6');

homeMenu.addEventListener('click', () => {
    window.scrollTo(0, top);
    navMenu.classList.toggle('menuSelected');
});
unit1.addEventListener('click', () => {
    window.scrollTo(0, slideTwo.offsetTop);
    navMenu.classList.toggle('menuSelected');
});
unit2.addEventListener('click', () => {
    window.scrollTo(0, slideFive.offsetTop);
    navMenu.classList.toggle('menuSelected');
});
unit3.addEventListener('click', () => {
    window.scrollTo(0, slideEleven.offsetTop);
    navMenu.classList.toggle('menuSelected');
});
unit4.addEventListener('click', () => {
    window.scrollTo(0, slideFiveteen.offsetTop);
    navMenu.classList.toggle('menuSelected');
});
unit5.addEventListener('click', () => {
    window.scrollTo(0, slideNineteen.offsetTop);
    navMenu.classList.toggle('menuSelected');
});
unit6.addEventListener('click', () => {
    window.scrollTo(0, slideTwentyOne.offsetTop);
    navMenu.classList.toggle('menuSelected');
});
