import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { FACES, getFaceBySlug } from '../data/faces'
import { FaceIcon } from '../components/Icons'
import { Placeholder } from '../components/Placeholder'

export function FacePage() {
  const { slug } = useParams<{ slug: string }>()
  const face = slug ? getFaceBySlug(slug) : undefined

  useEffect(() => {
    if (face) document.title = `${face.name} | Impact Cube`
  }, [face])

  if (!face) return <Navigate to="/the-cube" replace />

  return (
    <>
      <section
        className="hero face-hero"
        style={
          {
            ['--accent' as string]: face.accent,
            ['--ink' as string]: face.ink,
            paddingBottom: 56,
          }
        }
      >
        <div className="container">
          <div className="face-nav-strip">
            {FACES.map((f) => (
              <Link
                key={f.id}
                to={f.path}
                className={f.id === face.id ? 'current' : undefined}
                style={{ ['--accent' as string]: f.accent, ['--ink' as string]: f.ink }}
              >
                {f.num}. {f.name}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <div className="face-icon-lg">
              <FaceIcon id={face.id} />
            </div>
            <p className="eyebrow" style={{ color: face.ink }}>
              Face {face.num} of 6
            </p>
            <h1>{face.headline}</h1>
            <p className="lede">{face.question}</p>
            <p style={{ fontWeight: 600, color: face.ink, fontSize: '1.05rem' }}>{face.purpose}</p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">
                {face.ctaLabel}
              </Link>
              <Link to="/the-cube" className="btn btn-secondary">
                See All Six Faces
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>What this face covers.</h2>
            <ul className="cap-list" style={{ ['--accent' as string]: face.accent }}>
              {face.capabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <Placeholder
              variant="wide"
              label={`Illustration or workshop photo for ${face.name}`}
              note="diagram or authentic team photo"
            />
          </div>
        </div>
      </section>

      {face.note ? (
        <section className="section-tight">
          <div className="container">
            <div className="note-box" style={{ ['--accent' as string]: face.accent }}>
              <p className="eyebrow" style={{ color: face.ink, marginBottom: 6 }}>
                {face.note.label}
              </p>
              <p className="mb-0" style={{ fontWeight: 600, color: 'var(--navy)' }}>
                {face.note.text}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{face.approachEyebrow}</p>
            <h2>Diagnose. Design. Deliver.</h2>
          </div>
          <div className="method-steps">
            <div className="method-step">
              <p className="num">01</p>
              <h3>Diagnose</h3>
              <p className="small mb-0">
                Assess where {face.name.toLowerCase()} stands today and where the gaps are.
              </p>
            </div>
            <div className="method-step">
              <p className="num">02</p>
              <h3>Design</h3>
              <p className="small mb-0">
                Design a fit-for-purpose approach for this specific organisation.
              </p>
            </div>
            <div className="method-step">
              <p className="num">03</p>
              <h3>Deliver</h3>
              <p className="small mb-0">Work alongside your team until the solution is in use.</p>
            </div>
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
              <h3 className="mb-0">{face.headline}</h3>
              <p className="mb-0 small">
                Every engagement starts with a conversation about where your organisation is today.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Strengthen Your Organisation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
