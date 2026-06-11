import Link from 'next/link'

export const metadata = {
  title: 'Classes — EngCores',
}

export default function Classes() {
  return (
    <>
      <div className="aurora" aria-hidden>
        <div className="aurora-orb orb1" />
        <div className="aurora-orb orb3" />
      </div>

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Our Courses</div>
          <h1>Classes built for<br /><span className="gradient-text">real-world skills</span></h1>
          <p>Hands-on, project-based learning in CAD and programming. No experience needed to get started.</p>
        </div>
      </section>

      {/* CAD */}
      <section className="content-section" id="cad">
        <div className="container">
          <div className="course-block">
            <div className="course-header">
              <div className="course-icon-lg">📐</div>
              <div>
                <div className="eyebrow">Course 01</div>
                <h2>CAD Design</h2>
                <p className="course-tagline">From sketch to 3D model — learn how real engineers design.</p>
              </div>
            </div>
            <div className="course-body">
              <div className="course-desc">
                <p>
                  Computer-Aided Design (CAD) is used in every engineering field — from
                  aerospace and automotive to architecture and product design. In this course,
                  you'll learn how to use professional CAD software to create detailed 2D
                  drawings and 3D models just like real engineers do.
                </p>
                <p>
                  No prior experience required. You'll go from drawing basic shapes to
                  building full assemblies with moving parts by the end of the course.
                </p>
                <h4>What you'll learn</h4>
                <ul className="course-list">
                  <li>Technical sketching and 2D drafting</li>
                  <li>3D part modeling and assemblies</li>
                  <li>Dimensions, tolerances, and annotations</li>
                  <li>Working with Fusion 360 and AutoCAD</li>
                  <li>Reading and creating engineering drawings</li>
                  <li>Final capstone project for your portfolio</li>
                </ul>
                <h4>Tools covered</h4>
                <div className="tag-row">
                  {['Fusion 360', 'AutoCAD', 'TinkerCAD', 'Onshape'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="course-details-card">
                <div className="cd-item"><span>📅</span> Flexible schedule</div>
                <div className="cd-item"><span>👥</span> Small group (max 8)</div>
                <div className="cd-item"><span>⏱</span> 8-week course</div>
                <div className="cd-item"><span>📍</span> Leander, TX</div>
                <div className="cd-item"><span>🎓</span> Beginner friendly</div>
                <div className="cd-item"><span>📋</span> Certificate of completion</div>
                <Link href="/signup" className="btn btn-primary" style={{marginTop: '1.5rem', display: 'block', textAlign: 'center'}}>
                  Enroll in CAD →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Programming */}
      <section className="content-section" id="programming">
        <div className="container">
          <div className="course-block">
            <div className="course-header">
              <div className="course-icon-lg">💻</div>
              <div>
                <div className="eyebrow">Course 02</div>
                <h2>Programming</h2>
                <p className="course-tagline">Write real code. Build real things. Start from zero.</p>
              </div>
            </div>
            <div className="course-body">
              <div className="course-desc">
                <p>
                  Programming is one of the most valuable skills you can learn — and it's
                  way more approachable than most people think. This course takes you from
                  never having written a line of code to building working programs and
                  websites you can actually use and show off.
                </p>
                <p>
                  We focus on Python for logic and automation, and JavaScript for the web.
                  By the end, you'll have multiple projects in your portfolio.
                </p>
                <h4>What you'll learn</h4>
                <ul className="course-list">
                  <li>Variables, loops, and functions</li>
                  <li>Solving real problems with code</li>
                  <li>Python scripting and automation</li>
                  <li>JavaScript and web development basics</li>
                  <li>Debugging and reading documentation</li>
                  <li>Final project: build your own app or tool</li>
                </ul>
                <h4>Languages covered</h4>
                <div className="tag-row">
                  {['Python', 'JavaScript', 'HTML', 'CSS'].map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="course-details-card">
                <div className="cd-item"><span>📅</span> Flexible schedule</div>
                <div className="cd-item"><span>👥</span> Small group (max 8)</div>
                <div className="cd-item"><span>⏱</span> 8-week course</div>
                <div className="cd-item"><span>📍</span> Leander, TX</div>
                <div className="cd-item"><span>🎓</span> Beginner friendly</div>
                <div className="cd-item"><span>📋</span> Certificate of completion</div>
                <Link href="/signup" className="btn btn-primary" style={{marginTop: '1.5rem', display: 'block', textAlign: 'center'}}>
                  Enroll in Programming →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Not sure which class to take?</h2>
            <p>Reach out and we'll help you pick the right one for your goals.</p>
            <div className="btn-group centered">
              <Link href="/signup" className="btn btn-primary btn-lg">Sign Up for Both</Link>
              <Link href="/contact" className="btn btn-ghost btn-lg">Ask Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
