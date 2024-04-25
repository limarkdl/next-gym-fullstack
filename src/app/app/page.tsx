import CaloriesInfo from "./ui/calories-info";
import WorkoutsInfo from "./ui/workouts-info";
import WeightInfo from "./ui/weight-info";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {MdWaterDrop} from "react-icons/md";
import React from "react";
import { Button } from "@/components/ui/button";
import { BiInfoCircle, BiPlusCircle } from "react-icons/bi";

export default function Page() {


  return ( 
    <div className='flex p-3 flex-col gap-4'>
      <div className='flex flex-row flex-wrap gap-3 flex-auto'>
        <WeightInfo />
        <WorkoutsInfo />
          <Card className="flex flex-col w-fit">
              <CardHeader>
                  <CardTitle className='text-xl mb-5'>
                      <div className='flex flex-row items-center gap-2 '>
                          <div className="text-white bg-gradient-to-r from-indigo-400 to-cyan-400 p-2 rounded-md">
                            <MdWaterDrop size={'24px'} />
                          </div>
                          Hydration
                      </div>

                  </CardTitle>
                  <Separator />
              </CardHeader>
              <CardContent className='flex flex-col flex-auto justify-between items-center gap-4'>

              <div className='text-4xl flex items-baseline gap-1'>
                      2,250<span className='text-sm text-muted-foreground'>/3,500 ml</span>
                  </div>
                  <div className='text-xl flex items-baseline gap-1'>
                  <span className='text-sm text-muted-foreground'>Last intake:</span> 14:30
                  </div>
                  <div className="text-6xl font-bold bg-gradient-to-r from-teal-500 to-teal-800 bg-clip-text text-transparent">
                      69%
                  </div>
                  <div className="flex w-full justify-end gap-1">
                    <Button size="icon" variant="outline" type="button"> 
                      <BiInfoCircle />
                    </Button>
                    <Button size="icon" variant="outline" type="button"> 
                      <BiPlusCircle />
                    </Button>
                  </div>
              </CardContent>
          </Card>

        <CaloriesInfo />
      </div>
    </div>
  );
}
