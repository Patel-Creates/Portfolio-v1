export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export type Education = {
  title: string;
  school: string;
  location: string;
  period: string;
  highlights: string[];
  coursework: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
};

export type PersonalInfo = {
  name: string;
  title: string;
  email: string;
  location: string;
  about: string;
  avatar: string;
  quote: string;
  message: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  skills: string[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
};

const personalInfo: PersonalInfo = {
  name: "Dharti Patel",
  title: "Cloud & DevOps Student | Cloud Network Analyst Intern @ PSAC",
  email: "Dharti236@gmail.com",
  location: "Ottawa, Canada",
  quote: "Build it. Break it. Fix it. Ship it.",
  avatar: "/images/avatar.jpg", // rename your LinkedIn photo to avatar.jpg and drop it in /public/images/
  about:
    "Hi, I'm Dharti Patel, a Cloud & DevOps student at Algonquin College in Ottawa. I'm passionate about building cloud-native solutions, automating infrastructure, and working with Azure. I'm incoming as a Cloud Network Analyst Intern at PSAC and love working on real-world projects that combine IoT, AI, and cloud technology. Always learning, always building.",
  message:
    "Feel free to reach out if you're looking to collaborate, have a question, or just want to connect!",
  socials: {
    github: "https://github.com/Patel-Creates",
    linkedin: "https://www.linkedin.com/in/dhartipatel23/",
  },

  skills: [
    "Azure",
    "Python",
    "JavaScript",
    "TypeScript",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "GitHub Actions",
    "Linux",
    "Networking",
    "Next.js",
    "Node.js",
    "REST APIs",
    "Azure IoT Hub",
    "Azure AI Search",
    "Azure OpenAI",
    "Git",
  ],

  experiences: [
    {
      title: "Cloud Network Analyst Intern",
      company: "PSAC – Public Service Alliance of Canada",
      location: "Ottawa, Canada",
      period: "Summer 2026",
      description: [
        "Incoming Cloud Network Analyst intern working on cloud infrastructure and networking solutions.",
      ],
    },
    {
      title: "Developer (Co-op)",
      company: "Canada Revenue Agency",
      location: "Ottawa, Canada",
      period: "Sep 2023 – Oct 2024",
      description: [
        "Developed and tested Angular-based enterprise web applications and government web forms, including GST/HST rebate forms.",
        "Supported application deployments across DEV, TEST, pre-production, and production environments following release management and validation procedures.",
        "Managed development and testing tasks in Jira, tracking defects and coordinating Agile Scrum sprint workflows across cross-functional teams.",
        "Assisted with application and release documentation including testing notes and feature updates to support team knowledge sharing.",
        "Shadowed the release manager to observe environment promotion, release coordination, and post-release validation activities.",
      ],
    },
  ],

  education: [
    {
      title: "Post-Graduate Certificate in Cloud Development & Operations",
      school: "Algonquin College",
      location: "Ottawa, Canada",
      period: "September 2025 – Present",
      highlights: [
        "GPA: 3.75 / 4.00",
        "Strong performance across cloud-focused technical courses",
        "Built real-world IoT and cloud pipeline projects using Azure services",
      ],
      coursework: [
        "Cloud Architecture & Infrastructure as Code",
        "DevOps & CI/CD Pipelines",
        "DevSecOps & Cloud Security",
        "Cloud Networking and Virtualization",
        "Remote and Real-Time Data Applications",
        "Cloud Storage and Data Management",
        "Compliance & Governance",
      ],
    },
    {
      title: "Computer Programming – Diploma",
      school: "Algonquin College",
      location: "Ottawa, Canada",
      period: "September 2022 – April 2024",
      highlights: [
        "GPA: 3.6 / 4.00",
        "Completed co-op placement at Canada Revenue Agency",
        "Built full-stack and data-focused projects across multiple semesters",
      ],
      coursework: [
        "Object-Oriented Programming",
        "Databases & Data Structures",
        "Web Development",
        "Software Testing",
      ],
    },
  ],

  projects: [
    {
      title: "CarClinch CI/CD Pipeline",
      description:
        "Designed and implemented a full CI/CD pipeline for the CarClinch AI image processing API. The pipeline automatically builds and tests the Dockerized Python application on every push, runs a Trivy container security scan, and publishes the image to a container registry — enabling fast, reliable, and secure deployments.",
      tags: [
        "GitHub Actions",
        "Docker",
        "CI/CD",
        "Trivy",
        "Python",
        "DevSecOps",
      ],
      image: "", // add a screenshot of your GitHub Actions workflow run e.g. "/images/carclinch-cicd.png"
      link: "",
      github: "https://github.com/Patel-Creates/carclinch-bg-removal-api",
    },
    {
      title: "Monitoring & Observability Stack",
      description:
        "Built a full observability stack using Prometheus, Grafana, and Loki to monitor the CarClinch API in both local and cloud environments. Configured custom Grafana dashboards tracking API request rates, response times, error rates, and container resource usage — deployed locally via Docker Compose and on Azure.",
      tags: [
        "Prometheus",
        "Grafana",
        "Loki",
        "Docker Compose",
        "Azure",
        "Observability",
      ],
      image: "", // add a screenshot of your Grafana dashboard e.g. "/images/monitoring-dashboard.png"
      link: "",
      github: "",
    },
    {
      title: "Rideau Canal Skating Conditions System",
      description:
        "A full real-time IoT data pipeline simulating sensor readings across 3 Rideau Canal skating stations. Built as a 3-part system: a Python sensor simulator, an Azure-based monitoring backend, and a live JavaScript dashboard displaying ice thickness, temperature, and weather conditions.",
      tags: [
        "Python",
        "JavaScript",
        "Azure IoT Hub",
        "Azure Stream Analytics",
        "Azure CosmosDB",
        "REST API",
        "Next.js",
      ],
      image: "/images/Rideau-Canal-Dashboard.png",
      link: "",
      github: "https://github.com/Patel-Creates/rideau-canal-dashboard",
    },
    {
      title: "CarClinch Background Removal API",
      description:
        "An AI-powered Python REST API that automatically removes and replaces backgrounds in car images. Designed for automotive listings to generate clean, professional product shots without manual editing.",
      tags: ["Python", "REST API", "AI", "Image Processing"],
      image: "", // add a screenshot e.g. "/images/carclinch.png"
      link: "",
      github: "https://github.com/Patel-Creates/carclinch-bg-removal-api",
    },
    {
      title: "Azure RAG Chatbot",
      description:
        "A Retrieval-Augmented Generation (RAG) chatbot running on Azure, using Azure AI Search and Azure OpenAI to power ChatGPT-style Q&A experiences over custom document sets.",
      tags: [
        "Python",
        "Azure AI Search",
        "Azure OpenAI",
        "RAG",
        "LLM",
        "Azure App Services",
      ],
      image: "", // add a screenshot e.g. "/images/azure-rag-chatbot.png"
      link: "",
      github: "https://github.com/Patel-Creates/azure-search-openai-Chatbot",
    },
  ],
};

export default personalInfo;