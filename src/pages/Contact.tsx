import { useEffect, useState, type FormEvent } from 'react'

export function Contact() {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Contact | Impact Cube'
  }, [])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="hero" style={{ paddingBottom: 50 }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Contact</p>
            <h1>Start a conversation.</h1>
            <p className="lede">
              Tell us a little about your organisation and what you are working through. We
              typically respond within [Placeholder: response time, e.g. two working days].
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2" style={{ alignItems: 'flex-start' }}>
          {sent ? (
            <div className="callout">
              <h3 className="mb-0">Thank you — we have received your message.</h3>
              <p className="small mb-0" style={{ marginTop: 12 }}>
                This form is front-end only for now. Wire it to your CRM or form handler before
                launch. We will be in touch shortly.
              </p>
            </div>
          ) : (
            <form className="form-grid" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="org">Organisation</label>
                <input type="text" id="org" name="org" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone (optional)</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="full">
                <label htmlFor="model">What kind of support are you exploring?</label>
                <select id="model" name="model" defaultValue="project">
                  <option value="project">Project Support — one clearly defined requirement</option>
                  <option value="transformation">
                    Transformation Support — a broader organisational challenge
                  </option>
                  <option value="extended">
                    Extended Team — ongoing multidisciplinary support
                  </option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div className="full">
                <label htmlFor="message">Tell us about your organisation and the challenge</label>
                <textarea id="message" name="message" rows={5} required />
              </div>
              <div className="full">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
                <p className="hint">
                  By submitting, you agree to be contacted about your enquiry. [Placeholder: link to
                  privacy notice / consent statement.]
                </p>
              </div>
            </form>
          )}
          <div>
            <div className="callout" style={{ marginBottom: 20 }}>
              <h3 className="mb-0">Other ways to reach us</h3>
              <p className="small" style={{ margin: '14px 0 6px' }}>
                <strong>Email:</strong> [Placeholder: general enquiries email]
              </p>
              <p className="small" style={{ margin: '0 0 6px' }}>
                <strong>Phone:</strong> [Placeholder: phone number]
              </p>
              <p className="small mb-0">
                <strong>Location:</strong> [Placeholder: city / registered address]
              </p>
            </div>
            <div className="callout-navy">
              <h3>What happens next</h3>
              <p className="small mb-0" style={{ color: '#D3E0E8' }}>
                We read every message, ask a few clarifying questions if needed, and suggest whether
                Project Support, Transformation Support or an Extended Team is the right starting
                point — before any commercial conversation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
