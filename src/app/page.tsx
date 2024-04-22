"use client";
import Header from './(ui)/Header/Header';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import LOGO_EYES from '../../public/LOGO_EYES.svg'
import { TbArrowDown, TbMicroscope } from 'react-icons/tb';
import { MdOutlineFastfood } from 'react-icons/md';
import { GrUserManager } from "react-icons/gr";
import { FaPencil, FaBinoculars } from "react-icons/fa6";
import { RiUserSmileLine } from "react-icons/ri";
import { useRef, useState, useEffect,  } from 'react';
import Section from '@/lib/animate/section';



export default function Home() {

    const beltAnimation = {
        animate: {
            x: ['-50%', '0%'],
        },
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 12,
                ease: "linear"
            }
        }
    };
    
    return (
        <div className='w-screen h-full flex flex-col'>
            <div className='h-[98vh] w-screen overflow-hidden flex flex-col justify-between'>
                <div style={{ overflow: 'hidden', width: '100%', height: '50px' }}>
                    <motion.div
                        style={{
                            width: '200%',
                            height: '100%',
                            backgroundImage: 'url("LentaDate.png")',
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: 'contain'
                        }}
                        {...beltAnimation}
                    />
                </div>
                <div className='flex flex-col h-full mt-3'>
                    <Section delay="0s" className="">
                        <Header withAuth={false} />
                    </Section>
                    <section className='flex flex-col gap-1 h-full p-3'>
                        <div className='absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>

                            <Image
                                src={LOGO_EYES}
                                alt={"Predator's Eyes"}
                                width={312}
                                height={312}
                            />

                        </div>

                        <div className='flex flex-col justify-evenly h-full items-center'>
                            <Section className='text-4xl sm:text-4xl md:text-5xl xl:5xl 2xl:5xl text-center'>Ultimate workout manager</Section>
                            <div className='text-white text-md flex xl:flex-row 2xl:flex-row md:flex-col sm:flex-col flex-col gap-5 w-full justify-between max-w-6xl px-12 mt-4'>
                                <div className='flex flex-col gap-5 '> 
                                    <Section delay="0.3s" className='bg-black px-10 delay-100 whitespace-nowrap py-5 flex flex-row gap-5 items-center rounded-xl'><GrUserManager size={24} className='text-blue-500' /> Manage your workouts</Section>
                                    <Section delay="0.5s" className='bg-black px-10 delay-200 whitespace-nowrap py-5 flex flex-row  gap-5 items-center rounded-xl'><FaPencil size={24} className='text-red-500' />Log your measurements</Section>
                                    <Section delay="0.7s" className='bg-black px-10 delay-300 whitespace-nowrap py-5 flex flex-row  gap-5 items-center rounded-xl'><FaBinoculars size={24} className='text-teal-500' />Observe your progress</Section>
                                </div>
                                <div className='flex flex-col gap-5'>
                                <Section delay="1s" className='bg-black px-10 whitespace-nowrap py-5 flex flex-row gap-5 items-center rounded-xl'><TbMicroscope size={24} className='text-green-500' />See each paramater </Section>
                                <Section delay="1.2s" className='bg-black px-10 whitespace-nowrap py-5 flex flex-row gap-5 items-center rounded-xl'><RiUserSmileLine size={24} className='text-violet-500' />Personalized routines</Section>
                                <Section delay="1.4s" className='bg-black px-10 whitespace-nowrap py-5 flex flex-row gap-5 items-center rounded-xl'><MdOutlineFastfood size={24} className='text-yellow-500' />Calorie/Water Logger</Section>
                                </div>
                            </div>
                        </div>

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
                    <motion.div
                        style={{
                            width: '200%',
                            height: '100%',
                            backgroundImage: 'url("LentaLimarkdl.png")',
                            backgroundRepeat: 'repeat-x',
                            backgroundSize: 'contain'
                        }}
                        {...beltAnimation}
                    />
                </div>
            </div>
            
        </div>
    );
}
