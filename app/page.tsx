"use client";

import { useEffect, useState } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

export default function Home() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("about");

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    "Java",
    "Python",
    "TypeScript",
    "JavaScript",
    "C",
    "Docker",
    "PostgreSQL",
    "MySQL",
    "REST API",
    "Svelte",
    "Next.js",
    "React",
    "Git",
    "Linux",
    "System Design",
  ];

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
  ];

  return (
    <>
      {/* Spotlight */}
      <div className="spotlight" />

      {/* Language Toggle - Fixed top right */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageToggle />
      </div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* LEFT COLUMN - Fixed */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-16">
            <div>
              {/* Photo + Name inline on desktop */}
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-24 aspect-[2/3] rounded-xl overflow-hidden border-2 border-slate-700/50 shadow-xl shadow-teal-500/10 flex-shrink-0">
                  <img
                    src="/profile.webp"
                    alt="Elena Derosas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    <a
                      href="/"
                      className="bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent"
                    >
                      Elena Derosas
                    </a>
                  </h1>
                  <h2 className="mt-1 text-lg font-medium tracking-tight text-slate-200">
                    {t.hero.role}
                  </h2>
                </div>
              </div>

              {/* Tagline */}
              <p className="max-w-xs leading-normal text-slate-400">
                {t.hero.tagline}
              </p>

              {/* Navigation */}
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-10 w-max">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`group flex items-center py-3 transition-all ${
                          activeSection === item.id
                            ? "text-teal-300"
                            : "text-slate-500"
                        }`}
                      >
                        <span
                          className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 ${
                            activeSection === item.id
                              ? "w-16 bg-teal-300"
                              : "w-8 bg-slate-600"
                          }`}
                        />
                        <span
                          className={`text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 ${
                            activeSection === item.id ? "text-teal-300" : ""
                          }`}
                        >
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Bottom: Social icons */}
            <div className="mt-6">
              <ul className="flex items-center gap-5" aria-label="Social media">
                <li>
                  <a
                    href="mailto:elenaderosas99@gmail.com"
                    className="block text-slate-500 hover:text-teal-300 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Ela17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-500 hover:text-teal-300 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/elena-derosas-661104396/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-500 hover:text-teal-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </li>
              </ul>
            </div>
          </header>

          {/* RIGHT COLUMN - Scrollable */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-16">
            {/* ABOUT */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
              aria-label={t.nav.about}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  {t.nav.about}
                </h2>
              </div>

              {/* Bio */}
              <div className="space-y-4">
                <p className="text-slate-400 leading-relaxed">{t.about.p1}</p>
                <p className="text-slate-400 leading-relaxed">{t.about.p2}</p>
                <p className="text-slate-400 leading-relaxed">{t.about.p3}</p>
              </div>
            </section>

            {/* SKILLS */}
            <section
              id="skills"
              className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
              aria-label={t.nav.skills}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  {t.nav.skills}
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium text-teal-300 bg-teal-400/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* EXPERIENCE */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
              aria-label={t.nav.experience}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  {t.nav.experience}
                </h2>
              </div>

              <div className="space-y-12">
                {/* Internship */}
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 card-hover rounded-lg p-6">
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    {t.experience.internship.date}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="group-hover:text-teal-300 transition-colors">
                        {t.experience.internship.role}
                      </span>
                      <span className="text-slate-500"> · </span>
                      <span className="text-slate-400">
                        {t.experience.internship.company}
                      </span>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {t.experience.internship.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {t.experience.internship.achievements.map(
                        (achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span className="text-teal-300 mt-1.5">▹</span>
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Docker", "Python", "System Design"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 card-hover rounded-lg p-6">
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    {t.experience.education.date}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="group-hover:text-teal-300 transition-colors">
                        {t.experience.education.role}
                      </span>
                      <span className="text-slate-500"> · </span>
                      <span className="text-slate-400">
                        {t.experience.education.company}
                      </span>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {t.experience.education.description}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PROJECTS */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
              aria-label={t.nav.projects}
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  {t.nav.projects}
                </h2>
              </div>

              <div className="space-y-12">
                {/* Thesis Project */}
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 card-hover rounded-lg p-6">
                  <div className="z-10 sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-teal-300">
                      {t.projects.thesis.label}
                    </span>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300 transition-colors">
                      {t.projects.thesis.title}
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {t.projects.thesis.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Docker", "Python", "REST API", "System Design"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 rounded-full"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Volley Website Project */}
                <a
                  href="https://asd-psg-volley.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 card-hover rounded-lg p-6 block"
                >
                  <div className="z-10 sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-teal-300">
                      {t.projects.volley.label}
                    </span>
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300 transition-colors inline-flex items-center gap-2">
                      {t.projects.volley.title}
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {t.projects.volley.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "Supabase",
                        "shadcn/ui",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>

                {/* More projects link */}
                <a
                  href="https://github.com/Ela17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-medium text-slate-200 hover:text-teal-300 transition-colors"
                >
                  {t.projects.more}
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="max-w-md pb-24 text-sm text-slate-500">
              <p>
                {t.footer.designed}{" "}
                <span className="text-slate-400">Elena Derosas</span>.{" "}
                {t.footer.built}.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
