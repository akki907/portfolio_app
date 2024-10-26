"use client";

import React, { Dispatch, SetStateAction, useState } from "react";

import { domAnimation, LazyMotion } from "framer-motion";
import Head from "next/head";

import { METADATA } from "@/lib/data";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import GithubGraphSection from "@/components/Github-graph";
import HeaderUpdate from "@/components/HeaderUpdate";
import Intro from "@/components/intro";
import Layout from "@/components/Layout";
import ProgressIndicator from "@/components/ProgressIndicator";
import Projects from "@/components/projects";
import Scripts from "@/components/script";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import SocialMediaAround from "@/components/SocialMediaAround";
import StarsCanvasBackGround from "@/components/StarBackground";
import Startup from "@/components/Starup";

export interface IDesktop {
  isDesktop: boolean;
}
export default function Home() {
  const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(true);

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
              <Footer />
              <StarsCanvasBackGround />
              <Scripts />
            </LazyMotion>
          </main>
        )}
      </Layout>
    </>
  );
}
