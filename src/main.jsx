import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Code2,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Menu,
  X,
  Database,
  BrainCircuit,
  Layers3,
  ExternalLink,
  Download,
  Sparkles,
  ChevronDown
} from 'lucide-react';

import './styles.css';

const profile = {
  name: 'Divya Poojari',
  role: 'Software Engineer · Full Stack Developer',
  headline:
    'I build scalable web products, automation workflows, and data-driven experiences.',
  summary:
    'Software Engineer with experience across frontend development, backend services, REST API integration, data processing, and automation. I enjoy turning complex workflows into maintainable products with clean interfaces and reliable integrations.',
  email: 'divyapoojari125@gmail.com',
  github: 'https://github.com/Divya-Poojari',
  linkedin: 'https://linkedin.com/in/divya-p-34b985228/',
};

const skills = [
  {
    title: 'Frontend',
    icon: Layers3,
    items: [
      'React.js',
      'Next.js',
      'App Router',
      'SSR / SSG',
      'React Hooks',
      'Context API',
      'Responsive Design',
      'Performance Optimization',
    ],
  },
  {
    title: 'Backend',
    icon: Code2,
    items: [
      'Node.js',
      'Express.js',
      'NestJS',
      'REST APIs',
      'API Integration',
      'Middleware',
      'JWT Authentication',
      'RBAC',
      'CRUD',
    ],
  },
  {
    title: 'Data',
    icon: Database,
    items: ['MongoDB', 'Mongoose ODM', 'MySQL', 'SQL', 'SheetJS'],
  },
  {
    title: 'AI / ML',
    icon: BrainCircuit,
    items: [
      'Machine Learning',
      'Computer Vision',
      'OpenCV',
      'Reinforcement Learning',
      'DQN',
      'Dynamic Time Warping',
      'Video Processing',
      'Trajectory Analysis',
    ],
  },
];

