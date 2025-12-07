// src/components/ui/AnimateOnScroll.tsx
'use client'

import { type ReactNode, type CSSProperties, type ElementType } from 'react'
import { cn } from '@/lib/utils'
import { useInView } from '@/hooks'

type AnimationType = 
  | 'fade-in'
  | 'fade-in-up'
  | 'fade-in-down'
  | 'fade-in-left'
  | 'fade-in-right'
  | 'scale-in'
  | 'slide-up'

interface AnimateOnScrollProps {
  children: ReactNode
  /** Type d'animation */
  animation?: AnimationType
  /** Délai avant l'animation (en ms) */
  delay?: number
  /** Durée de l'animation (en ms) */
  duration?: number
  /** Seuil de déclenchement (0-1) */
  threshold?: number
  /** Marge autour du viewport */
  rootMargin?: string
  /** Classes CSS supplémentaires */
  className?: string
  /** Balise HTML à utiliser */
  as?: ElementType
}

/**
 * Composant qui anime ses enfants quand ils entrent dans le viewport
 * 
 * @example
 * <AnimateOnScroll animation="fade-in-up" delay={200}>
 *   <Card>...</Card>
 * </AnimateOnScroll>
 */
export function AnimateOnScroll({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px', // Déclenche un peu avant que l'élément soit visible
  className,
  as: Component = 'div',
}: AnimateOnScrollProps) {
  const { ref, hasBeenInView } = useInView({ 
    threshold, 
    rootMargin,
    triggerOnce: true, // Animation une seule fois
  })

  // États initiaux selon le type d'animation
  const getInitialStyles = (): CSSProperties => {
    const base: CSSProperties = {
      opacity: 0,
      transitionProperty: 'opacity, transform',
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDelay: `${delay}ms`,
    }

    switch (animation) {
      case 'fade-in':
        return base
      case 'fade-in-up':
        return { ...base, transform: 'translateY(30px)' }
      case 'fade-in-down':
        return { ...base, transform: 'translateY(-30px)' }
      case 'fade-in-left':
        return { ...base, transform: 'translateX(-30px)' }
      case 'fade-in-right':
        return { ...base, transform: 'translateX(30px)' }
      case 'scale-in':
        return { ...base, transform: 'scale(0.95)' }
      case 'slide-up':
        return { ...base, transform: 'translateY(20px)' }
      default:
        return base
    }
  }

  // États finaux (visible)
  const getVisibleStyles = (): CSSProperties => ({
    opacity: 1,
    transform: 'none',
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: `${delay}ms`,
  })

  // Si déjà vu, afficher directement
  const styles = hasBeenInView ? getVisibleStyles() : getInitialStyles()

  // Casting pour permettre l'utilisation de ref avec n'importe quel élément HTML
  const Elem = Component as 'div'

  return (
    <Elem
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(className)}
      style={styles}
    >
      {children}
    </Elem>
  )
}

/**
 * Variante pour animer une liste d'éléments avec délai échelonné
 */
interface AnimateStaggerProps {
  children: ReactNode[]
  /** Type d'animation pour chaque élément */
  animation?: AnimationType
  /** Délai de base (en ms) */
  baseDelay?: number
  /** Délai entre chaque élément (en ms) */
  staggerDelay?: number
  /** Durée de l'animation (en ms) */
  duration?: number
  /** Classes CSS pour le conteneur */
  className?: string
  /** Classes CSS pour chaque élément */
  itemClassName?: string
}

export function AnimateStagger({
  children,
  animation = 'fade-in-up',
  baseDelay = 0,
  staggerDelay = 100,
  duration = 600,
  className,
  itemClassName,
}: AnimateStaggerProps) {
  const { ref, hasBeenInView } = useInView({ 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  })

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children.map((child, index) => (
        <AnimateOnScrollItem
          key={index}
          animation={animation}
          delay={baseDelay + index * staggerDelay}
          duration={duration}
          isVisible={hasBeenInView}
          className={itemClassName}
        >
          {child}
        </AnimateOnScrollItem>
      ))}
    </div>
  )
}

/**
 * Item interne pour AnimateStagger
 */
interface AnimateOnScrollItemProps {
  children: ReactNode
  animation: AnimationType
  delay: number
  duration: number
  isVisible: boolean
  className?: string
}

function AnimateOnScrollItem({
  children,
  animation,
  delay,
  duration,
  isVisible,
  className,
}: AnimateOnScrollItemProps) {
  const getInitialStyles = (): CSSProperties => {
    const base: CSSProperties = {
      opacity: 0,
      transitionProperty: 'opacity, transform',
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDelay: `${delay}ms`,
    }

    switch (animation) {
      case 'fade-in-up':
        return { ...base, transform: 'translateY(30px)' }
      case 'fade-in-down':
        return { ...base, transform: 'translateY(-30px)' }
      case 'fade-in-left':
        return { ...base, transform: 'translateX(-30px)' }
      case 'fade-in-right':
        return { ...base, transform: 'translateX(30px)' }
      case 'scale-in':
        return { ...base, transform: 'scale(0.95)' }
      default:
        return base
    }
  }

  const getVisibleStyles = (): CSSProperties => ({
    opacity: 1,
    transform: 'none',
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: `${delay}ms`,
  })

  return (
    <div className={className} style={isVisible ? getVisibleStyles() : getInitialStyles()}>
      {children}
    </div>
  )
}