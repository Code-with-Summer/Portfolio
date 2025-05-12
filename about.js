const t1 = gsap.timeline();

// Animate name, Back to Home, and image together
t1.from([".reveal div", ".right", ".image"], 1.2, {
    opacity: 0,
    y: 100,
    ease: "power4.out",
    stagger: {
        amount: 0.4,
    },
});

// Animate horizontal rules
t1.from(".hr", 1.2, {
    width: 0,
    ease: "power4.out",
}, "-=0.8");

// Animate nav items like Resume and Art Account
t1.from(".nav-item", 1.2, {
    opacity: 0,
    y: 100,
    ease: "power4.out",
    stagger: {
        amount: 0.3,
    },
}, "-=0.8");

// Animate text/intros below
t1.from(".intro > div", 1.2, {
    opacity: 0,
    y: -100,
    ease: "power4.out",
    stagger: {
        amount: 0.3,
    },
}, "-=1");

// Resume modal logic
const openPDFLink = document.getElementById('openPDFLink');
const pdfModal = document.getElementById('pdfModal');
const closeModal = document.getElementById('closeModal');
const pdfViewer = document.getElementById('pdfViewer');

// PDF file source
const pdfSrc = 'Resume.pdf';

// Open PDF modal
openPDFLink.addEventListener('click', (event) => {
    event.preventDefault();
    pdfModal.style.display = 'flex';
    pdfViewer.data = pdfSrc;
});

// Close modal
closeModal.addEventListener('click', () => {
    pdfModal.style.display = 'none';
});
