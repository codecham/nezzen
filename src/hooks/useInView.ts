// src/hooks/useInView.ts
'use client'

import { useEffect, useRef, useState, type RefObject } from 'react'

interface UseInViewOptions {
  /** Seuil de visibilité (0-1). 0.1 = 10% visible */
  threshold?: number
  /** Marge autour du viewport (ex: '-100px' pour déclencher avant) */
  rootMargin?: string
  /** Ne déclencher qu'une seule fois */
  triggerOnce?: boolean
  /** Élément racine pour l'observation (null = viewport) */
  root?: Element | null
}

interface UseInViewReturn<T extends Element> {
  /** Ref à attacher à l'élément observé */
  ref: RefObject<T | null>
  /** L'élément est-il visible ? */
  inView: boolean
  /** L'élément a-t-il déjà été visible ? */
  hasBeenInView: boolean
}

/**
 * Hook pour détecter quand un élément entre dans le viewport
 * Utilise l'Intersection Observer API native
 * 
 * @example
 * const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
 * return <div ref={ref} className={inView ? 'animate-fade-in-up' : 'opacity-0'}>...</div>
 */
export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {}
): UseInViewReturn<T> {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false,
    root = null,
  } = options

  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Si triggerOnce et déjà vu, ne plus observer
    if (triggerOnce && hasBeenInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting

        setInView(isIntersecting)

        if (isIntersecting && !hasBeenInView) {
          setHasBeenInView(true)
        }

        // Arrêter d'observer si triggerOnce et visible
        if (triggerOnce && isIntersecting) {
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin,
        root,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, root, triggerOnce, hasBeenInView])

  return { ref, inView, hasBeenInView }
}