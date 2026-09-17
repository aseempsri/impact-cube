import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FACES } from '../data/faces'
import { CubeModule } from '../components/CubeModule'
import { FaceIcon } from '../components/Icons'

export function TheCube() {
  useEffect(() => {
    document.title = 'The Cube | Impact Cube'
  }, [])

  return (
    <>
      <section className="hero" style={{ paddingBottom: 20 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why &ldquo;Impact Cube&rdquo;?</p>
            <h1 id="cube-page-cube">Six Faces. One Mission.</h1>
            <p className="lede">
              The cube is not merely a logo. It is the organising philosophy, visual language and
              navigation model of Impact Cube. A cube has six interconnected faces; a strong
              social-impact organisation also needs multiple capabilities working together.
            </p>
          </div>
          <div className="pull-quote">
            The website should show one connected organisational system — not six disconnected
            service boxes.
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <CubeModule labelledBy="cube-page-cube" />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The capability cycle</p>
            <h2>Each face feeds the next.</h2>
            <p className="max-prose">
              Strategy defines direction. Systems create repeatable ways of working. Technology
              improves efficiency. Insights reveal what works. Sustainability secures the resources
              to continue. Communication documents progress, presents results, and carries learning
              back into the next strategic cycle.
            </p>
          </div>
          <div className="cycle-row">
            {FACES.map((f) => (
              <div className="cycle-item" key={f.id}>
                <span className="cycle-icon" style={{ color: f.ink }}>
                  <FaceIcon id={f.id} />
                </span>
                <p className="cycle-name" style={{ color: f.ink }}>
                  {f.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The six faces in detail</p>
            <h2>Every face, one page each.</h2>
          </div>
          {FACES.map((f, i) => (
            <div
              key={f.id}
              className="face-detail-row"
              style={{
                borderTopColor: f.accent,
                borderTopWidth: i === 0 ? 3 : 1,
              }}
            >
              <div className="fd-icon" style={{ color: f.ink }}>
                <FaceIcon id={f.id} />
              </div>
              <div>
                <p className="face-num" style={{ color: f.ink }}>
                  {f.num}
                </p>
                <h3>{f.name}</h3>
                <p className="small mb-0">{f.question}</p>
              </div>
              <div>
                <p className="small" style={{ fontWeight: 600, color: 'var(--navy)' }}>
                  {f.line}
                </p>
                <p className="small mb-0">Outcome: {f.outcome}</p>
              </div>
              <div>
                <Link to={f.path} className="btn btn-secondary">
                  Explore {f.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-tight section-soft">
        <div className="container center">
          <h2>Not sure where to start?</h2>
          <p className="max-prose" style={{ margin: '0 auto 20px' }}>
            Most organisations recognise themselves in more than one face at once. That is the point
            — tell us what you are working through and we will help you find the right combination.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Strengthen Your Organisation
          </Link>
        </div>
      </section>
    </>
  )
}
