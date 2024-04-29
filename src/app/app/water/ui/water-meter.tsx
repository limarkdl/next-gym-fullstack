import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const WaterMeter = () => {
    return (

        <Card className='flex flex-col flex-auto w-full lg:w-1/2 xl:max-w-xl'>
            <CardHeader>
                <CardTitle className=''>Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex rounded-xl p-4 row items-center w-full gap-4'>
                    <div className='text-4xl font-black p-1.5 w-fit rounded-xl'>67%</div>
                    <div className='flex flex-col items-center gap-0 w-full'>
                        <div
                            className='w-full p-1 border-black border-[1px] rounded-xl bg-gradient-to-r from-red-500 to-green-500 h-2'></div>
                        <div className='flex flex-row w-full text-xs justify-between'>
                            <p>Insufficient</p>
                            <p>OK</p>
                            <p>Great</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

    );
};

export default WaterMeter;