import { CodeBridge, ProactiveMonitoring, LinguaConnect } from "@static/images";

export const HomepageData = [
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
        title: "Landing Page - CodeBridge",
        image: {
            src: CodeBridge.src,
            width: CodeBridge.width,
            height: CodeBridge.height,
            alt: "Project CodeBridge",
        },
        links: [
            {
                title: "Live Preview",
                link: "https://github.com/RenatoLagos/CodeBridge",
            },
            {
                title: "Source Code",
                link: "https://github.com/RenatoLagos/CodeBridge",
            },
        ],
        extraInfo: [
            {
                title: "Stack",
                description: "Astro, Tailwind CSS, TypeScript, Vite, EmailJS",
            },
            {
                title: "Data",
                description: "Work in Progress",
            },
            {
                title: "Client",
                description: "Own Project",
            },
        ],
        content: `
            <h3>Landing Page - CodeBridge</h3>
            <p>
                Many companies rely on low-code platforms like Blue Prism and UiPath to automate their operations. While powerful, these tools can become limiting when scalability, performance, or integration with modern stacks is required. CodeBridge solves this by transforming existing low-code workflows into readable, maintainable code.
            </p>
        `,
    },
    {
        title: "Landing Page - Lingua Connect",
        image: {
            src: LinguaConnect.src,
            width: LinguaConnect.width,
            height: LinguaConnect.height,
            alt: "Project Lingua Connect",
        },
        links: [
            {
                title: "Work in Progress",
                link: "#"
            },
        ],
        extraInfo: [
            {
                title: "Stack",
                description: "Astro, Tailwind CSS, TypeScript, Vite, EmailJS",
            },
            {
                title: "Data",
                description: "Work in Progress",
            },
            {
                title: "Client",
                description: "Freelance Project",
            },
        ],
        content: `
            <h3>Landing Page - Lingua Connect</h3>
            <p>
                This website offers personalized online English and Spanish classes with native-level instructors. Lessons are customized to fit your goals, schedule, and learning style, and are suitable for all ages and proficiency levels.
        `,
    },
        
];
