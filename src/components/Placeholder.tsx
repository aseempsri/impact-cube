import { CameraIcon, PersonIcon } from './Icons'

type Props = {
  label: string
  note?: string
  variant?: 'wide' | 'portrait' | 'square' | 'default'
  person?: boolean
}

export function Placeholder({ label, note, variant = 'default', person }: Props) {
  const cls =
    variant === 'wide'
      ? 'ph ph-wide'
      : variant === 'portrait'
        ? 'ph ph-portrait'
        : variant === 'square'
          ? 'ph ph-square'
          : 'ph'

  return (
    <div className={cls}>
      {person ? <PersonIcon /> : <CameraIcon />}
      <div className="ph-label">{label}</div>
      {note ? <div className="ph-note">{note}</div> : null}
    </div>
  )
}
