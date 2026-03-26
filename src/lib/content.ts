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
  avatar: "/images/avatar.jpg", // drop your photo in /public/images/ and rename it avatar.jpg
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
  title: "Developer (Co-op)",
  company: "Canada Revenue Agency",
  location: "Ottawa, Canada",
  period: "Sep 2023 – Oct 2024",
  description: [
    "Developed and tested Angular-based enterprise web applications and government web forms, including GST/HST rebate forms.",
    "Supported application deployments across DEV, TEST, pre-production, and production environments following release management procedures.",
    "Managed development and testing tasks in Jira, tracking defects and coordinating Agile Scrum sprint workflows across cross-functional teams.",
    "Shadowed the release manager to observe environment promotion, release coordination, and post-release validation activities.",
  ],
},
    {
      title: "Cloud Network Analyst Intern",
      company: "PSAC – Public Service Alliance of Canada",
      location: "Ottawa, Canada",
      period: "Summer 2026",
      description: [
        "Incoming Cloud Network Analyst intern working on cloud infrastructure and networking solutions.",
      ],
    },
  ],

  education: [
    {
      title: "Post-Graduate Certificate in Cloud Computing",
      school: "Algonquin College",
      location: "Ottawa, Canada",
      period: "September 2025 - Present",
      highlights: [
        "Currently enrolled in the Cloud Computing program",
        "Strong performance across cloud-focused technical courses",
        "Built real-world IoT and cloud pipeline projects using Azure services",
      ],
      coursework: [
        "Cloud computing fundamentals and architecture",
        "Cloud platform implementation and management",
        "Cloud networking and virtualization",
        "Remote and real-time data applications",
        "Cloud security and compliance",
        "Cloud storage and data management",
        "Cloud application development",
      ],
    },
  ],

  projects: [
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
      link: "", // add your deployed URL here once live
      github: "https://github.com/Patel-Creates/rideau-canal-dashboard",
    },
    {
      title: "CarClinch Background Removal API",
      description:
        "An AI-powered Python REST API that automatically removes and replaces backgrounds in car images. Designed for automotive listings to generate clean, professional product shots without manual editing.",
      tags: ["Python", "REST API", "AI", "Image Processing"],
      image: "", // add a screenshot in /public/images/ e.g. "/images/carclinch.png"
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
      image: "", // add a screenshot in /public/images/ e.g. "/images/chatbot.png"
      link: "",
      github: "https://github.com/Patel-Creates/azure-search-openai-Chatbot",
    },
  ],
};

export default personalInfo;