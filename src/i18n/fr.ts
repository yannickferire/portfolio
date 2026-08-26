const fr = {
  // Nav
  nav: {
    home: "Accueil",
    aboutMe: "À propos",
    stack: "Stack",
    cv: "CV",
    clients: "Clients",
    experience: "Parcours",
    projects: "Projets",
  },

  // Profile
  profile: {
    role: "Fullstack Developer –",
    flipSentences: [
      "Spécialiste de l'interface, à l'aise jusqu'à la base de données",
      "Claude Code et serveurs MCP dans mon quotidien",
      "Un SaaS en production, des utilisateurs payants",
      "Approche produit, du besoin à la mise en production",
    ],
  },

  // Overview
  overview: {
    title: "Aperçu",
    openToWork: "Disponible immédiatement",
    openToWorkDetails: " – Remote / Hybride (Bruxelles – Liège – Namur)",
    location: "Berloz, Belgique",
    phoneProtected: "[Téléphone masqué]",
  },

  // About
  about: {
    title: "À propos",
    content: `
- **Développeur Fullstack** avec {yearsOfExperience}+ ans d'expérience et une forte expertise **frontend**.
- En agence digitale, notamment pour **Renault**, **Carrefour**, **BNP Paribas** et **Publicis** : des produits déployés sur plusieurs marchés et en plusieurs langues, avec les contraintes de marque et juridiques qui vont avec.
- De l'**UX/UI** au **back-end** en passant par le **frontend**, je couvre toute la chaîne, avec une approche produit et un travail dirigé par les specs.
- Le développement assisté par agents fait partie de mon quotidien : **Claude Code**, **serveurs MCP** branchés sur mes données réelles. Ça change ma vitesse de livraison, pas mes standards de code.
- **[GROAR](https://groar.app)**, mon SaaS, a ses premiers utilisateurs payants. **Korner**, le suivant, est déjà en construction.

**Au-delà du code :**<br/>
🌿 Amoureux de la nature, je vis à la campagne en Belgique<br/>
👧 Fier papa d'une petite fille de 2 ans<br/>
🎾 Joueur de padel (très mauvais)`,
  },

  // Stack
  stack: {
    mainTitle: "Stack principale",
    alsoTitle: "J'ai aussi travaillé avec",
  },

  // Clients
  clients: {
    title: "Clients",
    subtitle: "Marques pour lesquelles j’ai travaillé au sein de Bureau347.",
  },

  // Experience
  experience: {
    title: "Parcours",
    currentEmployer: "Employeur actuel",
    present: "Aujourd'hui",
    employmentType: "Type de contrat",
    employmentPeriod: "Période",
    duration: "Durée",
  },

  // Projects
  projects: {
    title: "Sélection de projets",
    period: "Période",
    present: "En cours",
    openLink: "Ouvrir le projet",
  },

  // Social
  social: {
    title: "Réseaux sociaux",
  },

  // Footer
  footer: {
    madeWith: "Made with",
    by: "by",
  },

  // Theme
  theme: {
    toggle: "Changer de thème",
    toggleMode: "Changer de mode",
  },

  // Experiences data (keyed by position id)
  experiencesData: {
    lead: {
      title: "Développeur Senior • Front-end, UI/UX, Back-end",
      description: `Responsable de l'architecture et des choix technologiques front-end, avec plusieurs casquettes au fil des années : UI, UX, back-end, mise en production. Un poste qui m'a habitué à travailler avec les designers, les développeurs back-end et les clients.

Quelques réalisations, parmi d'autres :

- **Offres Renault Belux**, douze ans de développement continu : un produit vivant, en FR et NL, pour la Belgique et le Luxembourg, qui a traversé plusieurs changements de stack et d'obligations légales sans jamais repartir de zéro.
- **CMS sur mesure** pour ce site, qui rend le client autonome sur l'encodage et la publication de ses offres.
- Autres produits **Renault** et **Dacia** (pneus, outlet, stock, programme Privilège), déployés sur bien plus de pays et de langues.
- Sites et emailings pour **Renault Brussels** (20 000 destinataires, FR et NL) et site du concessionnaire **Alpine** du Groupe Autosphere.
- **CRM RH** sur Notion, automatisé avec Make, pour **Derains & Gharavi**.
- **Jeux d'hiver** : site vitrine en Vue.js, site événementiel des 30 ans, emailings à 15 000 destinataires.`,
    },
    frontend: {
      title: "Développeur Front-end",
      description:
        "Deuxième développeur front-end de l'équipe, sur les sites et applications des clients de l'agence.",
    },
    freelance: {
      title: "Développeur",
      description: "Développement web en freelance pour divers clients.",
    },
    celluleVerte: {
      title: "Développeur (Stage)",
    },
    education: {
      title: "Haute École Albert Jacquard",
      description: "Baccalauréat en Infographie, Web Design & Multimédia.",
    },
  },

  // Projects data
  projectsData: {
    groar: {
      role: "Fondateur solo – Design, Produit & Développement",
      description:
        "Transforme ta croissance en visuels partageables. Un SaaS pour indie hackers et créateurs qui génère des cartes de métriques en quelques secondes.",
    },
    tftodds: {
      role: "Développeur solo – Design & Développement",
      description:
        "Un compagnon basé sur les données pour les joueurs de TFT. De vraies probabilités pour prendre de meilleures décisions en jeu.",
    },
    offresRenault: {
      role: "Développeur Senior @ Bureau347",
      description:
        "Le site des offres Renault pour la Belgique et le Luxembourg. 12 ans de développement continu, avec un CMS sur mesure en Svelte & Laravel.",
    },
    alpine: {
      role: "Développeur Senior @ Bureau347",
      description:
        "Showroom digital pour le Groupe Autosphere, un groupe de concessionnaires belge avec 2 concessions Alpine.",
    },
  },
} as const

export default fr
