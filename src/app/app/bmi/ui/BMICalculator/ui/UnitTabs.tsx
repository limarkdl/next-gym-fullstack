import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type UnitTabsProps = {
    unit: string;
    setUnit: (value: string) => void;
};

const UnitTabs = ({ unit, setUnit }: UnitTabsProps) => {
    return (
        <div className='flex flex-auto justify-end'>
            <Tabs defaultValue='metric' onValueChange={(value) => setUnit(value)}>
                <TabsList>
                    <TabsTrigger value='metric'>Metric</TabsTrigger>
                    <TabsTrigger value='imperial'>Imperial</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    );
};

export default UnitTabs;