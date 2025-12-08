// src/components/layout/ScrollToTop.tsx
'use client'

import { useEffect, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { ArrowUp } from 'lucide-react'

interface ScrollToTopProps {
  /** Distance de scroll avant d'afficher le bouton (en px) */
  showAfter?: number
  /** Position depuis le bas (en rem) */
  bottom?: number
  /** Position depuis la droite (en rem) */
  right?: number
  /** Classes CSS additionnelles */
  className?: string
}

/**
 * Bouton "Retour en haut"
 * Apparaît après un certain scroll et permet de remonter en douceur
 * 
 * @example
 * // Dans le layout principal
 * <ScrollToTop showAfter={400} />
 */
export function ScrollToTop({ 
  showAfter = 300,
  bottom = 6,
  right = 6,
  className 
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfter)
    }

    // Check initial
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showAfter])

  // Scroll vers le haut
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    // Retirer le hash de l'URL
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [])

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'fixed z-50',
        'flex items-center justify-center',
        'h-11 w-11 rounded-full',
        'bg-foreground text-background',
        'shadow-lg shadow-foreground/10',
        'transition-all duration-300 ease-out',
        'hover:scale-110 hover:shadow-xl',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        // Visibilité
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none',
        className
      )}
      style={{
        bottom: `${bottom}rem`,
        right: `${right}rem`,
      }}
      aria-label="Retour en haut de la page"
    >
      {/* Icône avec animation au hover */}
      <ArrowUp 
        className={cn(
          'h-5 w-5 transition-transform duration-300',
          isHovered && '-translate-y-0.5'
        )} 
        strokeWidth={2}
      />

      {/* Ring animé au hover */}
      <span 
        className={cn(
          'absolute inset-0 rounded-full border-2 border-foreground',
          'transition-all duration-300',
          isHovered 
            ? 'scale-125 opacity-0' 
            : 'scale-100 opacity-0'
        )}
      />
    </button>
  )
}