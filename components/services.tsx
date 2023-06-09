import CustomCarousel from "./customCarousel";
import { ServicePayload} from "../strapiAPI/getServices"

interface props {
    services: ServicePayload[];
}

function serviceSlicer(p: props) {
    return (
        <div className="w-full flex justify-center bg-primaryDark p-4">
            <div className="flex flex-col">
                <div className="flex justify-center text-white font-bold text-3xl relative">
                    <div className="z-10 bg-primaryDark px-2 text-center">Featured Services</div>
                    <div className="absolute left-20 right-20 h-0 border-y-2 top-1/2" />
                </div>
                <CustomCarousel services={p.services} />
            </div>
        </div>
    );
}

export default serviceSlicer;
