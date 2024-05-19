"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { contactData } from "@/lib/data";
import { Button } from "./ui/button";
import Typewriter from "typewriter-effect";

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
            className="w-80 h-80 overflow-hidden relative"
          >
            {contactData.imageUrl && (
              <Image
                src={contactData.imageUrl}
                alt={contactData.name}
                width="250"
                height="250"
                quality="100"
                priority={true}
                className="h-35 w-35 rounded-full object-cover border-[0.35rem] border-white shadow-xl z-[5] w-full h-full transition-all duration-400 fancy-image"
              />
            )}
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-semibold leading-tight text-white  lg:text-3xl">
          Hello <span className="wave">👋</span>
        </h2>
        <h2 className="pt-2 text-2xl font-semibold leading-tight text-white ">
          Im {contactData.name}
        </h2>
        <Typewriter options={{ strings: ["FullStack Developer", "Front End Developer", "React Js Developer", "Javascript Developer", "Node.js Developer", "Python Developer"], autoStart: true, loop: true, deleteSpeed: 30 }} />
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group opacity-60  bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href={contactData.cvLink}
          download
          target="_blank"
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2 align-middle ">

          {Object.values(contactData.socialMedia).map((i, index) => (
            <Button
              key={i.link}
              className="bg-white group-hover:translate-y-1  opacity-60  p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              onClick={() => {
                window.open(i.link, "_blank");
              }}
            >
              {i.icon}
            </Button>
          ))}
        </div>


      </motion.div>
    </section>
  );
}
