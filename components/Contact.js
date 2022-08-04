import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import contact from '../Accets/Image/contact.png'


const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        toast.success("Your Message Send Success")

    }


    return (
        <div className="lg:py-20 container mx-auto">
            <section className="flex justify-between flex-col lg:flex-row items-center">
                <div className="bg-secondary w-full lg:w-[45%] rounded-xl px-5 py-10 h-auto">
                    <h4 className="flex  items-center  text-accent uppercase text-sm">
                        <div className="sm-row mr-4"></div>
                        let's get started
                    </h4>
                    <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-5 font-extrabold">
                        Get a Free <br />
                        Consultation
                    </h1>
                    <p className="text-accent text-mini mt-2">
                        We always try to implement our creative ideas at the highest level.
                        Tell us about your project and we will make it work.
                    </p>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-14 p-4 contact-form">
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                            <input
                                {...register("name", { required: true })}
                                type="text" placeholder="Name" />
                            <input
                                {...register("email", { required: true })}
                                className="bg-transparent mt-7 lg:mt-0" type="email" placeholder="Email Adress" />
                        </div>
                        <textarea
                            {...register("message", { required: true })}
                            placeholder="Message"></textarea>
                        <button type="submit" className="btn mt-10 btn-outline btn-primary btn-md rounded-full px-7">Send Message</button>
                    </form>
                </div>
                <div className="w-[50%] hidden lg:block">
                    <Image  src={contact} alt="Image Contact"/>
                </div>
            </section>
        </div>
    );
}

export default Contact;
