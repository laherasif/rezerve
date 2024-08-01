"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CustomSlider = ({children} ) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        }
    };


    const Dots = ({ active, onClick }) => {
        return (
            <div onClick={onClick} className={`border w-2.5 h-2.5 cursor-pointer rounded-full mx-1 ${active ? 'bg-[#176B87]' : 'bg-gray-300'}`}></div>
        )
    }



    return (
        <>
            <div className=''>
                <Carousel
                    responsive={responsive}
                    containerClass="py-5"
                    showDots={true}
                    autoPlay
                    arrows={false}
                    customDot={<Dots />}
                    infinite
                >
                    {children}
                </Carousel>
            </div>
        </>
    )
}

// transition-transform duration-300 transform hover:scale-105 hover:shadow-md

export default CustomSlider