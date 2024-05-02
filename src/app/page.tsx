"use client";
import Header from '@/app/(ui)/header/header';
import Image from 'next/image';
import { TbArrowDown, TbMicroscope } from 'react-icons/tb';
import { MdOutlineFastfood } from 'react-icons/md';
import { GrUserManager } from 'react-icons/gr';
import { FaPencil, FaBinoculars, FaGithub, FaFigma } from 'react-icons/fa6';
import { RiUserSmileLine } from 'react-icons/ri';
import Section from '@/lib/animate/section';
import Belt from './(ui)/animated-components/belt';
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import FeatureSection from './(ui)/animated-components/framer-components';
import AnimatedEyes from './(ui)/animated-components/animated-eyes';
import AnimatedPeople from './(ui)/animated-components/animated-people';


// TODO: 'REFACTOR DECOMPOSE THIS DISASTER'


const GitHub_link = "https://github.com/limarkdl/next-gym-fullstack";
const Figma_link = "https://www.figma.com/file/cWwoYxSZKos9gGX4UJ24kQ/WingSpan?type=design&node-id=0%3A1&mode=design&t=6w5VKqRKy7pZ4slU-1"



export default function Home() {

    return (
        <div className='w-full h-full flex flex-col'>
            <div style={{ minHeight: 'max(700px, 98vh)' }} className='overflow-hidden flex flex-col'>
                <div style={{ overflow: 'hidden', width: '100%', height: '50px' }}>
                    <Belt background="LentaDate.png" />
                </div>
                <div className='flex flex-col h-full mt-3'>
                    <Section delay="0s" className="">
                        <Header withAuth={false} />
                    </Section>
                    <section className='flex flex-col items-center justify-center gap-1 min-h-[80vh] p-3'>

                        <AnimatedEyes />


                        <div className='flex flex-col justify-around sm:justify-evenly min-h-[70vh]'>
                            <Section type='fade' delay='0.2s'
                                     className='md:text-5xl sm:text-5xl text-3xl min-h-[200px] h-[20vh] w-full flex flex-col justify-end pb-5 text-center'>Ultimate
                                workout manager.</Section>
                            <div className='flex flex-col md:gap-24 gap-3 md:flex-row  mx-auto text-current'>
                                <div className='flex flex-col w-80 gap-3'>
                                    <FeatureSection delay="0.3s" icon={<GrUserManager size={24}/>}
                                                    colorClass='text-blue-500' text="Manage your workouts"/>
                                    <FeatureSection delay="0.5s" icon={<FaPencil size={24}/>} colorClass='text-red-500'
                                                    text="Log your measurements"/>
                                    <FeatureSection delay="0.7s" icon={<FaBinoculars size={24}/>}
                                                    colorClass='text-teal-500' text="Observe your progress"/>
                                </div>
                                <div className='flex flex-col w-80 gap-3'>
                                    <FeatureSection delay="1s" icon={<TbMicroscope size={24}/>}
                                                    colorClass='text-green-500' directionToSlide='toLeft'
                                                    text="See each parameter"/>
                                    <FeatureSection delay="1.2s" icon={<RiUserSmileLine size={24}/>}
                                                    colorClass='text-violet-500' directionToSlide='toLeft'
                                                    text="Personalized routines"/>
                                    <FeatureSection delay="1.4s" icon={<MdOutlineFastfood size={24}/>}
                                                    colorClass='text-yellow-500' directionToSlide='toLeft'
                                                    text="Calorie/Water Logger"/>
                                </div>
                            </div>

                        </div>

                    </section>
                    <Section type="fade" delay="2s" className='w-screen flex justify-center p-4'><TbArrowDown
                        size={48}/></Section>
                </div>
                
            </div>
            <div className="w-full h-12 pattern-diagonal-lines pattern-black pattern-bg-background 
  pattern-size-6 pattern-opacity-100"></div>

            <div className='w-full min-h-[98vh] py-24 bg-black flex flex-col justify-between text-white '>
                <div className='flex flex-col max-w-7xl w-full mx-auto px-16'>
                    <Section delay="0.5s" className='text-4xl  sm:text-4xl md:text-5xl xl:5xl 2xl:5xl '>
                        Designed for the Dedicated.
                    </ Section>
                    <div className='flex flex-col sm:flex-col md:flex-row sm:gap-20 md:gap-20 gap-5 mt-24 text-justify'>
                        <div className='max-w-sm'>
                            <Section delay="0.5s">
                                Tailored specifically for individuals who value discipline
                                over fleeting motivation. It&apos;s designed for those who
                                are committed to their fitness and health goals,
                                providing an uncompromising platform that supports
                                consistent effort without the need for external
                                motivational gimmicks.
                            </Section>
                        </div>
                        <div className='flex items-center justify-center w-full'>
                            <Section type='fade' delay='0.7s' >

                                <Image
                                    src="/MotivationVsDiscipline.png"
                                    alt='A to B'
                                    width={300}
                                    height={100}

                                />

                            </Section>


                        </div>

                    </div>
                </div>
                <div className='flex flex-col max-w-7xl w-full mx-auto px-16'>
                    
                    <div className='flex flex-col-reverse sm:flex-col-reverse md:flex-row sm:gap-20 md:gap-20 gap-10 mt-12 text-justify'>
                    <div className='flex items-center justify-center w-full'>
                            <Section type='fade' delay='0.7s' >

                                <Image
                                    src="/StrelkaThin.png"
                                    alt='A to B '
                                    width={300}
                                    height={100}
                                />

                            </Section>


                        </div>
                        <div className='max-w-sm'>
                            <Section delay="0.5s">
                            We prioritize lasting results over temporary comforts. The app is crafted for individuals 
                            who understand that true progress is the product of persistent effort, not quick fixes. 
                            With features that encourage daily discipline and long-term planning, our platform is the 
                            companion you need for a sustainable fitness journey.
                            </Section>
                        </div>
                        

                    </div>
                </div>
            </div>


            <div className="w-full h-8 pattern-rhombus pattern-black pattern-bg-background
                pattern-size-16 pattern-opacity-100"></div>
            <div
                className='w-full overflow-hidden items-center z-[-1] h-[98vh] relative pt-24 bg-background flex flex-col justify-between '>
                <AnimatedPeople />
                <div className='flex flex-col max-w-7xl w-full mx-auto px-16'>
                    <Section delay="0.5s" className='text-4xl  sm:text-4xl md:text-5xl xl:5xl 2xl:5xl '>
                    Uniting differences, connecting worlds — our app knows no gender.
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

                </div>

            </div>
            <div className="h-12 w-full pattern-rectangles pattern-black pattern-bg-white 
                pattern-size-8 pattern-opacity-100"></div>
            <div className='bg-white h-24 flex justify-center items-center text-2xl font-black gap-5'>
                <motion.a
                    className='flex flex-row gap-2 items-center px-4 py-2 bg-gray-700 hover:bg-gradient-to-br hover:via-violet-800 hover:from-slate-800 hover:to-slate-800 rounded-xl text-white'
                    whileHover={{ scale: 1.2 }}
                    href={GitHub_link}
                    target='_blank'
                >
                    <FaGithub />
                    GitHub
                </motion.a>
                <motion.a
                    className='flex flex-row gap-2 items-center px-4 py-2 bg-gray-700 hover:bg-gradient-to-br hover:via-violet-400 hover:from-orange-600 hover:to-blue-500 rounded-xl text-white'
                    whileHover={{ scale: 1.2 }}
                    href={Figma_link}
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
