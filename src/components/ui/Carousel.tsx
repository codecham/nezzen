// src/components/ui/Carousel.tsx
'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
  type ComponentProps,
} from 'react'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// ============================================================================
// CONTEXT
// ============================================================================

interface CarouselContextValue {
  currentIndex: number
  totalSlides: number
  goToSlide: (index: number) => void
  goToNext: () => void
  goToPrevious: () => void
  isAnimating: boolean
}

const CarouselContext = createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarousel must be used within a Carousel')
  }
  return context
}

// ============================================================================
// CAROUSEL ROOT
// ============================================================================

interface CarouselProps extends ComponentProps<'div'> {
  children: ReactNode
  /** Défilement automatique (en ms, 0 = désactivé) */
  autoPlay?: number
  /** Boucle infinie */
  loop?: boolean
  /** Pause au survol */
  pauseOnHover?: boolean
  /** Index de départ */
  startIndex?: number
  /** Callback quand le slide change */
  onSlideChange?: (index: number) => void
}

export function Carousel({
  children,
  autoPlay = 0,
  loop = true,
  pauseOnHover = true,
  startIndex = 0,
  onSlideChange,
  className,
  ...props
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [totalSlides, setTotalSlides] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Compter les slides
  useEffect(() => {
    if (containerRef.current) {
      const slides = containerRef.current.querySelectorAll('[data-carousel-slide]')
      setTotalSlides(slides.length)
    }
  }, [children])

  // Navigation
  const goToSlide = useCallback((index: number) => {
    if (isAnimating || totalSlides === 0) return

    let newIndex = index
    if (loop) {
      if (index < 0) newIndex = totalSlides - 1
      if (index >= totalSlides) newIndex = 0
    } else {
      if (index < 0 || index >= totalSlides) return
    }

    setIsAnimating(true)
    setCurrentIndex(newIndex)
    onSlideChange?.(newIndex)

    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, totalSlides, loop, onSlideChange])

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1)
  }, [currentIndex, goToSlide])

  const goToPrevious = useCallback(() => {
    goToSlide(currentIndex - 1)
  }, [currentIndex, goToSlide])

  // Autoplay
  useEffect(() => {
    if (autoPlay <= 0 || isPaused || totalSlides <= 1) return

    const interval = setInterval(goToNext, autoPlay)
    return () => clearInterval(interval)
  }, [autoPlay, isPaused, goToNext, totalSlides])

  // Touch events pour swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50 // Minimum de pixels pour déclencher le swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext()
      } else {
        goToPrevious()
      }
    }
  }

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goToPrevious()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      goToNext()
    }
  }

  const contextValue: CarouselContextValue = {
    currentIndex,
    totalSlides,
    goToSlide,
    goToNext,
    goToPrevious,
    isAnimating,
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={cn('relative', className)}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

// ============================================================================
// CAROUSEL CONTENT (Container des slides)
// ============================================================================

interface CarouselContentProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function CarouselContent({ children, className, ...props }: CarouselContentProps) {
  const { currentIndex } = useCarousel()

  return (
    <div className={cn('overflow-hidden', className)} {...props}>
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>
    </div>
  )
}

// ============================================================================
// CAROUSEL SLIDE
// ============================================================================

interface CarouselSlideProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function CarouselSlide({ children, className, ...props }: CarouselSlideProps) {
  return (
    <div
      data-carousel-slide
      className={cn('w-full shrink-0', className)}
      role="group"
      aria-roledescription="slide"
      {...props}
    >
      {children}
    </div>
  )
}

// ============================================================================
// CAROUSEL NAVIGATION (Flèches)
// ============================================================================

interface CarouselNavigationProps {
  className?: string
  /** Style des boutons */
  variant?: 'default' | 'minimal' | 'overlay'
  /** Afficher même s'il n'y a qu'un slide */
  alwaysShow?: boolean
}

export function CarouselNavigation({
  className,
  variant = 'default',
  alwaysShow = false,
}: CarouselNavigationProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { goToPrevious, goToNext, totalSlides, currentIndex } = useCarousel()

  if (!alwaysShow && totalSlides <= 1) return null

  const buttonBaseClasses = cn(
    'flex items-center justify-center rounded-full',
    'transition-all duration-200',
    'disabled:opacity-30 disabled:cursor-not-allowed',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
  )

  const variantClasses = {
    default: cn(
      'h-10 w-10 bg-surface border border-border shadow-sm',
      'hover:bg-muted hover:shadow-md',
      'text-foreground'
    ),
    minimal: cn(
      'h-8 w-8 bg-transparent',
      'hover:bg-foreground/5',
      'text-muted-foreground hover:text-foreground'
    ),
    overlay: cn(
      'h-12 w-12 bg-white/90 backdrop-blur-sm shadow-lg',
      'hover:bg-white',
      'text-foreground'
    ),
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <button
        onClick={goToPrevious}
        className={cn(buttonBaseClasses, variantClasses[variant])}
        aria-label="Slide précédent"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className={cn(buttonBaseClasses, variantClasses[variant])}
        aria-label="Slide suivant"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}

// ============================================================================
// CAROUSEL NAVIGATION ARROWS (Position absolue sur les côtés)
// ============================================================================

interface CarouselArrowsProps {
  className?: string
  /** Style des boutons */
  variant?: 'default' | 'minimal' | 'overlay'
}

export function CarouselArrows({ className, variant = 'overlay' }: CarouselArrowsProps) {
  const { goToPrevious, goToNext, totalSlides } = useCarousel()

  if (totalSlides <= 1) return null

  const buttonClasses = cn(
    'absolute top-1/2 -translate-y-1/2 z-10',
    'flex items-center justify-center rounded-full',
    'transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
    'opacity-0 group-hover:opacity-100',
    variant === 'overlay' && 'h-10 w-10 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white text-foreground',
    variant === 'default' && 'h-10 w-10 bg-surface border border-border shadow-sm hover:bg-muted text-foreground',
    variant === 'minimal' && 'h-8 w-8 bg-foreground/10 hover:bg-foreground/20 text-foreground'
  )

  return (
    <div className={className}>
      <button
        onClick={goToPrevious}
        className={cn(buttonClasses, 'left-4')}
        aria-label="Slide précédent"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className={cn(buttonClasses, 'right-4')}
        aria-label="Slide suivant"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}

// ============================================================================
// CAROUSEL DOTS (Pagination)
// ============================================================================

interface CarouselDotsProps {
  className?: string
  /** Style des dots */
  variant?: 'default' | 'line' | 'dash'
}

export function CarouselDots({ className, variant = 'default' }: CarouselDotsProps) {
  const { currentIndex, totalSlides, goToSlide } = useCarousel()

  if (totalSlides <= 1) return null

  return (
    <div
      className={cn('flex items-center justify-center gap-2', className)}
      role="tablist"
      aria-label="Pagination du carousel"
    >
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isActive = index === currentIndex

        if (variant === 'line') {
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'h-1 rounded-full transition-all duration-300',
                isActive ? 'w-8 bg-foreground' : 'w-4 bg-foreground/20 hover:bg-foreground/40'
              )}
              role="tab"
              aria-selected={isActive}
              aria-label={`Aller au slide ${index + 1}`}
            />
          )
        }

        if (variant === 'dash') {
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'h-0.5 w-6 rounded-full transition-all duration-300',
                isActive ? 'bg-foreground' : 'bg-foreground/20 hover:bg-foreground/40'
              )}
              role="tab"
              aria-selected={isActive}
              aria-label={`Aller au slide ${index + 1}`}
            />
          )
        }

        // Default: dots
        return (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'h-2 w-2 rounded-full transition-all duration-300',
              isActive
                ? 'bg-foreground scale-125'
                : 'bg-foreground/20 hover:bg-foreground/40'
            )}
            role="tab"
            aria-selected={isActive}
            aria-label={`Aller au slide ${index + 1}`}
          />
        )
      })}
    </div>
  )
}

// ============================================================================
// CAROUSEL COUNTER (ex: 1/5)
// ============================================================================

interface CarouselCounterProps {
  className?: string
  /** Format: "1/5", "1 of 5", "1 sur 5" */
  format?: 'slash' | 'of' | 'sur'
}

export function CarouselCounter({ className, format = 'slash' }: CarouselCounterProps) {
  const { currentIndex, totalSlides } = useCarousel()

  if (totalSlides <= 1) return null

  const separators = {
    slash: '/',
    of: ' of ',
    sur: ' sur ',
  }

  return (
    <span className={cn('text-sm text-muted-foreground tabular-nums', className)}>
      {currentIndex + 1}
      {separators[format]}
      {totalSlides}
    </span>
  )
}

// ============================================================================
// HOOK POUR ACCÉDER AU CONTEXT DEPUIS L'EXTÉRIEUR
// ============================================================================

export { useCarousel }