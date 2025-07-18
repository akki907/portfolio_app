import React from 'react';

import AreenaImg from '@/public/projects/areena.png';
import lashbrookImg from '@/public/projects/lashbrook.png';
import suitepeachImg from '@/public/projects/suitepeach.png';
import { BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { CgWorkAlt } from 'react-icons/cg';
import { FaGithubSquare, FaMediumM } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { PiDevToLogoBold } from 'react-icons/pi';
import { TbBrandLeetcode } from 'react-icons/tb';
import { AwesomeLibrary } from '@akki907/my-awesome-library';

export const links = [
    {
        name: 'Home',

        hash: '#home'
    },
    {
        name: 'About',
        hash: '#about'
    },
    {
        name: 'Projects',
        hash: '#projects'
    },
    {
        name: 'Skills',
        hash: '#skills'
    },
    {
        name: 'Experience',
        hash: '#experience'
    },
    {
        name: 'Github',
        hash: '#github'
    },
    {
        name: 'Contact',
        hash: '#contact'
    }
] as const;

interface aboutDataType {
    title: string;
    description: string;
    imageUrl: string;
}

export const aboutData: aboutDataType = {
    title: AwesomeLibrary.capitalize('about me'),
    description:
        "I'm a full-stack developer based in Pune, India. I have experience in building web applications using React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.",
    imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQG6bucFi1UBlw/profile-displayphoto-shrink_400_400/0/1707308234897?e=1718841600&v=beta&t=WEywbxDxeth7-wQ9ZuqjjQ7eDxoz2cenJESFmn8m4YM'
} as const;

interface ExperinceType {
    title: string;
    location: string;
    description: string;
    icon: JSX.Element;
    date: string;
    company?: string;
}

export const experiencesData: ExperinceType[] = [
    {
        title: 'Senior Software Developer',
        location: 'Pune, India',
        description:
            'Worked as full-stack developer. My stack includes React, TypeScript, Node.js, Aws, ReactNative , golang , Aws Lambda, Electron.js',
        icon: React.createElement(CgWorkAlt),
        date: '2021 - Present',
        company: 'Tech9'
    },
    {
        title: 'Full-Stack Developer',
        location: 'Pune, India',
        description:
            'Worked as full-stack developer. My stack includes React, TypeScript, Angular,Python.',
        icon: React.createElement(CgWorkAlt),
        date: '2018 - 2021',
        company: 'Ignite Solutions Pvt. Ltd.'
    },
    {
        title: 'FullStack Developer',
        location: 'Chandigarh, India',
        description:
            'I worked as a Fullstack-end developer for 1 years. Worked on 3 projects two of them was as fullstack and one was as a backend.',
        icon: React.createElement(CgWorkAlt),
        date: '2017 - 2018',
        company: 'Geek Informatic Pvt. Ltd.'
    },
    {
        title: 'Software Intern',
        location: 'Hyderabad, India',
        description:
            'In Last Semester of M.C.A ,I had the privilege of collaborating with a dynamic startup where I played a pivotal role in completing a crucial feed system. Leveraging my expertise in full-stack development and my keen problem-solving abilities, I contributed to the design, development, and implementation of this system, ensuring its seamless integration and functionality.',
        icon: React.createElement(LuGraduationCap),
        date: '2016 - 2017',
        company: 'SmartWinnr'
    }
] as const;

export const projectsData = [
    {
        title: 'SuitePeach',
        description:
            'I worked as a full-stack developer on this startup project for 2 years. Edtech for dance.',
        tags: ['React', 'Node.js', 'php', 'Electron.js', 'Aws', 'sass', 'Aws-chimes'],
        imageUrl: suitepeachImg,
        link: 'https://app.suitepeach.com/'
    },
    {
        title: 'Areena',
        description: 'I was the front-end developer. Gaming Platform for storts in us.',
        tags: ['React', 'TypeScript', 'Node.js', 'Python', 'Redux', 'ansible'],
        imageUrl: AreenaImg,
        link: 'https://www.areenasports.com/'
    },
    {
        title: 'Lashbrook',
        description:
            'Worked as a front-end developer on this project. E-commerce website for custom jewellery builder.',
        tags: ['React', 'tailwind', 'redux'],
        imageUrl: lashbrookImg,
        link: 'https://www.lashbrookdesigns.com'
    }
] as const;

export const skillsData = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind',
    'Prisma',
    'MongoDB',
    'Redux',
    'Express',
    'PostgreSQL',
    'Python',
    'Framer Motion',
    'golang',
    'Aws',
    'Lambda',
    'CSS',
    'Electron.js',
    'Aws-chimes',
    'ansible',
    'Angular',
    'ReactNative',
    'Aws-lambda',
    'Aws-s3',
    'GenAI',
    'Agents',
    'LangChain',
    'LangGraph',
    'CrewAI',
    'MCP',
    'Python',
    'Flask',
    'FastAPI'
] as const;

export const contactData = {
    email: 'ak.akki907@gmail.com',
    phone_no: '7598608395',
    name: 'Akash Kumar',
    projectLink: 'https://github.com/akki907/portfolio_app',
    typewriterOptions: {
        strings: [
            'FullStack Developer',
            'Front End Developer',
            'React Js Developer',
            'Javascript Developer',
            'Node.js Developer',
            'Python Developer'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30
    },
    socialMedia: {
        linkedin: {
            link: 'https://www.linkedin.com/in/akki907/',
            icon: React.createElement(BsLinkedin)
        },
        stackoverflow: {
            link: 'https://stackoverflow.com/users/6021306/akash-kumar',
            icon: React.createElement(BsStackOverflow)
        },
        github: {
            link: 'https://github.com/akki907',
            icon: React.createElement(FaGithubSquare)
        },
        medium: {
            link: 'https://medium.com/@ak.akki907',
            icon: React.createElement(FaMediumM)
        },
        leetcode: {
            link: 'https://leetcode.com/u/akki907/',
            icon: React.createElement(TbBrandLeetcode)
        },
        devTo: {
            link: 'https://dev.to/akki907',
            icon: React.createElement(PiDevToLogoBold)
        }
    },
    githubUsername: 'akki907',
    cvLink: 'https://utfs.io/f/vAfgIf24jA5WjqMNfCvw3UWbH4ErNeSzQPMn5YxBvpiKGdJj',
    intro: 'Akash is a full-stack developer with 7 years of experience.',
    imageUrl: 'https://utfs.io/f/d45c7325-a47a-464a-9433-95f16bfd7432-vks6pf.png',
    aboutMe: `After graduating with a degree in
  Computer science, I decided to pursue my
  passion for programming. I have been coding for 10 years now.
  My favorite part of programming is the
  problem-solving aspect. I love the
  feeling of finally figuring out a solution to a problem. My core stack
  is
  React, Next.js, Node.js, golang and MongoDB
  I am also familiar with TypeScript and Aws. I am always looking to
  learn new technologies. I am currently looking for a
  full-time position as a software developer.
  
  When I'm not coding, I enjoy Traveling watching movies, and learning new things.`
} as const;

export const DEFAULT_THEME = 'dark' as const;

export const METADATA = {
    title: 'Portfolio | Akash Kumar',
    description: aboutData.description,
    siteUrl: 'https://portfolio-app-akash.vercel.app/'
};
