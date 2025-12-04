import { type ComponentProps, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends Omit<ComponentProps<'select'>, 'children'> {
  /** Label du champ */
  label?: string
  /** Message d'erreur */
  error?: string
  /** Texte d'aide */
  hint?: string
  /** Options du select */
  options: SelectOption[]
  /** Placeholder (première option désactivée) */
  placeholder?: string
}

/**
 * Sélecteur avec options, label et erreur optionnels
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      label,
      error,
      hint,
      options,
      placeholder,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')
    const hasError = Boolean(error)

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={selectId}
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {label}
          </label>
        )}

        {/* Select wrapper */}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
            }
            className={cn(
              // Base
              'w-full appearance-none border bg-surface px-4 py-3 pr-10',
              'text-base text-foreground',
              'transition-colors duration-200',
              'cursor-pointer',
              // Focus
              'focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground',
              // States
              hasError
                ? 'border-error focus:border-error focus:ring-error'
                : 'border-border',
              disabled && 'cursor-not-allowed bg-background-alt opacity-60',
              className
            )}
            {...props}
          >
            {/* Placeholder option */}
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {/* Options */}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Chevron icon */}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <ChevronDown className="h-5 w-5" />
          </span>
        </div>

        {/* Error message */}
        {error && (
          <p
            id={`${selectId}-error`}
            className="mt-2 text-sm text-error"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Hint text */}
        {hint && !error && (
          <p
            id={`${selectId}-hint`}
            className="mt-2 text-sm text-muted-foreground"
          >
            {hint}
          </p>
        )}
      </div>
    )
  }
)
