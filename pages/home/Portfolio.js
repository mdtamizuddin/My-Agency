import PortCard from "../../components/Cards/PortCard";

const Portfolio = () => {
    return (
        <div className="bg-secondary  h-auto flex justify-center items-center py-20 mt-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between lg:items-end">
                    <div>
                        <h4 className="flex  items-center  text-accent uppercase text-sm">
                            <div className="sm-row mr-4"></div>
                            portfolio
                        </h4>
                        <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-3 font-extrabold">
                            Our Letest Works
                        </h1>
                        <p className="text-accent mt-2">You may be interested in what we can offer you. More services you <br /> can find below. We do everything at a high level.</p>
                    </div>
                    <div>
                        <button className="mt-7 py-1 border-b-2 hover:border-secondary text-primary border-primary transition delay-300 ">View All Project's
                            <i className="fa-solid fa-arrow-right ml-3"></i>
                        </button>
                    </div>
                </div>

                <div className="grid portfolio-container mt-20 gap-x-2 gap-y-5">
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