import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FACES, PROBLEMS } from '../data/faces'
import { CubeModule } from '../components/CubeModule'
import { FaceCard } from '../components/FaceCard'
import { Placeholder } from '../components/Placeholder'

export function Home() {
  useEffect(() => {
    document.title = 'Home | Impact Cube'
  }, [])

  return (
    <>
      <section className="hero hero--home">
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-blob hero-blob--a" />
          <span className="hero-blob hero-blob--b" />
          <span className="hero-blob hero-blob--c" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Stronger Organisations. Greater Impact.</p>
            <h1 id="hero-cube">Your extended institutional support team.</h1>
            <p className="lede">
              Impact Cube helps social-impact organisations strengthen the capabilities behind
              their mission — from strategy and systems to technology, insights, sustainability
              and communication.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary btn-lift">
                Strengthen Your Organisation
              </Link>
              <Link to="/the-cube" className="btn btn-secondary btn-lift">
                Explore the Cube
              </Link>
            </div>
          </div>
          <CubeModule labelledBy="hero-cube" featured />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The problem</p>
            <h2>Big missions do not always come with big teams.</h2>
          </div>
          <ul className="problem-list">
            {PROBLEMS.map((p) => (
              <li key={p.challenge}>
                <span className="challenge">{p.challenge}</span>
                <span className="response">{p.response}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex-between">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Six Faces. One Mission.</p>
              <h2>One connected organisational system.</h2>
              <p className="max-prose">
                A cube has six interconnected faces. A strong social-impact organisation needs the
                same — multiple capabilities working together, not six disconnected service boxes.
              </p>
            </div>
            <Link to="/the-cube" className="btn btn-secondary">
              See how the faces connect
            </Link>
          </div>
          <div className="cube-faces">
            {FACES.map((f) => (
              <FaceCard key={f.id} face={f} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow" style={{ color: '#7FD6CF' }}>
              How we work
            </p>
            <h2>Diagnose. Design. Deliver.</h2>
            <p className="max-prose" style={{ color: '#CBD8E0' }}>
              We do not stop at recommendations. We help put them into practice.
            </p>
          </div>
          <div
            className="method-steps"
            style={{ background: 'rgba(255,255,255,.04)', borderColor: 'rgba(255,255,255,.16)' }}
          >
            {[
              {
                n: '01',
                t: 'Diagnose',
                d: 'Understand before solving — organisational assessment, gap analysis, digital and funding readiness review.',
              },
              {
                n: '02',
                t: 'Design',
                d: 'Build the right solution — strategy, framework, SOP, dashboard, roadmap or communication structure.',
              },
              {
                n: '03',
                t: 'Deliver',
                d: 'Make it happen — implementation support, reports, proposals, dashboards, systems and documentation.',
              },
            ].map((s) => (
              <div
                key={s.n}
                className="method-step"
                style={{ borderColor: 'rgba(255,255,255,.16)' }}
              >
                <p className="num">{s.n}</p>
                <h3 style={{ color: '#fff' }}>{s.t}</h3>
                <p style={{ color: '#CBD8E0' }}>{s.d}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link to="/how-we-work" className="btn btn-on-navy">
              How We Work
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Engagement models</p>
            <h2>Support that matches the size of the need.</h2>
          </div>
          <div className="model-cards">
            <div className="model-card">
              <span className="tag">Project Support</span>
              <h3>One clearly defined requirement</h3>
              <p className="small">
                &ldquo;We need an annual report, a MEL framework, or a donor presentation.&rdquo;
              </p>
            </div>
            <div className="model-card">
              <span className="tag">Transformation Support</span>
              <h3>A broader organisational challenge</h3>
              <p className="small">&ldquo;Our monitoring and reporting system needs redesign.&rdquo;</p>
            </div>
            <div className="model-card">
              <span className="tag">Extended Team</span>
              <h3>Ongoing multidisciplinary support</h3>
              <p className="small">
                &ldquo;We need regular support with data, proposals, reports and systems.&rdquo;
              </p>
            </div>
          </div>
          <p style={{ marginTop: 26 }}>
            <Link to="/contact" className="btn btn-secondary">
              Find the Right Support
            </Link>
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Impact Cube Health Check</p>
            <h2>Where is your organisation strongest — and where does it need support?</h2>
            <p className="max-prose">
              A short assessment across the six faces gives an indicative institutional readiness
              profile: a score for each face and a priority recommendation. The result is
              indicative, not an audit or certification.
            </p>
            <div className="hc-scale" aria-hidden="true">
              {FACES.map((f) => (
                <span key={f.id} style={{ background: f.accent }} />
              ))}
            </div>
            <p className="small">18 questions · three per face · 1–5 maturity scale</p>
            <Link to="/contact" className="btn btn-primary">
              Check Your Cube
            </Link>
            <p className="hint">
              The full interactive Health Check tool is in development. Contact us to run a guided
              version with our team in the meantime.
            </p>
          </div>
          <Placeholder
            variant="wide"
            label="Health Check results preview"
            note="e.g. six-face score dial or bar chart mockup"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex-between">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Proof</p>
              <h2>Selected work with partner organisations.</h2>
            </div>
            <Link to="/our-work" className="btn btn-secondary">
              View Our Work
            </Link>
          </div>
          <div className="grid-3">
            {[1, 2, 3].map((n) => (
              <div className="case-card" key={n}>
                <Placeholder variant="wide" label="Case study image" note="photo or diagram" />
                <div className="case-body">
                  <div className="case-tags">
                    <span
                      className="tag-chip"
                      style={{ background: 'var(--teal-light)', color: 'var(--teal-dark)' }}
                    >
                      [Placeholder tag]
                    </span>
                  </div>
                  <h3>[Placeholder: case study title {n}]</h3>
                  <p className="small">
                    [Placeholder: one-line summary of the organisational improvement.]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div
            className="callout"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h3 className="mb-0">We do not just advise. We help you build.</h3>
              <p className="mb-0 small">
                Tell us what your organisation is working through — we will help you find the right
                starting point.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
