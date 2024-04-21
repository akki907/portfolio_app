
"use client";

import React, { Suspense, useState, useEffect } from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import LoaderSimple from "@/components/LoaderSimple";
import Header from "@/components/header";
import StarsCanvasBackGround from "@/components/StarBackground";
// import Particle from "@/components/Particle";
// import SplashScreen from "@/components/SplashScreen";


export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading effect with setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="flex flex-col items-center px-4 relative ">

      {loading ? (
        <LoaderSimple />
      ) : (
        <Suspense fallback={<LoaderSimple />}>
          <>
            <Header />
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
            {/* <div className="absolute right-0 top-0 bottom-0 h-screen w-[100%] z-[0]">
              <Particle color="#676394" />
            </div> */}
            {/* <StarsCanvas /> */}
            <StarsCanvasBackGround />
          </>
        </Suspense>
      )}

    </main>
  );
}
