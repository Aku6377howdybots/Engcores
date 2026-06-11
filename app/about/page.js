import Link from 'next/link'

export const metadata = {
  title: 'About Us — EngCores',
}

export default function About() {
  return (
    <>
      <div className="aurora" aria-hidden>
        <div className="aurora-orb orb1" />
        <div className="aurora-orb orb2" />
      </div>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">About EngCores</div>
          <h1>Built by students,<br /><span className="gradient-text">for students</span></h1>
          <p>
            EngCores was founded with one goal: make professional-level CAD and
            programming education accessible to every student in Leander, Texas.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="content-section">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="eyebrow">Our Mission</div>
              <h2>Closing the skills gap, one student at a time</h2>
              <p>
                Most students don't get exposure to real engineering tools until
                college — if they're lucky. We believe that's too late. The earlier
                you start, the further you go.
              </p>
              <p>
                EngCores brings industry-level CAD design and programming instruction
                directly to students in Leander, TX — in small, focused classes that
                actually teach you something.
              </p>
              <p>
                Whether you want to become an engineer, a software developer, or just
                want to build cool things, EngCores gives you the foundation to do it.
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-stat-card">
                <div className="ms-num">2026</div>
                <div className="ms-label">Founded</div>
              </div>
              <div className="mission-stat-card">
                <div className="ms-num">2</div>
                <div className="ms-label">Courses offered</div>
              </div>
              <div className="mission-stat-card">
                <div className="ms-num">TX</div>
                <div className="ms-label">Leander, Texas</div>
              </div>
              <div className="mission-stat-card accent-card">
                <div className="ms-num">100%</div>
                <div className="ms-label">Student focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="founders-section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Co-Founders</div>
            <h2>The team behind EngCores</h2>
            <p>Two students from Leander, TX who turned their passion into a mission.</p>
          </div>
          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-avatar">AA</div>
              <div className="founder-info">
                <h3>Akshith Anoop</h3>
                <div className="founder-title">Co-Founder & Lead Instructor</div>
                <p>
                  Akshith leads the CAD and programming curriculum at EngCores.
                  Passionate about engineering and technology, he started EngCores
                  to give other students the hands-on skills he wished he had earlier.
                  Based in Leander, Texas.
                </p>
                <div className="founder-tags">
                  <span>CAD Design</span>
                  <span>Programming</span>
                  <span>Leander, TX</span>
                </div>
              </div>
            </div>
            <div className="founder-card">
              <div className="founder-avatar yg">YG</div>
              <div className="founder-info">
                <h3>Yeshwin Gadde</h3>
                <div className="founder-title">Co-Founder & Operations</div>
                <p>
                  Yeshwin co-founded EngCores with a focus on building a strong
                  learning environment for students. He brings energy, creativity,
                  and a drive to make every class experience the best it can be.
                  Based in Leander, Texas.
                </p>
                <div className="founder-tags">
                  <span>Operations</span>
                  <span>Curriculum</span>
                  <span>Leander, TX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Our Values</div>
            <h2>What we stand for</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '🎓', title: 'Education first', desc: 'Everything we do is in service of helping students learn faster and go further.' },
              { icon: '🤝', title: 'Community rooted', desc: 'We\'re from Leander. We care about the students and families in our community.' },
              { icon: '⚡', title: 'Action over theory', desc: 'Real skills come from real practice. We build things, not just talk about them.' },
              { icon: '🔓', title: 'Accessible to all', desc: 'Great education shouldn\'t be gated. We keep our classes open and affordable.' },
            ].map(v => (
              <div key={v.title} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Want to join the EngCores community?</h2>
            <p>Sign up for a class or reach out to learn more.</p>
            <div className="btn-group centered">
              <Link href="/signup" className="btn btn-primary btn-lg">Enroll Now</Link>
              <Link href="/contact" className="btn btn-ghost btn-lg">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
