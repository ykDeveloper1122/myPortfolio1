// Show/hide the scroll-up button based on scroll position
window.addEventListener('scroll', function() {
    var scrollUp = document.getElementById('scrollUp');
    if (window.scrollY > 200) {
        scrollUp.style.display = 'flex';
    } else {
        scrollUp.style.display = 'none';
    }
});

// Scroll to the top of the page when the scroll-up button is clicked
document.getElementById('scrollUp').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// header section Starts ...

// typing effect

document.addEventListener('DOMContentLoaded', function() {
    const phrases = [
        "I am a Computer Operator.",
        "Data Entry Operator.",
        "WordPress Developer.",
        "Full Stack Web Developer.",
        "Full Stack Web Application Developer.",
        "Desktop Application Developer."
    ];
    const typingElement = document.querySelector('.typing .text');
    let currentIndex = 0; 
    let charIndex = 0;
    let isTyping = true;

    function typeAndErase() {
        const currentPhrase = phrases[currentIndex];
        const speed = isTyping ? 100 : 50;
        typingElement.textContent = currentPhrase.substring(0, charIndex);
        charIndex += isTyping ? 1 : -1;
        if ( (!isTyping && charIndex === 0) || (isTyping && charIndex > currentPhrase.length)) {
            isTyping = !isTyping;
            currentIndex = isTyping ? (currentIndex + 1) % phrases.length : currentIndex;
            setTimeout(typeAndErase, isTyping ? 1000 : 2000);
        } else {
            setTimeout(typeAndErase, speed);
        }
    }

    typeAndErase();
});
