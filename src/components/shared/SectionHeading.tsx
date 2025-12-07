// src/components/shared/SectionHeading.tsx
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  /** Titre principal */
  title: string
  /** Sous-titre optionnel */
  subtitle?: string
  /** Alignement */
  align?: 'left' | 'center' | 'right'
  /** Afficher l'ornement décoratif */
  showOrnament?: boolean
  /** Classes CSS additionnelles */
  className?: string
}

/**
 * Titre de section avec ornement zen
 * Utilisé pour introduire chaque section de la page
 */
export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  showOrnament = true,
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const ornamentContainerClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }

  return (
    <div className={cn('mb-12 lg:mb-16', alignClasses[align], className)}>
      {/* Ornement décoratif - cercle enso stylisé */}
      {showOrnament && (
        <div className={cn('mb-6 flex', ornamentContainerClasses[align])}>
          <svg
            viewBox="0 0 60 60"
            className="h-10 w-10"
            aria-hidden="true"
          >
            {/* Arc zen simplifié */}
            <path
              d="M 30 5 C 15 5, 5 18, 5 32 C 5 46, 15 55, 28 53"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-foreground/20"
            />
            <path
              d="M 32 5 C 47 5, 55 18, 55 32 C 55 46, 45 55, 32 53"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-muted-foreground/40"
            />
          </svg>
        </div>
      )}

      {/* Titre */}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* Sous-titre */}
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground lg:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}