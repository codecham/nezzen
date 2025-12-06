// src/components/ui/Toast.tsx
'use client'

import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useId,
} from 'react'
import { createPortal } from 'react-dom'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ================================
   Types
   ================================ */

type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info'
type ToastPosition = 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center'

interface Toast {
  id: string
  title?: string
  description?: string
  variant: ToastVariant
  duration: number
  dismissible: boolean
}

interface ToastOptions {
  title?: string
  description?: string
  variant?: ToastVariant
  duration?: number
  dismissible?: boolean
}

interface ToastContextValue {
  toasts: Toast[]
  addToast: (options: ToastOptions) => string
  removeToast: (id: string) => void
  removeAllToasts: () => void
}

interface ToastProviderProps {
  children: ReactNode
  /** Position des toasts */
  position?: ToastPosition
  /** Durée par défaut (ms) */
  defaultDuration?: number
  /** Nombre max de toasts visibles */
  maxToasts?: number
}

/* ================================
   Context
   ================================ */

const ToastContext = createContext<ToastContextValue | null>(null)

/**
 * Hook pour utiliser les toasts
 */
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

/* ================================
   Position Classes
   ================================ */

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-4 right-4 items-end',
  'top-center': 'top-4 left-1/2 -translate-x-1/2 items-center',
  'bottom-right': 'bottom-4 right-4 items-end',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 items-center',
}

/* ================================
   Variant Styles
   ================================ */

const variantStyles: Record<ToastVariant, { icon: ReactNode; classes: string }> = {
  default: {
    icon: null,
    classes: 'bg-surface border-border',
  },
  success: {
    icon: <CheckCircle className="h-5 w-5 text-success" />,
    classes: 'bg-surface border-success/30',
  },
  error: {
    icon: <AlertCircle className="h-5 w-5 text-error" />,
    classes: 'bg-surface border-error/30',
  },
  warning: {
    icon: <AlertTriangle className="h-5 w-5 text-warning" />,
    classes: 'bg-surface border-warning/30',
  },
  info: {
    icon: <Info className="h-5 w-5 text-info" />,
    classes: 'bg-surface border-info/30',
  },
}

/* ================================
   Toast Provider
   ================================ */

/**
 * Provider pour le système de toasts
 * Wrap l'application pour pouvoir afficher des notifications
 */
