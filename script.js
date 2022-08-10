const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["to imagine...", "creativity...", "to discover...", "solve...", "reinvent...", "to explore..."];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

//FONTE: https://codepen.io/Coding_Journey/pen/BEMgbX


console.log("████    ███████ ██   ██  ██████")
console.log("██  ██  ██      ██   ██ ██    ██")
console.log("██   ██ █████   ██   ██      ██")
console.log("██   ██ ██      ██   ██     ██")
console.log("██  ██  ██       ██ ██")
console.log("████    ███████   ███      ██")
console.log("")
console.log('%c Bora trocar uma ideia no meu linkedin? ', 'color:hsl(0, 0%, 80%);background-color:hsl(0, 0%, 0%);')
console.log('%c Chama lá; www.linkedin.com/in/mthalmeida/ ', 'color:hsl(0, 100%, 90%);background-color:hsl(0, 100%, 50%);');


//***********************************************************
