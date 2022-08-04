import Image from 'next/image';
import React, { useState } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../Accets/Image/web/website-1.png'
import img2 from '../../Accets/Image/web/website-2.png'
import img3 from '../../Accets/Image/web/website-3.png'
import img4 from '../../Accets/Image/web/website-4.png'
import img5 from '../../Accets/Image/web/website-5.png'
const Header = () => {
    const images = [img1, img2, img3, img4, img5]


    const [number, setNumber] = useState(0)
    const enc = () => {
        images.length - 1 === number ? setNumber(0) : setNumber(number + 1)
    }
    const dec = () => {
        number === 0 ? setNumber(images.length - 1) : setNumber(number - 1)
    }


    return (
        <div className="w-full h-auto">
            <div className="container mx-auto h-full flex lg:flex-row flex-col  items-center justify-between relative">

                <div className="z-10 lg:ml-5 mt-10 bg-secondary bg-only">
                    <h3 className="flex  items-center text-accent uppercase text-sm">
                        <div className="sm-row mr-4"></div>
                        Creative Ideas
                    </h3>
                    <h1 className="lg:text-6xl header-head md:text-4xl text-5xl leading-none mt-5 font-bold">
                        Creative Web <br />
                        Development
                    </h1>
                    <p className="text-accent mt-5">We create new technologies for your business thanks <br /> to our wonderful team of professionals.</p>
                    <div className="flex items-center mt-10">
                        <button className="bg-primary play-btn  flex justify-center items-center rounded-full w-16 h-16 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="{2}">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>

                        <span>
                            <h5 className="mb-2">ABOUT US</h5>
                            <div className="lg-row"></div>
                            <p className="text-primary mt-2">Promotion video</p>
                        </span>
                    </div>
                </div>


                <div className="lg:w-[50%] w-full mt-5 md:flex items-center justify-center">

                    <div className='rounded-xl overflow-hidden flex justify-center items-center'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            {
                                images.map((img, index) => <SwiperSlide key={index}>
                                    <Image src={img} alt="" />
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;