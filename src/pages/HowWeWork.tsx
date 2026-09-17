import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Placeholder } from '../components/Placeholder'

export function HowWeWork() {
  useEffect(() => {
    document.title = 'How We Work | Impact Cube'
  }, [])

  return (
    <>
      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Working method</p>
            <h1>Diagnose. Design. Deliver.</h1>
            <p className="lede">
              We do not stop at recommendations. We help put them into practice — working alongside
              your team from first diagnosis to a working, in-use solution.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <dl className="def-rows">
            <div className="def-row">
              <dt>01 — Diagnose</dt>
              <dd style={{ margin: 0 }}>
                <p className="small" style={{ fontWeight: 600, color: 'var(--navy)', marginBottom: 6 }}>
                  Understand before solving.
                </p>
                <p className="small mb-0">
                  Organisational assessment, gap analysis, digital transformation review, impact
                  assessment, funding readiness, documentation review.
                </p>
                <p className="small" style={{ marginTop: 10 }}>
                  <strong>Output:</strong> Prioritised diagnosis and scope
                </p>
              </dd>
            </div>
            <div className="def-row">
              <dt>02 — Design</dt>
              <dd style={{ margin: 0 }}>
                <p className="small" style={{ fontWeight: 600, color: 'var(--navy)', marginBottom: 6 }}>
                  Build the right solution.
                </p>
                <p className="small mb-0">
                  Strategy, framework, process, SOP, dashboard, roadmap, MEL framework, funding plan
                  or communication structure.
                </p>
                <p className="small" style={{ marginTop: 10 }}>
                  <strong>Output:</strong> Fit-for-purpose solution design
                </p>
              </dd>
            </div>
            <div className="def-row">
              <dt>03 — Deliver</dt>
              <dd style={{ margin: 0 }}>
                <p className="small" style={{ fontWeight: 600, color: 'var(--navy)', marginBottom: 6 }}>
                  Make it happen.
                </p>
                <p className="small mb-0">
                  Implementation support, reports, proposals, presentations, analysis, dashboards,
                  systems, tools and documentation.
                </p>
                <p className="small" style={{ marginTop: 10 }}>
                  <strong>Output:</strong> Working capability and usable deliverables
                </p>
              </dd>
            </div>
          </dl>
          <div className="pull-quote" style={{ marginTop: 40 }}>
            We do not stop at recommendations. We help put them into practice.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Engagement models</p>
            <h2>Three ways to work with us.</h2>
            <p className="max-prose">
              The right model depends on how wide the need is — a single deliverable, a broader
              organisational challenge, or ongoing multidisciplinary support.
            </p>
          </div>
          <div className="model-cards">
            <div className="model-card">
              <span className="tag">Project Support</span>
              <h3>One clearly defined requirement</h3>
              <p className="small">Best suited for a single, well-scoped need.</p>
              <p className="small" style={{ fontStyle: 'italic' }}>
                &ldquo;We need an annual report, a MEL framework, or a donor presentation.&rdquo;
              </p>
            </div>
            <div className="model-card">
              <span className="tag">Transformation Support</span>
              <h3>A broader organisational challenge</h3>
              <p className="small">Best suited when a challenge spans multiple faces.</p>
              <p className="small" style={{ fontStyle: 'italic' }}>
                &ldquo;Our monitoring and reporting system needs redesign.&rdquo;
              </p>
            </div>
            <div className="model-card">
              <span className="tag">Extended Team</span>
              <h3>Ongoing multidisciplinary support</h3>
              <p className="small">Best suited for continuous, evolving needs.</p>
              <p className="small" style={{ fontStyle: 'italic' }}>
                &ldquo;We need regular support with data, proposals, reports and systems.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight section-soft">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">What guides the work</p>
            <h2>Diagnosis, design and delivery — in that order.</h2>
            <p className="max-prose">
              We identify what needs to improve, design a fit-for-purpose solution, and work
              alongside the organisation to put that solution into practice. Impact Cube combines
              advisory thinking with hands-on execution, rather than handing over a report and
              moving on.
            </p>
          </div>
          <Placeholder
            variant="wide"
            label="Team working session photo"
            note="planning, review or workshop imagery"
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="container center">
          <h2>Ready to start with a diagnosis?</h2>
          <p className="max-prose" style={{ margin: '0 auto 20px' }}>
            Tell us what your organisation is working through and we will recommend the right
            starting point.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
