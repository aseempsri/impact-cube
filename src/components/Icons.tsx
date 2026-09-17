import type { ReactNode } from 'react'
import type { FaceId } from '../data/faces'

type IconProps = { className?: string }

export function BrandMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
      <path d="M20 3 L35 11.5 V28.5 L20 37 L5 28.5 V11.5 Z" stroke="#15324A" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M20 3 V20 M20 20 L35 11.5 M20 20 L5 11.5 M20 20 V37" stroke="#07847E" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="2.4" fill="#07847E" />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 6H21M3 12H21M3 18H21" stroke="#15324A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 14, height: 14 }}>
      <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CameraIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="5" y="12" width="30" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 12 L16.5 8 H23.5 L26 12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="20" cy="22" r="6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function PersonIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="15" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 33 C7 25 12.5 21 20 21 C27.5 21 33 25 33 33" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 20 L27 12 L23 20 L20 28 L17 20 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function SystemsIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="24" y="6" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="15" y="24" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 11 H24 M11 16 V21 C11 23 13 24 15 24 M29 16 V21 C29 23 27 24 25 24" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function TechnologyIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="12" y="12" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 6 V12 M20 28 V34 M6 20 H12 M28 20 H34 M10 10 L14.5 14.5 M29.5 29.5 L25.5 25.5 M10 30 L14.5 25.5 M29.5 10.5 L25.5 14.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function InsightsIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 32 V22 M16 32 V15 M24 32 V19 M32 32 V9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 20 L16 13 L24 17 L32 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function SustainabilityIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M28 13 A12 12 0 1 1 12 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M28 6 L28 13 L21 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CommunicationIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="7" width="17" height="22" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 13 H21 M12 18 H21 M12 23 H17" stroke="currentColor" strokeWidth="1.4" />
      <path d="M26 17 C30 17 33 20 33 24 C33 26 32 27.5 30.5 28.5 L32 32 L28 29.6 C27 29.9 26 30 25 29.9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

const FACE_ICONS: Record<FaceId, () => ReactNode> = {
  strategy: StrategyIcon,
  systems: SystemsIcon,
  technology: TechnologyIcon,
  insights: InsightsIcon,
  sustainability: SustainabilityIcon,
  communication: CommunicationIcon,
}

export function FaceIcon({ id }: { id: FaceId }) {
  const Icon = FACE_ICONS[id]
  return <Icon />
}
