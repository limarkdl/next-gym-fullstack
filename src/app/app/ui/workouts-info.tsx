import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import React from "react";
import {TbBarbell, TbMathAvg} from "react-icons/tb";

const WorkoutsInfo = () => {
    return (
        <div className='flex flex-col gap-3 flex-auto'>
            <Card>
            <CardHeader>
                <CardTitle className='text-xl mb-5'>
                    <div className='flex flex-row gap-2 items-center'>
                    <div className="text-white bg-gradient-to-r from-red-700 to-red-500 p-2 rounded-md">
                        <TbBarbell size={'24px'} />
                    </div>
                    Last workout volume
                    </div>

                </CardTitle>
                <Separator />
            </CardHeader>
            <CardContent className='flex flex-row flex-wrap gap-4 justify-between'>

                <div className='text-4xl flex items-baseline gap-1'>
                    12,349<span className='text-sm text-muted-foreground'>kg</span>
                </div>
            </CardContent>
            </Card>
            <Card>
            <CardHeader>
                <CardTitle className='text-xl mb-5'>
                    <div className='flex flex-row gap-2 items-center'>
                    <div className="text-white bg-gradient-to-r from-slate-900 to-slate-700 p-2 rounded-md">
                        <TbMathAvg size={'24px'} />
                    </div>
                        Average volume
                    </div>
                </CardTitle>
                <Separator />

            </CardHeader>
            <CardContent>
                <div className='text-4xl flex items-baseline gap-1'>
                    8,812<span className='text-sm text-muted-foreground'>kg</span>
                </div>
            </CardContent>
            </Card>
        </div>
    );
};

export default WorkoutsInfo;
