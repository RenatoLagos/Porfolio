import { CodeBridge, ProactiveMonitoring, LinguaConnect } from "@static/images";

type ProjectData = {
    title: string;
    image: {
        src: string;
        width: number;
        height: number;
        alt: string;
    };
    links: {
        title: string;
        link: string;
    }[];
    extraInfo: {
        title: string;
        description: string;
    }[];
    content: string;
};

export const HomepageData: ProjectData[] = [
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
                description: "Next.js, React, Typescript, Tailwind CSS",
            },
            {
                title: "Data",
                description: "2025-02-28",
            },
            {
                title: "Client",
                description: "Personal Project",
            },
        ],
        content: `
            <h3>CodeBridge</h3>
            <p>
                A landing page for a code review service designed to help developers improve their code quality and learn from experienced developers.
            </p>
        `,
    },
    {
        title: "LinguaConnect",
        image: {
            src: LinguaConnect.src,
            width: LinguaConnect.width,
            height: LinguaConnect.height,
            alt: "Project LinguaConnect",
        },
        links: [
            {
                title: "Live Preview",
                link: "https://github.com/RenatoLagos/LinguaConnect",
            },
            {
                title: "Source Code",
                link: "https://github.com/RenatoLagos/LinguaConnect",
            },
        ],
        extraInfo: [
            {
                title: "Stack",
                description: "Next.js, React, Typescript, Tailwind CSS, Node.js, Express, PostgreSQL, Sequelize",
            },
            {
                title: "Data",
                description: "2025-02-28",
            },
            {
                title: "Client",
                description: "Personal Project",
            },
        ],
        content: `
            <h3>LinguaConnect</h3>
            <p>
                A language learning platform designed to connect language learners with native speakers for practice and cultural exchange.
            </p>
        `,
    },
];
