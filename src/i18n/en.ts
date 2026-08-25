const en = {
  // Nav
  nav: {
    home: "Home",
    aboutMe: "About me",
    stack: "Stack",
    cv: "CV",
    clients: "Clients",
    experience: "Experience",
    projects: "Projects",
  },

  // Profile
  profile: {
    role: "Fullstack Developer –",
    flipSentences: [
      "Deep in the interface, comfortable all the way to the database",
      "Claude Code and MCP servers in my daily workflow",
      "One SaaS in production, with paying users",
      "Product-minded, from the need to production",
    ],
  },

  // Overview
  overview: {
    title: "Overview",
    openToWork: "Available immediately",
    openToWorkDetails: " – Remote / Hybrid (Brussels – Liège – Namur)",
    location: "Berloz, Belgium",
    phoneProtected: "[Phone protected]",
  },

  // About
  about: {
    title: "About",
    content: `
- **Fullstack Developer** with {yearsOfExperience}+ years of experience and deep **frontend** expertise.
- In a digital agency, for clients including **Renault**, **Carrefour**, **BNP Paribas** and **Publicis**: products shipped across several markets and languages, with the brand and legal constraints that come with them.
- From **UX/UI** to **frontend** to **back-end**, I cover the whole chain, with a product mindset and a spec-driven way of working.
- Agent-assisted development is part of my daily work: **Claude Code**, **MCP servers** wired to my real data. It changes how fast I ship, not my standards.
- **[GROAR](https://groar.app)**, my SaaS, has its first paying users. **Korner**, the next one, is already underway.

**Beyond the code:**<br/>
🌿 Nature lover, living in rural Belgium<br/>
👧 Proud dad of a 2-year-old girl<br/>
🎾 Padel enthusiast (terrible at it)`,
  },

  // Stack
  stack: {
    mainTitle: "Main Stack",
    alsoTitle: "Also worked with",
  },

  // Clients
  clients: {
    title: "Clients",
    subtitle: "Brands I worked for while at Bureau347.",
  },

  // Experience
  experience: {
    title: "Experience",
    currentEmployer: "Current Employer",
    present: "Present",
    employmentType: "Employment Type",
    employmentPeriod: "Employment Period",
    duration: "Duration",
  },

  // Projects
  projects: {
    title: "Projects selection",
    period: "Period",
    present: "Present",
    openLink: "Open Project Link",
  },

  // Social
  social: {
    title: "Social Links",
  },

  // Footer
  footer: {
    madeWith: "Made with",
    by: "by",
  },

  // Theme
  theme: {
    toggle: "Theme Toggle",
    toggleMode: "Toggle Mode",
  },

  // Experiences data (keyed by position id)
  experiencesData: {
    lead: {
      title: "Senior Developer • Front-end, UI/UX, Back-end",
      description: `Responsible for front-end architecture and tech choices, wearing several hats over the years: UI, UX, back-end, deployment. A role that got me used to working with designers, back-end developers and clients.

A few highlights, among others:

- **Renault Belux offers site**, twelve years of continuous development: a living product, in FR and NL, for Belgium and Luxembourg, which went through several stack and legal changes without ever starting over.
- **Custom CMS** for that site, making the client autonomous on encoding and publishing offers.
- Other **Renault** and **Dacia** products (tyres, outlet, stock, Privilège programme), shipped across many more countries and languages.
- Websites and email campaigns for **Renault Brussels** (20,000 recipients, FR and NL) and the **Alpine** dealership site for Groupe Autosphere.
- **HR CRM** on Notion, automated with Make, for **Derains & Gharavi**.
- **Jeux d'hiver**: Vue.js showcase site, 30th anniversary event site, campaigns to 15,000 recipients.`,
    },
    frontend: {
      title: "Front-end Developer",
      description:
        "Second front-end developer on the team, on the agency's client websites and applications.",
    },
    freelance: {
      title: "Developer",
      description: "Freelance web development for various clients.",
    },
    celluleVerte: {
      title: "Developer (Internship)",
    },
    education: {
      title: "Haute Ecole Albert Jacquard",
      description: "Baccalaureate in Infography, Web Design & Multimedia.",
    },
  },

  // Projects data
  projectsData: {
    groar: {
      role: "Solo Founder – Design, Product & Development",
      description:
        "Turn your growth into shareable visuals. A SaaS for indie hackers and creators to generate beautiful metric cards in seconds.",
    },
    tftodds: {
      role: "Solo Developer – Design & Development",
      description:
        "A data-driven companion for TFT players. Real odds and probabilities to make smarter decisions in-game.",
    },
    offresRenault: {
      role: "Senior Developer @ Bureau347",
      description:
        "The Renault offers website for Belgium & Luxembourg. 12 years of continuous development, including a custom CMS built with Svelte & Laravel.",
    },
    alpine: {
      role: "Senior Developer @ Bureau347",
      description:
        "Digital showroom for Groupe Autosphere, a Belgian dealer group with 2 Alpine concessions.",
    },
  },
} as const

export default en
