// How It Works
// The code starts by setting the body's background image to the first slide's background image.

// When the right button is clicked:
// 1) The activeSlide index increases by 1.
// 2)  If it exceeds the number of slides, it loops back to the first slide.
// 3) The setBgToBody() function updates the body's background image.
// 4) The setActiveSlide() function updates the active slide's appearance.


// When the left button is clicked:
// 1) The activeSlide index decreases by 1.
// 2) If it goes below 0, it wraps around to the last slide.
// 3) The same functions (setBgToBody() and setActiveSlide()) are called to update the display.

// Dependencies

// The code assumes the following structure in your HTML and CSS:
// 1) HTML has elements with the class .slide and ids #left and #right.
// 2) Each .slide element has a style property with a background-image defined 
// (e.g., style="background-image: url('path-to-image.jpg')").
// 3) CSS uses the .active class to visually highlight the current slide (e.g., by changing opacity or scaling).
// 4 ) Would you like help with the HTML or CSS setup for this code?