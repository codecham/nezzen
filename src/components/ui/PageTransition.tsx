// src/components/ui/PageTransition.tsx
'use client'

import { type ReactNode, useRef, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type TransitionVariant = 'fade' | 'fade-up' | 'fade-scale' | 'slide-up'

interface PageTransitionProps {
  children: ReactNode
  /** Type de transition */
  variant?: TransitionVariant
  /** Durée de la transition en ms */
  duration?: number
  /** Classes CSS supplémentaires */
  className?: string
}

/**
 * Composant PageTransition
 * Anime l'entrée du contenu de page avec différentes variantes
 * Utilise des animations CSS pures pour éviter les re-renders
 * 
 * @example
 * // Dans un template.tsx ou page.tsx
 * <PageTransition variant="fade-up">
 *   {children}
 * </PageTransition>
 */
export function PageTransition({
  children,
  variant = 'fade-up',
  duration = 500,
  className,
}: PageTransitionProps) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)
  const previousPathRef = useRef(pathname)

  // Utiliser useLayoutEffect pour manipuler le DOM directement
  // sans passer par useState (évite les re-renders en cascade)
  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Seulement animer si le pathname a changé
    if (previousPathRef.current !== pathname) {
      previousPathRef.current = pathname
      
      // Réinitialiser l'animation
      container.style.opacity = '0'
      container.style.transform = getInitialTransform(variant)
      
      // Forcer un reflow pour que l'animation se déclenche
      void container.offsetHeight
      
      // Animer vers l'état visible
      container.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
      container.style.opacity = '1'
      container.style.transform = 'none'
    } else {
      // Premier render - afficher directement avec animation
      container.style.opacity = '0'
      container.style.transform = getInitialTransform(variant)
      
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (container) {
            container.style.transition = `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
            container.style.opacity = '1'
            container.style.transform = 'none'
          }
        })
      })
    }
  }, [pathname, variant, duration])

  return (
    <div 
      ref={containerRef}
      className={cn('min-h-screen', className)}
      style={{
        opacity: 0,
        transform: getInitialTransform(variant),
      }}
    >
      {children}
    </div>
  )
}

/**
 * Obtenir la transformation initiale selon la variante
 */
function getInitialTransform(variant: TransitionVariant): string {
  switch (variant) {
    case 'fade':
      return 'none'
    case 'fade-up':
      return 'translateY(20px)'
    case 'fade-scale':
      return 'scale(0.98)'
    case 'slide-up':
      return 'translateY(30px)'
    default:
      return 'none'
  }
}

/**
 * Variante légère pour les sections/composants individuels
 * Utilise des classes CSS pour l'animation
 */
interface PageEnterAnimationProps {
  children: ReactNode
  /** Délai avant l'animation en ms */
  delay?: number
  /** Durée de l'animation en ms */
  duration?: number
  /** Classes CSS supplémentaires */
  className?: string
}

export function PageEnterAnimation({
  children,
  delay = 0,
  duration = 600,
  className,
}: PageEnterAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Animation via manipulation DOM directe
    const timer = setTimeout(() => {
      container.style.opacity = '1'
      container.style.transform = 'none'
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      ref={containerRef}
      className={cn(className)}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      {children}
    </div>
  )
}