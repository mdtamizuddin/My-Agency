const Modal = ({ show, seShow, children }) => {
    return (
        <>
            {
                show ?
                    <div>

                        <div className={`absolute w-full h-screen bg-secondary top-0 z-50 animate__animated  delay-200 ${show ? 'animate__fadeIn' : 'animate__fadeOut'}`}>
                            <button
                                onClick={() => seShow(false)}
                                className="close-btn absolute top-10 right-12 text-white hover:text-primary">
                                <i className="fa-solid fa-xmark "></i>
                            </button>
                            <div className="text-white w-full h-full flex justify-center items-center">
                                {children}
                            </div>
                        </div>


                    </div>
                    :
                    <>
                    </>
            }
        </>
    );
}

export default Modal;