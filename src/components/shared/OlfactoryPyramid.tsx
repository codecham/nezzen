// src/components/shared/OlfactoryPyramid.tsx
'use client'

import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import type { FragranceNotes } from '@/types'

interface OlfactoryPyramidProps {
  notes: FragranceNotes
  variant?: 'default' | 'compact' | 'horizontal'
  className?: string
}

/**
 * Pyramide olfactive visualisant les notes de tête, cœur et fond
 * Design élégant et minimaliste
 */
export function OlfactoryPyramid({ 
  notes, 
  variant = 'default',
  className 
}: OlfactoryPyramidProps) {
  const t = useTranslations('parfumDetail.pyramid')

  if (variant === 'compact') {
    return <CompactPyramid notes={notes} t={t} className={className} />
  }

  if (variant === 'horizontal') {
    return <HorizontalPyramid notes={notes} t={t} className={className} />
  }

  return (
    <div className={cn('space-y-6', className)}>
      {/* Note de tête - Triangle pointe en haut */}
      <NoteLevel
        type="tete"
        label={t('tete')}
        notes={notes.tete}
        color="bg-amber-100 text-amber-800"
        iconColor="text-amber-500"
        position="top"
      />

      {/* Note de cœur - Milieu */}
      <NoteLevel
        type="coeur"
        label={t('coeur')}
        notes={notes.coeur}
        color="bg-rose-100 text-rose-800"
        iconColor="text-rose-500"
        position="middle"
      />

      {/* Note de fond - Base */}
      <NoteLevel
        type="fond"
        label={t('fond')}
        notes={notes.fond}
        color="bg-stone-100 text-stone-800"
        iconColor="text-stone-500"
        position="bottom"
      />
    </div>
  )
}

/* ================================
   Note Level Component
   ================================ */

interface NoteLevelProps {
  type: 'tete' | 'coeur' | 'fond'
  label: string
  notes: string[]
  color: string
  iconColor: string
  position: 'top' | 'middle' | 'bottom'
}

function NoteLevel({ type, label, notes, color, iconColor, position }: NoteLevelProps) {
  // Icône selon le type
  const icons = {
    tete: (
      <svg viewBox="0 0 24 24" className={cn('h-5 w-5', iconColor)} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
    coeur: (
      <svg viewBox="0 0 24 24" className={cn('h-5 w-5', iconColor)} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    fond: (
      <svg viewBox="0 0 24 24" className={cn('h-5 w-5', iconColor)} fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  }

  // Largeur selon la position (pyramide inversée)
  const widthClasses = {
    top: 'max-w-xs',
    middle: 'max-w-sm',
    bottom: 'max-w-md',
  }

  return (
    <div className={cn('mx-auto', widthClasses[position])}>
      {/* Header */}
      <div className="mb-2 flex items-center gap-2">
        {icons[type]}
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
      </div>

      {/* Notes chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {notes.map((note) => (
          <span
            key={note}
            className={cn(
              'rounded-full px-3 py-1.5 text-sm font-medium',
              color
            )}
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ================================
   Compact Pyramid (for cards)
   ================================ */

interface CompactPyramidProps {
  notes: FragranceNotes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any
  className?: string
}

function CompactPyramid({ notes, t, className }: CompactPyramidProps) {
  return (
    <div className={cn('space-y-2 text-xs', className)}>
      <div className="flex items-start gap-2">
        <span className="w-12 shrink-0 text-amber-600">{t('tete')}</span>
        <span className="text-muted-foreground">{notes.tete.join(', ')}</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="w-12 shrink-0 text-rose-600">{t('coeur')}</span>
        <span className="text-muted-foreground">{notes.coeur.join(', ')}</span>
      </div>
      <div className="flex items-start gap-2">
        <span className="w-12 shrink-0 text-stone-600">{t('fond')}</span>
        <span className="text-muted-foreground">{notes.fond.join(', ')}</span>
      </div>
    </div>
  )
}

/* ================================
   Horizontal Pyramid (alternative)
   ================================ */

function HorizontalPyramid({ notes, t, className }: CompactPyramidProps) {
  return (
    <div className={cn('grid grid-cols-3 gap-4', className)}>
      <div className="text-center">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-amber-600">
          {t('tete')}
        </div>
        <div className="space-y-1">
          {notes.tete.map((note) => (
            <div key={note} className="text-sm text-muted-foreground">{note}</div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-rose-600">
          {t('coeur')}
        </div>
        <div className="space-y-1">
          {notes.coeur.map((note) => (
            <div key={note} className="text-sm text-muted-foreground">{note}</div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-stone-600">
          {t('fond')}
        </div>
        <div className="space-y-1">
          {notes.fond.map((note) => (
            <div key={note} className="text-sm text-muted-foreground">{note}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
