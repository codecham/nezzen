'use client'

import { type ComponentProps } from 'react'
import { Link as IntlLink } from '@/i18n/routing'
import { cn } from '@/lib/utils'

interface StyledLinkProps extends Omit<ComponentProps<typeof IntlLink>, 'className'> {
  /** Style du lien */
  variant?: 'default' | 'muted' | 'underline' | 'nav'
  /** Classes CSS additionnelles */
  className?: string
}

const variantClasses = {
  default: [
    'text-foreground',
    'hover:text-muted-foreground',
    'transition-colors duration-200',
  ].join(' '),
  muted: [
    'text-muted-foreground',
    'hover:text-foreground',
    'transition-colors duration-200',
  ].join(' '),
  underline: [
    'text-foreground',
    'underline underline-offset-4 decoration-border',
    'hover:decoration-foreground',
    'transition-colors duration-200',
  ].join(' '),
  nav: [
    'text-foreground',
    'relative',
    'after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground',
    'after:transition-all after:duration-300',
    'hover:after:w-full',
  ].join(' '),
}

/**
 * Lien stylisé avec variants
 * Wrapper autour du Link de next-intl
 */
export function StyledLink({
  variant = 'default',
  className,
  children,
  ...props
}: StyledLinkProps) {
  return (
    <IntlLink
      className={cn(
        'inline-flex items-center gap-1',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </IntlLink>
  )
}

/**
 * Lien externe (ouvre dans nouvel onglet)
 */
interface ExternalLinkProps extends ComponentProps<'a'> {
  /** Style du lien */
  variant?: 'default' | 'muted' | 'underline'
}

export function ExternalLink({
  variant = 'default',
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
