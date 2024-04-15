import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGithubSquare, FaMediumM, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { link } from "fs";
import { BsLinkedin, BsStackOverflow } from "react-icons/bs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const aboutData = {
  title: "About me",
  description:
    "I'm a full-stack developer based in Houston, TX. I have experience in building web applications using React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.",
  imageUrl:
    "https://media.licdn.com/dms/image/D4D03AQG6bucFi1UBlw/profile-displayphoto-shrink_400_400/0/1707308234897?e=1718841600&v=beta&t=WEywbxDxeth7-wQ9ZuqjjQ7eDxoz2cenJESFmn8m4YM",
} as const;

interface ExperinceType {
  title: string;
  location: string;
  description: string;
  icon: JSX.Element;
  date: string;
  company?: string;
}

export const experiencesData : ExperinceType[] = [
  {
    title: "Software Intern",
    location: "Hyderabad, India",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a Fullstack developer (mean stack).",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2017",
    company:'SmartWinnr'
  },
  {
    title: "FullStack Developer",
    location: "Chandigarh, India",
    description:
      "I worked as a Fullstack-end developer for 1 years. Worked on 3 projects two of them was as fullstack and one was as a backend.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
    company:'Geek Informatic Pvt. Ltd.'
  },
  {
    title: "Full-Stack Developer",
    location: "Pune, India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
    company: 'Ignite Solutions Pvt. Ltd.'
  },
  {
    title: "Full-Stack Developer",
    location: "Pune, India",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Present",
    company: 'Tech9'
  },
] as const;



export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "golang",
  "Aws",
  "Lambda",
  "CSS",
] as const;

export const contactData = {
  email: "ak.akki907@gmail.com",
  phone_no:"7598608395",
  name: "Akash Kumar",
  socialMedia:{
    linkedin:{
      link:"https://www.linkedin.com/in/akki907/",
      icon:React.createElement(BsLinkedin)
    },
    stackoverflow:{
      link:"https://stackoverflow.com/users/15549708/akki907",
      icon:React.createElement(BsStackOverflow)
    },
    github:{
      link:"https://github.com/akki907",
      icon:React.createElement(FaGithubSquare)

    },
    medium :{
      link:"https://medium.com/@ak.akki907",
      icon:React.createElement(FaMediumM)
    }
  },
  cvLink:'',
  intro: "Akash is a full-stack developer with 7 years of experience." ,
  imageUrl:"https://media.licdn.com/dms/image/D4D03AQG6bucFi1UBlw/profile-displayphoto-shrink_400_400/0/1707308234897?e=1718841600&v=beta&t=WEywbxDxeth7-wQ9ZuqjjQ7eDxoz2cenJESFmn8m4YM"
} as const;


export const DEFAULT_THEME = "dark" as const;