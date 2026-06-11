import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">⚙</span>
            <span>EngCores</span>
          </div>
          <p>Empowering the next generation of engineers and coders in Leander, Texas.</p>
          <div className="footer-contact-info">
            <span>📞 512-348-7222</span>
            <span>✉ aku.anoop007@gmail.com</span>
            <span>📍 Leander, Texas</span>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Pages</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/classes">Classes</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-links-group">
          <h4>Get Started</h4>
          <Link href="/signup">Enroll Now</Link>
          <Link href="/classes#cad">CAD Classes</Link>
          <Link href="/classes#programming">Programming Classes</Link>
          <Link href="/contact">Ask a Question</Link>
        </div>

        <div className="footer-links-group">
          <h4>Founders</h4>
          <span>Akshith Anoop</span>
          <span>Yeshwin Gadde</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EngCores · Leander, Texas · Built by Akshith Anoop & Yeshwin Gadde</p>
        <div className="footer-bottom-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/signup">Enroll</Link>
        </div>
      </div>
    </footer>
  )
}
