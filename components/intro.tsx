'use client';

import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';

import { contactData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id='home'
            className='mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0'
        >
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.2
                        }}
                        className='relative flex size-80 items-center justify-center overflow-hidden'
                    >
                        {contactData.imageUrl && (
                            <div className='instagram-loader'>
                                <Image
                                    src={contactData.imageUrl}
                                    alt={contactData.name}
                                    width='250'
                                    height='250'
                                    loading='lazy'
                                    quality='100'
                                    className='h-35 w-35 duration-400 z-[5]  size-full rounded-full object-cover shadow-xl transition-all '
                                />
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            <motion.h1
                className='mb-10 mt-4 px-4 text-2xl font-medium !leading-normal sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className='text-2xl font-semibold leading-tight text-white  lg:text-3xl'>
                    Hello <span className='wave'>👋</span> I am {contactData.name}
                </div>
                <div className='liner-background'>
                    <Typewriter
                        options={{
                            strings: [
                                'FullStack Developer',
                                'Front End Developer',
                                'React Js Developer',
                                'Javascript Developer',
                                'Node.js Developer',
                                'Python Developer'
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 30
                        }}
                    />
                </div>
            </motion.h1>

            <motion.div
                className='flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <Link
                    href='#contact'
                    className='group flex items-center gap-2 rounded bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105'
                    onClick={() => {
                        setActiveSection('Contact');
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here{' '}
                    <BsArrowRight className='opacity-70 transition group-hover:translate-x-1' />
                </Link>

                <a
                    className='custom-gradiant borderBlack group  flex cursor-pointer items-center gap-2 rounded px-7 py-3 text-black outline-none transition hover:scale-110 focus:scale-110 active:scale-105'
                    href={contactData.cvLink}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Resume
                    <HiDownload className='transition group-hover:translate-y-1' />
                </a>
            </motion.div>
        </section>
    );
}
