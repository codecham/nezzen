// src/app/[locale]/actualites/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Link } from '@/i18n/routing'
import { Container, Button } from '@/components/ui'
import { PageHero, SectionHeading } from '@/components/shared'
import { NewsSection } from '@/components/sections'
import { ArrowLeft } from 'lucide-react'

// =============================================================================
// METADATA
// =============================================================================

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('actualites')

  return {
    title: t('meta.title'),
    description: t('meta.description'),
  }
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================

/**
 * Page Actualités
 * Affiche toutes les nouveautés et actualités de NeZ ZeN
 */
export default function ActualitesPage() {
  const t = useTranslations('actualites')

  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge={t('hero.badge')}
        badgeIcon="sparkles"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        variant="muted"
        size="lg"
      />

      {/* News Carousel - Full width */}
      <section className="py-12 lg:py-20">
        <NewsSection 
          showTitle={false} 
          autoPlay={0}
          limit={20}
        />
      </section>

      {/* Archives / Info Section */}
      <section className="border-t border-border bg-surface py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title={t('archives.title')}
              subtitle={t('archives.subtitle')}
              showOrnament={false}
            />

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild variant="outline">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t('archives.backHome')}
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact">
                  {t('archives.contact')}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA (optionnel) */}
      <section className="bg-muted/20 py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              {t('newsletter.title')}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t('newsletter.description')}
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              {t('newsletter.followUs')}
            </p>
            {/* Liens vers réseaux sociaux */}
            <div className="mt-4 flex justify-center gap-4">
              <a 
                href="https://www.facebook.com/NeZZeNParfums" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Facebook
              </a>
              <span className="text-border">•</span>
              <a 
                href="https://www.instagram.com/nezzenparfums" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Instagram
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}