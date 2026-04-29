import { useState } from "react"

const images = [
  "https://res.cloudinary.com/dfszoidqb/image/upload/c_fit,f_auto,h_520,q_auto:best,w_1440/v1/glo/production/slider_images/Nigeria/abt0bjm1m0yynhvcgofx.webp",
  "https://res.cloudinary.com/dfszoidqb/image/upload/c_fit,f_auto,h_520,q_auto:best,w_1440/v1/glo/production/slider_images/Nigeria/plz4tkuzrc3ill7orhxi.webp",
  "https://res.cloudinary.com/dfszoidqb/image/upload/c_fit,f_auto,h_520,q_auto:best,w_1440/v1/glo/production/slider_images/Nigeria/unrxxcie0g6cgig3nim7.webp",
  "https://res.cloudinary.com/dfszoidqb/image/upload/c_fit,f_auto,h_520,q_auto:best,w_1440/v1/glo/production/slider_images/Nigeria/lszgtmht78umxgv7xpfi.webp",
  "https://res.cloudinary.com/dfszoidqb/image/upload/c_fit,f_auto,h_520,q_auto:best,w_1440/v1/glo/production/slider_images/Nigeria/akt2elf8bmzvkw0kv7il.webp",
]

const GloCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  function updateImage(value) {
    setCurrentSlide(value)
  }

  return (
    <div className="relative">
      <div className="w-full h-[75vh] ">
        <img
          src={images[currentSlide]}
          alt=""
          className="w-full h-full object-cover "
        />
      </div>

      <div className="absolute top-1/2 right-5 ">
        {images.map((_, i) => (
          <div
            onClick={()=>updateImage(i)}
            key={i}
            className={`w-6 h-6 rounded-full border border-green-900 mt-2 ${i === currentSlide && "bg-green-900"} `}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default GloCarousel
