import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

type HeightInputProps = {
  unit: string;
  sliderHeight: number[];
  heightFeet: number;
  heightInches: number;
  handleHeightSliderChange: (value: number[]) => void;
  handleHeightInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setHeightFeet: (value: number) => void;
  setHeightInches: (value: number) => void;
};

const HeightInput = ({
  unit,
  sliderHeight,
  heightFeet,
  heightInches,
  handleHeightSliderChange,
  handleHeightInputChange,
  setHeightFeet,
  setHeightInches
}: HeightInputProps) => {
  return (
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
          <div className='flex flex-auto space-x-2'>
            <Input
              id='height-feet'
              type='number'
              placeholder='Feet'
              value={heightFeet}
              min={0}
              max={9}
              onChange={(e) => setHeightFeet(parseInt(e.target.value, 10))}
            />
            <Input
              id='height-inches'
              type='number'
              placeholder='Inches'
              value={heightInches}
              min={0}
              max={11}
              onChange={(e) => setHeightInches(parseInt(e.target.value, 10))}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HeightInput;
