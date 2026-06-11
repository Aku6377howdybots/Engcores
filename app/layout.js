import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata = {
  title: 'EngCores — CAD & Programming Classes | Leander, TX',
  description: 'EngCores offers hands-on CAD and programming classes for students in Leander, Texas. Founded by Akshith Anoop and Yeshwin Gadde.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
