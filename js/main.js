// Countdown Timer Script
// IMPORTANT: Set your exact wedding date and time here!
// Month is 0-indexed (January is 0, December is 11)
// Example: October 26, 2024 6:00 PM
const weddingDate = new Date("July 19, 2025 14:00:00").getTime();

// Define the function that calculates and updates the display
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // --- Calculations for Weeks, Days, Hours ---

    // Define milliseconds in a week, day, and hour
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    const msInDay = 1000 * 60 * 60 * 24;
    const msInHour = 1000 * 60 * 60;

    const weeks = Math.floor(distance / msInWeek);
    const days = Math.floor((distance % msInWeek) / msInDay);
    const hours = Math.floor((distance % msInDay) / msInHour);

    // --- End Calculations ---

    const countdownElement = document.getElementById("countdown");

    if (countdownElement) {
        if (distance < 0) {
            clearInterval(countdownInterval); // Stop the interval if the date is passed
            countdownElement.innerHTML = "WE'RE MARRIED!";
        } else {
            let countdownHTML = ''; // This will build our new HTML structure

            // Weeks Unit
            if (weeks > 0) { // Only show weeks if there are any
                countdownHTML += `
                    <div class="countdown-unit">
                        <span class="countdown-number">${weeks}</span>
                        <span class="countdown-label">${weeks === 1 ? 'week' : 'weeks'}</span>
                    </div>
                `;
            }

            // Days Unit
            countdownHTML += `
                <div class="countdown-unit">
                    <span class="countdown-number">${days}</span>
                    <span class="countdown-label">${days === 1 ? 'day' : 'days'}</span>
                </div>
            `;

            // Hours Unit
            countdownHTML += `
                <div class="countdown-unit">
                    <span class="countdown-number">${hours}</span>
                    <span class="countdown-label">${hours === 1 ? 'hour' : 'hours'}</span>
                </div>
            `;

            countdownElement.innerHTML = countdownHTML;
        }
    }
}

// 1. Call the function immediately when the script loads
updateCountdown();

// 2. Then, set the interval to update every hour
const countdownInterval = setInterval(updateCountdown, 1000 * 60 * 60); // Update every hour

// Scroll to Top Button Logic
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to toggle button visibility based on scroll position
function toggleScrollToTopButton() {
    // If the page is scrolled down more than 300 pixels
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add("show"); // Add 'show' class to make it visible
    } else {
        scrollToTopBtn.classList.remove("show"); // Remove 'show' class to hide it
    }
}

// Add a scroll event listener to the window
window.addEventListener("scroll", toggleScrollToTopButton);

// Add a click event listener to the button
scrollToTopBtn.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the default anchor link behavior (#)
    window.scrollTo({
        top: 0, // Scroll to the very top of the page
        behavior: "smooth" // Make the scroll animated and smooth
    });
});