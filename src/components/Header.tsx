import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { BrandMark, MenuIcon } from './Icons'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/the-cube', label: 'The Cube' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/our-work', label: 'Our Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onFacePage = pathname.startsWith('/face/')

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <BrandMark /> IMPACT CUBE
        </Link>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive || (item.to === '/the-cube' && onFacePage) ? 'active' : undefined
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="nav-cta">
            <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Strengthen Your Organisation
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
