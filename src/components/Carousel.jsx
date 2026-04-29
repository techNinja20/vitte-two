import React, { useState } from "react"

const images = [
  "https://res.cloudinary.com/dfszoidqb/image/upload/c_fit,f_auto,h_520,q_auto:best,w_1440/v1/glo/production/slider_images/Nigeria/abt0bjm1m0yynhvcgofx.webp",
  "https://res.cloudinary.com/dfszoidqb/image/upload/c_fit,f_auto,h_520,q_auto:best,w_1440/v1/glo/production/slider_images/Nigeria/plz4tkuzrc3ill7orhxi.webp",
  "https://res.cloudinary.com/dfszoidqb/image/upload/c_fit,f_auto,h_520,q_auto:best,w_1440/v1/glo/production/slider_images/Nigeria/lszgtmht78umxgv7xpfi.webp",
  "https://res.cloudinary.com/dfszoidqb/image/upload/c_fit,f_auto,h_520,q_auto:best,w_1440/v1/glo/production/slider_images/Nigeria/unrxxcie0g6cgig3nim7.webp",
  "https://res.cloudinary.com/dfszoidqb/image/upload/c_fit,f_auto,h_520,q_auto:best,w_1440/v1/glo/production/slider_images/Nigeria/akt2elf8bmzvkw0kv7il.webp",
]

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
 
    
    function handleCurrentImage(value) { 
        setCurrentImage(value)
    }

  return (
    <div className="relative" >
      <div className="w-full h-[75vh]">
        <img
          src={images[currentImage]}
          alt=""
          className="w-full h-full object-fit"
        />
      </div>
      <div className="absolute right-5 top-1/2 " >
        {images.map((_, i) => (
          <div onClick={()=>handleCurrentImage(i)} key={i} className={`w-4 h-4 border border-green-500 mt-2 rounded-full ${currentImage === i && "bg-green-500 "}`}></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
