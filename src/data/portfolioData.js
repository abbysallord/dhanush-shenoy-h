export const PROFILE = {
  name: {
    first: 'Dhanush',
    last: 'Shenoy H'
  },
  role: 'AI Engineer & Full Stack Developer',
  email: 'dhanushshenoyh@gmail.com',
  github: 'https://github.com/abbysallord',
  linkedin: 'https://www.linkedin.com/in/dhanush-shenoy-h-7622922a4/',
  location: 'Mangaluru, India',
  tagline: 'I build & contribute for things I love',
  resumeUrl: 'https://drive.google.com/file/d/1O2NmNrT76fyelNoJ_ggRIWKiEDRrP_K-/view?usp=sharing',
  summary: 'AI Engineer and Full Stack Developer specialized in building scalable multi-agent systems, automation workflows, and developer infrastructure. Proven hackathon competitor with multiple national-level recognitions and experience organizing high-impact developer communities.',
  phone: '+91 9353245464', // Can be expanded or verified
};

export const MILESTONES = [
  {
    title: 'Small Village Roots',
    desc: 'Began journey from a small village with limited access to programming infrastructure, driven purely by technical curiosity.',
    year: '2022 & prior'
  },
  {
    title: 'Began Programming',
    desc: 'Self-taught programming fundamentals through experimentation, local scripts, and early open source tutorials.',
    year: '2023'
  },
  {
    title: 'Joined NIAT',
    desc: 'Enrolled in Yenepoya University (YSET) under Nxtwave NIAT program specializing in Computer Science (Artificial Intelligence).',
    year: '2024'
  },
  {
    title: 'First Hackathon',
    desc: 'Participated in Vibeathon by Polaris & Replit, experiencing the thrill of building prototypes under a tight 24-hour limit.',
    year: '2024'
  },
  {
    title: 'First Client Project',
    desc: 'Engineered high-performance websites for clients (such as Indhulya Website), entering the world of professional contracting.',
    year: '2025'
  },
  {
    title: 'National Hackathons',
    desc: 'Competed in 7+ major hackathons nationwide. Built several prototypes and solved coding assignments on the fly.',
    year: '2025'
  },
  {
    title: 'Organized OpenLoop',
    desc: 'Co-founded and organized OpenLoop, a technical community developer meet and hack event to nurture regional builder cultures.',
    year: '2025'
  },
  {
    title: 'Organized CODE4CHANGE',
    desc: 'Organized and managed CODE4CHANGE, a state-level hackathon bringing tech builders together for social impact projects.',
    year: '2025'
  },
  {
    title: 'OpenAI Buildathon Finalist',
    desc: 'Traveled to Delhi for the AI Impact Summit, selected as a finalist (Top 90 of 75,000 teams) pitching AgroNova.',
    year: '2026'
  },
  {
    title: 'Student of the Year',
    desc: 'Recognized as Student of the Year at NIAT for exceptional contributions to technical development, community building, and hackathons.',
    year: '2026'
  },
  {
    title: 'Currently Building AI Systems',
    desc: 'Developing scalable agentic frameworks, multi-agent systems, and developer infrastructure for real-world products.',
    year: 'Present'
  }
];

export const EXPERIENCES = [
  {
    period: '2026 — Present',
    role: 'Project Lead',
    company: 'CardioNerve & AgroNova',
    type: 'Full-time',
    desc: 'Leading the development of two distinct SaaS platforms: CardioNerve, a specialized cardiac care management system, and AgroNova, an agricultural technology solution. Responsibilities include full-stack development, cloud infrastructure management, and guiding junior developers through complex technical challenges.',
    highlights: ['40% performance improvement on core API', 'Led migration to Next.js', 'Built internal design system'],
  },
  {
    period: '2025 — 2026',
    role: 'Hackathons & Client Work',
    company: 'Independent Contractor / Builder',
    type: 'Freelance',
    desc: 'Participated in various hackathons and built a number of client projects, including the Indhulya Website and Hakki Gudu Resort project.',
    highlights: ['Participated in Vibeathon - Polaris & REPLIT', 'Participated in state-level Buildathon and got selected as finalist in Delhi', 'Participated in CodeSprint 2026', 'participated in Base44 & MurfAI workshops'],
  },
  {
    period: 'Summer 2025',
    role: 'Campus Ambassador',
    company: 'Techfest, IIT Bombay',
    type: 'Part-time',
    desc: 'Leading the promotion of India’s largest college tech fest, IIT Bombay Techfest, across campuses. Also built a number of projects that was given to me as assignments',
    highlights: ['5+ projects', 'Learnt GSAP animation system', 'React performance audits'],
  },
];

