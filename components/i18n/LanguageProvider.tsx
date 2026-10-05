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
  "Start a Project": "ابدأ مشروعًا",
  "Explore Our Work": "استكشف أعمالنا",
  "Build Your Digital Future.": "نبني مستقبلك الرقمي.",
  "Technology should make complexity clearer.":
    "التكنولوجيا يجب أن تجعل التعقيد أكثر وضوحًا.",
  "Nexora builds professional websites, web applications, custom software, and scalable digital products-engineered with clarity and reliability.":
    "تطوّر Nexora مواقع احترافية وتطبيقات ويب وبرمجيات مخصصة ومنتجات رقمية قابلة للتوسع، بهندسة واضحة وموثوقة.",
  "Engineered Foundations": "أسس هندسية متينة",
  "Structural rigor engineered into every digital deployment for resilient business operation.":
    "صرامة هندسية مدمجة في كل منتج رقمي لضمان تشغيل أعمال مرن ومستقر.",
  "Modular Delivery": "تنفيذ مرن",
  "Strict technical standards across core development capabilities.":
    "معايير تقنية دقيقة عبر أهم قدرات التطوير.",
  "Verified Deployments": "مشاريع موثقة",
  "How We Work": "كيف نعمل",
  "Deterministic 4-phase execution framework designed to eliminate friction and ensure predictable shipping cadence.":
    "منهج تنفيذ من أربع مراحل مصمم لإزالة التعقيد وضمان إطلاق منتظم ويمكن التنبؤ به.",
  "Products built from real business needs.":
    "منتجات مبنية على احتياجات أعمال حقيقية.",
  "Why Nexora": "لماذا Nexora",
  "Structural advantages designed for teams who value engineered integrity over superficial speed.":
    "مزايا هندسية للفرق التي تقدر الجودة والاستدامة أكثر من السرعة السطحية.",
  "Have a complex idea? Let's build it.": "لديك فكرة معقدة؟ لنبنها معًا.",
  "Engage with Nexora systems architects to evaluate requirements, establish technical roadmaps, and deploy with confidence.":
    "تعاون مع مهندسي Nexora لتقييم المتطلبات ووضع خارطة تقنية وتنفيذ مشروعك بثقة.",
  "Systems Architecture": "هندسة الأنظمة",
  "Product Engineering": "هندسة المنتجات",
  "Web Platforms": "منصات الويب",
  "Custom Software": "برمجيات مخصصة",
  "Professional Websites": "مواقع احترافية",
  "Web Applications": "تطبيقات ويب",
  "SaaS Products": "منتجات SaaS",
  "Nexora is a software engineering studio focused on digital architecture, resilient platforms, and technical precision.":
    "Nexora استوديو لهندسة البرمجيات يركز على الهندسة الرقمية والمنصات المرنة والدقة التقنية.",
  "Core Services": "الخدمات الأساسية",
  "Targeted software engineering and technical architecture built to scale.":
    "هندسة برمجيات وهندسة تقنية مصممة للنمو والتوسع.",
  "Engineered Projects": "مشاريع هندسية",
  "Verified frontend implementations, applications, and system platforms.":
    "تنفيذات واجهات أمامية وتطبيقات ومنصات أنظمة موثقة.",
  "Start a project with Nexora. Share your software engineering requirements, platform scope, or development objectives.":
    "ابدأ مشروعك مع Nexora وشارك متطلبات البرمجيات ونطاق المنصة وأهداف التطوير.",
  "Share your system requirements, platform scope, or development objectives.":
    "شارك متطلبات نظامك ونطاق منصتك وأهداف التطوير.",
  "Smart Cafe is Nexora's in-house ordering and operations product for modern cafes.":
    "Smart Cafe هو منتج Nexora الداخلي لإدارة الطلبات والتشغيل في المقاهي الحديثة.",
  "A streamlined ordering and operations experience engineered for modern cafes, live counters, kitchen teams, and reliable service flow.":
    "تجربة مبسطة للطلبات والتشغيل، مصممة للمقاهي الحديثة ونقاط البيع وفرق المطبخ وسير الخدمة الموثوق.",
  "Deploy Smart Cafe": "شغّل Smart Cafe",
  "View Product Systems": "استعرض أنظمة المنتج",
  "Built for cafe throughput.": "مصمم لسرعة تشغيل المقاهي.",
  "Start a Project ->": "ابدأ مشروعًا ->",
  "NEXORA PRODUCTS // IN-HOUSE PLATFORM": "منتجات NEXORA // منصة داخلية",
  "NEXORA // SOFTWARE & DIGITAL SOLUTIONS": "NEXORA // حلول برمجية ورقمية",
  "SYSTEM READY FOR INGESTION": "النظام جاهز للبدء",
  "NAVIGATION //": "التنقل //",
  "DISCIPLINES //": "التخصصات //",
  "Engineering resilient digital systems, high-performance web platforms, and mission-critical software architectures.":
    "نهندس أنظمة رقمية مرنة ومنصات ويب عالية الأداء وبنى برمجية للمهام الحرجة.",
  Required: "مطلوب",
  "Invalid email": "البريد الإلكتروني غير صالح",
  "Digital Transformation": "التحول الرقمي",
  "High-performance infrastructure design and microservices engineered for extreme resilience and uninterrupted throughput.":
    "تصميم بنية تحتية عالية الأداء وخدمات مصغرة بمرونة فائقة وتدفق مستمر.",
  "Resilient web platforms and full-lifecycle engineering built to transform raw requirements into scalable software assets.":
    "منصات ويب مرنة وهندسة متكاملة تحول المتطلبات إلى أصول برمجية قابلة للتوسع.",
  "Modern high-speed web apps with responsive craft, razor-sharp performance metrics, and fluid user interactions.":
    "تطبيقات ويب حديثة وسريعة بتصميم متجاوب وأداء دقيق وتفاعل سلس.",
  "Modernizing mission-critical legacy operations through clean migration protocols, automated workflows, and robust APIs.":
    "تحديث الأنظمة القديمة الحرجة عبر بروتوكولات ترحيل واضحة وسير عمل مؤتمت وواجهات API قوية.",
  Discovery: "الاستكشاف",
  Design: "التصميم",
  Development: "التطوير",
  Launch: "الإطلاق",
  "Technical requirement intake, systems dependency mapping, architecture scoping, and baseline feasibility analysis.":
    "جمع المتطلبات التقنية ورسم التبعيات وتحديد نطاق البنية وتحليل الجدوى الأولي.",
  "Wireframe validation, low-level component state modeling, typography rhythm, and design token standardization.":
    "التحقق من المخططات ونمذجة حالات المكونات وضبط إيقاع الخطوط وتوحيد رموز التصميم.",
  "High-velocity sprints, rigorous code reviews, automated CI/CD checks, and resilient backend service orchestration.":
    "دورات تطوير سريعة ومراجعات صارمة وفحوص CI/CD مؤتمتة وتنسيق مرن للخدمات الخلفية.",
  "Canary rollout, real-time APM telemetry observation, DNS edge cutover, and continuous runtime health inspection.":
    "إطلاق تدريجي ومراقبة لحظية وتحويل DNS وفحص مستمر لصحة التشغيل.",
  Clarity: "الوضوح",
  Reliability: "الموثوقية",
  Scalability: "قابلية التوسع",
  "Eliminating technical ambiguity with transparent code architectures, clear specification documents, and unambiguous sprint milestones.":
    "إزالة الغموض التقني عبر بنى برمجية واضحة ووثائق دقيقة ومراحل تطوير محددة.",
  "Hardened testing suites, predictable error boundaries, and defensive programming that guarantee continuous uptime in high-stress production environments.":
    "اختبارات قوية وحدود أخطاء واضحة وبرمجة دفاعية تضمن استمرارية التشغيل في بيئات الإنتاج.",
  "Decoupled micro-architectures and modular component systems engineered to scale linearly without requiring recursive rewrites.":
    "بنى مصغرة منفصلة وأنظمة مكونات مرنة تتوسع خطيًا دون إعادة كتابة متكررة.",
  "Doctor AI": "Doctor AI",
  "Healthcare Intelligence": "ذكاء الرعاية الصحية",
  Nexcent: "Nexcent",
  "SaaS Platform": "منصة SaaS",
  "Career Launch Session": "جلسة إطلاق المسار المهني",
  "Bright Path": "Bright Path",
  "Product Management System": "نظام إدارة المنتجات",
  "A focused production capability aligned with cafe operators, counter staff, and kitchen dispatch reliability.":
    "قدرة تشغيلية مركزة تناسب مديري المقاهي وموظفي الخدمة وموثوقية توجيه الطلبات للمطبخ.",
  "Real-time order synchronization": "مزامنة الطلبات لحظيًا",
  "Kitchen display routing": "توجيه شاشة المطبخ",
  "Contactless payment terminal": "محطة دفع بدون تلامس",
  "Inventory aware menu states": "حالات قائمة مرتبطة بالمخزون",
  "Shift-ready operations dashboard": "لوحة تشغيل جاهزة للورديات",
  "Cafe-grade performance telemetry": "مراقبة أداء بمستوى المقاهي",
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("nexora-locale");
    return saved === "ar" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("nexora-locale", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: string) => (locale === "ar" ? (translations[key] ?? key) : key),
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
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
