import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AboutBMI = () => {
  return (
    <Card className='flex flex-col flex-auto  w-full lg:w-1/2 xl:max-w-xl'>
      <CardHeader>
        <CardTitle className=''>About BMI</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className='text-secondary-foreground'>
          The <strong>Body Mass Index (BMI)</strong> is a simple and widely used
          method for estimating a person&apos;s body fat based on their height
          and weight. It is a key index for relating weight to height.
        </CardDescription>
        <CardDescription className='mt-2'>
          <strong>BMI Categories:</strong>
        </CardDescription>
        <Separator />

        <ul className=''>
          <li className='mt-2 flex flex-auto gap-2 justify-between'>
            <Badge className='bg-cyan-600 hover:bg-cyan-500'>Underweight:</Badge>
            {'≤ 18.5'}
          </li>
          <li className='mt-2 flex flex-auto gap-2 justify-between'>
            <Badge  className='bg-green-600 hover:bg-green-500 '>Normal weight:</Badge>{' '}
            18.5 – 24.9
          </li>
          <li className='mt-2 flex flex-auto gap-2 justify-between'>
            <Badge  className='bg-orange-600 hover:bg-orange-500'>Overweight:</Badge>{' '}
            25 – 29.9
          </li>
          <li className='mt-2 flex flex-auto gap-2 justify-between'>
            <Badge  className='bg-red-600 hover:bg-red-500'>Obesity:</Badge>
            {'≥'} 30
          </li>
        </ul>
        <CardDescription className='mt-4 text-gray-700'>
          It&apos;s important to note that BMI is a broad tool and does not
          directly measure body fat or account for other factors like muscle
          mass, bone density, and overall body composition.
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default AboutBMI;
