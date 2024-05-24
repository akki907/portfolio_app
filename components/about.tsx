"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `
After graduating with a degree in
Computer science, I decided to pursue my
passion for programming. I have been coding for 10 years now.
My favorite part of programming is the
problem-solving aspect. I love the
feeling of finally figuring out a solution to a problem. My core stack
is
React, Next.js, Node.js, golang and MongoDB
I am also familiar with TypeScript and Aws. I am always looking to
learn new technologies. I am currently looking for a
full-time position as a software developer
`

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <TextGenerateEffect className="mb-3 font-medium" words={words} />      
      <TextGenerateEffect words={`When I'm not coding, I enjoy Traveling
        watching movies, and learning new things.`} className="italic"/>
    </motion.section>
  );
}
