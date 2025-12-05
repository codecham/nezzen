// src/app/[locale]/creations/parfums/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Container } from '@/components/ui'
import { parfums, getParfumBySlug } from '@/data/parfums'
import { ParfumDetail } from '@/components/shared/ParfumDetail'
import { RelatedParfums } from '@/components/shared/RelatedParfums'

// Types
type Props = {
  params: Promise<{ slug: string; locale: string }>
}

// Génération des routes statiques
export async function generateStaticParams() {
  return parfums.map((parfum) => ({
    slug: parfum.slug,
  }))
}

// Metadata dynamique
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const parfum = getParfumBySlug(slug)
  
  if (!parfum) {
    return {
      title: 'Parfum non trouvé',
    }
  }

  const t = await getTranslations('parfumDetail')

  return {
    title: `${parfum.name} | ${t('meta.suffix')}`,
    description: parfum.shortDescription,
    openGraph: {
      title: parfum.name,
      description: parfum.shortDescription,
      images: parfum.image ? [parfum.image] : [],
    },
  }
}

/**
 * Page détail d'un parfum
 */
export default async function ParfumDetailPage({ params }: Props) {
  const { slug } = await params
  const parfum = getParfumBySlug(slug)

  if (!parfum) {
    notFound()
  }

  // Trouver les parfums similaires (même catégorie, max 3)
  const relatedParfums = parfums
    .filter((p) => p.category === parfum.category && p.id !== parfum.id)
    .slice(0, 3)

  return (
    <>
      {/* Product Detail Section */}
      <section className="py-8 lg:py-16">
        <Container>
          <ParfumDetail parfum={parfum} />
        </Container>
      </section>

      {/* Related Products */}
      {relatedParfums.length > 0 && (
        <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
          <Container>
            <RelatedParfums parfums={relatedParfums} />
          </Container>
        </section>
      )}
    </>
  )
}