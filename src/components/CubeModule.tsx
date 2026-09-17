import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { FACES, type CubeSlot, type Face } from '../data/faces'
import { ArrowIcon, FaceIcon } from './Icons'

const ROTATIONS: Record<CubeSlot, string> = {
  front: 'rotateX(-14deg) rotateY(-26deg)',
  right: 'rotateY(-90deg)',
  back: 'rotateY(-180deg)',
  left: 'rotateY(90deg)',
  top: 'rotateX(-90deg)',
  bottom: 'rotateX(90deg)',
}

const SLOT_CLASS: Record<CubeSlot, string> = {
  front: 'cube-face-front',
  right: 'cube-face-right',
  back: 'cube-face-back',
  left: 'cube-face-left',
  top: 'cube-face-top',
  bottom: 'cube-face-bottom',
}

type Props = {
  labelledBy?: string
  /** Larger stage, glow, orbit, and soft float — for the home hero */
  featured?: boolean
}

export function CubeModule({ labelledBy, featured = false }: Props) {
  const [active, setActive] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [panelKey, setPanelKey] = useState(0)
  const moduleRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const face: Face = FACES[active]

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !autoplay) return

    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % FACES.length)
      setPanelKey((k) => k + 1)
    }, 3800)
    return () => window.clearInterval(timer)
  }, [autoplay])

  useEffect(() => {
    const el = moduleRef.current
    if (!el) return
    const stop = () => setAutoplay(false)
    el.addEventListener('pointerdown', stop)
    el.addEventListener('keydown', stop)
    el.addEventListener('touchstart', stop, { passive: true })
    return () => {
      el.removeEventListener('pointerdown', stop)
      el.removeEventListener('keydown', stop)
      el.removeEventListener('touchstart', stop)
    }
  }, [])

  // Soft pointer tilt on the featured hero cube only
  useEffect(() => {
    if (!featured) return
    const stage = stageRef.current
    if (!stage) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const onMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      stage.style.setProperty('--tilt-x', `${(-y * 8).toFixed(2)}deg`)
      stage.style.setProperty('--tilt-y', `${(x * 10).toFixed(2)}deg`)
    }
    const onLeave = () => {
      stage.style.setProperty('--tilt-x', '0deg')
      stage.style.setProperty('--tilt-y', '0deg')
    }
    stage.addEventListener('pointermove', onMove)
    stage.addEventListener('pointerleave', onLeave)
    return () => {
      stage.removeEventListener('pointermove', onMove)
      stage.removeEventListener('pointerleave', onLeave)
    }
  }, [featured])

  function select(index: number) {
    setActive(index)
    setAutoplay(false)
    setPanelKey((k) => k + 1)
  }

  return (
    <div
      className={`cube-module${featured ? ' cube-module--featured' : ''}${autoplay ? ' is-autoplaying' : ''}`}
      ref={moduleRef}
      aria-labelledby={labelledBy}
      style={{ ['--face-glow' as string]: face.accent, ['--face-ink' as string]: face.ink }}
    >
      <div className="cube-stage" aria-hidden="true" ref={stageRef}>
        <div className="cube-glow" />
        <div className="cube-orbit">
          {FACES.map((f, i) => (
            <span
              key={f.id}
              className="cube-orbit-dot"
              style={{
                ['--i' as string]: i,
                background: f.accent,
                opacity: i === active ? 1 : 0.45,
              }}
            />
          ))}
        </div>
        <div className="cube-float">
          <div className="cube3d" style={{ transform: ROTATIONS[face.slot] }}>
            {FACES.map((f) => (
              <div
                key={f.id}
                className={`cube-face ${SLOT_CLASS[f.slot]}${f.id === face.id ? ' is-front' : ''}`}
                style={{ background: f.cubeBg }}
              >
                <FaceIcon id={f.id} />
                <p className="cf-num">{f.num}</p>
                <p className="cf-name">{f.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="cube-shadow" />
      </div>
      <p className="cube-hint">Select a face to explore it — the cube turns to match.</p>
      <div className="cube-controls" role="group" aria-label="The six faces of Impact Cube">
        {FACES.map((f, i) => (
          <button
            key={f.id}
            type="button"
            className={`cube-btn${i === active ? ' is-active' : ''}`}
            style={
              {
                ['--ink' as string]: f.ink,
                ['--wash' as string]: `${f.accent}18`,
              } as CSSProperties
            }
            aria-pressed={i === active}
            onClick={() => select(i)}
          >
            <span className="cb-icon" style={{ color: f.ink }}>
              <FaceIcon id={f.id} />
            </span>
            {f.num}. {f.name}
          </button>
        ))}
      </div>
      <div
        key={panelKey}
        className="cube-panel cube-panel--enter"
        style={{ borderTopColor: face.ink }}
      >
        <p className="cp-num" style={{ color: face.ink }}>
          {face.num}
        </p>
        <h3>{face.name}</h3>
        <p className="small mb-0">{face.question}</p>
        <p className="cp-line" style={{ color: face.ink }}>
          {face.line}
        </p>
        <Link
          to={face.path}
          className="face-link"
          style={{ color: face.ink, fontWeight: 600, fontSize: '0.9rem' }}
        >
          Explore this face <ArrowIcon />
        </Link>
      </div>
    </div>
  )
}