export function ToastProvider({
  children,
  position = 'bottom-right',
  defaultDuration = 5000,
  maxToasts = 5,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const addToast = useCallback(
    (options: ToastOptions): string => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`
      const newToast: Toast = {
        id,
        title: options.title,
        description: options.description,
        variant: options.variant ?? 'default',
        duration: options.duration ?? defaultDuration,
        dismissible: options.dismissible ?? true,
      }

      setToasts((prev) => {
        const updated = [...prev, newToast]
        // Limiter le nombre de toasts
        if (updated.length > maxToasts) {
          return updated.slice(-maxToasts)
        }
        return updated
      })

      return id
    },
    [defaultDuration, maxToasts]
  )

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const removeAllToasts = useCallback(() => {
    setToasts([])
  }, [])

  const isTop = position.startsWith('top')

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, removeAllToasts }}>
      {children}
      {isMounted &&
        createPortal(
          <div
            className={cn(
              'fixed z-[200] flex flex-col gap-3 pointer-events-none',
              positionClasses[position]
            )}
            aria-live="polite"
            aria-label="Notifications"
          >
            {toasts.map((toast, index) => (
              <ToastItem
                key={toast.id}
                toast={toast}
                onDismiss={() => removeToast(toast.id)}
                index={index}
                fromTop={isTop}
              />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  )
}

/* ================================
   Toast Item
   ================================ */

interface ToastItemProps {
  toast: Toast
  onDismiss: () => void
  index: number
  fromTop: boolean
}

function ToastItem({ toast, onDismiss, index, fromTop }: ToastItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const [progress, setProgress] = useState(100)
  const { icon, classes } = variantStyles[toast.variant]

  // Animation d'entrée
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true)
    })
    return () => cancelAnimationFrame(timer)
  }, [])

  // Auto-dismiss avec barre de progression
  useEffect(() => {
    if (toast.duration <= 0) return

    const startTime = Date.now()
    const endTime = startTime + toast.duration

    const updateProgress = () => {
      const now = Date.now()
      const remaining = Math.max(0, endTime - now)
      const percentage = (remaining / toast.duration) * 100
      setProgress(percentage)

      if (remaining > 0) {
        requestAnimationFrame(updateProgress)
      }
    }

    const progressFrame = requestAnimationFrame(updateProgress)

    const dismissTimer = setTimeout(() => {
      handleDismiss()
    }, toast.duration)

    return () => {
      cancelAnimationFrame(progressFrame)
      clearTimeout(dismissTimer)
    }
  }, [toast.duration])

  const handleDismiss = () => {
    setIsLeaving(true)
    setTimeout(onDismiss, 200) // Attendre la fin de l'animation
  }

  return (
    <div
      role="alert"
      className={cn(
        'pointer-events-auto w-full max-w-sm',
        'rounded-lg border shadow-lg',
        'transform transition-all duration-200 ease-out',
        classes,
        isVisible && !isLeaving
          ? 'translate-y-0 opacity-100'
          : fromTop
            ? '-translate-y-2 opacity-0'
            : 'translate-y-2 opacity-0'
      )}
      style={{
        transitionDelay: isVisible ? '0ms' : `${index * 50}ms`,
      }}
    >
      <div className="flex items-start gap-3 p-4">
        {/* Icon */}
        {icon && <div className="shrink-0 mt-0.5">{icon}</div>}

        {/* Content */}
        <div className="flex-1 min-w-0">
          {toast.title && (
            <p className="text-sm font-medium text-foreground">{toast.title}</p>
          )}
          {toast.description && (
            <p
              className={cn(
                'text-sm text-muted-foreground',
                toast.title && 'mt-1'
              )}
            >
              {toast.description}
            </p>
          )}
        </div>

        {/* Dismiss Button */}
        {toast.dismissible && (
          <button
            onClick={handleDismiss}
            className={cn(
              'shrink-0 p-1 rounded',
              'text-muted-foreground hover:text-foreground',
              'transition-colors duration-150',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground'
            )}
            aria-label="Fermer la notification"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Progress Bar */}
      {toast.duration > 0 && (
        <div className="h-0.5 bg-border overflow-hidden rounded-b-lg">
          <div
            className={cn(
              'h-full transition-all duration-100 ease-linear',
              toast.variant === 'success' && 'bg-success',
              toast.variant === 'error' && 'bg-error',
              toast.variant === 'warning' && 'bg-warning',
              toast.variant === 'info' && 'bg-info',
              toast.variant === 'default' && 'bg-foreground/30'
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  )
}

/* ================================
   Convenience Functions
   ================================ */

/**
 * Fonctions utilitaires pour afficher des toasts
 * Usage avec le hook useToast:
 *
 * const { addToast } = useToast()
 * toast.success(addToast, { title: 'Succès!' })
 */
export const toast = {
  success: (addToast: ToastContextValue['addToast'], options: Omit<ToastOptions, 'variant'>) =>
    addToast({ ...options, variant: 'success' }),

  error: (addToast: ToastContextValue['addToast'], options: Omit<ToastOptions, 'variant'>) =>
    addToast({ ...options, variant: 'error' }),

  warning: (addToast: ToastContextValue['addToast'], options: Omit<ToastOptions, 'variant'>) =>
    addToast({ ...options, variant: 'warning' }),

  info: (addToast: ToastContextValue['addToast'], options: Omit<ToastOptions, 'variant'>) =>
    addToast({ ...options, variant: 'info' }),

  default: (addToast: ToastContextValue['addToast'], options: Omit<ToastOptions, 'variant'>) =>
    addToast({ ...options, variant: 'default' }),
}

/* ================================
   Standalone Toast Component
   ================================ */

interface StandaloneToastProps {
  title?: string
  description?: string
  variant?: ToastVariant
  onDismiss?: () => void
  className?: string
}

/**
 * Toast standalone (sans provider)
 * Pour usage manuel ou dans des contextes spécifiques
 */
export function Toast({
  title,
  description,
  variant = 'default',
  onDismiss,
  className,
}: StandaloneToastProps) {
  const { icon, classes } = variantStyles[variant]

  return (
    <div
      role="alert"
      className={cn(
        'w-full max-w-sm rounded-lg border shadow-lg',
        classes,
        className
      )}
    >
      <div className="flex items-start gap-3 p-4">
        {icon && <div className="shrink-0 mt-0.5">{icon}</div>}

        <div className="flex-1 min-w-0">
          {title && (
            <p className="text-sm font-medium text-foreground">{title}</p>
          )}
          {description && (
            <p className={cn('text-sm text-muted-foreground', title && 'mt-1')}>
              {description}
            </p>
          )}
        </div>

        {onDismiss && (
          <button
            onClick={onDismiss}
            className={cn(
              'shrink-0 p-1 rounded',
              'text-muted-foreground hover:text-foreground',
              'transition-colors duration-150'
            )}
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}
