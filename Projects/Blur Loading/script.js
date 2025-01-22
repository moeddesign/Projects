const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg")

let load = 0 

let int = setInterval(blurring , 30)


function blurring(){
    load++


if (load > 99) {
       clearInterval(int)
}

// Stops the repeated execution of the blurring function when loading is complete (at 100%).


loadText.innerHTML =`${load}%`

// Adjusts the transparency of the loading text so it fades out from fully visible (1) to invisible (0) as load goes from 0 to 100

loadText.style.opacity = scale( load, 0 , 100 , 1 ,0)


// Dynamically applies a CSS blur() filter to reduce the blur from 30px to 0px (fully clear) as load increases.

bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

// This function maps a number (num) from one range (in_min to in_max) to another range (out_min to out_max).

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

