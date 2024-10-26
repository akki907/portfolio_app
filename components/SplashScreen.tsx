'use client';

//@ts-nocheck
import React, { useEffect, useState } from 'react';

import anime from 'animejs';
import Image from 'next/image';

import { contactData } from '@/lib/data';

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen = ({ finishLoading }: SplashScreenProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading()
    });

    loader
      .add({
        targets: '#logo',
        delay: 0,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '#logo',
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '#logo',
        delay: 100,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '#logo',
        delay: 100,
        scale: 1.25,
        duration: 500,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '#logo',
        delay: 100,
        scale: 1,
        duration: 500,
        easing: 'easeInOutExpo'
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);
  //@ts-ignore
  return (
    <div
      className='flex items-center justify-center'
      //   isMounted={isMounted}
    >
      <Image
        id='logo'
        src={contactData.imageUrl}
        alt={contactData.name}
        width='250'
        height='250'
        quality='100'
        priority={true}
        className='h-35 w-35 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
      />
      {/* <Image id="logo" src={contactData.imageUrl} alt="" width={60} height={60} /> */}
    </div>
  );
};

export default SplashScreen;
