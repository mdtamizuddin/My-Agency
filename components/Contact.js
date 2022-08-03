import { useForm } from "react-hook-form";
import toast from "react-hot-toast";



const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <ToastP name={data.name} />
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        ))

    }


    return (
        <div className="py-10 container mx-auto">
            <div className="bg-secondary  lg:w-[40%] rounded-xl px-5 py-10 h-auto">
                <h4 className="flex  items-center  text-accent uppercase text-sm">
                    <div className="sm-row mr-4"></div>
                    let's get started
                </h4>
                <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-3 font-extrabold">
                    Get a Free <br />
                    Consultation
                </h1>
                <p className="text-accent text-mini mt-2">
                    We always try to implement our creative ideas at the highest level. <br />
                    Tell us about your project and we will make it work.
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-14 p-4 contact-form">
                    <div className="grid grid-cols-2 gap-5">
                        <input
                            {...register("name", { required: true })}
                            type="text" placeholder="Name" />
                        <input
                            {...register("email", { required: true })}
                            className="bg-transparent" type="email" placeholder="Email Adress" />
                    </div>
                    <textarea
                        {...register("message", { required: true })}
                        placeholder="Message"></textarea>
                    <button type="submit" className="btn mt-10 btn-outline btn-primary btn-md rounded-full px-7">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;

const ToastP = ({ name }) => {
    return (
        <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                        alt=""
                    />
                </div>
                <div className="ml-3 flex-1">
                    <p className="text-sm capitalize font-medium text-gray-900">
                        {name} message was send
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                        On 8:30pm !
                    </p>
                </div>
            </div>
        </div>
    )
}