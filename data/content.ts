import type { IconSvgElement } from "@hugeicons/react";
import {
  Home01Icon,
  InformationSquareIcon,
  CustomerService01Icon,
  Folder01Icon,
  Message01Icon,
} from "@hugeicons/core-free-icons";

type NavItem = {
  label: string;
  href: string;
  icon: IconSvgElement;
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home01Icon,
  },
  {
    label: "About",
    href: "/about",
    icon: InformationSquareIcon,
  },
  {
    label: "Services",
    href: "/services",
    icon: CustomerService01Icon,
  },
  {
    label: "Projects",
    href: "/work",
    icon: Folder01Icon,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Message01Icon,
  },
];
export const services = [
  {
    number: "01",
    code: "01_WEB",
    title: "Professional Websites",
    description:
      "Engineered corporate and technical web solutions designed for high performance, structural clarity, and responsive precision.",
    tags: ["High-Speed CDN", "Fluid Typography", "A11y Compliant"],
  },
  {
    number: "02",
    code: "02_APP",
    title: "Web Applications",
    description:
      "Interactive frontend and full-stack web applications with deterministic state management, reactive components, and optimized runtime.",
    tags: ["React/TypeScript", "State Machines", "Zero-Lag Virtualization"],
  },
  {
    number: "03",
    code: "03_CODE",
    title: "Custom Software",
    description:
      "Bespoke enterprise tooling, internal workflow consoles, automated pipelines, and specialized software systems.",
    tags: ["Internal Tooling", "ETL Pipelines", "High-Density Consoles"],
  },
  {
    number: "04",
    code: "04_CLOUD",
    title: "SaaS Products",
    description:
      "End-to-end multi-tenant digital products engineered from data architecture to high-converting user interfaces.",
    tags: ["Multi-Tenancy", "Telemetry Logging", "Conversion Polish"],
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Systems Architecture",
    description:
      "High-performance infrastructure design and microservices engineered for extreme resilience and uninterrupted throughput.",
    meta: "TIER_1",
  },
  {
    number: "02",
    title: "Product Engineering",
    description:
      "Resilient web platforms and full-lifecycle engineering built to transform raw requirements into scalable software assets.",
    meta: "END_TO_END",
  },
  {
    number: "03",
    title: "Web Platforms",
    description:
      "Modern high-speed web apps with responsive craft, razor-sharp performance metrics, and fluid user interactions.",
    meta: "99 / 100",
  },
  {
    number: "04",
    title: "Digital Transformation",
    description:
      "Modernizing mission-critical legacy operations through clean migration protocols, automated workflows, and robust APIs.",
    meta: "ZERO_DOWNTIME",
  },
];

export const projects = [
  {
    number: "01",
    title: "Doctor AI",
    category: "Healthcare Intelligence",
    imgUrl:
      "https://ik.imagekit.io/gmplak20xa/portfolio/projects/Doctor_AI.jpg?updatedAt=1780363059324",
    description:
      "Doctor AI is a React and Redux medical assistant interface that analyzes user symptoms and presents smart preliminary health insights through a responsive Tailwind CSS experience.",
    tags: ["JavaScript", "React", "Redux", "Tailwind CSS", "AI API"],
    link: {
      code: "https://github.com/mahmoud1zidan111/Doctor-AI",
      liveDemo: "https://mahmoud1zidan111.github.io/Doctor-AI/",
    },
  },

  {
    number: "02",
    title: "Nexcent",
    category: "SaaS Platform",
    imgUrl:
      "https://ik.imagekit.io/gmplak20xa/portfolio/projects/Nexcent.jpg?updatedAt=1780363059597",
    description:
      "Nexcent is a modern React SaaS landing page focused on responsive layouts, clean UI sections, smooth GSAP animations, and conversion-friendly frontend implementation.",
    tags: ["JavaScript", "React", "Tailwind CSS", "GSAP"],
    link: {
      code: "https://github.com/mahmoud1zidan111/Nexcent",
      liveDemo: "https://nexcent-sooty.vercel.app/",
    },
  },
  {
    number: "03",
    title: "Career Launch Session",
    category: "Career.Edu",
    imgUrl:
      "https://ik.imagekit.io/gmplak20xa/portfolio/projects/Career_Launch.jpg?updatedAt=1780363059217",
    description:
      "Career Launch Session is a responsive career landing page built for students and junior developers, with structured content, Tailwind CSS styling, and smooth GSAP motion.",
    tags: ["JavaScript", "HTML5", "Tailwind CSS", "GSAP"],
    link: {
      code: "https://github.com/mahmoud1zidan111/Career-Launch-Session",
      liveDemo: "https://career-launch-session.vercel.app/",
    },
  },
  {
    number: "04",
    title: "Bright Path",
    category: "Pathway.Dev",
    imgUrl:
      "https://ik.imagekit.io/gmplak20xa/portfolio/projects/Bright_Path.jpg?updatedAt=1780363059393",
    description:
      "Bright Path is an education and career development frontend project designed to guide users through learning paths with a polished responsive interface.",
    tags: ["JavaScript", "HTML5", "Tailwind CSS", "GSAP"],
    link: {
      code: "https://github.com/mahmoud1zidan111/Bright-Path",
      liveDemo: "https://bright-path-pi.vercel.app/",
    },
  },
  {
    number: "05",
    title: "Product Management System",
    category: "ERP.Inventory",
    imgUrl:
      "https://ik.imagekit.io/gmplak20xa/portfolio/projects/metor_pack.jpg?updatedAt=1780363059066",
    description:
      "Product Management System is a JavaScript dashboard for organizing inventory, managing product data, and presenting business workflows through a clean admin interface.",
    tags: ["JavaScript", "HTML5", "Tailwind CSS"],
    link: {
      code: "https://github.com/mahmoud1zidan111/Product-management",
      liveDemo: "https://mahmoud1zidan111.github.io/Product-management/",
    },
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Technical requirement intake, systems dependency mapping, architecture scoping, and baseline feasibility analysis.",
    code: "STAGE_INPUT_SPEC",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframe validation, low-level component state modeling, typography rhythm, and design token standardization.",
    code: "STAGE_DESIGN_SYSTEM",
  },
  {
    number: "03",
    title: "Development",
    description:
      "High-velocity sprints, rigorous code reviews, automated CI/CD checks, and resilient backend service orchestration.",
    code: "STAGE_INTEGRATION_TEST",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Canary rollout, real-time APM telemetry observation, DNS edge cutover, and continuous runtime health inspection.",
    code: "STAGE_PRODUCTION_LIVE",
  },
];

export const principles = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Eliminating technical ambiguity with transparent code architectures, clear specification documents, and unambiguous sprint milestones.",
    code: "ZERO OBFUSCATION",
  },
  {
    number: "02",
    title: "Reliability",
    description:
      "Hardened testing suites, predictable error boundaries, and defensive programming that guarantee continuous uptime in high-stress production environments.",
    code: "FAIL-SAFE BOUNDARIES",
  },
  {
    number: "03",
    title: "Scalability",
    description:
      "Decoupled micro-architectures and modular component systems engineered to scale linearly without requiring recursive rewrites.",
    code: "LINEAR EXPANSION",
  },
];

export const smartCafeImages = {
  image1:
    "https://ik.imagekit.io/gmplak20xa/nexora/Smart%20Caf%C3%A9%20Dashboard%20in%20Action.png",
};

export const smartCafeFeatures = [
  "Real-time order synchronization",
  "Kitchen display routing",
  "Contactless payment terminal",
  "Inventory aware menu states",
  "Shift-ready operations dashboard",
  "Cafe-grade performance telemetry",
];
