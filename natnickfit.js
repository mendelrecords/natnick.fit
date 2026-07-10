const images = [
    "fitpics/Fit_1.png", "fitpics/Fit_2.png", "fitpics/Fit_3.png", "fitpics/Fit_4.png", 
    "fitpics/Fit_5.png", "fitpics/Fit_6.png", "fitpics/Fit_7.png",  "fitpics/Fit_8.png", "fitpics/Fit_9.png", 
    "fitpics/Fit_10.png",  "fitpics/Fit_11.png", "fitpics/Fit_12.png", "fitpics/Fit_13.png", "fitpics/Fit_14.png",
    "fitpics/Fit_15.png", "fitpics/Fit_16.png", "fitpics/Fit_17.png", "fitpics/Fit_18.png", "fitpics/Fit_19.png",
    "fitpics/Fit_20.png", "fitpics/Fit_21.png", "fitpics/Fit_22.png", "fitpics/Fit_23.png", "fitpics/Fit_24.png", 
    "fitpics/Fit_25.png", "fitpics/Fit_26.png", "fitpics/Fit_27.png", "fitpics/Fit_28.png", "fitpics/Fit_Feet.png",
    "fitpics/Joey.png" 
    
    ]


    let i = 0 

    function placeImage(x,y) {
        
        const nextImage = images[i]

        const img = document.createElement("img")
        img.setAttribute("src", nextImage)
        img.style.left = x + "px"
        img.style.top = y + "px"
        img.style.transform = "translate(-50%, -50%) scale(0.25) position:absolute"

        document.body.appendChild(img)
        i = i + 1

        if (i >= images.length){

            i = 0
        }


    }

  document.addEventListener("click", function (event) {

    event.preventDefault()
    placeImage(event.pageX, event.pageY)

  })

  document.addEventListener("touchend", function (event){

    event.preventDefault()
    placeImage(event.pageX, event.pageY)

  })