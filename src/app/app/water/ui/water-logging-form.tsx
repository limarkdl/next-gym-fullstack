import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

interface WaterLoggingFormProps {

}
// TODO: 'Remove hardcoded parts and add REAL logic'

const WaterLoggingForm = (props: WaterLoggingFormProps) => {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <Card className='flex flex-col w-full lg:w-1/2 flex-auto xl:max-w-xl'>
            <CardHeader>
                <CardTitle>Logging form</CardTitle>
            </CardHeader>
            <CardContent>
                <form id='myForm' onSubmit={onSubmit}>
                    <div className='grid w-full items-center gap-4'>
                        <Input
                            className='w-[30%]'
                            id='height'
                            type='number'
                            max={4000}
                            min={50}
                            step={50}
                            placeholder={'ml'}
                            maxLength={3}
                            onChange={() => {}}
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter className='flex justify-between'>
                <Button form='myForm' type='submit'>
                    Submit
                </Button>
            </CardFooter>
        </Card>
    );
};

export default WaterLoggingForm;