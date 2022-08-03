import Image from "next/image";

const ServiceCard = ({ icon, name1, name2 }) => {
    return (
        <div className="w-full h-96 p-4 flex flex-col items-center  shadow-sm shadow-secondary hover:bg-secondary rounded-xl">
            <div className="w-28 h-28 rounded-full bg-secondary flex justify-center items-center mt-5">
                <Image src={icon} alt='' />
            </div>
            <h2 className="text-2xl mt-5">{name1}</h2>
            <h2 className="text-2xl">{name2}</h2>

            <button className="mt-7 py-1 text-sm border-b-2 hover:border-secondary btn-service flex items-center text-primary border-primary">READ MORE
                <i className="fa-solid hover-Hide fa-arrow-right ml-3"></i>
            </button>
        </div>
    );
}

export default ServiceCard;