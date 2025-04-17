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

// Get references to elements
const openPDFLink = document.getElementById('openPDFLink');
const pdfModal = document.getElementById('pdfModal');
const closeModal = document.getElementById('closeModal');
const pdfViewer = document.getElementById('pdfViewer');

// The URL of the PDF to display
const pdfSrc = 'Resume.pdf';

// Function to open the modal with the PDF
openPDFLink.addEventListener('click', (event) => {
    event.preventDefault();
    pdfModal.style.display = 'flex';
    pdfViewer.data = pdfSrc;
});

closeModal.addEventListener('click', () => {
    pdfModal.style.display = 'none';
});
