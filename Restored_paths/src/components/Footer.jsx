import { Link } from 'react-router-dom'

const pageLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/guidelines', label: 'Guidelines' },
  { to: '/rules-of-court', label: 'Rules of Court' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {pageLinks.map((link) => (
            <Link key={link.to} to={link.to} className="site-footer__link">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="site-footer__text">© {new Date().getFullYear()} Restoring Paths</p>
      </div>
    </footer>
  )
}
