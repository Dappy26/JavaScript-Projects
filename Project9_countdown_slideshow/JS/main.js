function countdown() {
       // Starting number
    let number = 10;

    // Get countdown display element
    const display = document.getElementById("countdownDisplay");

    // Set initial display value
    display.textContent = number;

    // Create a timer that runs every second
    const timer = setInterval(() => {

        // Decrease the number
        number--;

        // Update the display
        display.textContent = number;

        // Stop countdown at 0
        if (number <= 0) {

            // Stop the timer
            clearInterval(timer);

            // Show finished message
            display.textContent = "Countdown Complete!";
        }

    }, 1000); // 1000ms = 1 second
}


/* ================================
   SLIDESHOW LOGIC
   ================================ */

// Get all slide images
const slides = document.querySelectorAll(".slide");

// Track current slide
let currentSlideIndex = 0;

// Function to display a slide by index
function showSlide(index) {

    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Show selected slide
    slides[index].style.display = "block";
}

// Show first slide on page load
showSlide(currentSlideIndex);

// Move to next slide
function nextSlide() {

    currentSlideIndex++;

    // Loop back to start if at end
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }

    showSlide(currentSlideIndex);
}

// Move to previous slide
function prevSlide() {

    currentSlideIndex--;

    // Loop to last if before first
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    showSlide(currentSlideIndex);
}


/* ================================
   EVENT LISTENERS
   ================================ */

// Start countdown button
document.getElementById("startBtn").addEventListener("click", countdown);

// Slideshow controls
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);
