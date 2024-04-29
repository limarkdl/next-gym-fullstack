import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

// TODO: 'Make logic to pass records from db'


interface LastConsumingProps {
    className: string;

}

// TODO: 'Remove hardcoded parts and add REAL logic'
const LastConsuming = () => {
    return (
        <Card className='flex flex-col flex-auto  w-full lg:w-1/2 xl:max-w-xl'>
            <CardHeader>
                <CardTitle className=''>Last records</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='flex w-full rounded-xl'>
                    <div className='flex flex-col w-full p-4 gap-4'>
                        <div className='flex flex-row gap-2 justify-between'>
                            <p>🕒 40min ago</p>
                            <p>400ml</p>
                            <b>18%</b>
                        </div>
                        <div className='flex flex-row gap-2 justify-between'>
                            <p>🕒 90min ago</p>
                            <p>200ml</p>
                            <b>9%</b>
                        </div>
                        <div className='flex flex-row gap-2 justify-between'>
                            <p>🕒 120min ago</p>
                            <p>300ml</p>
                            <b>14%</b>
                        </div>

                    </div>
                </div>
            </CardContent>
        </Card>


    );
};

export default LastConsuming;
