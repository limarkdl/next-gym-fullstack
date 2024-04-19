'use client';

import React, {useMemo} from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {TbScaleOutline, TbTarget, TbTrophy} from 'react-icons/tb';
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
  Line,
  LineChart,
  Brush,
  BarChart,
  Bar,
} from 'recharts';
import { Button } from '@/components/ui/button';
import {CalendarIcon, EyeClosedIcon, EyeOpenIcon, MinusIcon, PlusCircledIcon, PlusIcon} from '@radix-ui/react-icons';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";
import {BiPencil} from "react-icons/bi";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {date} from "zod";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
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
  { "Date": "19.04", "Weight": 68.0, "Fat": 8.8, "Muscle": 58.4 },
];




const WeightInfo = () => {
  const Weight = 78.2;

  const [date, setDate] = React.useState<Date>()

  const [goal, setGoal] = React.useState(85.0)
  const [expanded, setExpanded] = React.useState(false);

  const [localDrawerChosenGoal, setLocalDrawerChosenGoal] = React.useState(goal);

  const onClick = (adjustment: number) => {
    setLocalDrawerChosenGoal((currentGoal) => Math.max(45, Math.min(180, currentGoal + adjustment)));
  };

  const drawerSubmitGoalWeight = () => {
    setGoal(localDrawerChosenGoal);
  }

  const toggleExpand = () => setExpanded((prev) => !prev);

  const domainYLeft = useMemo(() => {
    if (!data || data.length === 0 || goal === undefined) {
      return [49, 51]; // Just random fallback // 99.9% that it won't be needed
    }

    const weights = data.map((item) => item.Weight).filter((weight): weight is number => weight !== undefined);

    if (weights.length === 0) {
      return [goal - 1, goal + 1];
    }

    const maxWeight = Math.max(...weights, goal);
    const minWeight = Math.min(...weights, goal);
    return [minWeight - 1, maxWeight + 1];
  }, [data, goal]);


  return (
    <Card className='flex flex-col flex-auto'>
      <CardHeader className=''>
      <div className='flex flex-row items-center gap-2 w-fit mb-5'>
          <div className="text-white bg-gradient-to-r from-teal-500 to-teal-300 p-2 rounded-md">
            <TbScaleOutline size={'24px'} />
          </div>
          <CardTitle className='text-xl'>Weight</CardTitle>
        </div>
        <Separator />
      </CardHeader>
      <CardContent className='flex p-0 flex-row flex-auto flex-wrap gap-4 mb-4'>
        <div className='flex flex-row px-[1rem] flex-auto items-baseline gap-3 '>
          <div className='flex-auto text-5xl ml-5 flex items-baseline gap-1'>
            {Weight} <span className='text-sm text-muted-foreground'>kg</span>
          </div>
          <div className='flex-auto text-3xl text-muted-foreground flex items-baseline gap-1'>
            <TbTarget size={'24px'} /> {goal}{' '}
            <span className='text-sm text-muted-foreground '>kg</span>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <BiPencil />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Weight Goal</DrawerTitle>
                    <DrawerDescription>Set your weight that you wish to have.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="flex items-center justify-center space-x-2 mb-10">
                      <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          onClick={() => onClick(-10)}
                          disabled={localDrawerChosenGoal <= 45}
                      >
                        <MdKeyboardDoubleArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Decrease</span>
                      </Button>
                      <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          onClick={() => onClick(-1)}
                          disabled={localDrawerChosenGoal <= 45}
                      >
                        <MinusIcon className="h-4 w-4" />
                        <span className="sr-only">Decrease</span>
                      </Button>
                      <div className="flex-1 text-center">
                        <div className="text-7xl font-bold tracking-tighter">
                          {localDrawerChosenGoal}
                        </div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                          Kilograms
                        </div>
                      </div>
                      <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          onClick={() => onClick(1)}
                          disabled={goal >= 180}
                      >
                        <PlusIcon className="h-4 w-4" />
                        <span className="sr-only">Increase</span>
                      </Button>
                      <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          onClick={() => onClick(10)}
                          disabled={goal >= 180}
                      >
                        <MdKeyboardDoubleArrowRight className="h-4 w-4" />
                        <span className="sr-only">Increase</span>
                      </Button>
                    </div>

                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <div className="w-full flex flex-col gap-3">
                        <Button onClick={drawerSubmitGoalWeight}>Submit</Button>
                        <Button variant="outline">Cancel</Button>
                      </div>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <Button onClick={toggleExpand} size="icon" variant="outline">
            {expanded ? <EyeClosedIcon/> : <EyeOpenIcon />}
          </Button>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary" size="icon" type="button">
                <PlusCircledIcon />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>New weight record</DrawerTitle>
                  <DrawerDescription>Record your weight for a specific date/time.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2 mb-10">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(-10)}
                        disabled={localDrawerChosenGoal <= 45}
                    >
                      <MdKeyboardDoubleArrowLeft className="h-4 w-4" />
                      <span className="sr-only">Decrease</span>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(-1)}
                        disabled={localDrawerChosenGoal <= 45}
                    >
                      <MinusIcon className="h-4 w-4" />
                      <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-7xl font-bold tracking-tighter">
                        {localDrawerChosenGoal}
                      </div>
                      <div className="text-[0.70rem] uppercase text-muted-foreground">
                        Kilograms
                      </div>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(1)}
                        disabled={goal >= 180}
                    >
                      <PlusIcon className="h-4 w-4" />
                      <span className="sr-only">Increase</span>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(10)}
                        disabled={goal >= 180}
                    >
                      <MdKeyboardDoubleArrowRight className="h-4 w-4" />
                      <span className="sr-only">Increase</span>
                    </Button>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                          variant={"outline"}
                          className={cn(
                              "w-full justify-start mb-5 text-left font-normal",
                              !date && "text-muted-foreground"
                          )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <div className="w-full flex flex-col gap-3">
                      <Button onClick={drawerSubmitGoalWeight}>Submit</Button>
                      <Button variant="outline">Cancel</Button>
                    </div>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>

        </div>
        <div
            // Костыль всем костылям костыль
          style={{
            visibility: expanded ? 'visible' : 'hidden',
            display: 'flex',
            width: '100%',
            minWidth: '350px',
            height:  expanded ? '400px' : '0px',
          }}
        >
          <ResponsiveContainer width='100%' height={400}>
            <LineChart data={data}>
              <XAxis
                dataKey='Date'
                className='text-xs'
                angle={-45}
                textAnchor='end'
                height={45}
              ></XAxis>
              <YAxis
                yAxisId='left'
                orientation='left'
                domain={domainYLeft}
                className='text-xs'
                unit={'kg'}
              ></YAxis>
              <YAxis
                yAxisId='right'
                orientation='right'
                className='text-xs'
                domain={[7, 36]}
                unit={'%'}
              ></YAxis>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--secondary))',
                  borderColor: 'transparent',
                  borderRadius: '8px'
                }}
                labelClassName='text-muted-foreground'
              />
              <Legend verticalAlign='top' height={36} />
              <ReferenceLine
                yAxisId='left'
                y={goal}
                stroke='blue'
                strokeDasharray='3 3'
              />
              <Line
                yAxisId='left'
                type='natural'
                dataKey='Weight'
                stroke='#ff0000'
                fill='red'

                activeDot={{ r: 4 }}
                dot={false}
                unit={'kg'}
              />
              <Line
                yAxisId='left'
                type='natural'
                dataKey='Muscle'
                stroke='#00f300'
                fill='green'
                dot={false}

                unit={'kg'}
              />
              <Line
                yAxisId='right'
                type='natural'
                dataKey='Fat'
                stroke='orange'
                fill='orange'
                unit={'%'}
                dot={false}

              />
            <Brush fill='hsl(var(--background))'  height={20} />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </CardContent>
    </Card>
  );
};

export default WeightInfo;
