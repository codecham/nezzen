// src/components/layout/ScrollIndicator.tsx
'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { cn } from '@/lib/utils'

/**
 * Configuration des sections à tracker
 * id: correspond à l'id de la section dans le DOM
 * label: texte affiché au hover (optionnel, pour accessibilité)
 */
const sections = [
  { id: 'hero', label: 'Accueil' },
  { id: 'intro', label: 'Introduction' },
  { id: 'philosophie', label: 'Notre approche' },
  { id: 'parfums', label: 'Nos parfums' },
  { id: 'refill', label: 'Refill Attitude' },
  { id: 'ateliers', label: 'Ateliers' },
  { id: 'temoignages', label: 'Témoignages' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'visite', label: 'Nous visiter' },
] as const

interface ScrollIndicatorProps {
  /** Afficher uniquement sur la page d'accueil */
  showOnlyOnHome?: boolean
  /** Classes CSS additionnelles */
  className?: string
}

/**
 * Hook personnalisé pour vérifier si on est sur la page d'accueil
 * Utilise useSyncExternalStore pour être compatible avec React 19 / Compiler
 */
function useIsHomePage(showOnlyOnHome: boolean): boolean {
  // Fonction pour obtenir le snapshot côté client
  const getSnapshot = (): boolean => {
    if (!showOnlyOnHome) return true
    const path = window.location.pathname
    return path === '/' || /^\/(fr|en|nl)\/?$/.test(path)
  }

  // Fonction pour obtenir le snapshot côté serveur (SSR)
  const getServerSnapshot = (): boolean => false

  // Subscribe - le pathname ne change pas sans navigation complète
  // donc on retourne un no-op unsubscribe
  const subscribe = (): (() => void) => {
    return () => {}
  }

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

/**
 * Hook personnalisé pour tracker la position de scroll
 */
function useScrollPosition(): number {
  const getSnapshot = (): number => window.scrollY
  const getServerSnapshot = (): number => 0
  
  const subscribe = (callback: () => void): (() => void) => {
    window.addEventListener('scroll', callback, { passive: true })
    return () => window.removeEventListener('scroll', callback)
  }

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

/**
 * Indicateur de scroll vertical
 * Affiche des dots sur le côté droit indiquant la section active
 * Cliquable pour naviguer vers chaque section
 * 
 * @example
 * // Dans le layout principal
 * <ScrollIndicator />
 */
export function ScrollIndicator({ 
  showOnlyOnHome = true,
  className 
}: ScrollIndicatorProps) {
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  
  // Utiliser les hooks personnalisés
  const isHomePage = useIsHomePage(showOnlyOnHome)
  const scrollY = useScrollPosition()
  
  // Calculer si on a scrollé (dérivé, pas de state)
  const hasScrolled = scrollY > 100

  // Observer les sections pour déterminer laquelle est active
  useEffect(() => {
    if (!isHomePage) return

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Zone "active" au 1/3 supérieur de l'écran
      threshold: 0,
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
          // Mettre à jour l'URL sans scroll (pour le partage)
          if (entry.target.id !== 'hero') {
            window.history.replaceState(null, '', `#${entry.target.id}`)
          } else {
            // Retirer le hash si on est au hero
            window.history.replaceState(null, '', window.location.pathname)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observer chaque section
    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [isHomePage])

  // Ne pas afficher si pas sur la home
  if (!isHomePage) return null

  return (
    <nav
      aria-label="Navigation des sections"
      className={cn(
        'fixed right-4 top-1/2 z-40 -translate-y-1/2',
        'hidden lg:flex flex-col items-center gap-3',
        'transition-all duration-500',
        hasScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4',
        className
      )}
    >
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id
        const isHovered = hoveredSection === id

        return (
          <a
            key={id}
            href={`#${id}`}
            className="group relative flex items-center"
            onMouseEnter={() => setHoveredSection(id)}
            onMouseLeave={() => setHoveredSection(null)}
            aria-label={`Aller à ${label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            {/* Label au hover */}
            <span
              className={cn(
                'absolute right-6 whitespace-nowrap',
                'rounded-md bg-foreground px-2 py-1',
                'text-xs text-background',
                'transition-all duration-200',
                'pointer-events-none',
                isHovered 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-2'
              )}
            >
              {label}
            </span>

            {/* Dot */}
            <span
              className={cn(
                'relative block rounded-full',
                'transition-all duration-300',
                isActive 
                  ? 'h-3 w-3 bg-foreground' 
                  : 'h-2 w-2 bg-border group-hover:bg-muted-foreground'
              )}
            >
              {/* Ring animé pour l'état actif */}
              {isActive && (
                <span 
                  className="absolute inset-0 rounded-full bg-foreground/30 animate-ping"
                  style={{ animationDuration: '2s' }}
                />
              )}
            </span>
          </a>
        )
      })}
    </nav>
  )
}