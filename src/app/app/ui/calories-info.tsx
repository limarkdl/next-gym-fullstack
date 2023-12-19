import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {TbCalendar, TbTarget} from "react-icons/tb";

const CaloriesInfo = () => {
    return (
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
    );
};

export default CaloriesInfo;