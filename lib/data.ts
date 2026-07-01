import React from 'react';

import { BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { CgWorkAlt } from 'react-icons/cg';
import { FaGithubSquare, FaMediumM } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { PiDevToLogoBold } from 'react-icons/pi';
import { TbBrandLeetcode } from 'react-icons/tb';

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
    title: 'About me',
    description:
        'Full Stack AI Engineer with 8+ years of experience building agentic systems, scalable web applications, and production AI workflows.',
    imageUrl: '/akash-profile.png'
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
        title: 'Senior Software Engineer',
        location: 'Bengaluru, India',
        description:
            'Led end-to-end design of Agent Builder Platform with LangChain and Temporal. Built multi-agent orchestration on AWS AgentCore, architected Deep Research Agent with Temporal for durable workflow orchestration, developed CodeAct Agent with Daytona sandboxes, and implemented agentic RAG system with pgvector.',
        icon: React.createElement(CgWorkAlt),
        date: 'Feb 2025 - Present',
        company: 'Grid Dynamics'
    },
    {
        title: 'Senior Software Engineer',
        location: 'Pune, India (Remote)',
        description:
            'Engineered cross-platform video conferencing solution using Amazon Chime, React, Electron.js, and AWS Serverless. Designed 20+ serverless REST APIs, resolved memory leak issues in Electron, and contributed to jewelry e-commerce platform redesign. Improved frontend performance through lazy loading and code splitting.',
        icon: React.createElement(CgWorkAlt),
        date: 'Jan 2021 - Jan 2025',
        company: 'Tech9'
    },
    {
        title: 'Software Engineer',
        location: 'Pune, India',
        description:
            'Architected League Management System using React and Flask with team registration, match scheduling, and live score updates. Built secure payment service platform with Angular, integrating payment gateways and real-time transaction tracking. Optimized React application performance, reducing page load time by 40%.',
        icon: React.createElement(CgWorkAlt),
        date: 'Aug 2018 - Jan 2021',
        company: 'Ignite Solutions'
    },
    {
        title: 'Full Stack Developer',
        location: 'Chandigarh, India',
        description:
            'Developed video-centric job portal using MEAN stack with end-to-end features for video uploads and processing. Implemented video processing pipelines using FFmpeg. Configured and managed AWS infrastructure including ELB, Route 53, ensuring high availability and scalability.',
        icon: React.createElement(CgWorkAlt),
        date: 'Aug 2017 - Aug 2018',
        company: 'Geek Informatic & Technology'
    },
    {
        title: 'Software Developer Intern',
        location: 'Hyderabad, India',
        description:
            'Contributed to development of Smartwinnr, a gamified quiz platform for enterprise training using MEAN stack. Implemented real-time functionality using Socket.io, enabling instant updates and improving user engagement and collaboration.',
        icon: React.createElement(LuGraduationCap),
        date: 'Dec 2016 - Jun 2017',
        company: 'Appnovation Technology Solutions'
    }
] as const;

