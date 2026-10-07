import { Project, SkillGroup, ExperienceItem, EducationItem, ServiceItem, AICertificationItem } from '../types';

export const DEVELOPER_NAME = 'Kashif';
export const DEVELOPER_ROLE = 'Digital Builder, Creator & Technology Explorer';
export const DEVELOPER_TAGLINE = 'I build digital experiences, products & ideas.';
export const DEVELOPER_LOCATION = 'Not listed publicly';
export const DEVELOPER_EMAIL = 'earthmusical7@gmail.com';
export const GITHUB_USERNAME = '';
export const GITHUB_PROFILE_URL = 'https://github.com/';
export const LINKEDIN_PROFILE_URL = 'https://linkedin.com/';
export const LIVE_PORTFOLIO_URL = 'https://kashif-portfolio-theta.vercel.app/';
export const RESUME_PDF_PATH = '';
export const RESUME_FILENAME = '';

export const MARQUEE_TECH_STACK = [
  { name: 'Next.js', category: 'Framework' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'HTML5 & CSS3', category: 'Web Core' },
  { name: 'Python', category: 'Scripting' },
  { name: 'Pandas', category: 'Data' },
  { name: 'Shopify', category: 'E-Commerce' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'GitHub', category: 'Version Control' },
  { name: 'Linux', category: 'Systems' },
  { name: 'AI Tools', category: 'Acceleration' },
  { name: 'Canva', category: 'Creative' },
  { name: 'Photoshop', category: 'Design' },
];

const caseStudy = (overview: string, problem: string, idea: string, technology: string, result: string) => ({
  overview, problem, idea,
  design: 'The public source presents this work through a focused case-study visual and practical project narrative.',
  development: 'Built and iterated as a hands-on digital project, with emphasis on practical utility and learning.',
  technology,
  challenges: 'Balancing a useful interaction model with responsive behavior and a clear visual hierarchy.',
  solution: 'Applied iterative prototyping, testing, and refinement to turn the concept into a usable digital artifact.',
  lessonsLearned: 'Building tangible experiments creates the fastest path to honest technical learning.',
  result,
});

