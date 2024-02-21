// script.js

function toggleMenu() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block' || dropdownContent.style.display === '') ? 'none' : 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(n) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slides[n].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Display the first slide
    showSlide(currentSlide);

    // Set interval for automatic slideshow
    setInterval(nextSlide, 5000); // Change 5000 to the desired interval in milliseconds
});


function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        }).then(() => {
            console.log('Page shared successfully!');
        }).catch((error) => {
            console.error('Error sharing page:', error);
        });
    } else {
        console.log('Web Share API not supported on this browser.');
    }
}

function openPopup(category) {
    document.getElementById(`${category}Popup`).style.display = 'flex';
}

function closePopup(category) {
    document.getElementById(`${category}Popup`).style.display = 'none';
}