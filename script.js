// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
});

// Smooth Scrolling
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Booking Form Submission Handler
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    // Phone Validation
    const phoneRegex = /^[0-9]{10}$/; // Modify as needed for your phone format
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    // Date Validation
    const bookingDate = new Date(date);
    if (isNaN(bookingDate.getTime()) || bookingDate < new Date()) {
        alert('Please select a valid booking date.');
        return;
    }

    // Save booking to localStorage
    const bookingDetails = {
        phone: phone,
        date: bookingDate.toISOString(),
    };

    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(bookingDetails);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Success Message Display
    alert('Booking successful!');

    // Clear the form
    bookingForm.reset();
    displayBookings();
});

// Display Booking History
function displayBookings() {
    const bookingHistory = document.getElementById('booking-history');
    bookingHistory.innerHTML = '';
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    bookings.forEach(booking => {
        const bookingElement = document.createElement('div');
        bookingElement.innerText = `Phone: ${booking.phone}, Date: ${new Date(booking.date).toLocaleString()}`;
        bookingHistory.appendChild(bookingElement);
    });
}

// Load booking history on page load
document.addEventListener('DOMContentLoaded', displayBookings);