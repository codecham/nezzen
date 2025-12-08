// src/components/shared/SectionDivider.tsx
import { cn } from '@/lib/utils'

interface SectionDividerProps {
  /** Style du séparateur */
  variant?: 'line' | 'enso' | 'dots' | 'gradient'
  /** Taille du séparateur */
  size?: 'sm' | 'md' | 'lg'
  /** Classes CSS additionnelles */
  className?: string
}

/**
 * Séparateur visuel zen entre les sections
 * Inspiré du style enso du logo NeZ ZeN
 * 
 * @example
 * <SectionDivider variant="enso" />
 * <SectionDivider variant="line" size="sm" />
 */
export function SectionDivider({
  variant = 'enso',
  size = 'md',
  className,
}: SectionDividerProps) {
  // Classes de taille pour le container
  const sizeClasses = {
    sm: 'py-6',
    md: 'py-10',
    lg: 'py-14',
  }

  return (
    <div 
      className={cn(
        'flex items-center justify-center',
        sizeClasses[size],
        className
      )}
      aria-hidden="true"
    >
      {variant === 'line' && <LineDivider size={size} />}
      {variant === 'enso' && <EnsoDivider size={size} />}
      {variant === 'dots' && <DotsDivider size={size} />}
      {variant === 'gradient' && <GradientDivider size={size} />}
    </div>
  )
}

// =============================================================================
// VARIANTE : LIGNE SIMPLE
// =============================================================================

function LineDivider({ size }: { size: 'sm' | 'md' | 'lg' }) {
  const widthClasses = {
    sm: 'w-20',
    md: 'w-32',
    lg: 'w-48',
  }

  return (
    <div className={cn('h-px bg-neutral-300', widthClasses[size])} />
  )
}

// =============================================================================
// VARIANTE : ENSO (CERCLE ZEN)
// =============================================================================

function EnsoDivider({ size }: { size: 'sm' | 'md' | 'lg' }) {
  const sizeMap = {
    sm: { width: 40, height: 40 },
    md: { width: 60, height: 60 },
    lg: { width: 80, height: 80 },
  }

  const { width, height } = sizeMap[size]

  return (
    <svg
      viewBox="0 0 60 60"
      width={width}
      height={height}
      className="text-neutral-400"
    >
      {/* Arc principal - style brush */}
      <path
        d="M 30 8 C 16 8, 8 18, 8 32 C 8 46, 18 52, 28 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Second arc plus léger */}
      <path
        d="M 32 8 C 46 8, 52 18, 52 32 C 52 46, 42 52, 32 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="opacity-50"
      />
    </svg>
  )
}

// =============================================================================
// VARIANTE : TROIS POINTS
// =============================================================================

function DotsDivider({ size }: { size: 'sm' | 'md' | 'lg' }) {
  const dotSizeClasses = {
    sm: 'h-1.5 w-1.5',
    md: 'h-2 w-2',
    lg: 'h-2.5 w-2.5',
  }

  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-5',
  }

  return (
    <div className={cn('flex items-center', gapClasses[size])}>
      <div className={cn('rounded-full bg-neutral-300', dotSizeClasses[size])} />
      <div className={cn('rounded-full bg-neutral-400', dotSizeClasses[size])} />
      <div className={cn('rounded-full bg-neutral-300', dotSizeClasses[size])} />
    </div>
  )
}

// =============================================================================
// VARIANTE : GRADIENT
// =============================================================================

function GradientDivider({ size }: { size: 'sm' | 'md' | 'lg' }) {
  const widthClasses = {
    sm: 'w-40',
    md: 'w-64',
    lg: 'w-80',
  }

  return (
    <div 
      className={cn(
        'h-px',
        widthClasses[size],
        'bg-gradient-to-r from-transparent via-neutral-300 to-transparent'
      )} 
    />
  )
}