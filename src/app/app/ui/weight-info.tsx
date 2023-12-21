'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TbScaleOutline, TbTarget } from 'react-icons/tb';
import {
  XAxis,
  YAxis,
  Tooltip,
  Label,
  ReferenceLine,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
const data = [
    { "Date": "16.12", "Weight": 70.3, "Fat": 9, "Muscle": 62.4 },
    { "Date": "18.12", "Weight": 70.8, "Fat": 9.2, "Muscle": 62.7 },
    { "Date": "19.12", "Weight": 71.0, "Fat": 9.1, "Muscle": 63.0 },
    { "Date": "21.12", "Weight": 72.3, "Fat": 9.5, "Muscle": 63.7 },
    { "Date": "31.12", },
    { "Date": "02.01", "Weight": 72.5, "Fat": 9.6, "Muscle": 64.0 },
    { "Date": "07.01", "Weight": 72.8, "Fat": 9.7, "Muscle": 64.2 },
    { "Date": "12.01", "Weight": 73.0, "Fat": 9.8, "Muscle": 64.4 },
    { "Date": "18.01", "Weight": 72.5, "Fat": 9.6, "Muscle": 64.0 },
    { "Date": "24.01", "Weight": 74.8, "Fat": 9.7, "Muscle": 64.2 },
    { "Date": "30.01", "Weight": 77.0, "Fat": 9.8, "Muscle": 64.4 },
  ]
  

const WeightInfo = () => {
  const Weight = 78.2;
  const GoalWeight = 95.0;


  return (
    <Card className='flex flex-col flex-auto'>
      <CardHeader>
        <div className='flex flex-row gap-2'>
          <CardTitle className='text-xl'>Weight</CardTitle>
        </div>
        <Separator />
      </CardHeader>
      <CardContent className='flex flex-row flex-wrap gap-4 justify-between'>
        <div className='flex flex-row items-baseline gap-3 '>
          <div className='min-w-max w-28 text-4xl flex items-baseline gap-1'>
            <TbScaleOutline size={'24px'} />
            {Weight} <span className='text-sm text-muted-foreground'>kg</span>
          </div>
          <div className='min-w-max w-28 text-3xl text-muted-foreground flex items-baseline gap-1'>
            <TbTarget size={'24px'} /> {GoalWeight}{' '}
            <span className='text-sm text-muted-foreground '>kg</span>
          </div>
        </div>
        <div style={{ width: '100%', height: '400px', maxWidth: '900px' }}>
        <ResponsiveContainer width='100%' height={400} style={{maxWidth: '800px'}}>
          <AreaChart
            data={data}>
            <XAxis dataKey='Date' angle={-45} textAnchor="end" height={50}>
              <Label value='Date' offset={-5} position='insideBottom' className='text-xs'/>
            </XAxis>
            <YAxis yAxisId='left' orientation='left' domain={['dataMin - 5', 'dataMax + 1']}>
              <Label value='Weight & Muscle (kg)' angle={-90} position='insideBottomLeft' className='text-xs'/>
            </YAxis>
            <YAxis yAxisId='right' orientation='right' domain={[7, 36]}>
              <Label value='Fat (%)' angle={-90} position='insideTopRight' className='text-xs'/>
            </YAxis>
            <Tooltip contentStyle={{backgroundColor: 'hsl(var(--background))', borderRadius: '12    px'}} labelClassName='text-muted-foreground'/>
            <Legend verticalAlign='top' height={36}/>
            <ReferenceLine yAxisId='left' y={GoalWeight} label='Goal Weight' stroke='blue' strokeDasharray='3 3' />
            <Area connectNulls yAxisId='left' type='natural' dataKey='Weight' stroke='#ff0000' fill="red" activeDot={{ r: 6 }} />
            <Area connectNulls yAxisId='left' type='natural' dataKey='Muscle' stroke='#00ff00' fill="green" />
            
            <Area connectNulls yAxisId='right' type='natural' dataKey='Fat' stroke='orange' fill="orange"/>
            
          </AreaChart>
        </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeightInfo;