const projects = [
  {
    title: 'Web Compliance & Data Reconciliation Platform',
    type: 'Enterprise Data Platform',
    stack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'SheetJS',
    ],
    description:
      'A platform for data ingestion, validation, reconciliation, reporting, and Excel export across web properties.',
    details: [
      'React dashboard for audit-status tracking',
      'REST API integration',
      'Code splitting and lazy loading for frontend performance',
    ],
  },
  {
    title: 'Laparoscopic Surgery Training Simulator',
    type: 'Computer Vision · Reinforcement Learning',
    stack: ['OpenCV', 'Computer Vision', 'RL', 'DQN', 'Unity', 'DTW'],
    description:
      'A hardware-software integrated surgical simulator with real-time video processing, tool detection, trajectory analysis, and performance analytics.',
    details: [
      'Real-time surgical tool detection',
      'DQN-based reinforcement learning',
      'DTW-based trajectory analysis and scoring',
      'Real-time feedback and performance dashboards',
    ],
  },
  {
    title: 'EduHub – Learning Management System',
    type: 'Full Stack Application',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    description:
      'A learning management system with authentication, role-based access, enrollment, course management, and reusable frontend components.',
    details: [
      'JWT authentication and RBAC',
      'Secure enrollment and course management',
      'Context API state management',
      'RESTful CRUD APIs',
    ],
  },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState('home');

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id)
        ),
      { rootMargin: '-35% 0px -55%' }
    );

    document.querySelectorAll('section[id]').forEach((section) =>
      obs.observe(section)
    );

    return () => obs.disconnect();
  }, [dark]);

  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <button className="brand" onClick={() => go('home')}>
            <span className="brand-mark">DP</span>
            <span>Divya Poojari</span>
          </button>

          <nav className={menu ? 'open' : ''}>
            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map(
              (id) => (
                <button
                  key={id}
                  className={active === id ? 'active' : ''}
                  onClick={() => go(id)}
                >
                  {id[0].toUpperCase() + id.slice(1)}
                </button>
              )
            )}
          </nav>

          <div className="nav-actions">
            <button
              className="theme"
              aria-label="Toggle theme"
              onClick={() => setDark((value) => !value)}
            >
              {dark ? '☼' : '☾'}
            </button>

            <button
              className="menu"
              aria-label="Toggle menu"
              onClick={() => setMenu((value) => !value)}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="pulse" />
                Available for software engineering opportunities
              </div>

              <h1>
                Building <em>useful</em> software from idea to production.
              </h1>

              <p className="lead">{profile.headline}</p>

              <p className="muted">{profile.summary}</p>

              <div className="hero-cta">
                <button
                  className="primary"
                  onClick={() => go('projects')}
                >
                  Explore my work <ArrowUpRight />
                </button>

                <a
                  className="secondary"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Let's connect <Mail />
                </a>
              </div>

              <div className="quick-links">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 /> GitHub
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <BriefcaseBusiness /> LinkedIn
                </a>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Mail /> Email
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="orb orb1" />
              <div className="orb orb2" />

              <div className="code-window">
                <div className="dots">
                  <i />
                  <i />
                  <i />
                </div>

                <pre>
                  <span className="c1">const</span> developer = {'{'}
                  {'\n  '}
                  <span className="c2">focus</span>:{' '}
                  <span className="c3">"full-stack"</span>,
                  {'\n  '}
                  <span className="c2">frontend</span>:{' '}
                  [<span className="c3">"React"</span>,{' '}
                  <span className="c3">"Next.js"</span>],
                  {'\n  '}
                  <span className="c2">backend</span>:{' '}
                  [<span className="c3">"Node.js"</span>,{' '}
                  <span className="c3">"Express"</span>],
                  {'\n  '}
                  <span className="c2">data</span>:{' '}
                  [<span className="c3">"MongoDB"</span>,{' '}
                  <span className="c3">"SQL"</span>],
                  {'\n  '}
                  <span className="c2">curiosity</span>:{' '}
                  <span className="c4">true</span>
                  {'\n'}
                  {'}'}
                </pre>
              </div>

              <div className="floating-card">
                <Sparkles />
                <span>Clean UI + reliable APIs</span>
              </div>
            </div>
          </div>

          <button className="scroll" onClick={() => go('about')}>
            Scroll to explore <ChevronDown />
          </button>
        </section>

        <section id="about" className="section split">
          <div>
            <div className="section-label">01 / About</div>
            <h2>Engineering with a product mindset.</h2>
          </div>

          <div className="about-copy">
            <p>
              I work across the full stack — from reusable React interfaces
              and Next.js applications to Node.js services, REST APIs, data
              workflows, and database-backed systems.
            </p>

            <p>
              My experience includes enterprise web platforms supporting{' '}
              <strong>400+ client web properties</strong>, where I have worked
              on data aggregation, validation, reconciliation, reporting, API
              integration, production releases, compliance validation, and
              troubleshooting.
            </p>

            <div className="stat-row">
              <div>
                <strong>400+</strong>
                <span>client web properties</span>
              </div>

              <div>
                <strong>9.5/10</strong>
                <span>engineering GPA</span>
              </div>

              <div>
                <strong>2nd</strong>
                <span>IEEE Postman API Hackathon</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-label">02 / Experience</div>

          <div className="section-head">
            <h2>Where I've been building.</h2>
            <p>
              Hands-on software delivery across full-stack development,
              automation, and operational workflows.
            </p>
          </div>

          <div className="timeline">
            <article>
              <div className="time-dot" />

              <div className="time-meta">
                <span>Jun 2025 — Present</span>
                <b>LTIMindtree</b>
              </div>

              <div className="time-body">
                <h3>Software Engineer</h3>

                <p>
                  Develop and maintain enterprise web platforms using
                  React.js, Next.js, TypeScript, Node.js, Express.js, and
                  MongoDB.
                </p>

                <ul>
                  <li>
                    Designed automation and data-processing workflows for 400+
                    client web properties.
                  </li>
                  <li>
                    Built reusable React components and frontend-backend
                    integrations.
                  </li>
                  <li>
                    Addressed performance, accessibility, responsive design,
                    SEO, security, and maintainability requirements.
                  </li>
                  <li>
                    Supported production releases, inventory management,
                    compliance validation, security scanning, and go-live
                    activities.
                  </li>
                </ul>
              </div>
            </article>

            <article>
              <div className="time-dot" />

              <div className="time-meta">
                <span>Jun 2025 — Sep 2025</span>
                <b>LTIMindtree</b>
              </div>

              <div className="time-body">
                <h3>MERN Stack Trainee</h3>

                <p>
                  Completed intensive MERN development training and delivered
                  full-stack applications, earning early conversion to the
                  Software Engineer role within three months based on technical
                  performance and project delivery.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">03 / Selected Work</div>

          <div className="section-head">
            <h2>Projects that show how I think.</h2>
            <p>
              From enterprise data workflows to computer vision and full-stack
              applications.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project" key={project.title}>
                <div className="project-top">
                  <span className="number">
                    0{index + 1}
                  </span>
                  <span className="type">{project.type}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <ul>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>

                <div className="tags">
                  {project.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">04 / Toolkit</div>

          <div className="section-head">
            <h2>Technologies I work with.</h2>
            <p>
              A practical toolkit spanning interfaces, APIs, data, and
              intelligent systems.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article className="skill" key={skill.title}>
                  <div className="skill-icon">
                    <Icon />
                  </div>

                  <h3>{skill.title}</h3>

                  <div className="skill-tags">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="other-skills">
            <span>Also familiar with</span>
            {' Git · GitHub · Postman · Linux · Agile/Scrum · Debugging · Troubleshooting · WCAG · SEO'}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-box">
            <div>
              <div className="section-label">05 / Contact</div>

              <h2>Have a product, problem, or opportunity?</h2>

              <p>
                I'm interested in building useful software and solving
                practical engineering problems. Let's start a conversation.
              </p>
            </div>

            <div className="contact-actions">
              <a
                className="primary"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                target="_blank"
                rel="noreferrer"
              >
                Email me <Mail />
              </a>

              <a
                className="contact-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness /> LinkedIn <ExternalLink />
              </a>

              <a
                className="contact-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Code2 /> GitHub <ExternalLink />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Divya Poojari</span>
        <span>Software Engineer · Full Stack Developer</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);