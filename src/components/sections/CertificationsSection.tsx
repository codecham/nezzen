// src/components/sections/CertificationsSection.tsx
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui'
import { Award, Leaf, Trophy, Medal } from 'lucide-react'

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
 */
export function CertificationsSection({ className }: CertificationsSectionProps) {
  const t = useTranslations('home.certifications')

  return (
    <section className={cn('py-16 lg:py-24 border-y border-border', className)}>
      <Container>
        <div className="text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {t('title')}
          </h2>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div
              key={cert.key}
              className="group flex flex-col items-center text-center"
            >
              {/* Icône */}
              <div className="mb-4 rounded-full bg-muted/30 p-4">
                <cert.icon 
                  className="h-6 w-6 text-foreground" 
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