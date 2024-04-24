"use client";
import Header from './(ui)/Header/Header';
import Image from 'next/image';
import Eye_Yabloko from '../../public/Eye_Yabloko.svg'
import Eye_Zrachok from '../../public/Eye_Zrachok.svg'
import { TbArrowDown, TbMicroscope } from 'react-icons/tb';
import { MdOutlineFastfood } from 'react-icons/md';
import { GrUserManager } from 'react-icons/gr';
import { FaPencil, FaBinoculars, FaGithub, FaFigma } from 'react-icons/fa6';
import { RiUserSmileLine } from 'react-icons/ri';
import Section from '@/lib/animate/section';
import Belt from './(ui)/Header/Belt';
import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';


// TODO: 'REFACTOR DECOMPOSE THIS DISASTER'


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
                        <div className='absolute z-[-1] md:top-1/4 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>

                            <Image
                                src={Eye_Yabloko}
                                alt={"Predator's Eyes"}
                                width={312}
                                height={312}
                            />

                        </div>

                        <div className='absolute z-[-1] md:top-1/4 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                            <motion.div
                                className="beltBackground"
                                {...eyeAnimation}>
                                <Image
                                    src={Eye_Zrachok}
                                    alt={"Predator's Eyes"}
                                    width={312}
                                    height={312}
                                />
                            </motion.div>


                        </div>

                        <div className='flex flex-col justify-evenly h-full'>
                            <Section type='fade' delay='0.2s' className='md:text-5xl text-4xl w-full flex justify-center text-center mt-4 '>Ultimate workout manager.</Section>
                            <div className='flex flex-col md:gap-24 gap-3 md:flex-row  mx-auto text-current'>
                                <div className='flex flex-col w-80 gap-3'>
                                    <FeatureSection delay="0.3s" icon={<GrUserManager size={24} />} colorClass='text-blue-500' text="Manage your workouts" />
                                    <FeatureSection delay="0.5s" icon={<FaPencil size={24} />} colorClass='text-red-500' text="Log your measurements" />
                                    <FeatureSection delay="0.7s" icon={<FaBinoculars size={24} />} colorClass='text-teal-500' text="Observe your progress" />
                                </div>
                                <div className='flex flex-col w-80 gap-3'>
                                    <FeatureSection delay="1s" icon={<TbMicroscope size={24} />} colorClass='text-green-500' directionToSlide='toLeft' text="See each parameter" />
                                    <FeatureSection delay="1.2s" icon={<RiUserSmileLine size={24} />} colorClass='text-violet-500' directionToSlide='toLeft' text="Personalized routines" />
                                    <FeatureSection delay="1.4s" icon={<MdOutlineFastfood size={24} />} colorClass='text-yellow-500' directionToSlide='toLeft' text="Calorie/Water Logger" />
                                </div>
                            </div>

                        </div>

                    </section>
                    <Section type="fade" delay="2s" className='w-screen flex justify-center p-4 '><TbArrowDown size={48} /></Section>
                </div>

            </div>
            <div className="w-full h-12 pattern-diagonal-lines pattern-black pattern-bg-background 
  pattern-size-6 pattern-opacity-100"></div>

            <div className='w-full h-[98vh]  pt-24 bg-black flex flex-col justify-between text-white '>
                <div className='flex flex-col max-w-7xl w-full mx-auto px-16'>
                    <Section delay="0.5s" className='text-4xl  sm:text-4xl md:text-5xl xl:5xl 2xl:5xl '>
                        Designed for the Dedicated.
                    </ Section>
                    <div className='flex flex-col sm:flex-row md:flex-row sm:gap-5 gap-20 mt-24 text-justify'>
                        <div className='max-w-sm'>
                            <Section delay="0.5s">
                                Tailored specifically for individuals who value discipline
                                over fleeting  motivation. It&apos;s designed for those who
                                are committed to their fitness  and health goals,
                                providing an uncompromising platform that supports
                                consistent effort without the need for external
                                motivational gimmicks.
                            </Section>
                        </div>
                        <div className='flex items-center justify-center sm:justify-end w-full'>
                            <Section type='fade' delay='1.0s' >
                                <Image
                                    src="/AtoB.png"
                                    alt='A to B '
                                    width={400}
                                    height={100}

                                />
                            </Section>


                        </div>

                    </div>
                </div>

            </div>
            <div className="w-full h-8 pattern-rhombus pattern-black pattern-bg-background
                pattern-size-16 pattern-opacity-100"></div>
            <div

                style={{ backgroundImage: 'url(/BackgroundHumansA.png)', backgroundSize: 'cover', backgroundPositionX: 'center', backgroundRepeat: 'no-repeat', width: '100vw', height: '95vh' }}
                className='w-full h-[98vh]  pt-24 bg-background flex flex-col justify-between '>
                <div className='flex flex-col max-w-7xl w-full mx-auto px-16'>
                    <Section delay="0.5s" className='text-4xl  sm:text-4xl md:text-5xl xl:5xl 2xl:5xl '>
                        I haven&apos;t figure out what to put here yet.
                    </ Section>


                </div>

            </div>
            <div style={{ overflow: 'hidden', width: '100%', height: '25px' }}>
                <Belt background="LentaLimarkdl.png" />
            </div>
            <div className='w-full pb-10 pt-24 bg-background flex bg-black flex-col justify-between '>
                <div className='flex flex-col max-w-7xl text-white w-full mx-auto px-16'>
                <Section delay="0.2s" className='text-4xl  sm:text-4xl md:text-5xl xl:5xl 2xl:5xl '>
                Assets Crafted with Love and Patience.
                    </ Section>
                    <p className=' mb-2 mt-10'>{"/logo.svg"}</p>
                    <div className='bg-background p-5 flex justify-center items-center rounded-2xl'>
                        <Logo height={350} width={350} />
                    </div>
                    <p className=' mb-2 mt-5'>{"/loader.svg"}</p>
                    <div className='bg-white p-5 flex justify-center items-center rounded-2xl'>
                        <div className='w-32 mt-5 rounded-lg p-2 bg-white'>
                            <object type="image/svg+xml" data="/LoaderAnimated.svg">svg-animation</object>

                        </div>
                    </div>

                    <p className=' mb-2 mt-5'>{"/humans_together.svg"}</p>
                    <div className='bg-white p-5 flex justify-center items-center rounded-2xl'>
                        <Image 
                            width={300}
                            height={500} 
                            alt='Humans' 
                            src='/HumansAsset.png'
                        />
                    </div>
                </div>

            </div>
            <div className="h-12 w-full pattern-rectangles pattern-black pattern-bg-white 
                pattern-size-8 pattern-opacity-100"></div>
            <div className='bg-white h-24 flex justify-center items-center text-2xl font-black gap-5'>
                <motion.a
                 className='flex flex-row gap-2 items-center px-4 py-2 bg-gray-700 hover:bg-gradient-to-br hover:via-violet-800 hover:from-slate-800 hover:to-slate-800 rounded-xl text-white'
                 whileHover={{scale: 1.2}}
                 href='https://github.com/limarkdl/next-gym-fullstack'
                 target='_blank'
                 >
                    <FaGithub />
                    GitHub
                    </motion.a>
                <motion.a 
                className='flex flex-row gap-2 items-center px-4 py-2 bg-gray-700 hover:bg-gradient-to-br hover:via-violet-400 hover:from-orange-600 hover:to-blue-500 rounded-xl text-white'
                whileHover={{scale: 1.2}}
                href='https://www.figma.com/file/cWwoYxSZKos9gGX4UJ24kQ/WingSpan?type=design&node-id=0%3A1&mode=design&t=6w5VKqRKy7pZ4slU-1'
                target='_blank'
                >
                    <FaFigma />
                    Figma
                    </motion.a>

            </div>
