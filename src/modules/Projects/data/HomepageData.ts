import { ProactiveMonitoring, Portfolio, FerRealSpanish, ContentAutomation } from "@static/images";

export const HomepageData = [
    {
        title: "Portfolio",
        image: {
            src: Portfolio.src,
            width: Portfolio.width,
            height: Portfolio.height,
            alt: "Project Portfolio",
        },
        links: [
            {
                title: "Live Preview",
                link: "https://porfolio-renatolagos-projects.vercel.app/",
            },
            {
                title: "Source Code",
                link: "https://github.com/RenatoLagos/Porfolio",
            },
        ],
        extraInfo: [
            {
                title: "Stack",
                description: "Astro, React, TypeScript, Emotion (React/Styled), GSAP, AOS, React Hook Form, Zod, Swiper, React Device Detect, Sitemap, Vite Plugin Compression",
            },
            {
                title: "Data",
                description: "2025-04-10",
            },
            {
                title: "Client",
                description: "Own Project",
            },
        ],
        content: `
            <h3>Portfolio</h3>
            <p>
                My portfolio website.
            </p>
        `,
    },
    {
        title: "Proactive Monitoring",
        image: {
            src: ProactiveMonitoring.src,
            width: ProactiveMonitoring.width,
            height: ProactiveMonitoring.height,
            alt: "Project Proactive Monitoring",
        },
        links: [
            {
                title: "Live Preview",
                link: "https://github.com/RenatoLagos/Proactive-monitoring",
            },
            {
                title: "Source Code",
                link: "https://github.com/RenatoLagos/Proactive-monitoring",
            },
        ],
        extraInfo: [
            {
                title: "Stack",
                description: "Next.js, React, Typescript, Tailwind CSS, Node.js, Express, PostgreSQL, Sequelize, Supabase",
            },
            {
                title: "Data",
                description: "2025-02-28",
            },
            {
                title: "Client",
                description: "Itaú Bank - RPA Operations",
            },
        ],
        content: `
            <h3>Proactive Monitoring</h3>
            <p>
                A proactive monitoring system for RPA processes designed to provide real-time visibility into robot execution, analyze performance, generate automatic alerts, and improve operational traceability across automation workflows.
            </p>
        `,
    },
    {
        title: "FerRealSpanish",
        image: {
            src: FerRealSpanish.src,
            width: FerRealSpanish.width,
            height: FerRealSpanish.height,
            alt: "Project FerRealSpanish",
        },
        links: [
            {
                title: "Live Preview",
                link: "https://fer-real-spanish.vercel.app",
            },
            {
                title: "Source Code",
                link: "https://github.com/RenatoLagos/FerRealSpanish",
            },
        ],
        extraInfo: [
            {
                title: "Stack",
                description: "Astro, TypeScript, Tailwind CSS, Vercel",
            },
            {
                title: "Data",
                description: "2025-Present",
            },
            {
                title: "Client",
                description: "Own Project",
            },
        ],
        content: `
            <h3>FerRealSpanish</h3>
            <p>
                A modern Spanish-learning platform built with Astro and TypeScript. Features a clean, responsive design with Tailwind CSS and deployed on Vercel for optimal performance and global reach.
            </p>
        `,
    },
    {
        title: "Content Automation Stack",
        image: {
            src: ContentAutomation.src,
            width: ContentAutomation.width,
            height: ContentAutomation.height,
            alt: "Project Content Automation Stack",
        },
        links: [
            {
                title: "GitHub",
                link: "https://github.com/RenatoLagos/content-automation",
            },
        ],
        extraInfo: [
            {
                title: "Stack",
                description: "n8n, AI Agents, APIs, Workflow Orchestration",
            },
            {
                title: "Data",
                description: "2025-Present",
            },
            {
                title: "Client",
                description: "Own Project",
            },
        ],
        content: `
            <h3>Content Automation Stack</h3>
            <p>
                Intelligent social media automation platform using n8n and AI agents for thumbnail generation, content description creation, and multi-platform distribution. Features analytics dashboards and automated video editing pipelines.
            </p>
        `,
    },

];