export const PROJECTS: Project[] = [
  {
    id: 'fumance', name: 'fumance', displayName: 'Fumance',
    description: 'A specialized digital agency bridge connecting YouTube creators with relevant brand sponsors, optimizing outreach pipelines, deal negotiation, and campaign tracking.',
    technologies: ['Influencer Marketing', 'Creator Outreach', 'Sponsorship Management', 'Campaign Workflows', 'Brand Communication'],
    language: 'Digital Business', githubUrl: undefined, liveUrl: undefined, category: 'Agency & Marketing', featured: true, iconName: 'Globe',
    image: '/projects/fumance.jpg', features: ['Engineered structured outreach pipelines for YouTube creators', 'Coordinated brand sponsorship briefs, deliverables, and timeline tracking', 'Designed agency brand presence and client communication touchpoints'],
    caseStudy: caseStudy('Fumance connects creators and brands through a structured sponsorship workflow.', 'Creator-brand outreach and campaign coordination can become fragmented across channels.', 'Create a focused agency bridge for briefs, communication, and tracking.', 'Digital marketing, creator outreach, sponsorship workflows', 'A practical agency concept centered on clearer creator-brand collaboration.'),
  },
  {
    id: 'ai-builder', name: 'ai-builder', displayName: 'AI Builder',
    description: 'An experimental developer studio concept featuring an integrated AI code generator, real-time bug detector, and intelligent project analyzer designed to accelerate modern development loops.',
    technologies: ['AI-Assisted Dev', 'Code Intelligence', 'Project Analysis', 'Monaco Editor Concept', 'Developer Tools'],
    language: 'AI Systems', githubUrl: undefined, liveUrl: undefined, category: 'AI & Systems', featured: true, iconName: 'Cpu',
    image: '/projects/ai-builder.jpg', features: ['Multi-engine prompt orchestrator for automated code generation', 'Context-aware syntax and logic bug analyzer with quick-fix suggestions', 'Streamlined UI designed for code drafting and inspection'],
    caseStudy: caseStudy('AI Builder explores a developer workspace that combines code generation, inspection, and project analysis.', 'Developers often switch between disconnected tools while drafting and debugging.', 'Unify practical AI-assisted development workflows in one interface.', 'AI-assisted development, code intelligence, project analysis', 'A hands-on concept for accelerating the developer feedback loop.'),
  },
  {
    id: 'luna-lupa-wild-impact', name: 'luna-lupa-wild-impact', displayName: 'Luna Lupa — Wild Impact',
    description: 'A fast-paced celestial browser platformer where players guide Luna Lupa across floating gravitational platforms with dynamic particle physics and responsive jump mechanics.',
    technologies: ['Browser Game Dev', 'Next.js', 'Physics & Collision', 'Canvas 2D', 'AI-Assisted Game Dev'],
    language: 'Interactive & Gaming', githubUrl: undefined, liveUrl: undefined, category: 'Interactive & Gaming', featured: true, iconName: 'Sparkles',
    image: '/projects/luna-lupa.jpg', features: ['Custom 60 FPS requestAnimationFrame game loop with gravity and friction physics', 'Bounding-box and platform collision resolution algorithms', 'Dynamic particle bursts and atmospheric celestial visual design'],
    caseStudy: caseStudy('Luna Lupa is a celestial browser platformer built around responsive movement and playful physics.', 'Browser games need responsive input, stable collision handling, and a readable visual language.', 'Combine platforming mechanics with a dynamic celestial world.', 'Next.js, Canvas 2D, physics, collision detection', 'An interactive game experiment that turns physics concepts into play.'),
  },
  {
    id: 'browser-racer', name: 'browser-racer', displayName: 'Browser Racer',
    description: 'A retro-futuristic arcade racing experience built for the browser featuring vehicle acceleration curves, drift friction, track obstacle collision, and a dynamic speedometer HUD.',
    technologies: ['Game Mechanics', 'Vehicle Physics', 'Canvas Simulation', 'State Management', 'Interactive Web'],
    language: 'Interactive & Gaming', githubUrl: undefined, liveUrl: undefined, category: 'Interactive & Gaming', featured: false, iconName: 'Zap',
    image: '/projects/browser-racer.jpg', features: ['Arcade vehicle acceleration, top speed, steering inertia, and braking', 'Track boundaries and collision detection with environmental barriers', 'Neon twilight aesthetic with dynamic speed blur and audio cues'],
    caseStudy: caseStudy('Browser Racer turns vehicle physics and arcade feedback into a browser-native experience.', 'Racing interactions need consistent motion, collision feedback, and a strong sense of speed.', 'Build a compact arcade simulation with readable HUD feedback.', 'Canvas simulation, vehicle physics, state management', 'A browser racing experiment focused on mechanics and responsive feedback.'),
  },
  {
    id: 'ecommerce-client-web', name: 'ecommerce-client-web', displayName: 'E-Commerce & Client Web',
    description: 'Custom storefront customization, WordPress and Shopify architecture, Elementor builds, product research workflows, and technical performance tuning for commercial digital storefronts.',
    technologies: ['Shopify', 'WordPress', 'Elementor', 'Store Optimization', 'Product Research', 'Technical Troubleshooting'],
    language: 'E-Commerce & Web', githubUrl: undefined, liveUrl: undefined, category: 'E-Commerce & Web', featured: false, iconName: 'ShoppingBag',
    image: '/projects/ecommerce.jpg', features: ['Engineered conversion-oriented landing pages and Shopify store layouts', 'Configured payment gateways, checkout flows, and product research matrices', 'Executed responsive performance tuning and CSS customization'],
    caseStudy: caseStudy('This work covers commercial storefronts and client websites optimized for clarity and conversion.', 'Storefronts need a balance of brand presentation, product discovery, and technical reliability.', 'Use practical web architecture and focused content to reduce purchase friction.', 'Shopify, WordPress, Elementor, store optimization', 'A commercial web practice spanning storefront setup, customization, and troubleshooting.'),
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  { category: 'Development', subtitle: 'Core frontend & scripting toolkit', icon: 'Code', skills: [
    { name: 'HTML & CSS', icon: 'Code', level: 'Practical', description: 'Semantic markup, modern layout models, responsive breakpoints, and CSS variables.', badge: 'Core' },
    { name: 'Next.js & React', icon: 'Layers', level: 'Practical', description: 'Component architecture, state management hooks, routing, and modern frontend patterns.', badge: 'Core' },
    { name: 'WordPress & Shopify', icon: 'Globe', level: 'Practical', description: 'Store setup, theme customization, Elementor page building, and checkout optimization.', badge: 'Applied' },
    { name: 'Python & Pandas', icon: 'Terminal', level: 'Active Learning', description: 'Core programming logic, data structures, data analysis, and DataFrame manipulation.', badge: 'Learning' },
    { name: 'GitHub & Version Control', icon: 'Github', level: 'Practical', description: 'Git branching, commit hygiene, repository management, and collaboration workflows.', badge: 'Applied' },
    { name: 'Responsive Web Design', icon: 'Smartphone', level: 'Practical', description: 'Mobile-first layout philosophy, fluid typography, touch targets, and layout math.', badge: 'Core' },
  ] },
  { category: 'AI & Technology', subtitle: 'Practical AI tools & workflow acceleration', icon: 'Cpu', skills: [
    { name: 'AI Tools', icon: 'Sparkles', level: 'Daily Practice', description: 'Prompt engineering, AI-assisted development, code refactoring, and project ideation.', badge: 'Practice' },
    { name: 'AI Development', icon: 'Cpu', level: 'Actively Practicing', description: 'Prompt architectures, AI code review workflows, and local LLM tooling exploration.', badge: 'Practice' },
    { name: 'Developer Prototyping', icon: 'Code', level: 'Applied', description: 'Exploring intelligent utilities and practical developer workflows.', badge: 'Applied' },
  ] },
  { category: 'Digital Business', subtitle: 'Marketing, sponsorships & growth', icon: 'Briefcase', skills: [
    { name: 'Influencer Marketing', icon: 'Users', level: 'Practical', description: 'Creator outreach, sponsorship coordination, and campaign workflows.', badge: 'Applied' },
    { name: 'E-Commerce', icon: 'ShoppingBag', level: 'Practical', description: 'Shopify and WordPress storefronts, checkout flows, and conversion-oriented web.', badge: 'Applied' },
    { name: 'Product Research', icon: 'Search', level: 'Practical', description: 'Research workflows supporting commercial digital projects.', badge: 'Applied' },
  ] },
  { category: 'Cybersecurity', subtitle: 'Foundations, Linux & system security', icon: 'Shield', skills: [
    { name: 'Security Fundamentals', icon: 'Shield', level: 'Active Learning', description: 'CIA triad, common network threats, and threat and risk modeling.', badge: 'Learning' },
    { name: 'Linux', icon: 'Terminal', level: 'Active Learning', description: 'Command-line file management, process monitoring, permissions, and Bash commands.', badge: 'Learning' },
    { name: 'PuTTY / SSH', icon: 'Lock', level: 'Hands-on', description: 'Secure remote server connectivity, terminal sessions, and key-based login.', badge: 'Hands-on' },
  ] },
  { category: 'Creative & Design', subtitle: 'Visual identity & digital assets', icon: 'Palette', skills: [
    { name: 'Canva', icon: 'Palette', level: 'Proficient', description: 'Sponsor pitch decks, YouTube media kits, digital marketing collateral, and banners.', badge: 'Applied' },
    { name: 'Photoshop', icon: 'Sparkles', level: 'Practical', description: 'Image manipulation, asset cutouts, custom graphics, and UI mockup elements.', badge: 'Applied' },
    { name: 'Creative Technology', icon: 'Wand2', level: 'Exploring', description: 'Visual identity and digital assets supporting interactive ideas.', badge: 'Exploring' },
  ] },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  { id: 'journey-web', year: 'Stage 01', title: 'Web', role: 'The First Spark of Digital Creation', type: 'milestone', description: 'Began exploring how websites function under the hood. Writing HTML and styling with CSS provided foundational intuition.', highlights: ['Constructing responsive layouts', 'Debugging CSS box models', 'Ensuring clean rendering across viewports'], technologies: ['HTML5', 'CSS3', 'Responsive Design'] },
  { id: 'journey-ecommerce', year: 'Stage 02', title: 'E-Commerce', role: 'Commercial Web Exploration', type: 'project', description: 'Moved into Shopify, WordPress, Elementor, product research, and conversion-oriented storefront work.', highlights: ['Store setup and theme customization', 'Checkout and product workflows', 'Responsive performance tuning'], technologies: ['Shopify', 'WordPress', 'Elementor'] },
  { id: 'journey-marketing', year: 'Stage 03–04', title: 'Digital & Influencer Marketing', role: 'Audience and Sponsorship Workflows', type: 'project', description: 'Launched Fumance and coordinated influencer partnerships, campaign briefs, and brand communication.', highlights: ['Creator outreach', 'Sponsorship management', 'Campaign timeline tracking'], technologies: ['Influencer Marketing', 'Fumance', 'Campaign Workflows'] },
  { id: 'journey-ai', year: 'Stage 05', title: 'AI & Acceleration', role: 'Practical AI Exploration', type: 'learning', description: 'Exploring prompt engineering, AI-assisted debugging, code review workflows, and developer utilities.', highlights: ['Prompt architectures', 'AI-assisted development', 'Local LLM tooling exploration'], technologies: ['AI Tools', 'Prompt Engineering', 'Developer Workflows'] },
  { id: 'journey-gaming', year: 'Stage 06', title: 'Development & Gaming', role: 'Interactive Experiences', type: 'project', description: 'Built browser games to understand performance, math, physics, and responsive interaction.', highlights: ['Canvas game loops', 'Physics and collision', 'Interactive web mechanics'], technologies: ['Next.js', 'Canvas 2D', 'Game Mechanics'] },
  { id: 'journey-security', year: 'Stage 07', title: 'Cybersecurity', role: 'Systems and Security Exploration', type: 'learning', description: 'Actively exploring cybersecurity and Linux systems to understand the infrastructure behind digital products.', highlights: ['OverTheWire Bandit labs', 'Linux permissions', 'SSH administration'], technologies: ['Cybersecurity', 'Linux', 'SSH'] },
];

export const EDUCATION_DATA: EducationItem[] = [
  { id: 'edu-practical', institution: 'Self-Directed Practical Learning', program: 'Web, E-Commerce, AI, Marketing & Systems', timeline: 'Ongoing', description: 'The public portfolio presents a hands-on learning journey across digital building, commercial web, AI tooling, marketing, gaming, and cybersecurity.', skillsGained: ['Responsive web foundations', 'Shopify and WordPress workflows', 'AI-assisted development', 'Linux and security foundations'] },
];

export const AI_CERTIFICATIONS_DATA: AICertificationItem[] = [];
export const SERVICES_DATA: ServiceItem[] = [];

export const LIVE_DEPLOYMENTS = PROJECTS.filter((project) => Boolean(project.liveUrl)).map((project) => ({ title: project.displayName, type: project.category, url: project.liveUrl || '', githubUrl: project.githubUrl || '', badge: 'Source-listed project', description: project.description }));
