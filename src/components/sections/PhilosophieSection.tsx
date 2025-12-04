// src/components/sections/PhilosophieSection.tsx
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Beaker, Sparkles, Eye, Lightbulb } from 'lucide-react'

interface PhilosophieSectionProps {
  className?: string
}

const principles = [
  {
    key: 'jus',
    icon: Beaker,
  },
  {
    key: 'experience',
    icon: Sparkles,
  },
  {
    key: 'transparence',
    icon: Eye,
  },
  {
    key: 'innovation',
    icon: Lightbulb,
  },
] as const

/**
 * Section présentant les 4 principes de création de NeZ ZeN
 */
export function PhilosophieSection({ className }: PhilosophieSectionProps) {
  const t = useTranslations('home.philosophie')

  return (
    <section className={cn('py-20 lg:py-32', className)}>
      <Container>
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon

            return (
              <article
                key={principle.key}
                className={cn(
                  'group relative rounded-lg p-6 lg:p-8',
                  'bg-surface border border-transparent',
                  'transition-all duration-300',
                  'hover:border-border hover:shadow-sm'
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Numéro */}
                <span className="absolute right-4 top-4 font-heading text-5xl font-bold text-muted/20">
                  {index + 1}
                </span>

                {/* Icône */}
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-muted/30 p-3 transition-colors group-hover:bg-accent/10">
                  <Icon
                    className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-accent"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Titre */}
                <h3 className="mb-2 font-heading text-xl font-medium text-foreground">
                  {t(`${principle.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`${principle.key}.description`)}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
