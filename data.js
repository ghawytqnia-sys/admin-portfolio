--- START OF FILE data.js ---
/* ============================================================
   CONTENT DATA — sourced from CV, bilingual (en/ar)
   Admin Dashboard overwrites this via Firebase.
   ============================================================ */
const SITE_DATA = {
  en: {
    experience: [
      {
        role: "Sales Executive", company: "Elaraby Group", period: "2023 – Present", current: true,
        bullets: [
          "Managing client relationships and driving sales to achieve company targets.",
          "Providing tailored product solutions and ensuring a high level of customer satisfaction."
        ]
      }
    ],
    projects: [
      {
        title: "Know Your Product (PWA)",
        desc: "Co-designed and developed a Progressive Web App built to support sales representatives.",
        tags: ["PWA", "UX Design", "No-Code"],
        status: "Shipped", icon: "fa-mobile-screen-button",
        url: "", image: ""
      }
    ],
    skillCats: [
      { name: "Sales & Business", icon: "fa-chart-line", skills: [
        { label: "Sales & Account Management", value: 92 },
        { label: "E-Commerce Sales Operations", value: 85 }
      ]}
    ],
    radarLabels: ["Sales", "AI Tools", "Communication", "Digital Design", "Operations", "Reporting"],
    radarValues: [92, 78, 90, 70, 85, 80],
    certsElaraby: ["Managing Different Generations", "Problem Solving & Decision Making"],
    certsAlmentor: ["Personal Branding for Employees", "Career Success Skills"]
  },

  ar: {
    experience: [
      {
        role: "تنفيذي مبيعات", company: "مجموعة العربي", period: "2023 – حتى الآن", current: true,
        bullets: [
          "إدارة علاقات العملاء وتحقيق أهداف المبيعات الخاصة بالشركة.",
          "تقديم حلول منتج مخصصة وضمان مستوى عالٍ من رضا العملاء."
        ]
      }
    ],
    projects: [
      {
        title: "تطبيق Know Your Product (PWA)",
        desc: "شارك في تصميم وتطوير تطبيق ويب تقدمي (PWA) لدعم مندوبي المبيعات.",
        tags: ["PWA", "تصميم تجربة المستخدم", "No-Code"],
        status: "منجز", icon: "fa-mobile-screen-button",
        url: "", image: ""
      }
    ],
    skillCats: [
      { name: "المبيعات وإدارة الأعمال", icon: "fa-chart-line", skills: [
        { label: "إدارة المبيعات والحسابات", value: 92 },
        { label: "عمليات مبيعات التجارة الإلكترونية", value: 85 }
      ]}
    ],
    radarLabels: ["المبيعات", "أدوات الذكاء الاصطناعي", "التواصل", "التصميم الرقمي", "العمليات", "التقارير"],
    radarValues: [92, 78, 90, 70, 85, 80],
    certsElaraby: ["إدارة الأجيال المختلفة", "حل المشكلات واتخاذ القرار"],
    certsAlmentor: ["بناء العلامة الشخصية للموظفين", "مهارات النجاح المهني"]
  }
};
--- END OF FILE data.js ---
