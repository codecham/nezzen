// src/components/ui/Modal.tsx
'use client'

import {
  type ComponentProps,
  type ReactNode,
  useEffect,
  useCallback,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ================================
   Types
   ================================ */

interface ModalProps {
  /** État d'ouverture */
  isOpen: boolean
  /** Callback de fermeture */
  onClose: () => void
  /** Contenu du modal */
  children: ReactNode
  /** Titre (optionnel, pour l'accessibilité) */
  title?: string
  /** Taille du modal */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Fermer en cliquant sur l'overlay */
  closeOnOverlayClick?: boolean
  /** Afficher le bouton de fermeture */
  showCloseButton?: boolean
  /** Classes supplémentaires pour le contenu */
  className?: string
}

interface ModalGalleryProps {
  /** Images de la galerie */
  images: Array<{
    src: string
    alt: string
    caption?: string
  }>
  /** Index de l'image courante */
  currentIndex: number
  /** État d'ouverture */
  isOpen: boolean
  /** Callback de fermeture */
  onClose: () => void
  /** Callback de changement d'index */
  onIndexChange: (index: number) => void
}

/* ================================
   Size Classes
   ================================ */

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-[95vw] max-h-[95vh]',
}

/* ================================
   Modal Component
   ================================ */

/**
 * Modal/Dialog accessible et animé
 * Design zen avec animations fluides
 */
export function Modal({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  closeOnOverlayClick = true,
  showCloseButton = true,
  className,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  // Gérer la touche Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  // Focus trap et scroll lock
  useEffect(() => {
    if (isOpen) {
      // Sauvegarder l'élément actif
      previousActiveElement.current = document.activeElement as HTMLElement

      // Lock scroll
      document.body.style.overflow = 'hidden'

      // Écouter Escape
      document.addEventListener('keydown', handleKeyDown)

      // Focus le modal
      modalRef.current?.focus()

      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleKeyDown)

        // Restaurer le focus
        previousActiveElement.current?.focus()
      }
    }
  }, [isOpen, handleKeyDown])

  // Ne rien render si fermé (côté serveur ou fermé)
  if (!isOpen) return null

  // Vérifier qu'on est côté client
  if (typeof window === 'undefined') return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose()
    }
  }

  const modalContent = (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center',
        'animate-fade-in'
      )}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Overlay */}
      <div
        className={cn(
          'absolute inset-0 bg-foreground/60 backdrop-blur-sm',
          'animate-fade-in'
        )}
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className={cn(
          'relative z-10 w-full',
          'bg-surface shadow-2xl',
          'animate-scale-in',
          'focus:outline-none',
          sizeClasses[size],
          className
        )}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className={cn(
              'absolute right-4 top-4 z-10',
              'flex h-10 w-10 items-center justify-center',
              'text-muted-foreground hover:text-foreground',
              'transition-colors duration-200',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground'
            )}
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {children}
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

/* ================================
   Modal Header
   ================================ */

interface ModalHeaderProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function ModalHeader({ className, children, ...props }: ModalHeaderProps) {
  return (
    <div
      className={cn('border-b border-border px-6 py-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

/* ================================
   Modal Title
   ================================ */

interface ModalTitleProps extends ComponentProps<'h2'> {
  children: ReactNode
}

export function ModalTitle({ className, children, ...props }: ModalTitleProps) {
  return (
    <h2
      className={cn(
        'font-heading text-xl font-semibold text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

/* ================================
   Modal Body
   ================================ */

interface ModalBodyProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function ModalBody({ className, children, ...props }: ModalBodyProps) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
}

/* ================================
   Modal Footer
   ================================ */

interface ModalFooterProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function ModalFooter({ className, children, ...props }: ModalFooterProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-3',
        'border-t border-border px-6 py-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/* ================================
   Modal Gallery (pour photos)
   ================================ */

/**
 * Modal spécialisé pour les galeries d'images
 * Avec navigation par flèches et clavier
 */
export function ModalGallery({
  images,
  currentIndex,
  isOpen,
  onClose,
  onIndexChange,
}: ModalGalleryProps) {
  const currentImage = images[currentIndex]
  const hasMultiple = images.length > 1

  // Navigation clavier
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!hasMultiple) return

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
      }
    },
    [currentIndex, images.length, hasMultiple, onIndexChange]
  )

  useEffect(() => {
    if (isOpen && hasMultiple) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, hasMultiple, handleKeyDown])

  const goToPrevious = () => {
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      className="bg-foreground/95"
      showCloseButton={false}
    >
      <div className="relative flex h-[95vh] flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3">
          {/* Counter */}
          {hasMultiple && (
            <span className="text-sm text-background/70">
              {currentIndex + 1} / {images.length}
            </span>
          )}
          {!hasMultiple && <span />}

          {/* Close */}
          <button
            onClick={onClose}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full',
              'text-background/70 hover:text-background hover:bg-background/10',
              'transition-colors duration-200'
            )}
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Image Container */}
        <div className="relative flex flex-1 items-center justify-center px-16">
          {/* Previous Button */}
          {hasMultiple && (
            <button
              onClick={goToPrevious}
              className={cn(
                'absolute left-4 top-1/2 -translate-y-1/2',
                'flex h-12 w-12 items-center justify-center rounded-full',
                'bg-background/10 text-background/70',
                'hover:bg-background/20 hover:text-background',
                'transition-all duration-200'
              )}
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Image */}
          <div className="flex max-h-full max-w-full items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-[75vh] max-w-full object-contain animate-fade-in"
              key={currentIndex}
            />
          </div>

          {/* Next Button */}
          {hasMultiple && (
            <button
              onClick={goToNext}
              className={cn(
                'absolute right-4 top-1/2 -translate-y-1/2',
                'flex h-12 w-12 items-center justify-center rounded-full',
                'bg-background/10 text-background/70',
                'hover:bg-background/20 hover:text-background',
                'transition-all duration-200'
              )}
              aria-label="Image suivante"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Caption */}
        {currentImage.caption && (
          <div className="px-4 py-4 text-center">
            <p className="text-sm text-background/70">{currentImage.caption}</p>
          </div>
        )}

        {/* Thumbnails (if more than 1) */}
        {hasMultiple && images.length <= 10 && (
          <div className="flex justify-center gap-2 px-4 pb-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => onIndexChange(index)}
                className={cn(
                  'h-16 w-16 overflow-hidden transition-all duration-200',
                  index === currentIndex
                    ? 'ring-2 ring-background opacity-100'
                    : 'opacity-50 hover:opacity-75'
                )}
                aria-label={`Image ${index + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </Modal>
  )
}
