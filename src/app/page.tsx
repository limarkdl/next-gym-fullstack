"use client";
import Header from './(ui)/Header/Header';
import Image from 'next/image';
import LOGO_EYES from '../../public/LOGO_EYES.svg'
import { TbArrowDown, TbMicroscope } from 'react-icons/tb';
import { MdOutlineFastfood } from 'react-icons/md';
import { GrUserManager } from 'react-icons/gr';
import { FaPencil, FaBinoculars } from 'react-icons/fa6';
import { RiUserSmileLine } from 'react-icons/ri';
import Section from '@/lib/animate/section';
import Belt from './(ui)/Header/Belt';
import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';


export default function Home() {

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='h-[98vh] overflow-hidden flex flex-col justify-between'>
                <div style={{ overflow: 'hidden', width: '100%', height: '50px' }}>
                    <Belt background="LentaDate.png" />
                </div>
                <div className='flex flex-col h-full mt-3'>
                    <Section delay="0s" className="">
                        <Header withAuth={false} />
                    </Section>
                    <section className='flex flex-col gap-1 h-full p-3'>
                        <div className='absolute z-[-1] md:top-1/4 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

                            <Image
                                src={LOGO_EYES}
                                alt={"Predator's Eyes"}
                                width={312}
                                height={312}
                            />

                        </div>

                        <div className='flex flex-col justify-evenly h-full'>
                                <Section type='fade' delay='0.2s' className='md:text-5xl text-4xl w-full flex justify-center '>Ultimate workout manager</Section>
                                <div className='flex flex-col md:gap-24 gap-3 md:flex-row  mx-auto text-white'>
                                    <div className='flex flex-col w-80 gap-3'>
                                        <FeatureSection delay="0.3s" icon={<GrUserManager size={24}/>} colorClass='text-blue-500' text="Manage your workouts" />
                                        <FeatureSection delay="0.5s" icon={<FaPencil size={24}/>} colorClass='text-red-500' text="Log your measurements" />
                                        <FeatureSection delay="0.7s" icon={<FaBinoculars size={24}/>} colorClass='text-teal-500' text="Observe your progress" />
                                    </div>
                                    <div className='flex flex-col w-80 gap-3'>
                                        <FeatureSection delay="1s" icon={<TbMicroscope size={24}/>} colorClass='text-green-500' directionToSlide='toLeft' text="See each parameter" />
                                        <FeatureSection delay="1.2s" icon={<RiUserSmileLine size={24}/>} colorClass='text-violet-500' directionToSlide='toLeft' text="Personalized routines" />
                                        <FeatureSection delay="1.4s" icon={<MdOutlineFastfood size={24}/>} colorClass='text-yellow-500' directionToSlide='toLeft' text="Calorie/Water Logger" />
                                    </div>
                                </div>

                        </div>
{/* 

                        <div className='flex flex-col justify-evenly h-full items-center'>
                            <Section className='text-4xl sm:text-4xl md:text-5xl xl:5xl 2xl:5xl text-center'>Ultimate workout manager</Section>
                            <div className='text-white text-md flex xl:flex-row 2xl:flex-row md:flex-row sm:flex-r flex-col gap-5 sm:w-full w-fit justify-between max-w-6xl px-12 mt-4'>
                                <div className='text-white text-md flex flex-col gap-5 w-full justify-between max-w-6xl px-12 mt-4'>
                                    <FeatureSection delay="0.3s" icon={<GrUserManager />} colorClass='text-blue-500' text="Manage your workouts" />
                                    <FeatureSection delay="0.5s" icon={<FaPencil/>} colorClass='text-red-500' text="Log your measurements" />
                                    <FeatureSection delay="0.7s" icon={<FaBinoculars/>} colorClass='text-teal-500' text="Observe your progress" />
                                    <FeatureSection delay="1s" icon={<TbMicroscope/>} colorClass='text-green-500' text="See each parameter" />
                                    <FeatureSection delay="1.2s" icon={<RiUserSmileLine/>} colorClass='text-violet-500' text="Personalized routines" />
                                    <FeatureSection delay="1.4s" icon={<MdOutlineFastfood/>} colorClass='text-yellow-500' text="Calorie/Water Logger" />
                                </div>
                            </div>
                        </div> */}

                    </section>
                    <Section type="fade" delay="2s" className='w-screen flex justify-center p-4'><TbArrowDown size={48} /></Section>
                </div>

            </div>
            <div className='w-full h-[98vh] pt-24 bg-black flex flex-col justify-between text-white'>
                <div className='flex flex-col items-center'>
                    <Section delay="0.5s" className='text-4xl  sm:text-4xl md:text-5xl xl:5xl 2xl:5xl text-center'>Stack</ Section>
                    <div className='flex flex-col gap-5 mt-24'>
                        <Section delay="0.5s">TypeScript</Section>
                        <Section delay="0.6s">Next.js</Section> 
                        <Section delay="0.7s">React</Section>
                        <Section delay="0.8s">PostgreSQL</Section>
                        <Section delay="0.9s">Prisma.io</Section>
                    </div>
                </div>
                <div style={{ overflow: 'hidden', width: '100%', height: '50px' }}>
                    <Belt background="LentaLimarkdl.png" />
                </div>
            </div>

        </div>
    );
}

// TODO: 'Optimize redundancy when using FeatureSection & Section '

interface FeatureSectionProps {
    delay: string;
    icon: ReactNode;
    colorClass: string;
    text: string;
    directionToSlide?: 'toRight' | 'toLeft';
}

const FeatureSection = ({ delay, icon, colorClass, text, directionToSlide }: FeatureSectionProps) => (
    <Section delay={delay} directionForSlide={directionToSlide} className='bg-black px-10 whitespace-nowrap py-5 flex flex-row gap-5 items-center rounded-xl'>
        <div className={cn('w-6 h-6 flex justify-center items-center', colorClass)}> 
            {icon}
        </div>
        {text}
    </Section>
);