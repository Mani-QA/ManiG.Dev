export interface Project {
  id: string;
  title: string;
  url: string;
  githubUrl: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

/**
 * Projects data - Add new projects here!
 * 
 * To add a new project, simply add a new object to this array with:
 * - id: A unique identifier (used for keys)
 * - title: The project name
 * - url: Live demo URL
 * - githubUrl: GitHub repository URL
 * - description: A brief description of the project
 * - tags: Array of technology/feature tags
 * - featured: (optional) Set to true to highlight the project
 */
export const projects: Project[] = [
  {
    id: "testcase-pro",
    title: "TestCase.Pro",
    url: "https://testcase.pro",
    githubUrl: "https://github.com/Mani-QA/testcase.pro",
    description:
      "A production-ready Test Case Management System built with Hono and Cloudflare Workers. It offers test plans, runs, and analytics. Deployed on the Edge, it ensures zero cold starts, global low latency, and secure JWT authentication.",
    tags: ["Hono", "Cloudflare Workers", "Edge Computing", "JWT", "Analytics"],
    featured: true,
  },
  {
    id: "qademo",
    title: "QADemo.com",
    url: "https://qademo.com",
    githubUrl: "https://github.com/Mani-QA/ecommerce",
    description:
      "A test automation sandbox built with React, Hono, and Cloudflare Workers (D1, R2, KV). It eliminates CAPTCHAs and rate limits, offering stable selectors, predictable data, and simulated payments to create a reliable environment for learning UI and API testing.",
    tags: ["React", "Hono", "D1", "R2", "KV", "Test Automation"],
    featured: true,
  },
  {
    id: "microblog",
    title: "Blog.ManiG.dev",
    url: "https://blog.manig.dev",
    githubUrl: "https://github.com/Mani-QA/microblog",
    description:
      "A modern, serverless microblogging platform built with Cloudflare Workers, Hono, React (Vite), and D1 Database. Features a clean interface for sharing thoughts and updates.",
    tags: ["Cloudflare Workers", "Hono", "React", "Vite", "D1", "Serverless"],
  },
  {
    id: "jobportal",
    title: "JobPortal.ManiG.dev",
    url: "https://jobportal.manig.dev",
    githubUrl: "https://github.com/Mani-QA/JobPortal",
    description:
      "A high-performance recruitment platform built on Cloudflare Edge. It features sub-100ms latency, end-to-end TypeScript safety, and WCAG 2.1 accessibility. SEO-optimized and modern, it connects talent with employers via a blazing-fast interface.",
    tags: ["TypeScript", "Edge Computing", "WCAG 2.1", "SEO", "Performance"],
  },
];

