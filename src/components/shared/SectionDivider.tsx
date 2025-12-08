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
    sm: 'py-4',
    md: 'py-8',
    lg: 'py-12',
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
    sm: 'w-16',
    md: 'w-24',
    lg: 'w-32',
  }

  return (
    <div className={cn('h-px bg-border', widthClasses[size])} />
  )
}

// =============================================================================
// VARIANTE : ENSO (CERCLE ZEN)
// =============================================================================

function EnsoDivider({ size }: { size: 'sm' | 'md' | 'lg' }) {
  const sizeMap = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
  }

  const { width, height } = sizeMap[size]

  return (
    <svg
      viewBox="0 0 60 60"
      width={width}
      height={height}
      className="text-border"
    >
      {/* Arc principal - style brush */}
      <path
        d="M 30 8 C 16 8, 8 18, 8 32 C 8 46, 18 52, 28 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="opacity-60"
      />
      {/* Second arc plus léger */}
      <path
        d="M 32 8 C 46 8, 52 18, 52 32 C 52 46, 42 52, 32 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="opacity-30"
      />
    </svg>
  )
}

// =============================================================================
// VARIANTE : TROIS POINTS
// =============================================================================

function DotsDivider({ size }: { size: 'sm' | 'md' | 'lg' }) {
  const dotSizeClasses = {
    sm: 'h-1 w-1',
    md: 'h-1.5 w-1.5',
    lg: 'h-2 w-2',
  }

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4',
  }

  return (
    <div className={cn('flex items-center', gapClasses[size])}>
      <div className={cn('rounded-full bg-border/60', dotSizeClasses[size])} />
      <div className={cn('rounded-full bg-accent/40', dotSizeClasses[size])} />
      <div className={cn('rounded-full bg-border/60', dotSizeClasses[size])} />
    </div>
  )
}

// =============================================================================
// VARIANTE : GRADIENT
// =============================================================================

function GradientDivider({ size }: { size: 'sm' | 'md' | 'lg' }) {
  const widthClasses = {
    sm: 'w-32',
    md: 'w-48',
    lg: 'w-64',
  }

  return (
    <div 
      className={cn(
        'h-px',
        widthClasses[size],
        'bg-gradient-to-r from-transparent via-border to-transparent'
      )} 
    />
  )
}