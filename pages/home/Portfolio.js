import PortCard from "../../components/Cards/PortCard";

const Portfolio = () => {
    return (
        <div className="bg-secondary h-[80vh] flex justify-center items-center">
            <div className="container mx-auto">
                <h4 className="flex  items-center  text-accent uppercase text-sm">
                    <div className="sm-row mr-4"></div>
                    portfolio
                </h4>
                <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-3 font-extrabold">
                    Our Letest Works
                </h1>
                <p className="text-accent mt-2">You may be interested in what we can offer you. More services you <br /> can find below. We do everything at a high level.</p>

                <div className="grid grid-cols-4 mt-20 gap-2">
                    <PortCard />
                    <PortCard />
                    <PortCard />
                    <PortCard />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;