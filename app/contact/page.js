import Link from 'next/link'

export const metadata = {
  title: 'Contact — EngCores',
}

export default function Contact() {
  return (
    <>
      <div className="aurora" aria-hidden>
        <div className="aurora-orb orb1" />
        <div className="aurora-orb orb3" />
      </div>

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Get in Touch</div>
          <h1>We'd love to<br /><span className="gradient-text">hear from you</span></h1>
          <p>Have a question about our classes? Want to learn more? Reach out — we reply fast.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-methods">
              <h2>Contact us directly</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
                We're real people — reach out any way that's easiest for you.
              </p>

              <div className="contact-method-card">
                <div className="cm-icon">📞</div>
                <div>
                  <div className="cm-label">Phone / Text</div>
                  <a href="tel:5123487222" className="cm-value">512-348-7222</a>
                  <div className="cm-note">Call or text anytime — we usually reply within a few hours</div>
                </div>
              </div>

              <div className="contact-method-card">
                <div className="cm-icon">✉</div>
                <div>
                  <div className="cm-label">Email</div>
                  <a href="mailto:aku.anoop007@gmail.com" className="cm-value">aku.anoop007@gmail.com</a>
                  <div className="cm-note">We respond to all emails within 24 hours</div>
                </div>
              </div>

              <div className="contact-method-card">
                <div className="cm-icon">📍</div>
                <div>
                  <div className="cm-label">Location</div>
                  <div className="cm-value">Leander, Texas</div>
                  <div className="cm-note">Classes held locally in the Leander area</div>
                </div>
              </div>

              <div className="contact-method-card">
                <div className="cm-icon">👥</div>
                <div>
                  <div className="cm-label">Founders</div>
                  <div className="cm-value">Akshith Anoop & Yeshwin Gadde</div>
                  <div className="cm-note">Co-founders — feel free to reach out directly</div>
                </div>
              </div>
            </div>

            <div className="contact-cta-box">
              <h3>Ready to enroll?</h3>
              <p>Skip the back-and-forth — fill out our enrollment form and we'll reach out to confirm your spot.</p>
              <Link href="/signup" className="btn btn-primary btn-lg btn-full">Go to Enrollment Form →</Link>

              <div className="divider-line"><span>or</span></div>

              <div className="quick-contact">
                <p>Quick question? Just text us:</p>
                <a href="tel:5123487222" className="phone-big">512-348-7222</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">FAQ</div>
            <h2>Common questions</h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'Do I need any prior experience?', a: 'No experience needed at all. Our classes are designed to start from scratch.' },
              { q: 'How long are the courses?', a: 'Each course is 8 weeks long with flexible scheduling to fit around school.' },
              { q: 'How many students per class?', a: 'We keep classes small — max 8 students — so everyone gets real attention.' },
              { q: 'Where are classes held?', a: 'Classes are held locally in the Leander, TX area. Reach out for the exact location.' },
              { q: 'What do I need to bring?', a: 'Just a laptop if you have one. We can arrange equipment for students who need it.' },
              { q: 'Can I take both courses?', a: 'Absolutely! Many students take CAD and Programming together. We can help schedule them.' },
            ].map(f => (
              <div key={f.q} className="faq-item">
                <div className="faq-q">{f.q}</div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
