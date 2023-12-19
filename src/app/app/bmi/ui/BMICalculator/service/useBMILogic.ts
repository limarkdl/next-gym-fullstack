
import React, { useState, useEffect } from 'react';
import { convertCmToFeetInches, convertFeetInchesToCm, convertKgToLbs, convertLbsToKg, calculateBMI } from '@/lib/utils';

export const useBMILogic = () => {
    const defaultHeightCm = 170;
    const defaultWeightKg = 60;

    const [selectedFormula, setSelectedFormula] = useState('bmi');
    const [calculationResult, setCalculationResult] = useState('');

    const [sliderHeight, setSliderHeight] = useState<number[]>([defaultHeightCm]);
    const [sliderWeight, setSliderWeight] = useState<number[]>([defaultWeightKg]);

    const [defaultHeightFeet, defaultHeightInches] = convertCmToFeetInches(defaultHeightCm);
    const [defaultWeightLbs] = convertKgToLbs(defaultWeightKg);

    const [heightFeet, setHeightFeet] = useState(defaultHeightFeet);
    const [heightInches, setHeightInches] = useState(defaultHeightInches);
    const [weightPounds, setWeightPounds] = useState(defaultWeightLbs);

    const [unit, setUnit] = useState('metric');

    useEffect(() => {
        if (unit === 'imperial') {
            const [feet, inches] = convertCmToFeetInches(sliderHeight[0]);
            setHeightFeet(feet);
            setHeightInches(inches);

            const lbs = convertKgToLbs(sliderWeight[0])[0];
            setWeightPounds(lbs);
        } else {
            setSliderHeight([convertFeetInchesToCm(heightFeet, heightInches)]);
            setSliderWeight([convertLbsToKg(weightPounds)]);
        }
    }, [unit]);

    const handleHeightSliderChange = (value: number[]) => {
        setSliderHeight(value);
    };

    const handleWeightSliderChange = (value: number[]) => {
        if (!isNaN(value[0])) {
            setSliderWeight(value);
        } else {
            setSliderWeight([0]);
        }
    };

    const handleHeightInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue)) {
            setSliderHeight([newValue]);
        } else {
            setSliderHeight([0]);
        }
    };

    const handleWeightInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = parseInt(event.target.value, 10);
        if (!isNaN(newValue)) {
            if (unit === 'metric') {
                setSliderWeight([newValue]);
            } else {
                setWeightPounds(newValue);
            }
        } else {
            setSliderWeight([0]);
        }
    };

    // TODO: 'Fix useEffect logic, since it resets initial values'


    const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let heightCm =
            unit === 'imperial'
                ? convertFeetInchesToCm(heightFeet, heightInches)
                : sliderHeight[0];
        let weightKg =
            unit === 'imperial' ? convertLbsToKg(weightPounds) : sliderWeight[0];

        if (selectedFormula === 'bmi') {
            setCalculationResult(`BMI: ${calculateBMI(heightCm, weightKg)}`);
        } else if (selectedFormula === 'ffmi') {
            setCalculationResult(`FFMI: ${calculateBMI(heightCm, weightKg)}`);
        }
    };

    return {
        unit,
        setUnit,
        calculationResult,
        handleCalculate,
        sliderHeight,
        sliderWeight,
        heightFeet,
        heightInches,
        weightPounds,
        handleHeightSliderChange,
        handleWeightSliderChange,
        handleHeightInputChange,
        handleWeightInputChange,
        selectedFormula,
        setSelectedFormula,
        setHeightInches
    };
};