// These lines grab elements from the DOM (HTML) using their respective class names.
// .hour, .minute, and .second likely represent clock hands.
// .time is used to display the current time in text format.
// .date is for displaying the current date.
// .toggle is a button that toggles between light and dark mode.
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

// These arrays store the names of the days and months for easy lookup.
// They are used when displaying the current date.


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// This code adds a click event listener to the toggle button.
// When clicked:
// If the <html> element has the dark class, it removes it (switching to light mode) and updates the button text to "Dark mode."
// If the dark class is absent, it adds it (switching to dark mode) and updates the button text to "Light mode."

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light mode';
    }
});

function setTime() {
    const time = new Date();
    const month = time.getMonth(); // Current month (0-11)
    const day = time.getDay(); // Day of the week (0-6)
    const date = time.getDate(); // Day of the month (1-31)
    const hours = time.getHours(); // Current hour (0-23)
    const hoursForClock = hours >= 13 ? hours % 12 : hours; // Convert 24-hour format to 12-hour
    const minutes = time.getMinutes(); // Current minute (0-59)
    const seconds = time.getSeconds(); // Current second (0-59)
    const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM

    // Rotate clock hands based on the current time
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    // Update the text-based time display
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;

    // Update the date display
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}


// Clock Hands Movement:
// The hourEl, minuteEl, and secondEl elements are rotated using the transform property. The rotate values are calculated with the scale function (explained below).
// Text Display:
// The current time is formatted as hh:mm AM/PM.
// The date is displayed as Day, Month Date (e.g., "Monday, Jan 22").
// 5. Scale Function
// javascript
// Copy
// Edit


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

// This function maps a number from one range to another.
// For example:
// Hours (0–12) are scaled to degrees (0–360) for the clock hand.
// Minutes (0–60) and seconds (0–60) are similarly scaled.

// Summary
// This code creates an analog clock with rotating hands and a text-based digital display of the time and date.
// A "dark mode" toggle allows switching between light and dark themes.
// The scale function ensures accurate positioning of the clock hands based on the current time.