export const projectsData = [
    {
        title: 'Agent Builder Platform',
        description:
            'Led end-to-end design of Agent Builder Platform with LangChain and Temporal. Built FastAPI-based Dynamic Agentic Registry for agent lifecycle management and React Flow Visual Workflow Builder for no-code multi-agent pipeline composition.',
        tags: ['LangChain', 'Temporal', 'FastAPI', 'React Flow', 'Python', 'AWS', 'Multi-Agent'],
        link: '#'
    },
    {
        title: 'Deep Research Agent',
        description:
            'Architected production-grade Deep Research Agent using Temporal for durable workflow orchestration with multi-step parallel pipelines, dynamic branching, and stateful checkpointing. Enabled 100+ concurrent research sessions with fault-tolerant automatic retry.',
        tags: ['Temporal', 'LangChain', 'Python', 'Distributed Systems', 'Workflow Orchestration'],
        link: '#'
    },
    {
        title: 'CodeAct Agent',
        description:
            'Built CodeAct Agent orchestrated via Temporal workflows where user intents are translated into executable code running in isolated Daytona sandboxes. Each activity provisions fresh workspace with full auditability.',
        tags: ['Temporal', 'Daytona', 'Python', 'LangChain', 'Code Execution', 'Sandboxing'],
        link: '#'
    },
    {
        title: 'Agentic RAG System',
        description:
            'Architected agentic RAG system with Temporal-orchestrated agent that iteratively refines retrieval queries. Performs dense vector search against pgvector knowledge base, evaluates context relevance, enabling accurate multi-hop reasoning.',
        tags: ['Temporal', 'LangChain', 'pgvector', 'PostgreSQL', 'RAG', 'Vector Search'],
        link: '#'
    },
    {
        title: 'Multi-Agent Orchestration',
        description:
            'Built managed multi-agent execution service on AWS AgentCore Runtime supporting CrewAI and LangGraph agents. Leveraged AgentCore Gateway as centralized MCP tool server with persistent cross-session state.',
        tags: ['AWS AgentCore', 'CrewAI', 'LangGraph', 'MCP', 'Multi-Agent Systems'],
        link: '#'
    },
    {
        title: 'Video Conferencing Platform',
        description:
            'Engineered cross-platform video conferencing solution using Amazon Chime, React, Electron.js, and AWS Serverless. Designed 20+ serverless REST APIs with AWS Lambda for meeting orchestration and real-time collaboration.',
        tags: ['React', 'Electron.js', 'Amazon Chime', 'AWS Lambda', 'Node.js', 'Serverless'],
        link: '#'
    },
    {
        title: 'League Management System',
        description:
            'Architected and developed League Management System using React and Flask, enabling team registration, match scheduling, live score updates, player statistics, and automated notifications.',
        tags: ['React', 'Flask', 'Python', 'PostgreSQL', 'Real-time Updates'],
        link: '#'
    },
    {
        title: 'Lashbrook Jewelry E-commerce',
        description:
            'Contributed to redesign of jewelry e-commerce platform with custom jewelry builder. Optimized checkout experience, improved mobile usability, and modernized UI to drive higher conversion rates.',
        tags: ['React', 'Tailwind', 'Redux', 'E-commerce', 'Custom Builder'],
        link: 'https://www.lashbrookdesigns.com'
    }
] as const;

export const skillsData = [
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Python',
    'FastAPI',
    'Flask',
    'Go',
    'LangChain',
    'LangGraph',
    'CrewAI',
    'RAG',
    'MCP',
    'AI Agents',
    'Temporal',
    'AWS',
    'AWS AgentCore',
    'Serverless',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'System Design',
    'Distributed Systems'
] as const;

export const contactData = {
    email: 'ak.akki907@gmail.com',
    phone_no: '7598608395',
    name: 'Akash Kumar',
    projectLink: 'https://github.com/akki907/portfolio_app',
    typewriterOptions: {
        strings: [
            'Full Stack AI Engineer',
            'Senior Software Engineer',
            'AI Agent Developer',
            'Full Stack Developer',
            'React.js Developer',
            'Python Developer',
            'Node.js Developer'
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
    cvLink: 'https://drive.google.com/file/d/1M7-D41bbpWpbUFGOgL5ZHbcKOLHkq4zZ/view?usp=sharing',
    intro: 'Full Stack AI Engineer with 8+ years delivering enterprise-scale products',
    imageUrl: '/akash-profile.png',
    aboutMe:
        "I'm a Full Stack AI Engineer with 8+ years of experience building enterprise products. Currently at Grid Dynamics, I work on agentic systems with LangChain, Temporal, and AWS. I enjoy solving hard problems and shipping reliable software from prototype to production."
} as const;

export const DEFAULT_THEME = 'dark' as const;

export const METADATA = {
    title: 'Portfolio | Akash Kumar',
    description: aboutData.description,
    siteUrl: 'https://portfolio-app-akash.vercel.app/'
};
