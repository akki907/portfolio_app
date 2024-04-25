
"use client";

import React, { Suspense, useState, useEffect } from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Preloader from "@/components/Preloader";
import Header from "@/components/header";
import StarsCanvasBackGround from "@/components/StarBackground";
import ProgressIndicator from "@/components/ProgressIndicator";
import Layout from "@/components/Layout";

export interface IDesktop {
  isDesktop: boolean;
}
export default function Home() {
  const [loading, setLoading] = useState(true);


  return (
    <>
      <Layout>
        {loading ? (
          <Preloader setLoading={setLoading} />
        ) : (
          <main className="flex flex-col items-center px-4  pt-40">
            <Suspense fallback={<Preloader />}>
              <>
                <div className="bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
                <div className="bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
                <Header />
                <ProgressIndicator />
                <Intro />
                <SectionDivider />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
                <StarsCanvasBackGround />
              </>
            </Suspense>
          </main>
        )}

      </Layout>
    </>
  );
}