export const EDUCATION = [
  {
    period: '2024 — Present',
    degree: 'B.Tech Computer Science (Artificial Intelligence)',
    institution: 'Yenepoya School of Engineering and Technology (YSET)',
    industryPartner: 'Nxtwave of Innovation and Advanced Technologies (NIAT)',
    coursework: ['Artificial Intelligence', 'Multi-Agent Systems', 'Web Architectures', 'Data Structures & Algorithms', 'Database Systems'],
    note: 'Focused on web development, AI/ML, and hackathons.',
  },
];

export const PROJECTS = [
  {
    id: '01',
    title: 'AgroNova',
    subtitle: 'Smart Farming Platform',
    desc: 'A comprehensive smart farming system that optimizes agricultural operations using AI-driven crop diagnosis and real-time sensor telemetry.',
    problem: 'Regional farmers lack immediate diagnostic tools, losing up to 30% of crops to disease.',
    solution: 'Built an edge-compatible vision classifier and PostgreSQL telemetry dashboard.',
    impact: 'Empowers farmers with micro-level soil insights and automated recommendations.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Computer Vision', 'IoT', 'GSAP'],
    github: 'https://github.com/abbysallord/AgroNova',
    live: 'https://www.agronova.in/',
    featured: true,
    year: '2026',
    accent: '#c8f542',
  },
  {
    id: '02',
    title: 'SUNDAY',
    subtitle: 'Personal AI Desktop Automation',
    desc: 'An intelligent desktop utility and email manager that executes system scripts and coordinates workflows via natural language loops.',
    problem: 'Manual context-switching between productivity and development tools hampers workflow.',
    solution: 'Engineered a Node-Python bridge executing terminal automations based on voice and text.',
    impact: 'Reclaims ~8 hours weekly of developer time.',
    tags: ['Node.js', 'Python', 'LLMs', 'Automation', 'Voice API', 'System Scripts'],
    github: 'https://github.com/abbysallord/sunday',
    live: 'https://drive.google.com/file/d/1O2NmNrT76fyelNoJ_ggRIWKiEDRrP_K-/view?usp=sharing',
    featured: true,
    year: '2026',
    accent: '#ff9564',
  },
  {
    id: '03',
    title: 'Opportunity Scanner',
    subtitle: 'AI Scholarship & Job Indexer',
    desc: 'An automated search, parsing, and ranking pipeline that scans public websites for grants, internships, and hackathons.',
    problem: 'Manual hunting across hundreds of university and industry portals is highly inefficient.',
    solution: 'Implemented a periodic Playwright scraping cron-job paired with automated LLM matching.',
    impact: 'Sends daily customized leads to user feeds based on skills.',
    tags: ['React', 'Python', 'Playwright', 'LLM API', 'MongoDB', 'cron-jobs'],
    github: 'https://github.com/abbysallord/opportunity-scanner',
    live: 'https://dhanush-porfolio.netlify.app/',
    featured: true,
    year: '2025',
    accent: '#64c8ff',
  },
  {
    id: '04',
    title: 'Email Intelligence',
    subtitle: 'AI Transactional Mail Pipeline',
    desc: 'A serverless email processing and auto-responder system executing on the cloud.',
    problem: 'Inbound client requests and system alerts create a massive administrative backlog.',
    solution: 'Constructed Cloudflare Email Routing handlers linked to lightweight LLMs for routing, tagging, and draft creation.',
    impact: 'Handles incoming traffic in under 200ms with automated FAQ drafting.',
    tags: ['Cloudflare Workers', 'Email Routing', 'Workers AI', 'KV Store', 'JSON Schema'],
    github: 'https://github.com/abbysallord/email-intelligence',
    live: '',
    featured: true,
    year: '2026',
    accent: '#b642f5',
  },
  {
    id: '05',
    title: 'AI Automation',
    subtitle: 'Multi-Agent Startup Workflows',
    desc: 'A backend framework orchestrating cooperative agents to handle customer inquiries, data validation, and documentation.',
    problem: 'Early-stage startups get bogged down by administrative data entry tasks.',
    solution: 'Configured CrewAI and LangChain agent groups running in sandboxed environments.',
    impact: 'Reduced manual support loads by 60% with 95% accuracy.',
    tags: ['Python', 'CrewAI', 'LangChain', 'Docker', 'FastAPI', 'Redis'],
    github: 'https://github.com/abbysallord/ai-automation-pipeline',
    live: '',
    featured: true,
    year: '2025',
    accent: '#ff6495',
  },
  {
    id: '06',
    title: 'Client Web Platforms',
    subtitle: 'Bespoke Corporate Sites',
    desc: 'A portfolio of bespoke business websites built for regional companies (e.g., Hakki Gudu Resort, Indhulya Website).',
    problem: 'Generic website builders create slow, non-interactive layouts that fail to convert.',
    solution: 'Engineered optimized custom React/Next layouts utilizing GSAP timelines and CSS animations.',
    impact: 'Elevated online bookings for clients like Hakki Gudu Resort by 35% within 30 days of launch.',
    tags: ['React', 'Next.js', 'GSAP', 'Framer Motion', 'Web Performance', 'Bespoke UI'],
    github: 'https://github.com/abbysallord/Hakki_Gudu_Resort_website',
    live: 'https://ai-chefbot.netlify.app/',
    featured: true,
    year: '2025',
    accent: '#64ffc8',
  },
  {
    id: '07',
    title: 'checkDK',
    subtitle: 'DevOps Proactive Cluster Checks',
    desc: 'A command-line interface and web panel designed for DevOps engineers to proactively monitor clusters and predict service failures, published on npmjs.com and pypi.org.',
    tags: ['FastAPI', 'ML', 'PyTorch', 'AWS', 'npm-package', 'pip-package'],
    github: 'https://github.com/abbysallord/Portfolio',
    live: 'https://dhanush-porfolio.netlify.app/',
    featured: false,
    year: '2025',
    accent: '#ff9564',
  },
  {
    id: '08',
    title: 'DrugSecure',
    subtitle: 'Pharmaceutical Traceability',
    desc: 'A secure quality control and supply-chain traceability platform developed to guarantee drug authenticity from factory line to patient distribution.',
    tags: ['React.js', 'Node.js', 'Machine Learning', 'K-Means Clustering'],
    github: 'https://github.com/abbysallord/drug-secure',
    live: 'https://drugsecure.vercel.app/',
    featured: false,
    year: '2026',
    accent: '#64c8ff',
  },
  {
    id: '09',
    title: 'AI Chef',
    subtitle: 'PG Student Recipe Engine',
    desc: 'A lightweight ingredients-to-recipe generator utilizing HuggingFace API inference to help students discover cooking guides from available kitchen stock.',
    tags: ['React.js', 'HuggingFace API', 'Tailwind CSS', 'Inference'],
    github: 'https://github.com/abbysallord/AI-Chef',
    live: 'https://ai-chefbot.netlify.app/',
    featured: false,
    year: '2025',
    accent: '#b642f5',
  }
];

