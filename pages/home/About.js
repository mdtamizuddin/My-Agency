import Image from "next/image";
import aboutImg from '../../Accets/Image/about.png'
const About = () => {
    return (
        <main className="lg:mt-10">
            <section className="container mx-auto flex flex-col lg:flex-row justify-between pt-10">
                <div className="lg:w-[50%] sm-w-full flex items-center">
                    <Image  loading="eager" src={aboutImg} alt="about image"/>
                </div>
                <div className="lg:w-[45%] z-50 w-full lg:py-10  flex flex-col justify-center items-start ">
                    <h3 className="flex  items-center  text-accent uppercase text-sm">
                        <div className="sm-row mr-4"></div>
                        about us
                    </h3>
                    <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-5 font-bold">
                    We are Experts <br /> in Our Field
                    </h1>
                    <p className="text-accent py-4 mb-2">
                        Our digital company of professionals has been <br />developing products for 15 years.
                    </p>
                    <p className="text-accent">
                        We’ve got a lot of awards for our work and develop <br /> applications that became popular in the world. Every <br />morning in our company begins with hot coffee and a <br />stand-up. Discussion is an important thing in the <br />development process. Thus new ideas and ingenious <br />solutions are born. Then we get to work with renewed <br />vigor and inspiration. We are never bored.
                    </p>
                    <button className="mt-7 py-1 border-b-2 hover:border-neutral text-primary border-primary transition delay-300 ">READ MORE 
                    <i className="fa-solid fa-arrow-right ml-3"></i>
                    </button>
                </div>
            </section>
        </main>
    );
}

export default About;