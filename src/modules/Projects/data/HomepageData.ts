import { FerRealSpanish, Automations, ProactiveMonitoring } from "@static/images";

export const HomepageData = [
    {
        title: "Proactive Monitoring System",
        image: {
            src: ProactiveMonitoring.src,
            width: ProactiveMonitoring.width,
            height: ProactiveMonitoring.height,
            alt: "Project Proactive Monitoring System",
        },
        links: [],
        extraInfo: [
            {
                title: "Stack",
                description: "Python Django, React, PostgreSQL",
            },
            {
                title: "Data",
                description: "2024-2025",
            },
            {
                title: "Client",
                description: "Itau Bank",
            },
        ],
        content: `
            <h3>Proactive Monitoring System – RPA Operations Dashboard</h3>
            <p>
                Built 4 real-time monitoring dashboards (React, Next.js, TypeScript, TailwindCSS) serving 120+ operations users, reducing incident response time by 35% through centralized KPI visibility.
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
                description: "Astro, React, TypeScript, Supabase/PostgreSQL, Resend, Apache Airflow",
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
            <h3>FerRealSpanish – Language Learning Platform</h3>
            <p>
                Full-stack Spanish learning platform (Astro, React, TypeScript, Supabase/PostgreSQL) serving 500+ waitlist users. Implemented row-level security (RLS) for multi-tenant student data, typed REST APIs for cohort management, and automated email campaigns (Resend, Apache Airflow DAGs). Deployed via Vercel with GitHub Actions CI/CD.
            </p>
        `,
    },
    {
        title: "Content Automation Stack",
        image: {
            src: Automations.src,
            width: Automations.width,
            height: Automations.height,
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
                description: "Python, FastAPI, Apache Airflow, pandas",
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
            <h3>Content Automation Stack – Social Media Operations</h3>
            <p>
                Content automation platform (Python, FastAPI, Apache Airflow) orchestrating 200+ social media posts/month across 4 platforms (YouTube, Instagram, TikTok, Facebook). Webhook-triggered DAG workflows automate AI-powered content generation (carousel layouts, subtitles, infographics using pandas), implementing retry logic and idempotent operations for 99%+ delivery success.
            </p>
        `,
    },

];
