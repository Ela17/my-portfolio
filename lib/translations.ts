interface TranslationStrings {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
  };
  hero: {
    role: string;
    tagline: string;
  };
  about: {
    p1: string;
    p2: string;
    p3: string;
  };
  skills: {
    title: string;
  };
  experience: {
    title: string;
    internship: {
      date: string;
      role: string;
      company: string;
      description: string;
      achievements: string[];
    };
    education: {
      date: string;
      role: string;
      company: string;
      description: string;
    };
  };
  projects: {
    title: string;
    thesis: {
      title: string;
      description: string;
      label: string;
    };
    volley: {
      title: string;
      description: string;
      label: string;
    };
    more: string;
  };
  footer: {
    designed: string;
    built: string;
  };
}

export const translations: Record<"it" | "en", TranslationStrings> = {
  it: {
    nav: {
      about: "Chi sono",
      skills: "Competenze",
      experience: "Esperienza",
      projects: "Progetti",
    },
    hero: {
      role: "Software Engineer",
      tagline:
        "Neolaureata in Informatica. Appassionata di architetture software e tecnologie moderne.",
    },
    about: {
      p1: "Sono una sviluppatrice fullstack con una predilezione per i sistemi backend. Il mio percorso è iniziato a Olbia, in Sardegna, e mi ha portato a Torino dove ho conseguito la laurea in Informatica presso l'Università di Torino con votazione 107/110.",
      p2: "Durante il mio tirocinio presso Engineering D. Hub, ho avuto l'opportunità di lavorare su una piattaforma di monitoraggio per sistemi containerizzati, dove ho imparato l'importanza di un'architettura ben progettata e di un codice manutenibile.",
      p3: "Quando non sto programmando, mi piace dedicarmi a piccoli lavori creativi: mi rilassa vedere qualcosa che prende forma un punto alla volta. Per il resto del tempo, gioco in una squadra di pallavolo mista con cui partecipo a un campionato: amo l'agonismo e lo spirito di squadra.",
    },
    skills: {
      title: "Competenze",
    },
    experience: {
      title: "Esperienza",
      internship: {
        date: "Apr — Giu 2025",
        role: "Tirocinante Software Engineer",
        company: "Engineering D. Hub",
        description:
          "Analisi progettuale e sviluppo di una piattaforma centralizzata per il monitoraggio di sistemi containerizzati distribuiti.",
        achievements: [
          "Definizione dei requisiti con stesura di documento tecnico e funzionale",
          "Progettazione dell'architettura di sistema",
          "Implementazione incrementale con validazione continua",
          "Testing e validazione finale",
        ],
      },
      education: {
        date: "2022 — 2025",
        role: "Laurea in Informatica",
        company: "Università di Torino",
        description:
          "Laurea triennale in Scienze e Tecnologie Informatiche (L-31) con votazione 107/110. Tesi su analisi e implementazione di piattaforme di monitoraggio per sistemi distribuiti.",
      },
    },
    projects: {
      title: "Progetti",
      thesis: {
        title: "Piattaforma di Monitoraggio Container",
        description:
          "Sistema centralizzato per il monitoraggio di container Docker distribuiti su più nodi. Sviluppato con approccio iterativo-incrementale, include dashboard real-time e sistema di alerting.",
        label: "Progetto di Tesi",
      },
      volley: {
        title: "Sito Web ASD PSG Volley",
        description:
          "Sito completo per la mia squadra di pallavolo amatoriale. Include area admin con autenticazione, gestione eventi e articoli, calendario partite con classifica live, upload immagini su cloud. Progetto personale sviluppato per esercizio.",
        label: "Progetto Personale",
      },
      more: "Altri progetti su GitHub",
    },
    footer: {
      designed: "Progettato e sviluppato da",
      built: "Costruito con Next.js e Tailwind CSS",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
    },
    hero: {
      role: "Software Engineer",
      tagline:
        "Computer Science graduate. Passionate about software architecture and modern technologies.",
    },
    about: {
      p1: "I am a fullstack developer with a preference for backend systems. My journey started in Olbia, Sardinia, and brought me to Turin where I graduated in Computer Science from the University of Turin with a mark of 107/110.",
      p2: "During my internship at Engineering D. Hub, I had the opportunity to work on a monitoring platform for containerized systems, where I learned the importance of well-designed architecture and maintainable code.",
      p3: "When I'm not coding, I enjoy dedicated time to small creative projects: I find it relaxing to see something take shape one stitch at a time. For the rest of my time, I play in a mixed volleyball team and compete in a league: I love the competitive spirit and teamwork.",
    },
    skills: {
      title: "Skills",
    },
    experience: {
      title: "Experience",
      internship: {
        date: "Apr — Jun 2025",
        role: "Software Engineer Intern",
        company: "Engineering D. Hub",
        description:
          "Design analysis and development of a centralised platform for monitoring distributed containerised systems.",
        achievements: [
          "Requirements definition with technical and functional documentation",
          "System architecture design",
          "Incremental implementation with continuous validation",
          "Final testing and validation",
        ],
      },
      education: {
        date: "2022 — 2025",
        role: "BSc in Computer Science",
        company: "University of Turin",
        description:
          "Bachelor's degree in Computer Science (L-31) with a mark of 107/110. Thesis on analysis and implementation of monitoring platforms for distributed systems.",
      },
    },
    projects: {
      title: "Projects",
      thesis: {
        title: "Container Monitoring Platform",
        description:
          "Centralised system for monitoring Docker containers distributed across multiple nodes. Developed with an iterative-incremental approach, includes real-time dashboard and alerting system.",
        label: "Thesis Project",
      },
      volley: {
        title: "ASD PSG Volley Website",
        description:
          "Complete website for my amateur volleyball team. Features admin area with authentication, event and article management, match calendar with live standings, cloud image uploads. Personal project built for practice.",
        label: "Personal Project",
      },
      more: "More projects on GitHub",
    },
    footer: {
      designed: "Designed and developed by",
      built: "Built with Next.js and Tailwind CSS",
    },
  },
} as const;

export type Language = "it" | "en";
export type Translations = TranslationStrings;
