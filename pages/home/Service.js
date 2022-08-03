import ServiceCard from "../../components/Cards/ServiceCard";
import uiUx from '../../Accets/Image/icons/ui-ux.png'
import app from '../../Accets/Image/icons/app.png'
import web from '../../Accets/Image/icons/web.png'
import seo from '../../Accets/Image/icons/seo.png'



const Service = () => {
    return (
        <div className="container mx-auto py-14">
            <h4 className="flex  items-center  text-accent uppercase text-sm">
                <div className="sm-row mr-4"></div>
                Our Services
            </h4>
            <h1 className="lg:text-5xl header-head md:text-4xl text-5xl  mt-3 font-extrabold">
                We do everything
            </h1>
            <p className="text-accent mt-2">You may be interested in what we can offer you. More services you <br /> can find below. We do everything at a high level.</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:grid-cols-2 mt-14">
                <ServiceCard icon={web} name1={'Web'} name2={'Development'} />
                <ServiceCard icon={uiUx} name1={'UI/UX And'} name2={' Brand Indentity'} />
                <ServiceCard icon={app} name1={'App'} name2={'Development'} />
                <ServiceCard icon={seo} name1={'SEO & SMM'} name2={'Optimization'} />

            </div>

        </div>
    );
}

export default Service;