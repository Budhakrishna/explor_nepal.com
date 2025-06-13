// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in elements on scroll
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// Dark mode toggle
const darkModeToggle = document.createElement('div');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Lightbox Modal Functionality
const lightboxModal = document.getElementById('lightbox-modal');
const modalImage = document.getElementById('modal-image');
const imageGallery = document.querySelector('.image-gallery');
const closeModal = document.querySelector('.close-modal');

if (lightboxModal && modalImage && imageGallery && closeModal) {
    // Function to open the modal
    const openModal = (mainImageSrc, relatedImages) => {
        modalImage.src = mainImageSrc;
        imageGallery.innerHTML = ''; // Clear previous images

        // Add related images to the gallery
        relatedImages.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = "Related Image";
            img.addEventListener('click', () => {
                modalImage.src = image; // Change main image when a related image is clicked
            });
            imageGallery.appendChild(img);
        });

        lightboxModal.classList.add('active');
    };

    // Function to close the modal
    const closeLightbox = () => {
        lightboxModal.classList.remove('active');
    };

    // Event listeners for destination images
    document.querySelectorAll('.card-image img').forEach(image => {
        image.addEventListener('click', () => {
            const mainImageSrc = image.src;
            const relatedImages = image.getAttribute('data-images').split(',');
            openModal(mainImageSrc, relatedImages);
        });
    });

    // Close modal when clicking the close button or outside the modal
    closeModal.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
}