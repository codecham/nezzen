// src/components/ui/Button.tsx
import { type ComponentProps, forwardRef, type ReactNode } from 'react'
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

const baseClasses = [
  'inline-flex items-center justify-center',
  'font-medium',
  'transition-all duration-250 ease-out',
  'focus:outline-none focus-visible:ring-1.5 focus-visible:ring-foreground focus-visible:ring-offset-2',
  'disabled:cursor-not-allowed disabled:opacity-40',
].join(' ')

const variantClasses = {
  primary: [
    'bg-foreground text-background',
    'hover:opacity-85',
    'active:opacity-75',
  ].join(' '),
  secondary: [
    'bg-secondary text-background',
    'hover:opacity-85',
    'active:opacity-75',
  ].join(' '),
  outline: [
    'border border-foreground bg-transparent text-foreground',
    'hover:bg-foreground hover:text-background',
    'active:opacity-85',
  ].join(' '),
  ghost: [
    'bg-transparent text-foreground',
    'hover:bg-foreground/5',
    'active:bg-foreground/10',
  ].join(' '),
}

const sizeClasses = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-8 text-base',
}

/**
 * Bouton minimaliste
 * Design épuré avec transitions subtiles
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
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && 'w-full',
      className
    )

    // Si asChild, on rend le children avec les classes
    if (asChild) {
      const child = children as React.ReactElement<
        { className?: string; children?: ReactNode } & Record<string, unknown>
      >
      
      if (child && typeof child === 'object' && 'type' in child) {
        const ChildComponent = child.type as React.ElementType
        const childProps = child.props || {}
        
        return (
          <ChildComponent
            {...childProps}
            {...props}
            className={cn(buttonClasses, childProps.className)}
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              childProps.children
            )}
          </ChildComponent>
        )
      }
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={buttonClasses}
        {...props}
      >
        {isLoading ? <LoadingSpinner /> : children}
      </button>
    )
  }
)

/** Spinner minimaliste */
function LoadingSpinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-20"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        className="opacity-80"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

/**
 * Icon Button
 */
interface IconButtonProps extends Omit<ButtonProps, 'asChild'> {
  'aria-label': string
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      variant = 'ghost',
      size = 'md',
      className,
      children,
      ...props
    },
    ref
  ) {
    const sizeClasses = {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
    }

    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(sizeClasses[size], 'p-0', className)}
        {...props}
      >
        {children}
      </Button>
    )
  }
)