const t1 = gsap.timeline();

t1.from(".intro > div", 1.8, {
    opacity: 0,
    y: -100,
    ease: "power4.out",
    delay: 1,
    stagger: {
        amount: 0.3,
    },
});

t1.from(".hr", 1.8, {
    width: 0,
    ease: "power4.out",
    delay: 1,
    stagger: {
        amount: 0.3,
    },
},"-=1.5");

t1.from(".reveal div", 1.8, {
    y: 200,
    ease: "power4.out",
    stagger: {
        amount: 0.8,
    },
},"-=2");

t1.from(".nav-item", 1.8, {
    opacity: 0,
    y: 100,
    ease: "power4.out",
    stagger: {
        amount: 0.3,
    },
},"-=2");

// typewriter

const words = ["SURUCHI SINGH", " a Programmer", "an Artist", "a Nerd"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;
const typeDelay = 100;
const deleteDelay = 50;
const nextWordDelay = 1000;

function type() {
    const dynamicText = document.getElementById("dynamic-text");

    if (isDeleting) {
        dynamicText.textContent = currentWord.slice(0, --letterIndex);
        if (letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, nextWordDelay);
        } else {
            setTimeout(type, deleteDelay);
        }
    } else {
        currentWord = words[wordIndex];
        dynamicText.textContent = currentWord.slice(0, ++letterIndex);
        if (letterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else {
            setTimeout(type, typeDelay);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => setTimeout(type, nextWordDelay));


