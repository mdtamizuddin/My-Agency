import Logo from '../components/Logo'
import Image from "next/image";
import { Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

const Footer = () => {
    return (
        <div className="pt-16">
            <div className="container mx-auto grid grid-cols-1 gap-20 md:grid-cols-2">
                <div className="bg-secondary bg-only px-5 py-10">
                    <h4 className="flex   items-center  text-accent uppercase text-sm">
                        <div className="sm-row mr-4"></div>
                        Newslatter
                    </h4>
                    <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-3 font-extrabold">
                        Be Always <br /> In Tuch
                    </h1>
                    <p className="text-accent mt-2">
                        We are grateful to know you are interested in our  <br /> content and services. Subscribe
                    </p>
                    <div className="flex items-end justify-between mt-10">
                        <input type="text" placeholder="Email" className="input-my" />
                        <button

                            className="bg-primary play-btn-sm  flex justify-center items-center rounded-full w-14 h-14 ">
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center mb-10 lg:mb-0">
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
                            reviews.map(review => <SwiperSlide key={review.id}>
                                <div className="flex items-start justify-center flex-col w-96 ">
                                    <div className="flex items-center
                                    
                                    ">
                                        <Image src={review.photoURL}
                                            width={70}
                                            height={70}
                                            alt=""
                                        />
                                        <div className="ml-5">
                                            <p
                                                className="text-xl"
                                            >{review.displayName}</p>
                                            <small className="text-mini text-accent">{review.who}</small>
                                        </div>
                                    </div>
                                    <p className="text-xl mt-7 text-accent">{review.review}</p>

                                    <div className="mt-5">
                                        <Image src={review.signeture}
                                            width={120}
                                            height={80}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </div>
            </div>
            <footer className="container mx-auto grid-cols-1 lg:grid-cols-4 md:grid-cols-2 grid py-8 border-t mt-20 gap-y-7">
                <div className='flex items-start flex-col'>
                    <Logo />
                    <p className='mt-3 text-accent'>Copyright © 2020 Crope.</p>
                </div>
                <div className='flex items-start flex-col'>
                    <h5 className='font-bold text-mini'>Working Houres</h5>
                    <p className='mt-3 text-accent'>
                        Mon - Fri: 9 am - 6 pm <br />
                        Sat, Sun: Holiday
                    </p>
                </div>
                <div className='flex items-start flex-col'>
                    <h5 className='font-bold text-mini'>Adress</h5>
                    <p className='mt-3 text-accent'>
                        27 Division St, New York, <br /> NY 10002, USA
                    </p>
                </div>
                <div className='flex items-start flex-col'>
                    <h5 className='font-bold text-mini'>Hit us up:</h5>
                    <p className='mt-3 text-accent'>
                        +1 845 631 78 49 <br />
                        info@sitename.com
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;


const reviews = [
    {
        id: 1,
        photoURL: 'https://i.ibb.co/HhVt70D/doctor8.png',
        displayName: 'Jhon Wilson',
        who: 'CEO at An Web Agency',
        review: 'We never give up. Сhallenges make us stronger and more professional. Keep in mind. Beware ;)',
        signeture: 'https://i.ibb.co/fCSrS5X/signature.png'
    },
    {
        id: 2,
        photoURL: 'https://i.ibb.co/HhVt70D/doctor8.png',
        displayName: 'Jhon Wilson',
        who: 'CEO at An Web Agency',
        review: 'We never give up. Сhallenges make us stronger and more professional. Keep in mind. Beware ;)',
        signeture: 'https://i.ibb.co/fCSrS5X/signature.png'
    },
    {
        id: 3,
        photoURL: 'https://i.ibb.co/HhVt70D/doctor8.png',
        displayName: 'Jhon Wilson',
        who: 'CEO at An Web Agency',
        review: 'We never give up. Сhallenges make us stronger and more professional. Keep in mind. Beware ;)',
        signeture: 'https://i.ibb.co/fCSrS5X/signature.png'
    }
]