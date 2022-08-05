import BlogSm from "../../components/Cards/blogSm";

const RecentPosts = () => {
    return (
        <div className="my-20 py-14">
            <div className="container mx-auto">
                <h4 className="flex   items-center  text-accent uppercase text-sm">
                    <div className="sm-row mr-4"></div>
                    Recent posts
                </h4>
                <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-3 font-extrabold">
                    Letest In CO-AG
                </h1>
                <p className="text-accent mt-2">
                    You may be interested in our technologies. We want to share more <br /> helpful infomation with you about our digital life and methods.
                </p>

                <section className="flex mt-14 flex-col lg:flex-row">
                    <div className="box-1 grid gap-y-5 ">
                        <BlogSm />
                        <BlogSm />
                    </div>

                    <div className="blog-card mt-10 lg:mt-0 lg:ml-52 ">
                        <div className="bg-neutral w-full py-5 px-3">
                            <div className="flex items-center">
                                <span className="px-3 py-1 bg-primary">Portfolio</span>
                                <small className="ml-5 text-accent text-sm">Apr 06, 2022</small>
                            </div>
                            <h2 className="text-xl mt-4">
                                Best 20 useful tools for people <br /> who
                                like to spend time in ...
                            </h2>
                            <button className="my-3 py-1 border-b-2 hover:border-neutral text-primary border-primary transition delay-300 ">Read More
                                <i className="fa-solid fa-arrow-right ml-3"></i>
                            </button>
                        </div>

                    </div>
                </section>



            </div>
        </div>
    );
}

export default RecentPosts;