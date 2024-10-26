"use client";

import React from "react";

import { useActiveSectionContext } from "@/context/active-section-context";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Typewriter from "typewriter-effect";

import { contactData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

import { Button } from "./ui/button";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="w-80 h-80 overflow-hidden relative flex items-center justify-center"
          >
            {contactData.imageUrl && (
              <div className="instagram-loader">
                <Image
                  src={contactData.imageUrl}
                  alt={contactData.name}
                  width="250"
                  height="250"
                  loading="lazy"
                  quality="100"
                  className="h-35 w-35 rounded-full object-cover  shadow-xl z-[5] w-full h-full transition-all duration-400 "
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-2xl font-semibold leading-tight text-white  lg:text-3xl">
          Hello <span className="wave">👋</span> I am {contactData.name}
        </div>
        <div className="liner-background">
          <Typewriter
            options={{
              strings: [
                "FullStack Developer",
                "Front End Developer",
                "React Js Developer",
                "Javascript Developer",
                "Node.js Developer",
                "Python Developer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
        </div>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center px-4 text-lg font-medium gap-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group custom-gradiant text-black  px-7 py-3 flex items-center gap-2 rounded outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href={contactData.cvLink}
          download
          target="_blank"
        >
          Resume
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
