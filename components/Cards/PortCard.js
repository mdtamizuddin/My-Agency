import Image from "next/image";

const PortCard = () => {
    return (
        <div
            style={{
                backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/agency-89d42.appspot.com/o/web%2Fwebsite-4.png?alt=media&token=44023fdf-001c-4f86-a0e0-6df8361dbd59')`
            }}
            className="w-full relative port-card rounded-sm overflow-hidden h-80 bg-center bg-cover">


            <div className="overlay absolute top-0 bg-secondary w-full h-full border-gray-700 
            animate__fadeInDown animate__animated border
            ">
                <Image src={'https://firebasestorage.googleapis.com/v0/b/agency-89d42.appspot.com/o/web%2Fwebsite-4.png?alt=media&token=44023fdf-001c-4f86-a0e0-6df8361dbd59'} 
                width={400} height={300}
                alt=""/>
                <p className="text-xl text-accent mt-5">
                    This Web Site Designed By Dangerous Programmers
                </p>
                <button className="mt-7 py-1 border-b-2 hover:border-secondary text-primary border-primary transition delay-300 ">Read More
                    <i className="fa-solid fa-arrow-right ml-3"></i>
                </button>
            </div>
        </div>
    );
}

export default PortCard;