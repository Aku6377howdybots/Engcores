import './globals.css'

export const metadata = {
  title: 'Akshith Anoop',
  description: 'Student portfolio — CAD & Programming | Leander, Texas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
