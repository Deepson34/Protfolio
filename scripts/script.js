
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
const section = document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

// Toggle menu bar
menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
};

// Scroll event with throttling
let lastScroll = 0;
window.onscroll = () => {
    if (Date.now() - lastScroll < 50) return; // Throttle interval (50ms)
    lastScroll = Date.now();

    const top = window.scrollY;

    section.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            sec.classList.add('start-animation');

            navlink.forEach(links => {
                links.classList.remove('active');
                document
                    .querySelector(`header nav a[href*=${id}]`)
                    .classList.add('active');
            });
        }
    });

    // Sticky header
    header.classList.toggle('sticky', top > 100);

    // Close navbar on scroll
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active');
};


const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-content');
const closeBtn = document.querySelector('.lightbox .close');

// Open lightbox when an image is clicked
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = item.src;
    });
});

// Close lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Close lightbox when any area outside the image is clicked (clicking the lightbox background)
lightbox.addEventListener('click', (event) => {
    // Close the lightbox only if the background (not the image) is clicked
    if (event.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Close lightbox with any key press
document.addEventListener('keydown', () => {
    lightbox.classList.remove('active');
});



const texts = [
    "SEO enthusiats",
    "Photographer"              
    
];

let currentIndex = 0;

function showText() {
    const displayElement = document.getElementById("textDisplay");
    displayElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length; // Loop back to the start
}

// Change text every 2 seconds
setInterval(showText, 2000);

// Initialize the first text
showText();




