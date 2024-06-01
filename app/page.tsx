
"use client";

import React, { useState, Dispatch, SetStateAction } from "react";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import StarsCanvasBackGround from "@/components/StarBackground";
import ProgressIndicator from "@/components/ProgressIndicator";
import Layout from "@/components/Layout";
// import AnimatedCursor from "@/components/CustomCursor";
import Head from "next/head";
import { METADATA } from "@/lib/data";
import HeaderUpdate from "@/components/HeaderUpdate";
import Scripts from "@/components/script";
// import LoadingScreen from "@/components/LoadingScreen";
import { domAnimation, LazyMotion } from "framer-motion"
import GithubGraphSection from "@/components/Github-graph";
import Footer from "@/components/footer";
import Startup from "@/components/Starup";
import SocialMediaAround from "@/components/SocialMediaAround";

export interface IDesktop {
  isDesktop: boolean;
}
export default function Home() {
  const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true);

  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>
      <Layout>
        {loading ? (
          <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
            <Startup setLoading={setLoading} />
          </div>
        ) : (
          <main className="flex flex-col items-center px-4  pt-40">
            <LazyMotion features={domAnimation}>
              <HeaderUpdate />
              <ProgressIndicator />
              <Intro />
              <SectionDivider />
              <About />
              <Projects />
              <Skills />
              <Experience />
              <GithubGraphSection />
              <Contact />
              <SocialMediaAround finishedLoading={loading} />
              <Footer  />
              <StarsCanvasBackGround />
              <Scripts />
            </LazyMotion>
          </main>
        )}

      </Layout>
    </>
  );
}
