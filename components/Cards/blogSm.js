import Image from "next/image";

const BlogSm = () => {
    return (
        <div className="flex items-center">
            <Image src={'https://i.ibb.co/6yzMLx4/doctor5.png'} alt=""
                width={130}
                height={150}
            />
            <div className="ml-5">
                <div className="flex items-center">
                    <span className="px-3 py-1 bg-primary">Corporate</span>
                    <small className="ml-5 text-accent text-sm">Apr 06, 2022</small>
                </div>
                <h2 className="text-xl font-bold mt-2">
                    Where to find clients and how <br /> to develop cool ...
                </h2>
                <button className="mt-2 py-1 border-b-2 hover:border-neutral text-primary border-primary transition delay-300 ">Read More
                    <i className="fa-solid fa-arrow-right ml-3"></i>
                </button>
            </div>
        </div>
    );
}

export default BlogSm;