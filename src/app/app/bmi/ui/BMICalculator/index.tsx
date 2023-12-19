import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useBMILogic } from './service/useBMILogic';
import { Button } from '@/components/ui/button';

import FormulaSelect from "./ui/FormulaSelect";
import WeightInput from "./ui/WeightInput";
import HeightInput from "./ui/HeightInput";
import UnitTabs from "./ui/UnitTabs";

const BMICalculator = () => {
  const {
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
  } = useBMILogic();

  return (
      <Card className='flex flex-col w-full lg:w-1/2 flex-auto xl:max-w-xl'>
        <CardHeader>
          <CardTitle>BMI Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="myForm" onSubmit={handleCalculate}>
            <div className='grid w-full items-center gap-4'>
              <UnitTabs unit={unit} setUnit={setUnit} />
              <HeightInput {...{ unit, sliderHeight, heightFeet, heightInches, handleHeightSliderChange, handleHeightInputChange }} />
              <WeightInput {...{ unit, sliderWeight, weightPounds, handleWeightSliderChange, handleWeightInputChange }} />
              <FormulaSelect selectedFormula={selectedFormula} setSelectedFormula={setSelectedFormula} />
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <span>{calculationResult}</span>
          <Button form='myForm' type='submit'>Calculate</Button>
        </CardFooter>
      </Card>
  );
};

export default BMICalculator;