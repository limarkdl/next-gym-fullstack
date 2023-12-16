'use client';

import AboutBMI from './ui/about-bmi';
import BMICalculator from './ui/bmi-calculator';

const Page = () => {
  return (
    <div className='p-3 mx-auto  flex gap-4 flex-col lg:flex-row'>
      <div className='mx-auto flex flex-1 justify-center flex-col md:flex-row lg:flex-row flex-wrap gap-3'>
        <BMICalculator />
        <AboutBMI />
      </div>
    </div>
  );
};


export default Page;