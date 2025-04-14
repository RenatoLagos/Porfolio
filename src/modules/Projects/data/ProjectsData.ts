import { ProactiveMonitoring, CodeBridge } from "@static/images";

export const ProjectsData = [
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
                description: "2025-03-28",
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
                description: "React, TypeScript, Styled Components, Strapi",
            },
            {
                title: "Data",
                description: "2024-01-01",
            },
            {
                title: "Client",
                description: "Adidas",
            },
        ],
        content: `
            <h3>Adidas Landing Page</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam voluptates,
                voluptate. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam
                voluptates, voluptate. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam
                voluptates, voluptate. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam
                voluptates, voluptate.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam voluptates,
                voluptate.
            </p>
        `,
    },
];