export const ACHIEVEMENTS = [
  {
    id: '01',
    title: 'Student of the Year',
    org: 'NIAT, Yenepoya University',
    year: '2026',
    desc: 'Awarded for overall excellence in academic performance, leadership, project building, and representational success at national hackathons.',
    badge: '🏆 Excellence',
    accent: '#c8f542'
  },
  {
    id: '02',
    title: 'OpenAI Buildathon Finalist',
    org: 'OpenAI & AI Impact Summit',
    year: '2026',
    desc: 'Selected as a national finalist, ranking in the Top 90 teams out of ~75,000 competing teams across India. Pitch took place in Delhi.',
    badge: '🚀 Top 90 / 75k',
    accent: '#c8f542'
  },
  {
    id: '03',
    title: 'Srinathon 2.0',
    org: 'Srinivas University',
    year: '2025',
    desc: 'Won 2nd Place at the national-level hackathon for developing high-impact AI/software solutions within a rigorous 36-hour sprint.',
    badge: '🥈 2nd Place',
    accent: '#ff9564'
  },
  {
    id: '04',
    title: 'Hackwise Hackathon',
    org: 'Hackwise Community',
    year: '2025',
    desc: 'Secured 4th Place overall for developing innovative developer utility and system automation concepts.',
    badge: '🏅 4th Place',
    accent: '#64c8ff'
  },
  {
    id: '05',
    title: 'GoBRICS Buildathon',
    org: 'BRICS Alliance',
    year: '2025',
    desc: 'Selected as a Semi-finalist at the international GoBRICS buildathon, exploring global solutions in distributed and agentic infrastructure.',
    badge: '🌍 Semi-finalist',
    accent: '#b642f5'
  },
  {
    id: '06',
    title: 'Best Marketing Team',
    org: 'NIAT & Tech events',
    year: '2025',
    desc: 'Awarded for conceptualizing, launching, and managing the campaign strategy for campus events and hackathons.',
    badge: '🏆 Best Team',
    accent: '#ff6495'
  },
  {
    id: '07',
    title: 'Best Poster Making',
    org: 'Technical Symposium',
    year: '2025',
    desc: 'Won first place for creative design, information layout, and visualization of technical systems.',
    badge: '🎨 Creative',
    accent: '#64ffc8'
  }
];

