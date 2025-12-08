// src/components/shared/PageHero.tsx
'use client'

import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container, AnimateOnScroll } from '@/components/ui'
import { 
  Droplets, 
  Calendar, 
  Sparkles, 
  MessageCircle, 
  Home, 
  Gift, 
  Package,
  Store,
  Heart,
  Camera,
  Users,
  Star,
  Award
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Map des icônes disponibles
const iconMap: Record<string, LucideIcon> = {
  droplets: Droplets,
  calendar: Calendar,
  sparkles: Sparkles,
  'message-circle': MessageCircle,
  home: Home,
  gift: Gift,
  package: Package,
  store: Store,
  heart: Heart,
  camera: Camera,
  users: Users,
  star: Star,
  award: Award,
}

interface PageHeroProps {
  /** Badge au-dessus du titre */
  badge?: string
  /** Nom de l'icône du badge (ex: 'droplets', 'calendar', 'sparkles') */
  badgeIcon?: keyof typeof iconMap
  /** Titre principal */
  title: string
  /** Sous-titre / description */
  subtitle?: string
  /** Contenu supplémentaire (CTA, stats, etc.) */
  children?: ReactNode
  /** Variante de style */
  variant?: 'default' | 'muted' | 'gradient'
  /** Taille du hero */
  size?: 'sm' | 'md' | 'lg'
  /** Alignement du texte */
  align?: 'center' | 'left'
  /** Classes CSS supplémentaires */
  className?: string
}

/**
 * Composant Hero réutilisable avec animations
 * Pour les en-têtes de pages
 * 
 * @example
 * <PageHero
 *   badge="20 créations"
 *   badgeIcon="droplets"
 *   title="Nos Parfums"
 *   subtitle="Découvrez notre collection..."
 *   variant="muted"
 * />
 */
export function PageHero({
  badge,
  badgeIcon,
  title,
  subtitle,
  children,
  variant = 'default',
  size = 'md',
  align = 'center',
  className,
}: PageHeroProps) {
  // Récupérer le composant icône depuis le map
  const BadgeIcon = badgeIcon ? iconMap[badgeIcon] : null

  // Classes selon la variante
  const variantClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    gradient: 'bg-gradient-to-b from-background to-surface',
  }

  // Classes de padding selon la taille
  const sizeClasses = {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-24',
    lg: 'py-20 lg:py-32',
  }

  // Classes d'alignement
  const alignClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
  }

  return (
    <section 
      className={cn(
        'relative overflow-hidden',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {/* Décoration de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-muted/30 blur-3xl" />
      </div>

      <Container className="relative">
        <div className={cn('max-w-3xl', alignClasses[align])}>
          {/* Badge */}
          {badge && (
            <AnimateOnScroll animation="fade-in" duration={400}>
              <div className={cn(
                'mb-6 inline-flex items-center gap-2 rounded-full',
                'border border-border/50 bg-surface/80 px-4 py-2',
                'backdrop-blur-sm shadow-sm'
              )}>
                {BadgeIcon && (
                  <BadgeIcon className="h-4 w-4 text-accent" />
                )}
                <span className="text-sm font-medium text-muted-foreground">
                  {badge}
                </span>
              </div>
            </AnimateOnScroll>
          )}

          {/* Titre */}
          <AnimateOnScroll animation="fade-in-up" delay={50} duration={500}>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </AnimateOnScroll>

          {/* Sous-titre */}
          {subtitle && (
            <AnimateOnScroll animation="fade-in-up" delay={100} duration={500}>
              <p className={cn(
                'mt-4 text-lg text-muted-foreground lg:text-xl',
                align === 'center' && 'max-w-2xl mx-auto'
              )}>
                {subtitle}
              </p>
            </AnimateOnScroll>
          )}

          {/* Contenu supplémentaire (CTA, etc.) */}
          {children && (
            <AnimateOnScroll animation="fade-in-up" delay={150} duration={500}>
              <div className="mt-8">
                {children}
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </Container>
    </section>
  )
}

/**
 * Variante compacte pour les pages internes
 */
interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
  className?: string
}

export function PageHeader({
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('mb-8 lg:mb-12', className)}>
      <AnimateOnScroll animation="fade-in-up" duration={400}>
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
      </AnimateOnScroll>

      {description && (
        <AnimateOnScroll animation="fade-in-up" delay={50} duration={400}>
          <p className="mt-2 text-muted-foreground">
            {description}
          </p>
        </AnimateOnScroll>
      )}

      {children && (
        <AnimateOnScroll animation="fade-in-up" delay={100} duration={400}>
          <div className="mt-4">
            {children}
          </div>
        </AnimateOnScroll>
      )}
    </div>
  )
}