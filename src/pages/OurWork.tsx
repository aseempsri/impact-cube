import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CASE_STUDIES, FACES, type FaceId } from '../data/faces'
import { ArrowIcon } from '../components/Icons'
import { Placeholder } from '../components/Placeholder'

function faceMeta(id: FaceId) {
  return FACES.find((f) => f.id === id)!
}

export function OurWork() {
  useEffect(() => {
    document.title = 'Our Work | Impact Cube'
  }, [])

  return (
    <>
      <section className="hero" style={{ paddingBottom: 50 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Proof</p>
            <h1>Our Work</h1>
            <p className="lede">
              Each case study is tagged by the faces it strengthened — because most real
              organisational challenges cut across more than one capability at a time.
            </p>
          </div>
          <div className="callout">
            <p className="mb-0">
              <strong>Example:</strong> Building a stronger reporting system for an education NGO —
              Systems + Technology + Insights + Communication.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {CASE_STUDIES.map((c) => (
              <div className="case-card" key={c.id}>
                <Placeholder
                  variant="wide"
                  label={`Case study photo or diagram ${c.id}`}
                  note="field, workshop or report visual"
                />
                <div className="case-body">
                  <div className="case-tags">
                    {c.faces.map((id) => {
                      const f = faceMeta(id)
                      return (
                        <span
                          key={id}
                          className="tag-chip"
                          style={{ background: `${f.accent}22`, color: f.ink }}
                        >
                          {f.name}
                        </span>
                      )
                    })}
                  </div>
                  <h3>{c.title}</h3>
                  <p className="small">
                    [Placeholder: challenge] → [Placeholder: approach] → [Placeholder: outcome,
                    verified metric where available]
                  </p>
                  <Link to="/contact" className="face-link small" style={{ fontWeight: 600 }}>
                    Read more <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="hint" style={{ marginTop: 24 }}>
            All six case studies above are placeholders. Replace titles, tags, imagery and outcomes
            with real, permissioned client examples before publishing — outcomes should use verified
            metrics where available, or careful qualitative evidence otherwise. Add a client
            testimonial only with explicit permission.
          </p>
        </div>
      </section>

      <section className="section section-soft section-tight">
        <div className="container center">
          <h2>Want to see how this could work for your organisation?</h2>
          <Link to="/contact" className="btn btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
