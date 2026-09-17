import { Link } from 'react-router-dom'
import type { Face } from '../data/faces'
import { ArrowIcon, FaceIcon } from './Icons'

export function FaceCard({ face }: { face: Face }) {
  return (
    <div className="face-card" style={{ ['--accent' as string]: face.accent, ['--ink' as string]: face.ink }}>
      <span className="face-icon" style={{ color: face.ink }}>
        <FaceIcon id={face.id} />
      </span>
      <p className="face-num">{face.num}</p>
      <h3>{face.name}</h3>
      <p className="face-line">{face.line}</p>
      <Link to={face.path} className="face-link">
        Explore this face <ArrowIcon />
      </Link>
    </div>
  )
}
