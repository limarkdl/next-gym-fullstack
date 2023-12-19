import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

const WorkoutsInfo = () => {
    return (
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
    );
};

export default WorkoutsInfo;
