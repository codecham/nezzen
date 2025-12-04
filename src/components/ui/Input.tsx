import { type ComponentProps, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends ComponentProps<'input'> {
  /** Label du champ */
  label?: string
  /** Message d'erreur */
  error?: string
  /** Texte d'aide */
  hint?: string
  /** Icône à gauche */
  leftIcon?: React.ReactNode
  /** Icône à droite */
  rightIcon?: React.ReactNode
}

/**
 * Champ de saisie avec label, erreur et icônes optionnels
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    const hasError = Boolean(error)

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}

        {/* Input wrapper */}
        <div className="relative">
          {/* Left icon */}
          {leftIcon && (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </span>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
            }
            className={cn(
              // Base
              'w-full border bg-surface px-4 py-3',
              'text-base text-foreground placeholder:text-muted-foreground',
              'transition-colors duration-200',
              // Focus
              'focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground',
              // States
              hasError
                ? 'border-error focus:border-error focus:ring-error'
                : 'border-border',
              disabled && 'cursor-not-allowed bg-background-alt opacity-60',
              // Icons padding
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            {...props}
          />

          {/* Right icon */}
          {rightIcon && (
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </span>
          )}
        </div>

        {/* Error message */}
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-2 text-sm text-error"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Hint text */}
        {hint && !error && (
          <p
            id={`${inputId}-hint`}
            className="mt-2 text-sm text-muted-foreground"
          >
            {hint}
          </p>
        )}
      </div>
    )
  }
)
