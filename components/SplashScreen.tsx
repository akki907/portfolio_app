"use client";

import React, { useEffect } from 'react';
import anime from 'animejs';

const SplashScreen = () => {
  useEffect(() => {
    const timeline = anime.timeline({
      duration: 1500,
    });

    timeline
      .add({
        targets: '.splash-logo',
        opacity: [0, 1],
        translateY: ['-100%', 0],
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.splash-logo',
        opacity: [1, 0],
        translateY: [0, '100%'],
        easing: 'easeInExpo',
        delay: 1000,
      })
      .add({
        targets: '.splash-screen',
        opacity: [1, 0],
        easing: 'linear',
        duration: 500,
        complete: () => {
          // Redirect or hide splash screen
        },
      });
  }, []);

  return (
    <div className="splash-screen fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="splash-logo text-4xl font-bold">Your Splash Screen Content</div>
    </div>
  );
};

export default SplashScreen;