export const LEADERSHIP = [
  {
    id: '01',
    role: 'Organizer & Co-founder',
    title: 'OpenLoop Community',
    desc: 'Co-founded and organized OpenLoop, a regional developer meet and hack event designed to build a thriving ecosystem for builders, engineers, and creatives.',
    impact: 'Established local developer meetups and hack events, connecting 150+ students.'
  },
  {
    id: '02',
    role: 'Event Organizer',
    title: 'CODE4CHANGE Hackathon',
    desc: 'Led the organization of CODE4CHANGE, a state-level hackathon dedicated to creating technological solutions for social good. Managed speaker outreach, event flow, and sponsorships.',
    impact: 'Brought 40+ teams together to build real solutions for NGOs and local administrations.'
  },
  {
    id: '03',
    role: 'Campus Ambassador',
    title: 'IIT Techfest',
    desc: 'Served as Campus Ambassador for Techfest, IIT Bombay—India\'s largest science and technology festival. Led promotion, workshops, and coordination on campus.',
    impact: 'Increased student participation in national technical symposia by 60%.'
  },
  {
    id: '04',
    role: 'Team Captain',
    title: 'Hackathon Leadership',
    desc: 'Led multiple development teams in high-intensity national and university hackathons. Oversaw product engineering, database design, and presentation pipelines.',
    impact: 'Guided team strategies resulting in OpenAI Buildathon Finals and Srinathon 2nd Place.'
  },
  {
    id: '05',
    role: 'Tech Lead & Mentor',
    title: 'Community Building',
    desc: 'Actively mentor junior students at Yenepoya University (YSET) on web dev architectures, GSAP scroll dynamics, database choices, and AI agent integration.',
    impact: 'Conducted informal bootcamp sprints helping 30+ students deploy their first full-stack apps.'
  }
];

