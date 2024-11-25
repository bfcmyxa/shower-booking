// Mock database for booked slots
const bookedSlots = JSON.parse(localStorage.getItem("bookedSlots")) || [];

// Form elements
const form = document.getElementById("booking-form");
const timeSelect = document.getElementById("time");
const statusDiv = document.getElementById("status");

// Handle form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedTime = timeSelect.value;

    if (bookedSlots.includes(selectedTime)) {
        statusDiv.textContent = `⛔ Slot ${selectedTime} is already booked.`;
        statusDiv.style.color = "red";
    } else {
        bookedSlots.push(selectedTime);
        localStorage.setItem("bookedSlots", JSON.stringify(bookedSlots));
        statusDiv.textContent = `✅ Slot ${selectedTime} is successfully booked!`;
        statusDiv.style.color = "green";

        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 5000);
    }
});
