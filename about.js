const t1 = gsap.timeline();

// Animate intro content
t1.from(".intro > div", 1.8, {
    opacity: 0,
    y: -100,
    ease: "power4.out",
    delay: 0,
    stagger: {
        amount: 0.3,
    },
});

// Animate horizontal lines
t1.from(".hr", 1.8, {
    width: 0,
    ease: "power4.out",
    delay: 1,
    stagger: {
        amount: 0.3,
    },
}, "-=1.5");

// Animate name, back-to-home, and image together like reveal effect
t1.from([".reveal div", ".right", ".image"], 1.8, {
    y: 200,
    opacity: 0,
    ease: "power4.out",
    stagger: {
        amount: 0.8,
    },
}, "-=2");

// Animate nav items (Resume, Art account, etc.)
t1.from(".nav-item", 1.8, {
    opacity: 0,
    y: 100,
    ease: "power4.out",
    stagger: {
        amount: 0.3,
    },
}, "-=2");

// ===== Resume Modal Logic =====
const openPDFLink = document.getElementById('openPDFLink');
const pdfModal = document.getElementById('pdfModal');
const closeModal = document.getElementById('closeModal');
const pdfViewer = document.getElementById('pdfViewer');

// Path to your resume
const pdfSrc = 'Resume.pdf';

openPDFLink.addEventListener('click', (event) => {
    event.preventDefault();
    pdfModal.style.display = 'flex';
    pdfViewer.data = pdfSrc;
});

closeModal.addEventListener('click', () => {
    pdfModal.style.display = 'none';
});
