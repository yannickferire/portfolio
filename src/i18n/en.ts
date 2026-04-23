const en = {
  // Nav
  nav: {
    home: "Home",
    aboutMe: "About me",
    stack: "Stack",
    experience: "Experience",
    projects: "Projects",
  },

  // Profile
  profile: {
    role: "Fullstack Developer –",
    flipSentences: [
      "UI obsessed, pixel perfect",
      "Strong UX knowledge",
      "Product mindset oriented",
      "Frontend at heart, fullstack when needed",
    ],
  },

  // Overview
  overview: {
    title: "Overview",
    openToWork: "Open to new opportunities",
    openToWorkDetails: " – Remote / Hybrid (Brussels – Liege – Namur)",
    location: "Berloz, Belgium",
    phoneProtected: "[Phone protected]",
  },

  // About
  about: {
    title: "About",
    content: `
- **Senior Front-end Developer** with {yearsOfExperience}+ years of experience, dedicated to the same company.
- Skilled in **Next.js**, **React**, **TypeScript**, and modern front-end technologies; building high-quality, user-centric web applications.
- Sole front-end developer for the past 6 years, owning the full UI layer end-to-end while collaborating closely with designers, back-end engineers, and product stakeholders.
- A truly **versatile profile**: UI, UX, product thinking, front-end, back-end. I've touched it all. This gives me a deep understanding of every role around the table and makes me a strong team player.
- Passionate about **side projects**, from SaaS products to creative experiments. Always exploring new ideas and technologies on my own time.

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
      title: "Lead Front-end Developer",
      description:
        "Sole front-end developer, owning the full UI layer. Collaborating with designers, back-end engineers, and product stakeholders across a wide range of projects.",
    },
    frontend: {
      title: "Front-end Developer",
    },
    freelance: {
      title: "Front-end Developer",
      description: "Freelance front-end development for various clients.",
    },
    celluleVerte: {
      title: "Front-end Developer (Internship)",
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
      role: "Lead Front-end Developer @ Bureau347",
      description:
        "The Renault offers website for Belgium & Luxembourg. 12 years of continuous development, including a custom CMS built with Svelte & Laravel.",
    },
    alpine: {
      role: "Lead Front-end Developer @ Bureau347",
      description:
        "Digital showroom for Groupe Autosphere, a Belgian dealer group with 2 Alpine concessions.",
    },
    jeuxdhiver: {
      role: "Lead Front-end Developer @ Bureau347",
      description:
        "Website for Jeux d'Hiver, one of the most iconic nightlife venues in Brussels.",
    },
  },
} as const

export default en
