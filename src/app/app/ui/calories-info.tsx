import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {TbCalendar, TbPizza, TbTarget} from "react-icons/tb";
import {MdWaterDrop} from "react-icons/md";
import React from "react";

const CaloriesInfo = () => {
    return (
        <Card className='flex w-fit flex-col flex-auto'>
            <CardHeader>
                <CardTitle className='text-xl mb-5'>
                    <div className='flex flex-row gap-2 items-center'>
                    
                    <div className="text-white bg-gradient-to-r from-amber-400 to-yellow-700 p-2 rounded-md">
                        <TbPizza size={'24px'} />
                    </div>
                        Kcal / Day
                    </div>



                </CardTitle>
                <Separator />

            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <div className='text-3xl flex items-baseline gap-1'>
                    <TbCalendar size={'24px'} /> 3480
                    <span className='text-sm text-muted-foreground'>kcal</span>
                </div>
                <div className='text-3xl flex text-muted-foreground items-baseline gap-1'>
                    <TbTarget size={'24px'} /> 3800
                    <span className='text-sm text-muted-foreground'>kcal</span>
                </div>
                <Separator />
                <p className="text-muted-foreground text-sm mt-5">
                    Reaching daily recommended portion of calories may guarantee that you will gain mass.
                    Remember that you should eat more than you burn.
                </p>
            </CardContent>
        </Card>
    );
};

export default CaloriesInfo;