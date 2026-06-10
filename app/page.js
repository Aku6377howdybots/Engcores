'use client'

export default function Home() {
  return (
    <>
      <div className="aurora" aria-hidden>
        <div className="aurora-orb orb1" />
        <div className="aurora-orb orb2" />
        <div className="aurora-orb orb3" />
      </div>

      <nav>
        <span className="nav-logo">Akshith Anoop</span>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#classes">Classes</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact" className="nav-cta">Say hello →</a></li>
        </ul>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-badge">
            <span>📍</span> Leander, Texas
          </div>
          <h1>
            Hey, I'm <span className="gradient-text">Akshith</span> —<br />
            designer, coder, builder.
          </h1>
          <p>
            I'm a student in Leander, TX exploring the world of CAD design
            and programming. This is my space to share what I'm learning and
            building along the way.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn btn-primary">See my projects</a>
            <a href="#classes" className="btn btn-ghost">My classes</a>
          </div>
          <div className="hero-scroll" aria-hidden>
            <span>SCROLL</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M3 9l5 4 5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </section>

        <div className="stats">
          <div className="stats-inner">
            <div className="stat">
              <div className="stat-num">2</div>
              <div className="stat-label">Active classes</div>
            </div>
            <div className="stat">
              <div className="stat-num">10+</div>
              <div className="stat-label">CAD designs</div>
            </div>
            <div className="stat">
              <div className="stat-num">10+</div>
              <div className="stat-label">Programs built</div>
            </div>
            <div className="stat">
              <div className="stat-num">TX</div>
              <div className="stat-label">Leander, Texas</div>
            </div>
          </div>
        </div>

        <section className="bento-section" id="about">
          <div className="section-eyebrow">About me</div>
          <h2 className="section-title">Who I am</h2>
          <p className="section-sub">A student with a passion for design and technology.</p>

          <div className="bento-grid">
            <div className="bento-card bento-wide bento-highlight">
              <span className="bento-icon">👋</span>
              <h3>Hey, I'm Akshith Anoop</h3>
              <p>
                I'm a student based in Leander, Texas, currently taking CAD and programming
                classes. I love turning ideas into real things — whether that's a 3D model
                or a working program. This portfolio tracks my progress and the projects
                I'm proud of.
              </p>
            </div>

            <div className="bento-card bento-tall">
              <span className="bento-icon">📐</span>
              <h3>CAD tools</h3>
              <p>Software I use to design and model.</p>
              <div className="bento-tag-list">
                {['Fusion 360', 'AutoCAD', 'SolidWorks', 'TinkerCAD', 'Onshape', 'Sketching'].map(t => (
                  <span key={t} className="bento-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="bento-card">
              <span className="bento-icon">💻</span>
              <h3>Programming</h3>
              <p>Languages and tools I'm learning to write code with.</p>
              <div className="bento-tag-list">
                {['Python', 'JavaScript', 'HTML/CSS', 'Scratch'].map(t => (
                  <span key={t} className="bento-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="bento-card">
              <span className="bento-icon">🎯</span>
              <h3>Currently focused on</h3>
              <p>Learning how to bring 3D designs to life and write programs that solve real problems.</p>
            </div>

            <div className="bento-card">
              <span className="bento-icon">🌟</span>
              <h3>Based in Leander, TX</h3>
              <p>Growing up in Texas and building skills that will last a lifetime.</p>
            </div>
          </div>
        </section>

        <section className="projects-section" id="classes">
          <div className="section-eyebrow">Coursework</div>
          <h2 className="section-title">Classes I'm taking</h2>
          <p className="section-sub">Hands-on learning in design and technology.</p>

          <div className="projects-list">
            {[
              {
                emoji: '📐',
                name: 'CAD (Computer-Aided Design)',
                desc: 'Learning to create precise 2D drawings and 3D models using industry-standard software. Covers dimensioning, assemblies, and technical drawings.',
                chips: ['Fusion 360', 'AutoCAD', '3D Modeling'],
              },
              {
                emoji: '💻',
                name: 'Programming / Computer Science',
                desc: 'Introduction to programming concepts including variables, loops, functions, and problem-solving. Building real projects from scratch.',
                chips: ['Python', 'JavaScript', 'Logic'],
              },
            ].map((p) => (
              <div key={p.name} className="project-row">
                <div className="project-emoji">{p.emoji}</div>
                <div className="project-info">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="project-chips">
                  {p.chips.map(c => <span key={c} className="chip">{c}</span>)}
                </div>
                <span className="project-arrow">→</span>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-eyebrow">My work</div>
          <h2 className="section-title">Projects I've made</h2>
          <p className="section-sub">CAD designs and programs from class and personal exploration.</p>

          <div className="projects-list">
            {[
              {
                emoji: '🔩',
                name: 'Mechanical Part Design',
                desc: 'Designed a functional bracket assembly in Fusion 360 with proper tolerances, fillets, and technical drawings ready for fabrication.',
                chips: ['Fusion 360', 'CAD', 'Assembly'],
              },
              {
                emoji: '🏠',
                name: 'Architectural Floor Plan',
                desc: 'Created a scaled floor plan in AutoCAD with walls, doors, windows, and proper dimensioning following drafting standards.',
                chips: ['AutoCAD', '2D Drawing', 'Drafting'],
              },
              {
                emoji: '🐍',
                name: 'Python Calculator',
                desc: 'A command-line calculator built in Python that handles basic arithmetic, memory functions, and input validation.',
                chips: ['Python', 'Programming'],
              },
              {
                emoji: '🌐',
                name: 'Personal Website',
                desc: 'This site! Built with Next.js and deployed on Vercel. My first full web project combining HTML, CSS, and JavaScript.',
                chips: ['Next.js', 'HTML/CSS', 'Vercel'],
              },
            ].map((p) => (
              <div key={p.name} className="project-row">
                <div className="project-emoji">{p.emoji}</div>
                <div className="project-info">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="project-chips">
                  {p.chips.map(c => <span key={c} className="chip">{c}</span>)}
                </div>
                <span className="project-arrow">→</span>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-card">
            <h2>Let's <span className="gradient-text">connect</span></h2>
            <p>
              Have a question, want to collaborate, or just want to say hi?<br />
              I'd love to hear from you.
            </p>
            <div className="contact-links">
              <a href="mailto:aku.anoop007@gmail.com" className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                aku.anoop007@gmail.com
              </a>
              <a href="https://github.com" target="_blank" rel="noopener" className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Akshith Anoop · Leander, Texas · Built with Next.js · Deployed on Vercel</p>
      </footer>
    </>
  )
}
