import Image from "next/image";

const PortCard = () => {
    return (
        <div
            style={{
                backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/agency-89d42.appspot.com/o/web%2Fwebsite-4.png?alt=media&token=44023fdf-001c-4f86-a0e0-6df8361dbd59')`
            }}
            className="w-full relative port-card rounded-lg overflow-hidden h-80 bg-center bg-cover">
            {/* <Image src={''} alt="" 
            width={1080} 
            height={920}
            /> */}

            <div className="overlay absolute top-0 bg-secondary w-full h-full shadow-gray-800 shadow-md delay-300">
            OverLay
            </div>
        </div>
    );
}

export default PortCard;