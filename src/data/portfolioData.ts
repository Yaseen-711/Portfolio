import { Project, SkillGroup, EducationItem, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'Ali Mohammed Yaseen',
  shortName: 'Yaseen',
  initials: 'AY',
  domain: 'amyaseen.com',
  websiteTitle: 'Yaseen | Portfolio',
  location: 'Bengaluru, India',
  role: 'AI & Data Science Student | Developer',
  educationSummary: 'B.Tech in Artificial Intelligence & Data Science (2025–2029) at REVA University',
  focus: 'Python Backend, Local LLMs & AI Systems',
  status: 'Open to Opportunities',
  maskedEmail: 'yaseen0706@gmail.com',
  realEmail: 'yaseen0706@gmail.com',
  githubUsername: 'Yaseen-711',
  githubUrl: 'https://github.com/Yaseen-711',
  linkedinUsername: 'a-m-yaseen-636b0539b',
  linkedinUrl: 'https://www.linkedin.com/in/a-m-yaseen-636b0539b/',
  resumeUrl: '/assets/resume.pdf',
};

export const ABOUT_DATA = {
  paragraphs: [
    'I am an Artificial Intelligence & Data Science Engineering student who is deeply passionate about learning how to build data-driven solutions and robust backend architectures. I spend a lot of my time diving into Python backend development, figuring out how to build scalable REST APIs with FastAPI, wrap my head around asynchronous programming, and connect databases using PostgreSQL and SQLAlchemy. I am also actively learning how to implement secure JWT/OAuth2 authentication, manage background tasks with Redis, and deploy everything smoothly using Docker.',
    'Beyond backend basics, I am incredibly fascinated by cutting-edge AI. I have been experimenting a lot with deploying local LLMs, setting up Retrieval-Augmented Generation (RAG) pipelines, and using AI tools to help me code faster and learn better. I really enjoy taking complex, high-level concepts from my classes and turning them into real, working applications that I can actually interact with.',
  ],
  primaryAreas: [
    {
      title: 'Python Backend Architecture',
      description: 'Building scalable REST endpoints with FastAPI, dependency injection, and Pydantic validation.',
    },
    {
      title: 'Local LLMs & AI Systems',
      description: 'Deploying quantized models with Ollama, Docker, MoE arbitration, and RAG architectures.',
    },
    {
      title: 'Database Design & Relations',
      description: 'Schema modeling, relational indexing, and clean data querying with PostgreSQL and SQL.',
    },
    {
      title: 'Systems & Interactive Logic',
      description: 'Low-level C algorithms, terminal rasterization, and performance-minded engineering.',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'local-ai',
    title: 'Local Multi-Model AI Server & Coding Agent',
    badge: 'AI & Systems',
    category: 'AI & Systems',
    description:
      'Set up a local, multi-model AI inference server by running Ollama inside Docker containers on Linux, exposing secure API endpoints across my home network. Routed between Mixture of Experts (MoE) and dense models, tweaking hardware optimizations to push inference speeds up to 40 tokens/sec for 36B models and 180+ tokens/sec for 7B models. Also integrated an autonomous local coding agent using these models and OpenClaw.',
    tags: ['Ollama', 'Docker', 'Linux', 'MoE & Dense Models', 'OpenClaw', 'Hardware Optimization', 'LAN API'],
    repoUrl: 'https://github.com/Yaseen-711/local-ai',
    longDescription:
      'An on-premise local inference and autonomous development node hosted on dedicated Linux hardware. Employs Dockerized Ollama runners with dynamic model arbitration between Mixture of Experts (MoE) architectures and dense models. Configured kernel and GPU memory tuning to achieve up to 40 tokens/sec on 36B models and 180+ tokens/sec on 7B models, while exposing local LAN endpoints for AI-assisted coding powered by OpenClaw.',
    highlights: [
      'Containerized Ollama multi-model inference runner on Linux with dedicated hardware allocation',
      'Dynamic request arbitration between Mixture of Experts (MoE) and dense models',
      'Hardware and cache optimizations achieving 40+ tokens/sec on 36B and 180+ tokens/sec on 7B models',
      'Integrated autonomous local coding agent environment configured with OpenClaw',
      'Secure reverse-proxy and LAN endpoint exposure for multi-device local development',
    ],
  },
  {
    id: 'odoo-hrms',
    title: 'Odoo HRMS — Human Resource Management',
    badge: 'Full-Stack',
    category: 'Full-Stack',
    description:
      'Full-stack Human Resource Management application engineered with employee onboarding, shift schedules, attendance, and leave management. Developed with FastAPI asynchronous endpoints, Redis token session caching, and PostgreSQL relational schemas with Alembic database migrations.',
    tags: ['FastAPI', 'Redis', 'PostgreSQL', 'Python', 'Alembic', 'REST APIs'],
    repoUrl: 'https://github.com/Yaseen-711/odoo-HRMS',
    longDescription:
      'A comprehensive human resource management platform designed to handle enterprise staff tracking with high throughput and low database read overhead. Implemented automated schema validation with Pydantic, Redis sliding expiration session caching, and normalized PostgreSQL database models versioned with Alembic.',
    highlights: [
      'Asynchronous FastAPI REST endpoints with automated Pydantic request and response validation',
      'Redis sub-millisecond session authentication cache to mitigate database query overhead',
      'Relational schema architecture with foreign key indexing on employee department hierarchies',
      'Automated database version control and migration tracking with Alembic',
      'Clean modular dependency injection pattern for authentication and database sessions',
    ],
  },
  {
    id: 'algo-bounty',
    title: 'Algo Bounty — Blockchain Web App',
    badge: 'Web3 & Cloud',
    category: 'Web3 & Cloud',
    description:
      'Built and deployed a full-stack web application that integrates blockchain concepts for decentralized micro-tasking. Developed the backend using Python and FastAPI, connected it to Supabase for real-time data syncing, and deployed the edge frontend smoothly via Vercel.',
    tags: ['FastAPI', 'Python', 'JavaScript', 'Blockchain', 'Supabase', 'Render', 'Vercel'],
    repoUrl: 'https://github.com/Yaseen-711/algo-bounty',
    longDescription:
      'A decentralized bounty resolution system combining modern Web2 cloud speed with Web3 smart contract task validation. Integrates an asynchronous FastAPI backend deployed on Render with Supabase PostgreSQL for real-time event subscriptions, paired with an edge-routed frontend deployed on Vercel.',
    highlights: [
      'Full-stack architecture bridging blockchain verification with immediate interactive UI state updates',
      'Asynchronous task resolution backend built with Python and FastAPI',
      'Supabase database integration with real-time websocket subscriptions for live bounty updates',
      'Multi-cloud deployment combining Vercel edge frontend hosting with Render backend microservices',
      'Responsive interface facilitating secure task submissions and verification workflows',
    ],
  },
  {
    id: 'student-performance-analytics',
    title: 'Student Performance Analytics',
    badge: 'Data Science',
    category: 'Data Science',
    description:
      'Built a full data science pipeline to analyze thousands of student performance records. Extracted meaningful features to uncover hidden academic trends and trained predictive models to identify at-risk students early on, connecting statistical theory with actionable educational insights.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'SQL'],
    repoUrl: 'https://github.com/Yaseen-711/Student-Performance-Analytics',
    longDescription:
      'An end-to-end data analytics and predictive modeling project that mines educational datasets to understand factors influencing academic success. Encompasses exploratory data analysis, correlation testing, outlier treatment, and supervised machine learning pipelines.',
    highlights: [
      'Comprehensive EDA pipeline with Pearson correlation matrices and statistical hypothesis tests',
      'Engineered domain-specific features isolating high-impact variables on exam scores',
      'Supervised regression and classification models built with Scikit-learn for early intervention alerts',
      'Data visualization dashboards constructed using Matplotlib and Pandas for clear pattern discovery',
      'Structured SQL queries and schema transformations for data aggregation and cleaning',
    ],
  },
  {
    id: 'terminal-2d-graphics-editor',
    title: 'Terminal 2D Graphics Editor',
    badge: 'Systems & C',
    category: 'Systems & C',
    description:
      'Coded a completely custom, command-line based 2D graphics engine from scratch. Instead of relying on pre-built GUI libraries, implemented mathematical rendering algorithms directly in the terminal to draw and manipulate geometric shapes using mapped ASCII arrays in real time.',
    tags: ['C', 'Terminal Graphics', 'ASCII Math', 'Algorithms', 'CLI Tooling'],
    repoUrl: 'https://github.com/Yaseen-711/2D-Graphics-Editor',
    longDescription:
      'A low-level terminal rendering engine written in pure C adhering to POSIX standards. Uses Bresenham line drawing algorithms, midpoint circle generation, and double-buffered terminal screen memory matrices to render geometric shapes and interactive ASCII canvases in real-time.',
    highlights: [
      'Built from scratch in C with zero external graphic libraries or GUI dependencies',
      'Bresenham line rasterization and midpoint circle algorithms for clean terminal coordinate mapping',
      'Custom 2D frame buffer array in heap memory with ANSI escape code screen clearing',
      'Interactive canvas mode allowing coordinate-based shape plotting and real-time canvas updates',
      'Clean memory allocation and modular C architecture designed for terminal portability',
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'core-ai',
    category: 'Core & AI',
    skills: [
      'Python',
      'Local LLMs',
      'MoE & Dense Models',
      'OpenClaw',
      'RAG',
      'Machine Learning',
      'AI-Assisted Coding',
    ],
  },
  {
    id: 'backend-apis',
    category: 'Backend & APIs',
    skills: ['FastAPI', 'Pydantic', 'Dependency Injection'],
  },
  {
    id: 'databases',
    category: 'Databases',
    skills: ['PostgreSQL', 'SQL', 'Database Design & Relationships'],
  },
  {
    id: 'devops-testing',
    category: 'DevOps & Testing',
    skills: ['Docker', 'Linux', 'Git & GitHub', 'Pytest', 'Unit Testing'],
  },
  {
    id: 'architecture',
    category: 'Architecture & Concepts',
    skills: ['Authentication & Authorization', 'JWT & OAuth2', 'Background Processing'],
  },
  {
    id: 'languages-logic',
    category: 'Languages & Logic',
    skills: ['JavaScript', 'C', 'Interactive Logic & Rendering'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'btech-ai-ds',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'REVA University, Bengaluru, Karnataka, India',
    details:
      'Focusing on Machine Learning, Data Structures, Python Backend Engineering, Database Systems, and Distributed Computing.',
    period: '2025–2029',
  },
  {
    id: 'class-12',
    title: 'Senior Secondary School — Class 12',
    institution: 'Central Board of Secondary Education (CBSE)',
    period: '2025',
    grade: '89%',
  },
  {
    id: 'class-10',
    title: 'Secondary School — Class 10',
    institution: 'Central Board of Secondary Education (CBSE)',
    period: '2023',
    grade: '92%',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-python-101',
    organization: 'IBM SkillsBuild',
    date: 'Dec 06, 2025',
    title: 'Python 101 for Data Science',
    credentialId: '566022cc34dc...',
    fullCredentialId: '566022cc34dc49938f694fa6e5f8558a',
    verifyUrl: 'https://courses.skillsbuild.skillsnetwork.site/certificates/566022cc34dc49938f694fa6e5f8558a',
    pdfUrl: '/assets/certificates/IBM PY0101EN Certificate _ IBM SkillsBuild.pdf',
  },
  {
    id: 'ibm-data-analysis',
    organization: 'IBM SkillsBuild',
    date: 'Dec 12, 2025',
    title: 'Data Analysis with Python',
    credentialId: '7d71de1d7698...',
    fullCredentialId: '7d71de1d76984b3298b6ee0b3a879ad4',
    verifyUrl: 'https://courses.skillsbuild.skillsnetwork.site/certificates/7d71de1d76984b3298b6ee0b3a879ad4',
    pdfUrl: '/assets/certificates/IBM DA0101EN Certificate _ IBM SkillsBuild.pdf',
  },
  {
    id: 'ibm-data-viz',
    organization: 'IBM SkillsBuild',
    date: 'Dec 15, 2025',
    title: 'Data Visualization with Python',
    credentialId: 'd4ae06c7418b...',
    fullCredentialId: 'd4ae06c7418b4690a9818c567a279413',
    verifyUrl: 'https://courses.skillsbuild.skillsnetwork.site/certificates/d4ae06c7418b4690a9818c567a279413',
    pdfUrl: '/assets/certificates/IBM DV0101EN Certificate _ IBM SkillsBuild (1).pdf',
  },
];
