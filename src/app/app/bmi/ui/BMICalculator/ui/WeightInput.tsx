import { Input} from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label} from '@/components/ui/label';

const WeightInput = ({ unit, sliderWeight, weightPounds, handleWeightSliderChange, handleWeightInputChange }) => {
    return (
        <div className='flex flex-col flex-auto space-y-1.5'>
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
                    <div className='flex flex-auto justify-between'>
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
    );
};

export default WeightInput;