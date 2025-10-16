import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import avatarImage from "../assets/ani_eren.avif";
import "../Styles/About.css";

const projects = [
  { id: 1, title: "Projekt 1", image: "", description: "" },
  { id: 2, title: "Projekt 2", image: "", description: "" },
  { id: 3, title: "Projekt 3", image: "", description: "" },
  { id: 4, title: "Projekt 4", image: "", description: "" },
  { id: 5, title: "Projekt 5", image: "", description: "" },
  { id: 6, title: "Projekt 6", image: "", description: "" },
];

const skillCategories = [
  {
    id: "fe",
    label: "FE",
    title: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    id: "be",
    label: "BE",
    title: "Backend",
    items: ["Node.js", "Express", "Java", "REST APIs"],
  },
  {
    id: "db",
    label: "DB",
    title: "Datenbanken",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Supabase"],
  },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function About() {
  return (
    <div className="about">
      <header className="site-header">
        <div className="logo">
          <span className="logo-mark">MK</span>
          <span className="logo-text">Mikail Portfolio</span>
        </div>
        <nav className="nav-buttons">
          <button type="button" onClick={() => scrollToSection("Projekte")}>
            Projekte
          </button>
          <button type="button" onClick={() => scrollToSection("Skills")}>
            Skills
          </button>
          <button type="button" onClick={() => scrollToSection("kontakt")}>
            Kontakt
          </button>
        </nav>
      </header>

      <div className="avatar-section">
        <Stack direction="column" spacing={2} alignItems="center">
          <Avatar
            alt="Mikail Avatar"
            src={avatarImage}
            sx={{
              width: 260,
              height: 260,
              border: "6px solid rgba(99, 102, 241, 0.25)",
              boxShadow: "0 18px 32px rgba(148, 163, 184, 0.35)",
            }}
          />
        </Stack>
      </div>
      <div className="intro">
        <p className="intro-eyebrow">
          Softwareentwicklung | Full-Stack Trainee
        </p>
        <h1>Hi, ich bin Mikail.</h1>
        <p className="intro-body">
          Azubi im zweiten Lehrjahr mit Fokus auf moderne Frontends, skalierbare
          Backends und strukturierte Daten. Ich baue digitale Produkte mit
          Klarheit, Präzision und einem Auge fürs Detail.
        </p>
        <div className="intro-cta">
          <button type="button" onClick={() => scrollToSection("Projekte")}>
            Zu den Projekten
          </button>
          <button type="button" onClick={() => scrollToSection("kontakt")}>
            Kontakt aufnehmen
          </button>
        </div>
      </div>
      <div className="bottomcase">
        <section id="Skills" className="skills-section">
          <h1>Skills</h1>
          <div className="skills-grid">
            {skillCategories.map(({ id, label, title, items }) => {
              const definedSkills = items
                .map((skill) => skill.trim())
                .filter((skill) => skill.length > 0);

              return (
                <article key={id} className="skill-card">
                  <span className="skill-badge">{label}</span>
                  <h2>{title}</h2>
                  {definedSkills.length > 0 ? (
                    <ul>
                      {definedSkills.map((skill) => (
                        <li key={`${id}-${skill}`}>{skill}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="skill-placeholder">Skills hinzufügen</p>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section id="Projekte" className="projects-section">
          <h1>Projekte</h1>
          <div className="projects-grid">
            {projects.map(({ id, title, image, description }) => (
              <article key={id} className="project-card">
                <header className="project-header">
                  <span className="project-chip">Case #{id}</span>
                  <h2>{title}</h2>
                </header>
                <div className="project-image">
                  {image ? (
                    <img src={image} alt={`Projekt ${id}`} />
                  ) : (
                    <span>Bild einfügen</span>
                  )}
                </div>
                <p>{description || "Beschreibung hinzufügen"}</p>
                <button type="button" className="project-cta">
                  Details ansehen
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="kontakt" className="contact-section">
          <h1>Kontakt</h1>
          <div className="contact-icons">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer noopener"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="https://github.com"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
