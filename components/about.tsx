'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { contactData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import SectionHeading from './section-heading';
import { TextGenerateEffect } from './ui/text-generate-effect';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <TextGenerateEffect className='mb-3 font-medium' words={contactData.aboutMe} />
    </motion.section>
  );
}
