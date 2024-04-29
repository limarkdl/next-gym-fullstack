'use client';

import AboutWater from "@/app/app/water/ui/about-water";
import LastConsuming from "@/app/app/water/ui/last-consuming";
import WaterMeter from "@/app/app/water/ui/water-meter";
import WaterLoggingForm from "@/app/app/water/ui/water-logging-form";

const Page = () => {
    return (
        <div className='p-3 mx-auto  flex gap-4 flex-col lg:flex-row'>
            <div className='mx-auto flex flex-1 justify-center flex-col md:flex-row lg:flex-row flex-wrap gap-3'>
                <WaterMeter />
                <WaterLoggingForm />
                <LastConsuming />
                <AboutWater />
            </div>
        </div>
    );
};


export default Page;