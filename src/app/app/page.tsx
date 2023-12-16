import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TestChart from './ui/test-chart-js';
import {
  TbArrowUp,
  TbCalendar,
  TbScaleOutline,
  TbTarget,
} from 'react-icons/tb';
import { Separator } from '@/components/ui/separator';

export default function Page() {
  const Weight = 70.2;
  const GoalWeight = 95.0;
  const Height = 195;

  return (
    <div className='flex p-3 flex-col gap-4'>
      <div className='flex flex-row flex-wrap gap-3'>
        <Card className='flex flex-col flex-auto'>
          <CardHeader >
            <div className='flex flex-row gap-2'>
            <CardTitle className='text-xl'>Weight</CardTitle>
            <TbArrowUp />
            </div>
            <Separator />
          </CardHeader>
          <CardContent className='flex flex-row flex-wrap gap-4 justify-between'>
            <div className='flex flex-row items-baseline gap-3 '>
              <div className='min-w-max w-28 text-4xl flex items-baseline gap-1'>
                <TbScaleOutline size={'24px'} />
                {Weight}{' '}
                <span className='text-sm text-muted-foreground'>kg</span>
              </div>
              <div className='min-w-max w-28 text-3xl text-muted-foreground flex items-baseline gap-1'>
                <TbTarget size={'24px'} /> {GoalWeight}{' '}
                <span className='text-sm text-muted-foreground'>kg</span>
              </div>
            </div>
            <div className='w-[300px] sm:w-[400px] ml-auto md:w-[500px] xl:w-[300px] 2xl:w-[300px] '>
              <TestChart />
            </div>
          </CardContent>
        </Card>
        <Card className='flex flex-col flex-auto'>
          <CardHeader>
            <CardTitle className='text-xl'>Last workout volume</CardTitle>
          <Separator />
          </CardHeader>
          <CardContent className='flex flex-row flex-wrap gap-4 justify-between'>

            <div className='min-w-max w-28 text-4xl flex items-baseline gap-1'>
              12,349<span className='text-sm text-muted-foreground'>kg</span>
            </div>
          </CardContent>
          <CardHeader>
            <CardTitle className='text-xl'>Average volume</CardTitle>
          <Separator />

          </CardHeader>
          <CardContent>
            <div className='min-w-max w-28 text-4xl flex items-baseline gap-1'>
              8,812<span className='text-sm text-muted-foreground'>kg</span>
            </div>
          </CardContent>
        </Card>
        <Card className='flex flex-col flex-auto'>
          <CardHeader>
            <CardTitle className='text-xl'>
              Kcal / Day <span className='text-sm text-green-500'>89%</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className='min-w-max w-28 text-3xl flex items-baseline gap-1'>
              <TbCalendar size={'24px'} /> 3480
              <span className='text-sm text-muted-foreground'>kcal</span>
            </div>
            <div className='min-w-max w-28 text-3xl flex text-muted-foreground items-baseline gap-1'>
              <TbTarget size={'24px'} /> 3800
              <span className='text-sm text-muted-foreground'>kcal</span>
            </div>
            <Separator />
            <p className="text-muted-foreground text-sm mt-5">
              Reaching daily recommended portion of calories may guarantee that you will gain mass. 
              Remember that you should eat more than you burn.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
