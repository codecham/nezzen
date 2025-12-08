// src/app/[locale]/ateliers/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Container, AnimateOnScroll } from '@/components/ui'
import { PageHero, SectionHeading } from '@/components/shared'
import { AtelierCardAnimated, InfoCardAnimated, CTASectionAnimated } from './components'
import { getAllAteliers } from '@/data/ateliers'
import { MapPin, Calendar, Users } from 'lucide-react'

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ateliers')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

/**
 * Page Ateliers
 * Présente tous les ateliers disponibles avec animations
 */
export default function AteliersPage() {
  const t = useTranslations('ateliers')
  const ateliers = getAllAteliers()

  return (
    <>
      {/* Hero Section avec animations */}
      <PageHero
        badge={t('hero.badge')}
        badgeIcon="calendar"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        variant="muted"
        size="lg"
      />

      {/* Intro Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <AnimateOnScroll animation="fade-in-up" duration={500}>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('intro.text')}
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Ateliers List */}
      <section className="pb-16 lg:pb-24">
        <Container>
          <AnimateOnScroll animation="fade-in-up" duration={500}>
            <SectionHeading
              title={t('list.title')}
              subtitle={t('list.subtitle')}
            />
          </AnimateOnScroll>

          {/* Ateliers Grid avec animation staggerée */}
          <div className="mt-12 space-y-8">
            {ateliers.map((atelier, index) => (
              <AtelierCardAnimated 
                key={atelier.id} 
                atelier={atelier} 
                isReversed={index % 2 !== 0}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Practical Info Section */}
      <PracticalInfoSection />

      {/* CTA Section */}
      <CTASectionAnimated />
    </>
  )
}

/**
 * Section infos pratiques (Server Component)
 */
function PracticalInfoSection() {
  const t = useTranslations('ateliers')

  return (
    <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
      <Container>
        <AnimateOnScroll animation="fade-in-up" duration={500}>
          <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            {t('info.title')}
          </h2>
        </AnimateOnScroll>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Location */}
          <InfoCardAnimated
            icon={<MapPin className="h-6 w-6" />}
            title={t('info.location.title')}
            delay={0}
          >
            <p className="font-medium text-foreground">{t('info.location.address')}</p>
            <p className="text-sm text-muted-foreground">{t('info.location.detail')}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t('info.location.partner')}</p>
          </InfoCardAnimated>

          {/* Booking */}
          <InfoCardAnimated
            icon={<Calendar className="h-6 w-6" />}
            title={t('info.booking.title')}
            delay={100}
          >
            <p className="text-muted-foreground">{t('info.booking.text')}</p>
          </InfoCardAnimated>

          {/* Groups */}
          <InfoCardAnimated
            icon={<Users className="h-6 w-6" />}
            title={t('info.group.title')}
            delay={200}
          >
            <p className="text-muted-foreground">{t('info.group.text')}</p>
          </InfoCardAnimated>
        </div>
      </Container>
    </section>
  )
}