export const SKILLS_CATEGORIZED = [
  {
    cat: 'AI & Automation',
    items: ['OpenAI API', 'LangChain', 'CrewAI (Multi-Agents)', 'HuggingFace', 'Ollama / Llama', 'Playwright automation']
  },
  {
    cat: 'Programming',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Go', 'HTML5', 'CSS3']
  },
  {
    cat: 'Backend',
    items: ['Node.js (Express)', 'NestJS', 'FastAPI', 'Flask', 'REST APIs', 'GraphQL']
  },
  {
    cat: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Shadcn UI']
  },
  {
    cat: 'Cloud',
    items: ['Cloudflare Workers', 'AWS (EC2, S3)', 'Vercel', 'Netlify', 'Cloudflare Pages']
  },
  {
    cat: 'DevOps',
    items: ['Docker', 'Git', 'GitHub Actions', 'Linux (Fedora, Ubuntu)', 'Nginx', 'CI/CD Pipelines']
  },
  {
    cat: 'Developer Tools',
    items: ['Vite', 'pnpm', 'npm', 'Postman', 'Git-Guardrails', 'VS Code']
  },
  {
    cat: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Cloudflare D1 / KV Store']
  }
];

export const EXPLORING = [
  {
    title: 'AI Agents',
    desc: 'Autonomous software systems that utilize LLMs to reason, plan, and invoke actions using tools and APIs.',
    sub: 'Reasoning loops, tool-calling, reflection architectures'
  },
  {
    title: 'Multi-Agent Systems',
    desc: 'Distributed systems of specialist agents that cooperate, debate, and partition complex tasks to deliver production-grade outputs.',
    sub: 'CrewAI, LangGraph, swarm behaviors, state sharing'
  },
  {
    title: 'Developer Infrastructure',
    desc: 'Building high-performance CLI utilities, custom parsers, and sandboxed runtimes that improve local and remote engineering workflows.',
    sub: 'CLI tooling, API gateways, custom compilers'
  },
  {
    title: 'Automation',
    desc: 'Creating robust pipelines that bridge systems, automate repetitive operations, and manage web browser routing programmatically.',
    sub: 'Playwright, scraping, schedule systems, headless workflows'
  },
  {
    title: 'Backend Systems',
    desc: 'Architecting scalable backend services with ultra-low latency, focusing on thread-safety, connection pooling, and message queues.',
    sub: 'Node.js, FastAPI, PostgreSQL, Redis connection lifecycle'
  },
  {
    title: 'AI Video Generation',
    desc: 'Investigating programmatic text-to-video generation, prompt scheduling, and AI-driven asset generation pipelines.',
    sub: 'Diffusers, video synthesis APIs, frame manipulation'
  },
  {
    title: 'Open Source',
    desc: 'Contributing to packages, maintaining library packages in npm/pypi, and publishing codebases for the developer community.',
    sub: 'Npm/pypi distribution, package maintenance, public forks'
  }
];

export const STORY_STAGES = [
  {
    num: '01',
    title: 'Roots & Curiosity',
    text: "Growing up in a small village, resources were limited, but technical curiosity wasn't. I began teaching myself programming by building simple utility scripts, driven by a simple question: *how does this work?* I learned by breaking and rebuilding everything I could get my hands on."
  },
  {
    num: '02',
    title: 'The Pivot to NIAT',
    text: "Entering Yenepoya University (YSET) under the Nxtwave NIAT program without a rigid, predefined roadmap, I didn't wait for a syllabus. I threw myself into national hackathons, local client projects, and community organizing—discovering that the fastest way to learn is by shipping real-world software under pressure."
  },
  {
    num: '03',
    title: 'AI & Execution',
    text: "Today, I focus on AI systems, multi-agent infrastructure, and backend engineering. Whether competing nationally or building product pipelines for startups, I engineer for impact, system reliability, and absolute execution."
  }
];

export const STATS = [
  { value: '20', suffix: '+', label: 'Projects Built' },
  { value: '15', suffix: '+', label: 'Hackathons' },
  { value: '7', suffix: '+', label: 'National Finals' },
  { value: '2', suffix: '', label: 'Hackathons Organized' },
  { value: '75000', suffix: '+', label: 'Competitors Faced' }
];

