import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import TestChart from "@/app/app/ui/test-chart-js";
import {TbArrowUp, TbScaleOutline, TbTarget} from "react-icons/tb";

const WeightInfo = () => {
    const Weight = 78.2;
    const GoalWeight = 95.0;
    const Height = 195;

    return (
        <Card className='flex flex-col flex-auto'>
            <CardHeader >
                <div className='flex flex-row gap-2'>
                    <CardTitle className='text-xl'>Weight</CardTitle>
                    <TbArrowUp />
                </div>
                <Separator />
            </CardHeader>
            <CardContent className='flex flex-row flex-wrap gap-4 justify-between'>
                <div className='flex flex-row items-baseline gap-3 '>
                    <div className='min-w-max w-28 text-4xl flex items-baseline gap-1'>
                        <TbScaleOutline size={'24px'} />
                        {Weight}{' '}
                        <span className='text-sm text-muted-foreground'>kg</span>
                    </div>
                    <div className='min-w-max w-28 text-3xl text-muted-foreground flex items-baseline gap-1'>
                        <TbTarget size={'24px'} /> {GoalWeight}{' '}
                        <span className='text-sm text-muted-foreground'>kg</span>
                    </div>
                </div>
                <div className='w-[300px] sm:w-[400px] ml-auto md:w-[500px] xl:w-[300px] 2xl:w-[300px] '>
                    <TestChart />
                </div>
            </CardContent>
        </Card>
    );
};

export default WeightInfo;