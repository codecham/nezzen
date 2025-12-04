// src/components/sections/AteliersPreviewSection.tsx
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container, Button } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Clock, Users, Sparkles, Wine, Cake, PartyPopper, ArrowRight } from 'lucide-react'

interface AteliersPreviewSectionProps {
  className?: string
}

const atelierTypes = [
  {
    key: 'parfumeur',
    icon: Sparkles,
  },
  {
    key: 'bougie',
    icon: Cake,
  },
  {
    key: 'vin',
    icon: Wine,
  },
  {
    key: 'prive',
    icon: PartyPopper,
  },
] as const

/**
 * Section teaser des ateliers
 */
export function AteliersPreviewSection({ className }: AteliersPreviewSectionProps) {
  const t = useTranslations('home.ateliers')

  return (
    <section className={cn('py-20 lg:py-32', className)}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Texte */}
          <div>
            <SectionHeading
              title={t('title')}
              subtitle={t('subtitle')}
              align="left"
              showOrnament={false}
            />

            <p className="text-muted-foreground leading-relaxed">
              {t('description')}
            </p>

            {/* Infos pratiques */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{t('info.duration')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{t('info.capacity')}</span>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/ateliers">
                  {t('cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Types d'ateliers */}
          <div className="grid gap-4 sm:grid-cols-2">
            {atelierTypes.map((atelier) => {
              const Icon = atelier.icon

              return (
                <Link
                  key={atelier.key}
                  href="/ateliers"
                  className={cn(
                    'group flex items-start gap-4 rounded-lg p-5',
                    'bg-surface border border-transparent',
                    'transition-all duration-300',
                    'hover:border-border hover:shadow-sm'
                  )}
                >
                  <div className="rounded-lg bg-muted/30 p-3 transition-colors group-hover:bg-accent/10">
                    <Icon
                      className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground transition-colors group-hover:text-accent">
                      {t(`types.${atelier.key}.title`)}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(`types.${atelier.key}.description`)}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
