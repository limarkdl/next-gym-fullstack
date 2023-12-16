import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  calculateBMI,
  convertCmToFeetInches,
  convertFeetInchesToCm,
  convertKgToLbs,
  convertLbsToKg,
} from '@/lib/utils';
import { useEffect, useState } from 'react';

const BMICalculator = () => {
  const [sliderHeight, setSliderHeight] = useState<number[]>([170]);
  const [sliderWeight, setSliderWeight] = useState<number[]>([60]);

  const [heightFeet, setHeightFeet] = useState(0);
  const [heightInches, setHeightInches] = useState(0);

  const [weightPounds, setWeightPounds] = useState(0);

  const [unit, setUnit] = useState('metric');

  const [selectedFormula, setSelectedFormula] = useState('bmi');
  const [calculationResult, setCalculationResult] = useState('');

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

  useEffect(() => {
    if (unit === 'imperial') {
      const [feet, inches] = convertCmToFeetInches(sliderHeight[0]);
      setHeightFeet(feet);
      setHeightInches(inches);

      const [lbs] = convertKgToLbs(sliderWeight[0]);
      setWeightPounds(lbs);
    } else {
      setSliderHeight([convertFeetInchesToCm(heightFeet, heightInches)]);
      setSliderWeight([convertLbsToKg(weightPounds)]);
    }
  }, [unit]);

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

  return (
    <Card className='flex flex-col w-full lg:w-1/2 flex-auto xl:max-w-xl'>
      <CardHeader>
        <CardTitle>BMI Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="myForm" onSubmit={handleCalculate}>
          <div className='grid w-full items-center gap-4'>
            <div className='flex  flex-auto justify-end'>
              <Tabs
                defaultValue='metric'
                onValueChange={(value) => setUnit(value)}
              >
                <TabsList>
                  <TabsTrigger value='metric'>Metric</TabsTrigger>
                  <TabsTrigger value='imperial'>Imperial</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className='flex flex-col flex-auto space-y-1.5'>
              {unit === 'metric' ? (
                <>
                  <Label htmlFor='height'>{'Height (cm)'}</Label>
                  <div className='flex justify-between'>
                    <Input
                      className='w-[30%]'
                      id='height'
                      type='number'
                      max={220}
                      min={100}
                      maxLength={3}
                      value={sliderHeight[0].toString()}
                      onChange={handleHeightInputChange}
                    />
                    <Slider
                      max={220}
                      min={140}
                      step={1}
                      className={'w-[60%]'}
                      value={sliderHeight}
                      onValueChange={handleHeightSliderChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <Label htmlFor='height'>{'Height (ft/inch)'}</Label>
                  <div className='flex flex-auto  space-x-2'>
                    <Input
                      id='height-feet'
                      type='number'
                      placeholder='Feet'
                      value={heightFeet}
                      min={0}
                      max={9}
                      onChange={(e) =>
                        setHeightFeet(parseInt(e.target.value, 10))
                      }
                    />
                    <Input
                      id='height-inches'
                      type='number'
                      placeholder='Inches'
                      value={heightInches}
                      min={0}
                      max={11}
                      onChange={(e) =>
                        setHeightInches(parseInt(e.target.value, 10))
                      }
                    />
                  </div>
                </>
              )}
            </div>
            <div className='flex flex-col flex-auto  space-y-1.5'>
              {unit === 'imperial' ? (
                <>
                  <Label htmlFor='weight'>{'Weight (lbs)'}</Label>
                  <Input
                    className='w-[100%]'
                    id='weight'
                    type='number'
                    min={1}
                    value={weightPounds.toString()}
                    onChange={handleWeightInputChange}
                  />
                </>
              ) : (
                <>
                  <Label htmlFor='weight'>{'Weight (kg)'}</Label>
                  <div className='flex flex-auto  justify-between'>
                    <Input
                      className='w-[30%]'
                      id='weight'
                      type='number'
                      value={sliderWeight[0].toString()}
                      onChange={handleWeightInputChange}
                    />
                    <Slider
                      max={150}
                      min={40}
                      step={1}
                      className={'w-[60%]'}
                      value={sliderWeight}
                      onValueChange={handleWeightSliderChange}
                    />
                  </div>
                </>
              )}
            </div>
            <div className='flex flex-col flex-auto  space-y-1.5'>
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
