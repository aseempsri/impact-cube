import { Link } from 'react-router-dom'
import { FACES } from '../data/faces'
import { BrandMark } from './Icons'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <BrandMark /> IMPACT CUBE
            </div>
            <p style={{ maxWidth: 280 }}>
              Stronger Organisations. Greater Impact. We help social-impact organisations
              strengthen the capabilities behind their mission.
            </p>
          </div>
          <div>
            <h4>The Six Faces</h4>
            <ul>
              {FACES.map((f) => (
                <li key={f.id}>
                  <Link to={f.path}>
                    {f.num} — {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Organisation</h4>
            <ul>
              <li>
                <Link to="/how-we-work">How We Work</Link>
              </li>
              <li>
                <Link to="/our-work">Our Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <span className="ph-note" style={{ color: '#9FB2C0' }}>
                  [Placeholder: general enquiries email]
                </span>
              </li>
              <li>
                <span className="ph-note" style={{ color: '#9FB2C0' }}>
                  [Placeholder: phone number]
                </span>
              </li>
              <li>
                <span className="ph-note" style={{ color: '#9FB2C0' }}>
                  [Placeholder: city / registered address]
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Impact Cube. All rights reserved.</span>
          <span>Diagnose. Design. Deliver.</span>
        </div>
      </div>
    </footer>
  )
}
