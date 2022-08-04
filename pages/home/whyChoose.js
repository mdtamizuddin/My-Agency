

const WhyChoose = () => {
    return (
        <div>
            <section className="container mx-auto flex flex-col lg:flex-row justify-between pt-10 mt-10">
                <div className="lg:w-[50%] sm-w-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <div className="flex flex-col items-center p-5 bg-secondary h-40 rounded-sm justify-center">
                                <h1 className="text-2xl font-bold">235 <sup className="text-primary ">+</sup></h1>
                                <p className="mt-2">Setisfied Clients</p>
                            </div>
                            <div className="flex flex-col items-center p-5 bg-secondary h-40 rounded-sm justify-center mt-5">
                                <h1 className="text-2xl font-bold">235 <sup className="text-primary ">+</sup></h1>
                                <p className="mt-2">Setisfied Clients</p>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="flex flex-col items-center p-5 bg-secondary h-40 rounded-sm justify-center ">
                                <h1 className="text-2xl font-bold">235 <sup className="text-primary ">+</sup></h1>
                                <p className="mt-2">Setisfied Clients</p>
                            </div>
                            <div className="flex flex-col items-center p-5 bg-secondary h-40 rounded-sm justify-center mt-5">
                                <h1 className="text-2xl font-bold">235 <sup className="text-primary ">+</sup></h1>
                                <p className="mt-2">Setisfied Clients</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="lg:w-[45%] z-50 w-full py-10  flex flex-col justify-center items-start ">
                    <h3 className="flex  items-center  text-accent uppercase text-sm">
                        <div className="sm-row mr-4"></div>
                        a few words
                    </h3>
                    <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-5 font-bold">
                        Why choose us
                    </h1>
                    <div className="text-accent py-4 mb-2 mt-6 flex items-start">
                        <i className="fa-solid fa-check-double pr-3 mt-1 text-primary"></i>
                        <div>
                            <h2 className="text-xl">Modern Tecnologies</h2>
                            <small>Discussion is an important thing in the development <br /> process. Thus new ideas and ingenious solutions are born. </small>
                        </div>
                    </div>
                    <div className="text-accent py-4 mb-2 flex items-start">
                        <i className="fa-solid fa-check-double pr-3 mt-1 text-primary"></i>
                        <div>
                            <h2 className="text-xl">Huge Digital Experience</h2>
                            <small>Discussion is an important thing in the development <br /> process. Thus new ideas and ingenious solutions are born. </small>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default WhyChoose;