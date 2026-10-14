import React, { useEffect, useState } from 'react'
import image1 from "../assets/Images/carouselImages/image1.png"
import image2 from "../assets/Images/carouselImages/image2.png"
import image3 from "../assets/Images/carouselImages/image3.png"
const Carousel = () => {
    const images= [image1,image2,image3]
    const [slideInterval,setSlideInterval] = useState(4000)
     const [carouselImages, setCarouselImages] = useState(images)
     const [currentIndex,setCurrentIndex] = useState(0)

    function nextSlide() {
      setCurrentIndex((prevIndex)=>prevIndex === carouselImages.length-1 ? 0 : prevIndex+1)
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            nextSlide()
        },slideInterval)
        return ()=>clearInterval(timer)
    },[slideInterval,carouselImages.length])
    return (
    <div className=' relative w-full lg:mt-5 xl:mt-0 h-[24rem] lg:h-[36rem] xl:h-[45rem] sm:h-[27rem] md:h-[37rem] overflow-hidden rounded-lg'>
           {
            carouselImages.map((image,index)=>(
                <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={image} alt={`Slide ${index}`} className='w-full h-full object-cover object-top'/>
                </div>
            ))
           }
    </div>
  )
}

export default Carousel