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