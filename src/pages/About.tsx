import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Placeholder } from '../components/Placeholder'

const AUDIENCES = [
  {
    title: 'Grassroots NGOs',
    body: 'Strong field work with limited institutional systems — building a stronger backbone for the mission.',
  },
  {
    title: 'Small and mid-sized NGOs',
    body: 'Specialist needs without specialist teams — accessing capability without building a large team.',
  },
  {
    title: 'Growing nonprofits',
    body: 'Processes and data that have not kept pace with growth — moving from person-dependent to system-enabled.',
  },
  {
    title: 'Social-impact organisations',
    body: 'Needing structured planning, evidence and communication that connect to execution.',
  },
  {
    title: 'CSR implementation partners',
    body: 'Needing dependable reporting and programme systems that build stakeholder confidence.',
  },
]

export function About() {
  useEffect(() => {
    document.title = 'About | Impact Cube'
  }, [])

  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="container grid-2">
          <div>
            <p className="eyebrow">About Impact Cube</p>
            <h1>Your extended institutional support team.</h1>
            <p className="lede">
              Impact Cube exists to strengthen the institutional backbone behind social-impact work —
              so that strong programmes are matched by strong organisations.
            </p>
          </div>
          <Placeholder
            variant="wide"
            label="Team or office photo"
            note="authentic, in-context photo — not staged stock imagery"
          />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="grid-2">
            <div>
              <p className="eyebrow">Why we exist</p>
              <h2>Strong programmes need strong organisations.</h2>
              <p className="max-prose">
                Many organisations possess strong programme knowledge, committed teams and deep
                community relationships. Their impact can still be constrained by gaps in planning,
                systems, digital tools, assessment, analysis, fundraising readiness and
                institutional documentation. Larger organisations employ specialists for these
                functions; smaller organisations usually cannot. Impact Cube is designed to close
                that gap.
              </p>
            </div>
            <div>
              <p className="eyebrow">How we are different</p>
              <h2>Diagnosis, design and delivery — together.</h2>
              <p className="max-prose">
                We are not positioned as another generic NGO consultancy, and not simply a freelance
                task provider either. We connect each piece of work to the organisation&apos;s
                broader needs and systems, and we stay involved until the solution is actually in
                use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">Who we work with</p>
            <h2>Built for organisations with big missions and lean teams.</h2>
          </div>
          <div className="grid-3">
            {AUDIENCES.map((a) => (
              <div className="model-card" key={a.title}>
                <h3>{a.title}</h3>
                <p className="small mb-0">{a.body}</p>
              </div>
            ))}
            <div className="model-card" style={{ background: 'var(--teal-light)', borderColor: 'transparent' }}>
              <h3>Not sure where you fit?</h3>
              <p className="small mb-0">
                Most organisations recognise themselves in more than one profile.{' '}
                <Link to="/contact">Talk to us.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our team</p>
            <h2>The people behind the six faces.</h2>
            <p className="max-prose">
              [Placeholder: short note on team structure — e.g. a core team plus specialist
              associates across strategy, systems, technology, insights, sustainability and
              communication.]
            </p>
          </div>
          <div className="team-grid">
            {[1, 2, 3, 4].map((n) => (
              <div className="team-card" key={n}>
                <Placeholder
                  variant="portrait"
                  person
                  label={`Team headshot ${n}`}
                  note="Placeholder headshot"
                />
                <h4>[Placeholder: name {n}]</h4>
                <p className="role">[Placeholder: role / face specialism]</p>
                <p>
                  [Placeholder: one-line background — prior organisation or relevant sector
                  experience.]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container center">
          <h2>Want to know more about how we work?</h2>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <Link to="/how-we-work" className="btn btn-secondary">
              How We Work
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
