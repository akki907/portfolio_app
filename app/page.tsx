
"use client";

import React, { Suspense, useState } from "react";
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
import AnimatedCursor from "@/components/CustomCursor";
import Head from "next/head";
import { METADATA } from "@/lib/data";
import HeaderUpdate from "@/components/HeaderUpdate";
import Scripts from "@/components/script";

export interface IDesktop {
  isDesktop: boolean;
}
export default function Home() {
  const [loading, setLoading] = useState(true);


  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>
      <Layout>
        {loading ? (
          <Preloader setLoading={setLoading} />
        ) : (
          <main className="flex flex-col items-center px-4  pt-40">
            <Suspense fallback={<Preloader />}>
              {/* <FollowerPointerCard title='Akash'> */}
              <div className="bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
              <HeaderUpdate />
              <ProgressIndicator />
              <Intro />
              <SectionDivider />
              <About />
              <Projects />
              <Skills />
              <Experience />
              <Contact />
              <StarsCanvasBackGround />
              <Scripts />
              <AnimatedCursor />
            </Suspense>
          </main>
        )}

      </Layout>
    </>
  );
}