<div className="h-12 w-full pattern-rectangles pattern-black pattern-bg-white 
                pattern-size-8 pattern-opacity-100"></div>

        </div>
    );
}

// TODO: 'Optimize redundancy when using FeatureSection & Section '

const eyeAnimation = {
    animate: {
        x:
            ['0px', '-3px', '3px', '0px', '0px', '0px',
                '0px', '0px', '0px', '3px', '0px', '0px',
                '-3px', '0px'],



    },
    transition: {
        x: {
            delay: 2,
            repeat: Infinity,
            repeatType: "loop",
            duration: 12,

        }
    }
};

interface FeatureSectionProps {
    delay: string;
    icon: ReactNode;
    colorClass: string;
    text: string;
    directionToSlide?: 'toRight' | 'toLeft';
}

const FeatureSection = ({ delay, icon, colorClass, text, directionToSlide }: FeatureSectionProps) => (
    <motion.div whileHover={{ scale: 1.1 }}>
        <Section delay={delay} directionForSlide={directionToSlide} className='bg-secondary px-10 whitespace-nowrap py-5 flex flex-row gap-5 items-center rounded-xl'>
            <div className={cn('w-6 h-6 flex justify-center items-center', colorClass)}>
                {icon}
            </div>
            {text}
        </Section>
    </motion.div>
);