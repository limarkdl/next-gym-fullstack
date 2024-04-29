import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Badge} from "@/components/ui/badge";

const AboutWater = () => {
    return (
        <Card className='flex flex-col flex-auto  w-full lg:w-1/2 xl:max-w-xl'>
            <CardHeader>
                <CardTitle className=''>Water</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className='text-secondary-foreground'>
                    Staying hydrated is crucial for maintaining optimal body function.
                    Adequate water intake supports vital processes, including
                    regulating body temperature, ensuring efficient metabolic
                    activities, and facilitating nutrient transportation. It also
                    plays a key role in maintaining skin health, enhancing cognitive
                    functions, and preventing urinary tract infections. Dehydration,
                    on the other hand, can lead to decreased physical performance,
                    increased fatigue, and impaired mood. Tracking water intake through an app
                    can significantly help in meeting hydration goals, promoting
                    overall well-being and health.

                </CardDescription>
                <CardDescription className='mt-2'>
                    <strong>Normatives:</strong>
                </CardDescription>
                <Separator />

                <ul className=''>
                    <li className='mt-2 flex flex-auto gap-2 justify-between'>
                        <Badge className='bg-blue-400 hover:bg-red-500'>Calm:</Badge>
                        {'~'} 2.0{'l / day'}
                    </li>
                    <li className='mt-2 flex flex-auto gap-2 justify-between'>
                        <Badge className='bg-blue-600 hover:bg-red-500'>Common:</Badge>
                        {'~'} 2.2{'l / day'}
                    </li>
                    <li className='mt-2 flex flex-auto gap-2 justify-between'>
                        <Badge className='bg-green-600 hover:bg-red-500'>Active:</Badge>
                        {'~'} 2.8{'l / day'}
                    </li>
                    <li className='mt-2 flex flex-auto gap-2 justify-between'>
                        <Badge className='bg-violet-700 hover:bg-red-500'>Extreme:</Badge>
                        {'~'} 3.0{'l / day'}
                    </li>
                </ul>
                <CardDescription className='mt-4 text-gray-700'>

                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default AboutWater;