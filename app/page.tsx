
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
import ProgressIndicator from "@/components/ProgressIndicator";
import Layout from "@/components/Layout";


export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";
export interface IDesktop {
  isDesktop: boolean;
}
export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading effect with setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Layout>
        <main className="flex flex-col items-center px-4 ">
          {loading ? (
            <LoaderSimple />
          ) : (
            <Suspense fallback={<LoaderSimple />}>
              <>
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
          )}
        </main>
      </Layout>
    </>
  );
}
