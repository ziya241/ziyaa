const phrases = ["Web Developer."];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; // typing speed in ms
const erasingSpeed = 50;
const delayBetweenPhrases = 2000; // delay between phrases

const dynamicText = document.getElementById("dynamic-text");

function type() {
    if (charIndex < phrases[index].length) {
        dynamicText.textContent += phrases[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenPhrases);
    }
}

function erase() {
    if (charIndex > 0) {
        dynamicText.textContent = phrases[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        index = (index + 1) % phrases.length; // move to the next phrase
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));
