// Refers to the <body> of the HTML document.
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// activeSlide: Keeps track of the currently visible slide. Starts at 0 (the first slide).

let activeSlide = 0

// Increments activeSlide to move to the next slide.
// If activeSlide exceeds the last slide index (slides.length - 1), it wraps around to the first slide (activeSlide = 0).
// Updates the background image and the active slide's appearance.

    rightBtn.addEventListener("click" , () => {
       activeSlide++

      if (activeSlide > slides.length -1 ) {
         activeSlide = 0

      }

      setBgToBody()
      setActiveSlide()

})

// Decrements activeSlide to move to the previous slide.
// If activeSlide becomes negative, it wraps around to the last slide (activeSlide = slides.length - 1).
// Updates the background image and the active slide's appearance.

leftBtn.addEventListener('click', () => {
    activeSlide--
  
    if (activeSlide < 0) {
      activeSlide = slides.length - 1
    }
  
    setBgToBody()
    setActiveSlide()
  })
  
//   Changes the background image of the body to match the background-image style of the currently active slide.

  setBgToBody()

  function setBgToBody (){
       body.style.backgroundImage = slides[activeSlide].style.backgroundImage
  }

  function setActiveSlide() {
      slides.forEach((slide) => slide.classList.remove ('active'))

      slides[activeSlide].classList.add('active')


  }
    


