"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Locale = "en" | "ar";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const translations: Record<string, string> = {
  Home: "الرئيسية",
  About: "من نحن",
  Services: "الخدمات",
  Projects: "المشاريع",
  Contact: "تواصل معنا",
  "Start a Project": "ابدأ مشروعك",
  "Explore Our Work": "استكشف أعمالنا",
  "Build Your Digital Future.": "نبني مستقبلك الرقمي.",
  "Technology should make complexity clearer.":
    "التقنية يجب أن تجعل التعقيد أكثر وضوحًا.",
  "Nexora builds professional websites, web applications, custom software, and scalable digital products-engineered with clarity and reliability.":
    "تطوّر Nexora مواقع احترافية وتطبيقات ويب وبرمجيات مخصصة ومنتجات رقمية قابلة للتوسع، بهندسة واضحة وموثوقة.",
  "Engineered Foundations": "أسس هندسية متينة",
  "Structural rigor engineered into every digital deployment for resilient business operation.":
    "صرامة هندسية مدمجة في كل حل رقمي لضمان تشغيل أعمال مستقر وموثوق.",
  "Modular Delivery": "تنفيذ مرن",
  "Strict technical standards across core development capabilities.":
    "معايير تقنية دقيقة عبر قدرات التطوير الأساسية.",
  "Verified Deployments": "حلول تم تنفيذها والتحقق منها",
  "How We Work": "كيف نعمل",
  "Deterministic 4-phase execution framework designed to eliminate friction and ensure predictable shipping cadence.":
    "منهج تنفيذ من أربع مراحل يزيل التعقيد ويضمن وتيرة إطلاق واضحة وقابلة للتوقع.",
  "Products built from real business needs.":
    "منتجات نطوّرها انطلاقًا من احتياجات أعمال حقيقية.",
  "Why Nexora": "لماذا Nexora",
  "Structural advantages designed for teams who value engineered integrity over superficial speed.":
    "مزايا هندسية مصممة للفرق التي تضع جودة الحل واستدامته فوق السرعة المؤقتة.",
  "Have a complex idea? Let's build it together.":
    "لديك فكرة معقدة؟ لنبنها معًا.",
  "Have a complex idea? Let's build it.": "لديك فكرة معقدة؟ لنبنها معًا.",
  "Engage with Nexora systems architects to evaluate requirements, establish technical roadmaps, and deploy with confidence.":
    "تعاون مع مهندسي أنظمة Nexora لتقييم المتطلبات، ووضع خارطة تقنية واضحة، وإطلاق الحل بثقة.",
  "Systems Architecture": "هندسة الأنظمة",
  "Product Engineering": "هندسة المنتجات",
  "Web Platforms": "منصات الويب",
  "Custom Software": "برمجيات مخصصة",
  "Professional Websites": "مواقع احترافية",
  "Web Applications": "تطبيقات ويب",
  "SaaS Products": "منتجات SaaS",
  "Nexora is a software engineering studio focused on digital architecture, resilient platforms, and technical precision.":
    "Nexora استوديو لهندسة البرمجيات يركز على الهندسة الرقمية، والمنصات المرنة، والدقة التقنية.",
  "Core Services": "الخدمات الأساسية",
  "Targeted software engineering and technical architecture built to scale.":
    "هندسة برمجيات ومعمارية تقنية مصممتان للتوسع مع نمو الأعمال.",
  "Engineered Projects": "مشاريع هندسية",
  "Verified frontend implementations, applications, and system platforms.":
    "تنفيذات موثوقة للواجهات والتطبيقات ومنصات الأنظمة.",
  "Start a project with Nexora. Share your software engineering requirements, platform scope, or development objectives.":
    "ابدأ مشروعك مع Nexora وشارك متطلبات البرمجيات، ونطاق المنصة، وأهداف التطوير.",
  "Share your system requirements, platform scope, or development objectives.":
    "شارك متطلبات نظامك، ونطاق منصتك، وأهداف التطوير.",
  "Smart Cafe is Nexora's in-house ordering and operations product for modern cafes.":
    "Smart Cafe هو منتج Nexora الداخلي لإدارة الطلبات والتشغيل في المقاهي الحديثة.",
  "A streamlined ordering and operations experience engineered for modern cafes, live counters, kitchen teams, and reliable service flow.":
    "تجربة متكاملة للطلبات والتشغيل، مصممة للمقاهي الحديثة، ونقاط الخدمة، وفرق المطبخ، وسير العمل الموثوق.",
  "Deploy Smart Cafe": "فعّل Smart Cafe",
  "View Product Systems": "استكشف أنظمتنا",
  "Built for cafe throughput.": "مصمم لرفع كفاءة تشغيل المقاهي.",
  "Start a Project ->": "ابدأ مشروعك →",
  "NEXORA PRODUCTS // IN-HOUSE PLATFORM":
    "منتجات NEXORA // منصة مطوّرة داخليًا",
  "NEXORA // SOFTWARE & DIGITAL SOLUTIONS": "NEXORA // حلول برمجية ورقمية",
  "SYSTEM READY FOR INGESTION": "النظام جاهز للبدء",
  "NAVIGATION //": "التنقل //",
  "DISCIPLINES //": "التخصصات //",
  "Engineering resilient digital systems, high-performance web platforms, and mission-critical software architectures.":
    "نهندس أنظمة رقمية مرنة، ومنصات ويب عالية الأداء، وبنى برمجية للمهام الحرجة.",
  Required: "هذا الحقل مطلوب",
  "Invalid email": "البريد الإلكتروني غير صالح",
  "Digital Transformation": "التحول الرقمي",
  "High-performance infrastructure design and microservices engineered for extreme resilience and uninterrupted throughput.":
    "تصميم بنية تحتية عالية الأداء وخدمات مصغرة مصممة للمرونة العالية واستمرارية التشغيل.",
  "Resilient web platforms and full-lifecycle engineering built to transform raw requirements into scalable software assets.":
    "منصات ويب مرنة وهندسة متكاملة لتحويل المتطلبات إلى حلول برمجية قابلة للتوسع.",
  "Modern high-speed web apps with responsive craft, razor-sharp performance metrics, and fluid user interactions.":
    "تطبيقات ويب حديثة وسريعة، بتجربة متجاوبة، وأداء محسّن، وتفاعلات سلسة.",
  "Modernizing mission-critical legacy operations through clean migration protocols, automated workflows, and robust APIs.":
    "تحديث الأنظمة القديمة الحرجة عبر خطط ترحيل منظمة، وسير عمل مؤتمت، وواجهات API قوية.",
  Discovery: "الاستكشاف",
  Design: "التصميم",
  Development: "التطوير",
  Launch: "الإطلاق",
  "Technical requirement intake, systems dependency mapping, architecture scoping, and baseline feasibility analysis.":
    "جمع المتطلبات التقنية، ورسم تبعيات الأنظمة، وتحديد نطاق المعمارية، وتحليل الجدوى الأولي.",
  "Wireframe validation, low-level component state modeling, typography rhythm, and design token standardization.":
    "مراجعة الـWireframes، ونمذجة حالات المكونات، وضبط التسلسل الطباعي، وتوحيد Design Tokens.",
  "High-velocity sprints, rigorous code reviews, automated CI/CD checks, and resilient backend service orchestration.":
    "دورات تطوير سريعة، ومراجعات كود دقيقة، وفحوص CI/CD مؤتمتة، وتنسيق موثوق للخدمات الخلفية.",
  "Canary rollout, real-time APM telemetry observation, DNS edge cutover, and continuous runtime health inspection.":
    "إطلاق تدريجي، ومراقبة لحظية لـAPM، وتحويل DNS، وفحص مستمر لصحة النظام أثناء التشغيل.",
  Clarity: "الوضوح",
  Reliability: "الموثوقية",
  Scalability: "قابلية التوسع",
  "Eliminating technical ambiguity with transparent code architectures, clear specification documents, and unambiguous sprint milestones.":
    "نزيل الغموض التقني عبر معمارية كود واضحة، ووثائق مواصفات دقيقة، ومراحل تطوير محددة.",
  "Hardened testing suites, predictable error boundaries, and defensive programming that guarantee continuous uptime in high-stress production environments.":
    "اختبارات قوية، وحدود أخطاء واضحة، وبرمجة دفاعية تدعم استمرارية التشغيل في بيئات الإنتاج عالية الضغط.",
  "Decoupled micro-architectures and modular component systems engineered to scale linearly without requiring recursive rewrites.":
    "بنى مصغرة مستقلة وأنظمة مكونات معيارية مصممة للتوسع التدريجي دون إعادة كتابة متكررة.",
  "Doctor AI": "Doctor AI",
  "Healthcare Intelligence": "ذكاء الرعاية الصحية",
  Nexcent: "Nexcent",
  "SaaS Platform": "منصة SaaS",
  "Career Launch Session": "Career Launch Session",
  "Bright Path": "Bright Path",
  "Product Management System": "نظام إدارة المنتجات",
  "A focused production capability aligned with cafe operators, counter staff, and kitchen dispatch reliability.":
    "قدرة تشغيلية موجهة لمديري المقاهي وموظفي الخدمة، مع توجيه موثوق للطلبات إلى المطبخ.",
  "Real-time order synchronization": "مزامنة الطلبات لحظيًا",
  "Kitchen display routing": "توجيه الطلبات إلى شاشة المطبخ",
  "Contactless payment terminal": "محطة دفع بدون تلامس",
  "Inventory aware menu states": "حالات قائمة الطعام المرتبطة بالمخزون",
  "Shift-ready operations dashboard": "لوحة تحكم للعمليات جاهزة للورديات",
  "Cafe-grade performance telemetry": "مراقبة أداء بمستوى تشغيل المقاهي",
  "ABOUT // ARCHITECTURE & SYSTEMS": "من نحن // المعمارية والأنظمة",
  "Engineered for technical precision.": "مصمم بدقة تقنية.",
  "We design and build resilient digital foundations for enterprises and forward-thinking platforms.":
    "نصمم ونبني أسسًا رقمية مرنة للمؤسسات والمنصات الطموحة.",
  "Nexora is a digital architecture and software engineering studio dedicated to eliminating friction from digital complexity. We specialize in robust system design, scalable web infrastructure, and high-fidelity product engineering that withstands demanding real-world conditions.":
    "Nexora استوديو للهندسة الرقمية والبرمجيات، نعمل على تبسيط التعقيد الرقمي من خلال تصميم أنظمة متينة، وبنية ويب قابلة للتوسع، وهندسة منتجات دقيقة تتحمل متطلبات بيئات العمل الحقيقية.",
  "CAPABILITIES // CORE STACK": "القدرات // التقنيات الأساسية",
  "High-density computing engines.": "محركات تقنية عالية الكفاءة.",
  "Structured protocols engineered for enterprise-grade execution under volatile concurrency.":
    "بروتوكولات منظمة مصممة لتنفيذ موثوق بمستوى المؤسسات حتى تحت أحمال تشغيل متغيرة.",
  "METHODOLOGY // PHILOSOPHY": "المنهجية // الفلسفة",
  "Systemic principles for faultless delivery.":
    "مبادئ منهجية لتنفيذ موثوق بلا ثغرات تشغيلية.",
  "PROJECT INQUIRY // INITIATE": "طلب مشروع // بدء الإرسال",
  "System Engagement Spec": "مواصفات التعاون التقني",
  "Architecture SLA": "اتفاقية مستوى خدمة المعمارية",
  "24 Hours Guaranteed": "مراجعة خلال 24 ساعة",
  "Technical feasibility review and preliminary structural telemetry returned by a senior lead.":
    "مراجعة أولية للجدوى التقنية والبنية بواسطة مسؤول تقني مختص.",
  Protocol: "البروتوكول",
  "TLS 1.3 / E2E": "TLS 1.3 / E2E",
  "Cryptographic forward secrecy enabled for secure project inquiry transmission.":
    "تشفير يدعم Forward Secrecy لحماية إرسال بيانات طلب المشروع.",
  "NDA Provision": "بند السرية",
  "Auto-Executable": "يُفعّل تلقائيًا",
  "Submission immediately triggers standard mutual non-disclosure protections.":
    "إرسال الطلب يفعّل إجراءات السرية المتبادلة القياسية مباشرة.",
  "Lead System Architect": "مهندس الأنظمة الرئيسي",
  "Assigned Post-Receipt": "يُعيّن بعد استلام الطلب",
  "A domain-specialized platform director leads initial technical scoping.":
    "يقود مدير متخصص في المنصات عملية تحديد النطاق التقني الأولية.",
  "Full Name": "الاسم الكامل",
  "Work Email": "البريد الإلكتروني للعمل",
  Company: "الشركة",
  "Service Interest": "الخدمة المطلوبة",
  "Budget Range": "نطاق الميزانية",
  "Project Scope & Challenges": "نطاق المشروع والتحديات",
  "Select architecture scope": "اختر نطاق الخدمة",
  "Select estimated tier": "اختر فئة الميزانية",
  "Describe technical challenges, timeline, or architecture requirements...":
    "صف التحديات التقنية، والجدول الزمني، أو متطلبات المعمارية...",
  "Direct end-to-end encrypted packet transmission to Nexora Systems lead engineering.":
    "إرسال مشفّر من الطرف إلى الطرف مباشرة إلى فريق الهندسة في Nexora.",
  "Dispatching...": "جارٍ إرسال الطلب...",
  "Request Received": "تم استلام الطلب",
  "Transmission received. A Nexora architect will review your packet.":
    "تم استلام الطلب. سيقوم أحد مهندسي Nexora بمراجعته.",
  "TRANSMISSION_NODE: DIRECT_ONLINE": "عقدة الإرسال: اتصال مباشر",
  Response_Velocity: "سرعة الاستجابة",
  Security_Grade: "مستوى الأمان",
  Routing_Target: "وجهة التوجيه",
  "Smart Cafe dashboard": "لوحة تحكم Smart Cafe",
  "OPERATIONS // FEATURE STACK": "العمليات // منظومة المزايا",
  "Smart Cafe keeps ordering, preparation, payments, and operational visibility inside one precise Nexora product system.":
    "يجمع Smart Cafe الطلبات، والتحضير، والمدفوعات، ومتابعة التشغيل داخل نظام واحد متكامل من Nexora.",
  "PAYMENT API": "واجهة المدفوعات API",
  "KDS QUEUE": "قائمة انتظار المطبخ KDS",
  "MENU STATE": "حالة القائمة",
  "Real-time Sync": "مزامنة لحظية",
  "Kitchen Display": "شاشة المطبخ",
  "Contactless Pay": "دفع بدون تلامس",
  "CAPABILITIES & DISCIPLINES // 03": "القدرات والتخصصات // 03",
  "HARDWARE & LOGIC TOPOLOGY": "بنية الأجهزة والمنطق",
  "Deterministic Execution by Design": "تنفيذ منضبط بالتصميم",
  "Every layer from network ingress to database indexing is modeled strictly before construction, guaranteeing verifiable operational integrity and resilient zero-downtime rollouts.":
    "يتم تحديد كل طبقة، من دخول الشبكة إلى فهرسة قاعدة البيانات، بدقة قبل التنفيذ لضمان سلامة تشغيل قابلة للتحقق وإطلاقات مرنة دون توقف.",
  "Technical Specifications & System Schemas":
    "المواصفات التقنية ومخططات الأنظمة",
  "End-to-end entity relationship graphs, network topologies, API contractual definitions, and modular boundary maps.":
    "مخططات علاقات الكيانات، وطوبولوجيا الشبكات، وتعريفات عقود API، وخرائط حدود المكونات المعيارية.",
  "Production React / TypeScript Implementations":
    "تنفيذات React / TypeScript للإنتاج",
  "Strict typing, modular architectural encapsulation, unit test suites, and deterministic client state containers.":
    "Typing صارم، وتغليف معماري معياري، واختبارات وحدات، وإدارة واضحة لحالات الواجهة.",
  "Design Systems & Component Libraries": "أنظمة التصميم ومكتبات المكونات",
  "Token-based primitive engines, WCAG AA compliant contrast mechanics, dynamic theming, and layout guidelines.":
    "مكونات أساسية قائمة على Design Tokens، وتباين متوافق مع WCAG AA، وتخصيص ديناميكي للسمات، وإرشادات واضحة للتخطيط.",
  "Performance & Security Optimization Audits": "مراجعات تحسين الأداء والأمان",
  "Core Web Vitals tuning, payload serialization compression, zero-trust token handshakes, and asset tree-shaking.":
    "تحسين Core Web Vitals، وضغط بيانات الإرسال، وآليات Zero Trust للمصادقة، وتقليل الأصول غير المستخدمة.",
  "Project-Based Execution": "تنفيذ قائم على المشروع",
  "Scoped milestone delivery for well-defined technical specifications and product builds.":
    "تنفيذ على مراحل محددة للمواصفات التقنية الواضحة وبناء المنتجات.",
  "Explicit deliverables mapped to verification criteria":
    "مخرجات واضحة مرتبطة بمعايير التحقق",
  "Fixed timeline windows": "جداول زمنية محددة",
  "Formal release signoffs": "اعتمادات رسمية للإطلاق",
  "Engage Milestones": "ابدأ بنظام المراحل",
  "Dedicated Retainer": "تعاون مستمر",
  "Ongoing architectural leadership, sprint-based feature development, and continuous platform evolution.":
    "قيادة معمارية مستمرة، وتطوير ميزات على شكل Sprints، وتطوير متواصل للمنصة.",
  "Sprint priority": "أولوية الـSprint",
  "Direct executive advisory": "استشارات مباشرة للإدارة",
  "Emergency incident response": "استجابة طارئة للحوادث",
  "Retain Advisory": "ابدأ التعاون الاستشاري",
  "ARCHIVE // SELECTED CODE & PRODUCTS": "الأرشيف // مشاريع مختارة ومنتجات",
  "REGISTRY STATE": "حالة السجل",
  "DEPLOYMENT PROTOCOL": "بروتوكول الإطلاق",
  "View Demo": "عرض النسخة التجريبية",
  "View Code": "عرض الكود",
  "START A PROJECT": "ابدأ مشروعك",
  "Open navigation menu": "فتح قائمة التنقل",
  "Switch to Arabic": "التبديل إلى العربية",
  "التبديل إلى الإنجليزية": "التبديل إلى الإنجليزية",
  "Nexora digital architecture visualization":
    "تصور بصري للمعمارية الرقمية في Nexora",
  "Explore Product Overview": "استكشف نظرة عامة على المنتج",
  "CAPABILITIES // CORE SPECS": "القدرات // المواصفات الأساسية",
  "DISCIPLINES // SERVICE OFFERINGS": "التخصصات // الخدمات",
  "SELECTED PROJECTS // 01 - 04": "المشاريع المختارة // 01 - 04",
  "4 PRODUCTION PROOFS ONLINE": "4 مشاريع موثقة قيد التشغيل",
  "METHODOLOGY // EXECUTION PIPELINE": "المنهجية // مسار التنفيذ",
  "NEXORA PRODUCTS // BUILT IN-HOUSE": "منتجات NEXORA // مطوّرة داخليًا",
  "PILLARS // VALUE DISCIPLINE": "الركائز // منهج القيمة",
  "PROPRIETARY ENGINE": "محرك مملوك",
  Architecture: "المعمارية",
  "LATENCY TARGET": "هدف زمن الاستجابة",
  ARCHITECTURE: "المعمارية",
  "UPTIME SLA": "اتفاقية مستوى التشغيل",
  "High-Speed CDN": "CDN عالي السرعة",
  "Fluid Typography": "نظام خطوط متجاوب",
  "A11y Compliant": "متوافق مع معايير الوصول",
  "State Machines": "State Machines",
  "Zero-Lag Virtualization": "Virtualization منخفضة التأخير",
  "Internal Tooling": "أدوات داخلية",
  "ETL Pipelines": "مسارات ETL",
  "High-Density Consoles": "لوحات تشغيل عالية الكثافة",
  "Multi-Tenancy": "تعدد المستأجرين",
  "Telemetry Logging": "تسجيل بيانات المراقبة",
  "Conversion Polish": "تحسين التحويل",
  JavaScript: "JavaScript",
  HTML5: "HTML5",
  "Tailwind CSS": "Tailwind CSS",
  GSAP: "GSAP",
  React: "React",
  Redux: "Redux",
  "AI API": "AI API",
  "React/TypeScript": "React/TypeScript",
  "FAIL-SAFE BOUNDARIES": "حدود تشغيل آمنة",
  "LINEAR EXPANSION": "توسع خطي",
  "ZERO OBFUSCATION": "وضوح بلا تعقيد",
  "Doctor AI is a React and Redux medical assistant interface that analyzes user symptoms and presents smart preliminary health insights through a responsive Tailwind CSS experience.":
    "Doctor AI واجهة مساعد طبي مبنية باستخدام React وRedux، تحلل الأعراض وتعرض مؤشرات أولية ذكية ضمن تجربة متجاوبة باستخدام Tailwind CSS.",
  "Nexcent is a modern React SaaS landing page focused on responsive layouts, clean UI sections, smooth GSAP animations, and conversion-friendly frontend implementation.":
    "Nexcent واجهة تعريفية حديثة لمنتج SaaS مبنية باستخدام React، مع تخطيط متجاوب، وأقسام UI واضحة، وحركات GSAP سلسة، وتنفيذ Frontend مهيأ للتحويل.",
  "Career Launch Session is a responsive career landing page built for students and junior developers, with structured content, Tailwind CSS styling, and smooth GSAP motion.":
    "Career Launch Session صفحة مهنية متجاوبة للطلاب والمطورين المبتدئين، بمحتوى منظم وتصميم Tailwind CSS وحركات GSAP سلسة.",
  "Bright Path is an education and career development frontend project designed to guide users through learning paths with a polished responsive interface.":
    "Bright Path مشروع Frontend للتعليم والتطوير المهني، يساعد المستخدمين على استكشاف مسارات التعلم عبر واجهة متجاوبة ومصقولة.",
  "Product Management System is a JavaScript dashboard for organizing inventory, managing product data, and presenting business workflows through a clean admin interface.":
    "Product Management System لوحة تحكم مبنية باستخدام JavaScript لتنظيم المخزون وإدارة بيانات المنتجات وعرض سير العمل عبر واجهة إدارية واضحة.",
  "LOC: SFO // GLOBAL": "الموقع: عالمي",
  "SYS_STATUS: ACTIVE": "حالة النظام: نشط",
  "PROFILE // 01": "الملف // 01",
  PARADIGM: "النموذج",
  Deterministic: "منضبط",
  COMPLIANCE: "الامتثال",
  "FAULT MATRIX": "مصفوفة الأعطال",
  "Zero Leakage": "صفر تسرب",
  "INGRESS_FORM // PARAMETERS": "نموذج الإدخال // المعلمات",
  "REV 4.2.0 // REQ_DISPATCH": "الإصدار 4.2.0 // إرسال الطلب",
  REQ_ID: "معرّف الطلب",
  COMM_URI: "قناة الاتصال",
  OPTIONAL: "اختياري",
  TARGET_SPEC: "نطاق الخدمة",
  ALLOCATION: "الميزانية",
  PAYLOAD: "بيانات المشروع",
  "e.g., Alex Vance": "مثال: Alex Vance",
  "alex@enterprise.domain": "alex@enterprise.domain",
  "e.g., Nexus Data Systems": "مثال: Nexus Data Systems",
  Retainer: "تعاون مستمر",
  "$3k - $8k": "$3k - $8k",
  "$8k - $20k": "$8k - $20k",
  "$20k+": "$20k+",
  SECURE_DISPATCH: "إرسال آمن",
  "ENCRYPTION: AES-GCM 256-BIT": "التشفير: AES-GCM 256-BIT",
  "01 // ARCHITECTURAL OFFERINGS": "01 // الخدمات المعمارية",
  "4 Systems Ready": "4 أنظمة جاهزة",
  "02 // DELIVERABLES SPECIFICATION": "02 // مواصفات التسليم",
  "SPEC_VER: 2025.1": "إصدار المواصفات: 2025.1",
  "03 // ENGAGEMENT PROTOCOLS": "03 // نماذج التعاون",
  "Structured Collaboration": "تعاون منظم",
  "MODEL 01 // MILESTONE PROTOCOL": "النموذج 01 // تنفيذ على مراحل",
  "MODEL 02 // RETAINER PROTOCOL": "النموذج 02 // تعاون مستمر",
  "INDEXED // 05 ACTIVE": "مفهرس // 05 نشطة",
  "HIGH DENSITY PROD": "إنتاج عالي الكثافة",
  "SYS_ID // {number} • PRODUCTION": "معرّف النظام // {number} • إنتاج",
  "Career.Edu": "Career.Edu",
  "Pathway.Dev": "Pathway.Dev",
  "ERP.Inventory": "ERP.Inventory",
  "DEPLOYMENT // {number}": "التنفيذ // {number}",
  "TERMINAL STATUS": "حالة النظام",
  "ORDER SYNC ENGINE": "محرك مزامنة الطلبات",
  "KDS DISPATCH QUEUE": "قائمة انتظار توجيه المطبخ",
  "PAYMENT TERMINAL API": "واجهة محطة الدفع",
  "Nexora home": "العودة إلى الصفحة الرئيسية",
  "© 2025 NEXORA SYSTEMS ARCHITECTURE. SYS_VER 4.2.0":
    "© 2025 NEXORA SYSTEMS ARCHITECTURE. إصدار النظام 4.2.0",
  "OPERATIONAL CLUSTER STABLE": "عنقود التشغيل مستقر",
  "SYS_STATUS // ACTIVE DISPATCH": "حالة النظام // إرسال نشط",
  CORE_ARCH_01: "CORE_ARCH_01",
  "Smart Cafe": "Smart Cafe",
  "Engineered corporate and technical web solutions designed for high performance, structural clarity, and responsive precision.":
    "حلول ويب مؤسسية وتقنية مصممة لأداء عالٍ، وبنية واضحة، وتجربة متجاوبة بدقة.",
  "Interactive frontend and full-stack web applications with deterministic state management, reactive components, and optimized runtime.":
    "تطبيقات ويب تفاعلية للـFrontend والـFull-Stack، مع إدارة حالات منضبطة، ومكونات تفاعلية، وأداء تشغيل محسّن.",
  "Bespoke enterprise tooling, internal workflow consoles, automated pipelines, and specialized software systems.":
    "أدوات مؤسسية مخصصة، ولوحات لسير العمل الداخلي، ومسارات مؤتمتة، وأنظمة برمجية متخصصة.",
  "End-to-end multi-tenant digital products engineered from data architecture to high-converting user interfaces.":
    "منتجات رقمية متعددة المستأجرين مصممة من معمارية البيانات حتى واجهات المستخدم المهيأة للتحويل.",
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // مهم:
  // لازم أول render يكون ثابت بين Server و Client
  // لذلك لا نقرأ localStorage هنا.
  const [locale, setLocale] = useState<Locale>("en");

  // نقرأ اللغة المحفوظة بعد انتهاء الـ hydration
  const [localeInitialized, setLocaleInitialized] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("nexora-locale");

    if (saved === "ar" || saved === "en") {
      setLocale(saved);
    }

    setLocaleInitialized(true);
  }, []);

  // تحديث اللغة والـ direction والـ metadata
  // بعد التأكد إننا قرأنا الـ locale المحفوظ.
  useEffect(() => {
    if (!localeInitialized) return;

    window.localStorage.setItem("nexora-locale", locale);

    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";

    document.title =
      locale === "ar"
        ? "Nexora | شركة برمجيات وحلول رقمية"
        : "Nexora | Software Engineering & Digital Solutions Company";

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (description) {
      description.content =
        locale === "ar"
          ? "Nexora تطوّر منصات ويب مرنة، وبرمجيات مخصصة، ومنتجات رقمية قابلة للتوسع بدقة تقنية."
          : "Nexora builds resilient web platforms, custom software, and scalable digital products with technical precision.";
    }
  }, [locale, localeInitialized]);

  const value = useMemo(
    () => ({
      locale,

      setLocale,

      t: (key: string) => {
        if (locale !== "ar") return key;

        const translated = translations[key];

        if (translated) return translated;

        if (process.env.NODE_ENV !== "production") {
          console.warn(`[Nexora i18n] Missing Arabic translation: "${key}"`);
        }

        return key;
      },
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
