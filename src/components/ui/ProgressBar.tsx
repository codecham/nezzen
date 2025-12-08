// src/components/ui/ProgressBar.tsx
'use client'

import { useRef, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  /** Couleur de la barre */
  color?: string
  /** Hauteur de la barre en pixels */
  height?: number
  /** Classes CSS supplémentaires */
  className?: string
}

/**
 * Barre de progression pour les transitions de page
 * S'affiche lors de la navigation entre les pages
 * Utilise manipulation DOM directe pour éviter re-renders
 */
export function ProgressBar({
  color = 'var(--color-accent)',
  height = 2,
  className,
}: ProgressBarProps) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const previousPathRef = useRef(pathname)

  useLayoutEffect(() => {
    const container = containerRef.current
    const bar = barRef.current
    if (!container || !bar) return

    // Seulement animer si le pathname a changé
    if (previousPathRef.current !== pathname) {
      previousPathRef.current = pathname

      // Afficher et animer
      container.style.opacity = '1'
      bar.style.width = '0%'
      bar.style.transition = 'none'

      // Forcer reflow
      void bar.offsetHeight

      // Animation progressive
      const timers: NodeJS.Timeout[] = []

      timers.push(setTimeout(() => {
        bar.style.transition = 'width 150ms ease-out'
        bar.style.width = '30%'
      }, 10))

      timers.push(setTimeout(() => {
        bar.style.width = '60%'
      }, 150))

      timers.push(setTimeout(() => {
        bar.style.width = '80%'
      }, 300))

      timers.push(setTimeout(() => {
        bar.style.transition = 'width 100ms ease-out, opacity 150ms ease-out'
        bar.style.width = '100%'
      }, 400))

      timers.push(setTimeout(() => {
        container.style.opacity = '0'
      }, 500))

      timers.push(setTimeout(() => {
        bar.style.width = '0%'
      }, 700))

      return () => {
        timers.forEach(clearTimeout)
      }
    }
  }, [pathname])

  return (
    <div
      ref={containerRef}
      className={cn('fixed left-0 top-0 z-100 w-full pointer-events-none', className)}
      style={{ 
        height: `${height}px`,
        opacity: 0,
      }}
    >
      <div
        ref={barRef}
        className="h-full"
        style={{
          width: '0%',
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}, 0 0 5px ${color}`,
        }}
      />
    </div>
  )
}

/**
 * Version simplifiée sans dépendance à searchParams
 * Pour éviter les problèmes de Suspense boundary
 */
export function SimpleProgressBar({
  color = 'var(--color-accent)',
  height = 2,
  className,
}: ProgressBarProps) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const previousPathRef = useRef(pathname)

  useLayoutEffect(() => {
    const container = containerRef.current
    const bar = barRef.current
    if (!container || !bar) return

    // Seulement animer si le pathname a changé
    if (previousPathRef.current !== pathname) {
      previousPathRef.current = pathname

      // Afficher et animer
      container.style.opacity = '1'
      bar.style.width = '0%'
      bar.style.transition = 'none'

      // Forcer reflow
      void bar.offsetHeight

      // Animation progressive
      const timers: NodeJS.Timeout[] = []

      timers.push(setTimeout(() => {
        bar.style.transition = 'width 100ms ease-out'
        bar.style.width = '40%'
      }, 10))

      timers.push(setTimeout(() => {
        bar.style.width = '70%'
      }, 150))

      timers.push(setTimeout(() => {
        bar.style.transition = 'width 80ms ease-out, opacity 120ms ease-out'
        bar.style.width = '100%'
      }, 300))

      timers.push(setTimeout(() => {
        container.style.opacity = '0'
      }, 400))

      timers.push(setTimeout(() => {
        bar.style.width = '0%'
      }, 550))

      return () => {
        timers.forEach(clearTimeout)
      }
    }
  }, [pathname])

  return (
    <div
      ref={containerRef}
      className={cn('fixed left-0 top-0 z-100 w-full pointer-events-none', className)}
      style={{ 
        height: `${height}px`,
        opacity: 0,
      }}
    >
      <div
        ref={barRef}
        className="h-full"
        style={{
          width: '0%',
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}`,
        }}
      />
    </div>
  )
}