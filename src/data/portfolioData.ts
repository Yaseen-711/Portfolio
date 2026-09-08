import { Project, SkillGroup, EducationItem, Certification } from '../types';

export const PERSONAL_INFO = {
  name: 'Ali Mohammed Yaseen',
  shortName: 'Yaseen',
  initials: 'AY',
  domain: 'amyaseen.com',
  degreePill: 'B.Tech AI & DS',
  location: 'Bangalore, IN',
  role: 'AI & Data Science Student | Developer | AI/ML Enthusiast',
  educationSummary: 'Pursuing B.Tech in Artificial Intelligence & Data Science (2025–2029) at REVA University',
  focus: 'AI/ML, Data Science & Backend',
  status: 'Open to Internships / Collaborations',
  maskedEmail: 'yas*******@gmail.com',
  realEmail: 'yaseen0706@gmail.com',
  githubUsername: 'Yaseen-711',
  githubUrl: 'https://github.com/Yaseen-711',
  linkedinUsername: 'a-m-yaseen-636b0539b',
  linkedinUrl: 'https://www.linkedin.com/in/a-m-yaseen-636b0539b',
};

export const ABOUT_DATA = {
  paragraphs: [
    'I am an undergraduate student in Artificial Intelligence and Data Science at REVA University, dedicated to developing software with strong foundational primitives. My technical interests span applied machine learning pipelines, scalable backend architecture with FastAPI, and deploying local AI inference workloads on dedicated Linux servers.',
    'Rather than treating libraries and frameworks as black boxes, I focus on understanding what happens underneath: model architectures, container boundaries, distributed API design, and data processing workflows from the ground up.',
  ],
  primaryAreas: [
    {
      title: 'AI Engineering & Applied ML',
      description: 'Scikit-learn models, predictive pipelines, and feature engineering.',
    },
    {
      title: 'Backend Engineering',
      description: 'FastAPI, PostgreSQL schemas, and Redis caching.',
    },
    {
      title: 'Data Science & Analytics',
      description: 'NumPy, Pandas, exploratory data analysis, and visualization.',
    },
    {
      title: 'Local AI Infrastructure',
      description: 'Headless Ubuntu host, quantized LLMs in Docker.',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'terminal-2d-graphics-editor',
    title: 'terminal-2d-graphics-editor',
    badge: 'C',
    category: 'C',
    description:
      'Built a terminal-based 2D renderer from scratch in C. Implemented mathematical ASCII rasterization to draw geometric shapes and render visual output directly in the console without external graphics libraries.',
    tags: ['C', 'Terminal I/O', 'ASCII Math', 'Linux', 'Algorithms'],
    repoUrl: 'https://github.com/Yaseen-711/terminal-2d-graphics-editor',
    longDescription:
      'A low-level terminal rendering engine written in pure C adhering to POSIX standards. Uses Bresenham line drawing algorithms, midpoint circle generation, and double-buffered terminal screen memory matrices to render shapes and ASCII animations at 30 FPS without relying on ncurses or X11.',
    highlights: [
      'Custom 2D frame buffer array in heap memory with ANSI escape code flushing',
      'Midpoint circle algorithm and Bresenham rasterization for sub-pixel accuracy',
      'Zero external GUI dependencies; executes purely via terminal standard out',
      'Interactive canvas mode allowing coordinate-based plotting and sine waves',
    ],
  },
  {
    id: 'dayflow-hrms',
    title: 'dayflow-hrms',
    badge: 'Hackathon',
    category: 'Hackathon',
    description:
      'Full-stack Human Resource Management application engineered with a team of 3 during an 8-hour hackathon. Implemented employee management endpoints, session auth, and Redis caching backed by PostgreSQL.',
    tags: ['FastAPI', 'Redis', 'PostgreSQL', 'React', 'REST'],
    repoUrl: 'https://github.com/Yaseen-711/dayflow-hrms',
    longDescription:
      'Built under extreme hackathon deadlines, this high-throughput HR platform manages employee onboarding, shifts, attendance, and leave requests. Designed with FastAPI asynchronous endpoints, Redis token sessions with sliding expirations, and relational PostgreSQL models with Alembic migrations.',
    highlights: [
      'Engineered in 8 hours with automated schema validations via Pydantic v2',
      'Redis sub-millisecond session authentication cache to mitigate DB read spikes',
      'Normalized relational schema with indexing on employee department hierarchies',
      'Clean decoupled architecture with modular dependency injection in FastAPI',
    ],
  },
  {
    id: 'predictor-ml-api',
    title: 'predictor-ml-api',
    badge: 'ML API',
    category: 'ML API',
    description:
      'Automated car price prediction service using Scikit-learn Linear Regression. Features an end-to-end data cleaning pipeline, categorical encoding, feature normalization, and low-latency REST inference endpoints.',
    tags: ['Python', 'Scikit-learn', 'Linear Regression', 'Pandas', 'FastAPI'],
    repoUrl: 'https://github.com/Yaseen-711/predictor-ml-api',
    longDescription:
      'A production-ready inference API encapsulating multivariate regression modeling. Includes automated handling of outliers using Interquartile Range (IQR), target-guided ordinal encoding for car makes, and automated pipeline serialization with joblib for instant model hot-reloading.',
    highlights: [
      'Comprehensive EDA pipeline with Pearson correlation matrix and feature selection',
      'StandardScaler normalization and one-hot encoding for multi-categorical inputs',
      'Sub-15ms inference latency via FastAPI endpoint serving serialized model pipeline',
      'Pydantic schema validation preventing out-of-distribution input anomalies',
    ],
  },
  {
    id: 'local-llm-server',
    title: 'local-llm-server',
    badge: 'Systems',
    category: 'Systems',
    description:
      'Headless Ubuntu server configured for self-hosting open-weight LLMs locally. Deploys containerized models via Docker and serves OpenAI-compatible streaming endpoints through a lightweight FastAPI wrapper.',
    tags: ['Ubuntu Headless', 'Docker', 'Local LLMs', 'FastAPI', 'Linux / Bash'],
    repoUrl: 'https://github.com/Yaseen-711/local-llm-server',
    longDescription:
      'Designed and deployed an on-premise local inference node on dedicated bare-metal Ubuntu hardware. Configured Docker runtime, llama.cpp / Ollama backends with INT4/INT8 quantization, systemd daemon management, and reverse proxy routing for private AI assistant workloads.',
    highlights: [
      'Bare-metal Ubuntu Linux headless host with dedicated memory tuning',
      'Docker Compose orchestration for multi-model inference serving',
      'OpenAI-compatible Server-Sent Events (SSE) token streaming via FastAPI',
      'Automated bash deployment scripts, hardware metric logging, and firewall rules',
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'programming-db',
    category: 'Programming & DB',
    skills: ['Python', 'SQL', 'PostgreSQL'],
  },
  {
    id: 'data-science',
    category: 'Data Science',
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'EDA',
      'Data Visualization',
      'Linear Regression',
    ],
  },
  {
    id: 'backend-dev',
    category: 'Backend & Dev',
    skills: ['FastAPI', 'Git', 'GitHub', 'Linux / Bash', 'REST APIs'],
  },
  {
    id: 'ai-infrastructure',
    category: 'AI & Infrastructure',
    skills: ['Local LLMs', 'Docker', 'Ubuntu Server', 'Self-Hosted'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'btech-ai-ds',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'REVA University, Bengaluru',
    details:
      'Coursework covering algorithms, data structures, linear algebra, machine learning, and computer systems.',
    period: 'Pursuing (2025–2029)',
  },
  {
    id: 'class-12',
    title: 'Senior Secondary School — Class 12',
    institution: 'Central Board of Secondary Education (CBSE) — 89%',
    period: '2025',
    grade: '89%',
  },
  {
    id: 'class-10',
    title: 'Secondary School — Class 10',
    institution: 'Central Board of Secondary Education (CBSE) — 92%',
    period: '2023',
    grade: '92%',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-python-101',
    organization: 'IBM Skills Network',
    date: 'Dec 06, 2025',
    title: 'IBM Python 101 for Data Science',
    credentialId: '566022cc34dc...',
    fullCredentialId: '566022cc34dc41c2a38217bb95eb8c24',
    verifyUrl: 'https://www.coursera.org/verify/566022cc34dc41c2a38217bb95eb8c24',
  },
  {
    id: 'ibm-data-analysis',
    organization: 'IBM Skills Network',
    date: 'Dec 12, 2025',
    title: 'IBM Data Analysis with Python',
    credentialId: '7d71de1d7698...',
    fullCredentialId: '7d71de1d76984eb8a0bb918239ac8e10',
    verifyUrl: 'https://www.coursera.org/verify/7d71de1d76984eb8a0bb918239ac8e10',
  },
  {
    id: 'ibm-data-viz',
    organization: 'IBM Ecosystem',
    date: 'Dec 15, 2025',
    title: 'Data Visualization with Python',
    credentialId: 'd4ae06c7418b...',
    fullCredentialId: 'd4ae06c7418b45669fec8f0293120199',
    verifyUrl: 'https://www.coursera.org/verify/d4ae06c7418b45669fec8f0293120199',
  },
];
