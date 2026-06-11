import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Aurora */}
      <div className="aurora" aria-hidden>
        <div className="aurora-orb orb1" />
        <div className="aurora-orb orb2" />
        <div className="aurora-orb orb3" />
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">📍 Leander, Texas</div>
          <h1>
            Learn <span className="gradient-text">CAD & Coding</span><br />
            from real engineers
          </h1>
          <p>
            EngCores offers hands-on CAD design and programming classes
            for students in Leander, TX. Small groups, expert instruction,
            and skills that last a lifetime.
          </p>
          <div className="btn-group">
            <Link href="/signup" className="btn btn-primary">Enroll Now — It's Free</Link>
            <Link href="/classes" className="btn btn-ghost">View Classes →</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hc-icon">📐</div>
            <div className="hc-label">CAD Design</div>
          </div>
          <div className="hero-card">
            <div className="hc-icon">💻</div>
            <div className="hc-label">Programming</div>
          </div>
          <div className="hero-card">
            <div className="hc-icon">🏆</div>
            <div className="hc-label">Certification</div>
          </div>
          <div className="hero-card">
            <div className="hc-icon">👥</div>
            <div className="hc-label">Small Groups</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-num">2</div>
              <div className="stat-label">Expert-led courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">10+</div>
              <div className="stat-label">Students enrolled</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Hands-on learning</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">TX</div>
              <div className="stat-label">Leander, Texas</div>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="offers-section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">What we offer</div>
            <h2>Two powerful courses to kickstart your future</h2>
            <p>Designed for beginners and intermediate students alike.</p>
          </div>
          <div className="offer-grid">
            <div className="offer-card">
              <div className="offer-icon">📐</div>
              <h3>CAD Design</h3>
              <p>
                Learn to design real-world parts and assemblies using
                industry-standard software like Fusion 360 and AutoCAD.
                From sketches to full 3D models.
              </p>
              <ul className="offer-list">
                <li>2D Drafting & Technical Drawings</li>
                <li>3D Modeling & Assemblies</li>
                <li>Fusion 360 & AutoCAD</li>
                <li>Real-world project work</li>
              </ul>
              <Link href="/classes#cad" className="btn btn-outline">Learn more →</Link>
            </div>
            <div className="offer-card offer-card-accent">
              <div className="offer-icon">💻</div>
              <h3>Programming</h3>
              <p>
                Go from zero to building real programs. Learn Python and
                JavaScript through projects, games, and practical
                problem-solving challenges.
              </p>
              <ul className="offer-list">
                <li>Python & JavaScript</li>
                <li>Logic & Problem Solving</li>
                <li>Build real projects</li>
                <li>Web development basics</li>
              </ul>
              <Link href="/classes#programming" className="btn btn-outline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why EngCores */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Why EngCores</div>
            <h2>Built different from the start</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: '🎯', title: 'Focused curriculum', desc: 'No fluff — every lesson is designed around real skills employers and colleges look for.' },
              { icon: '👥', title: 'Small class sizes', desc: 'We keep groups small so every student gets personal attention and real feedback.' },
              { icon: '🛠️', title: 'Project-based', desc: 'You learn by building. Every course ends with a portfolio-worthy project you can show off.' },
              { icon: '📍', title: 'Local & personal', desc: 'Founded right here in Leander, TX. We know our community and we care about your success.' },
              { icon: '🚀', title: 'Future-ready skills', desc: 'CAD and coding are among the most in-demand skills in engineering and tech. Start early.' },
              { icon: '💬', title: 'Always reachable', desc: 'Questions outside class? Text or email us anytime. We\'re always here to help.' },
            ].map(w => (
              <div key={w.title} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to start learning?</h2>
            <p>Sign up today and take the first step toward a career in engineering or tech.</p>
            <div className="btn-group centered">
              <Link href="/signup" className="btn btn-primary btn-lg">Enroll for Free</Link>
              <Link href="/contact" className="btn btn-ghost btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
