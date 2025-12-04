'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { cn } from '@/lib/utils'

const locales = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'nl', label: 'NL' },
] as const

interface LanguageSwitcherProps {
  /** Affichage compact (codes seulement) */
  compact?: boolean
  /** Classes CSS additionnelles */
  className?: string
}

/**
 * Sélecteur de langue FR/EN/NL
 */
export function LanguageSwitcher({ 
  compact = true, 
  className 
}: LanguageSwitcherProps) {
  const currentLocale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div 
      className={cn('flex items-center gap-1', className)}
      role="navigation"
      aria-label="Sélection de la langue"
    >
      {locales.map((locale, index) => (
        <span key={locale.code} className="flex items-center">
          <button
            onClick={() => handleLocaleChange(locale.code)}
            disabled={currentLocale === locale.code}
            aria-current={currentLocale === locale.code ? 'true' : undefined}
            className={cn(
              'px-2 py-1 text-sm font-medium transition-colors duration-200',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
              currentLocale === locale.code
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {compact ? locale.label : locale.code.toUpperCase()}
          </button>
          {index < locales.length - 1 && (
            <span className="text-border" aria-hidden="true">|</span>
          )}
        </span>
      ))}
    </div>
  )
}
