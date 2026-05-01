"use client"
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
function SliderBanner() {
    const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className=' h-96 my-2 w-6xl mx-auto'>
        <Slider {...settings}>
            <div className=' w-full h-full'>
                <Image src="/images/b1.webp" alt='banner1' className=' w-full h-full' height={100} width={1000} />
            </div>
            <div className=' h-full w-full'>
                <Image src="/images/b2.webp" className=' h-full w-full' alt='banner1' height={100} width={1000} />
            </div>
        </Slider>
    </div>
  )
}

export default SliderBanner