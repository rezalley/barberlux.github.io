// booking.js

// Functionality for booking system

// This function initializes the booking system
function initBookingSystem() {
    const form = document.getElementById('booking-form');
    const serviceSelect = document.getElementById('service-select');
    const dateTimeInput = document.getElementById('date-time');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Set up event listeners
    form.addEventListener('submit', handleFormSubmit);
}

// This function handles the form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const service = document.getElementById('service-select').value;
    const dateTime = document.getElementById('date-time').value;

    // Validate fields
    if (!validateForm(service, dateTime)) return;

    // Store booking in localStorage
    storeBooking(service, dateTime);

    // Display confirmation message
    showConfirmationMessage(service, dateTime);
}

// This function validates the form
function validateForm(service, dateTime) {
    if (!service || !dateTime) {
        alert('Please select a service and a date/time.');
        return false;
    }
    return true;
}

// This function stores the booking in localStorage
function storeBooking(service, dateTime) {
    const booking = { service, dateTime };
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// This function shows the confirmation message
function showConfirmationMessage(service, dateTime) {
    const confirmationMessage = `Booking confirmed!\nService: ${service}\nDate/Time: ${dateTime}`;
    alert(confirmationMessage);
}

// Initialize the booking system on page load
window.onload = initBookingSystem;