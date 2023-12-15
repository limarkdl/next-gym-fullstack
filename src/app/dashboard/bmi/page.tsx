'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import {
  convertCmToFeetInches,
  convertFeetInchesToCm,
  convertKgToLbs,
  convertLbsToKg,
} from '@/lib/utils';

const Page = () => {
  const [sliderHeight, setSliderHeight] = useState<number[]>([170]);
  const [sliderWeight, setSliderWeight] = useState<number[]>([60]);

  const [heightFeet, setHeightFeet] = useState(0);
  const [heightInches, setHeightInches] = useState(0);

  const [weightPounds, setWeightPounds] = useState(0);

  const [unit, setUnit] = useState('metric');

  const handleHeightSliderChange = (value: number[]) => {
    setSliderHeight(value);
  };

  const handleWeightSliderChange = (value: number[]) => {
    setSliderWeight(value);
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
    }
  };

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

  return (
    <div className='mt-20'>
      <Card className='mx-auto w-[350px]'>
        <CardHeader>
          <CardTitle>Calculate your BMI</CardTitle>
          <CardDescription>
            BMI provides a reliable indicator of body fatness for most people
            and is used to screen for weight categories that may lead to health
            problems.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex justify-end'>
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
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='height'>Height</Label>
                {unit === 'metric' ? (
                  <div className='flex justify-between'>
                    <Input
                      className='w-[30%]'
                      id='height'
                      type='number'
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
                ) : (
                  <div className='flex space-x-2'>
                    <Input
                      id='height-feet'
                      type='number'
                      placeholder='Feet'
                      value={heightFeet}
                      onChange={(e) =>
                        setHeightFeet(parseInt(e.target.value, 10))
                      }
                    />
                    <Input
                      id='height-inches'
                      type='number'
                      placeholder='Inches'
                      value={heightInches}
                      onChange={(e) =>
                        setHeightInches(parseInt(e.target.value, 10))
                      }
                    />
                  </div>
                )}
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='weight'>Weight</Label>
                <div className='flex justify-between'>
                  {unit === 'imperial' ? (
                    <>
                      <Input
                        className='w-[100%]'
                        id='weight'
                        type='number'
                        value={weightPounds.toString()}
                        onChange={handleWeightInputChange}
                        
                      />
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='formula'>Formula</Label>
                <Select>
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
        <CardFooter className='flex justify-end'>
          <Button>Calculate</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
