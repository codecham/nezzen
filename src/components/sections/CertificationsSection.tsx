// src/components/sections/CertificationsSection.tsx
'use client'

import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui'
import { Award, Leaf, Trophy, Medal } from 'lucide-react'
import { useInView } from '@/hooks'

interface CertificationsSectionProps {
  className?: string
}

const certifications = [
  {
    key: 'artisan',
    icon: Award,
  },
  {
    key: 'vegan',
    icon: Leaf,
  },
  {
    key: 'artOlfaction',
    icon: Medal,
  },
  {
    key: 'trophee',
    icon: Trophy,
  },
] as const

/**
 * Section des certifications et récompenses
 * Avec animations au scroll
 * 
 * Note: Les bordures et fonds sont maintenant gérés par le parent (page)
 */
export function CertificationsSection({ className }: CertificationsSectionProps) {
  const t = useTranslations('home.certifications')
  const { ref, hasBeenInView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className={cn('py-16 lg:py-24', className)}>
      <Container>
        <div 
          className={cn(
            'text-center transition-all duration-600',
            hasBeenInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t('title')}
          </h2>
        </div>

        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.key}
              className={cn(
                'group flex flex-col items-center text-center',
                'transition-all duration-500',
                hasBeenInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              )}
              style={{
                transitionDelay: hasBeenInView ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Icône */}
              <div className="mb-4 rounded-full bg-muted/30 p-4 transition-all duration-300 group-hover:bg-accent/10 group-hover:scale-110">
                <cert.icon 
                  className="h-6 w-6 text-foreground transition-colors duration-300 group-hover:text-accent" 
                  strokeWidth={1.5} 
                />
              </div>

              {/* Titre */}
              <h3 className="font-heading text-lg font-medium text-foreground">
                {t(`${cert.key}.title`)}
              </h3>

              {/* Description */}
              <p className="mt-1 text-sm text-muted-foreground">
                {t(`${cert.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}