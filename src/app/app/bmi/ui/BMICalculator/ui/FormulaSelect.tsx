import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {Label} from "@/components/ui/label";

const FormulaSelect = ({ selectedFormula, setSelectedFormula }) => {
    return (
        <div className='flex flex-col flex-auto space-y-1.5'>
            <Label htmlFor='formula'>Formula</Label>
            <Select defaultValue='bmi' onValueChange={setSelectedFormula}>
                <SelectTrigger id='formula'>
                    <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent position='popper'>
                    <SelectItem value='bmi'>BMI</SelectItem>
                    <SelectItem value='ffmi'>FFMI</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default FormulaSelect;