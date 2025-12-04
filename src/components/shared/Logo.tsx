import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

interface LogoProps {
  /** Taille du logo */
  size?: 'sm' | 'md' | 'lg'
  /** Afficher uniquement l'icône (cercle enso) */
  iconOnly?: boolean
  /** Classes CSS additionnelles */
  className?: string
  /** Lien vers l'accueil */
  asLink?: boolean
}

const sizeClasses = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-14',
}

/**
 * Logo NeZ ZeN
 * Utilise le PNG original pour une fidélité maximale
 * Version SVG disponible pour les cas où le vectoriel est préféré
 */
export function Logo({ 
  size = 'md', 
  iconOnly = false, 
  className,
  asLink = true 
}: LogoProps) {
  const logoContent = (
    <div className={cn('relative flex items-center', className)}>
      <Image
        src="/images/nezzen_logo.png"
        alt="NeZ ZeN - Parfumerie Artisanale"
        width={iconOnly ? 60 : 180}
        height={iconOnly ? 60 : 72}
        className={cn(
          'w-auto object-contain',
          sizeClasses[size]
        )}
        priority
      />
    </div>
  )

  if (asLink) {
    return (
      <Link 
        href="/" 
        className="transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        aria-label="NeZ ZeN - Retour à l'accueil"
      >
        {logoContent}
      </Link>
    )
  }

  return logoContent
}

/**
 * Logo SVG inline (version simplifiée vectorielle)
 * Utile pour les favicons ou quand le SVG est préféré
 */
export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={cn('h-10 w-10', className)}
      aria-label="NeZ ZeN"
    >
      {/* Cercle Enso - Partie Noire */}
      <path 
        d="M50 10 
           C30 10, 12 25, 8 50
           C4 75, 15 88, 30 85
           C45 82, 48 65, 50 50"
        fill="currentColor"
        className="text-primary"
      />
      {/* Cercle Enso - Partie Grise */}
      <path 
        d="M50 12
           C70 12, 88 27, 92 52
           C96 77, 85 90, 70 87
           C55 84, 52 67, 50 52"
        fill="currentColor"
        className="text-muted-foreground"
        opacity="0.6"
      />
    </svg>
  )
}
