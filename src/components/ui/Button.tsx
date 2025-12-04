import { type ComponentProps, forwardRef, type ReactElement, cloneElement } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ComponentProps<'button'> {
  /** Style du bouton */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  /** Taille du bouton */
  size?: 'sm' | 'md' | 'lg'
  /** Bouton pleine largeur */
  fullWidth?: boolean
  /** État de chargement */
  isLoading?: boolean
  /** Rendre comme enfant (pour wrapper un Link) */
  asChild?: boolean
}

const variantClasses = {
  primary: [
    'bg-foreground text-background',
    'hover:bg-foreground/90',
    'focus-visible:ring-foreground',
  ].join(' '),
  secondary: [
    'bg-secondary text-background',
    'hover:bg-secondary/90',
    'focus-visible:ring-secondary',
  ].join(' '),
  outline: [
    'border border-foreground bg-transparent text-foreground',
    'hover:bg-foreground hover:text-background',
    'focus-visible:ring-foreground',
  ].join(' '),
  ghost: [
    'bg-transparent text-foreground',
    'hover:bg-foreground/5',
    'focus-visible:ring-foreground',
  ].join(' '),
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

/**
 * Bouton avec variants et tailles
 * Design minimaliste zen
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      asChild = false,
      disabled,
      className,
      children,
      ...props
    },
    ref
  ) {
    const buttonClasses = cn(
      // Base
      'relative inline-flex items-center justify-center',
      'font-medium tracking-wide',
      'transition-all duration-200 ease-in-out',
      // Focus
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50',
      // Variants & Sizes
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && 'w-full',
      className
    )

    // Si asChild, on clone l'enfant avec les classes du bouton
    if (asChild && children) {
      const child = children as ReactElement
      return cloneElement(child, {
        className: cn(buttonClasses, child.props?.className),
        ...props,
      })
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={buttonClasses}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner />
          </span>
        )}
        <span className={cn(isLoading && 'invisible')}>{children}</span>
      </button>
    )
  }
)

/** Spinner de chargement */
function LoadingSpinner() {
  return (
    <svg
      className="h-5 w-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
