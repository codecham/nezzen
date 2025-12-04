import { type ComponentProps, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends ComponentProps<'textarea'> {
  /** Label du champ */
  label?: string
  /** Message d'erreur */
  error?: string
  /** Texte d'aide */
  hint?: string
  /** Hauteur automatique */
  autoResize?: boolean
}

/**
 * Zone de texte multiligne avec label et erreur optionnels
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      label,
      error,
      hint,
      autoResize = false,
      className,
      id,
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-')
    const hasError = Boolean(error)

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={textareaId}
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}

        {/* Textarea */}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          rows={rows}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined
          }
          className={cn(
            // Base
            'w-full border bg-surface px-4 py-3',
            'text-base text-foreground placeholder:text-muted-foreground',
            'transition-colors duration-200',
            'resize-y',
            // Focus
            'focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground',
            // States
            hasError
              ? 'border-error focus:border-error focus:ring-error'
              : 'border-border',
            disabled && 'cursor-not-allowed bg-background-alt opacity-60',
            autoResize && 'resize-none overflow-hidden',
            className
          )}
          {...props}
        />

        {/* Error message */}
        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-2 text-sm text-error"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Hint text */}
        {hint && !error && (
          <p
            id={`${textareaId}-hint`}
            className="mt-2 text-sm text-muted-foreground"
          >
            {hint}
          </p>
        )}
      </div>
    )
  }
)
