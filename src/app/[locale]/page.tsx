// src/app/[locale]/page.tsx
import {
  HeroSection,
  IntroSection,
  PhilosophieSection,
  FeaturedParfumsSection,
  RefillSection,
  AteliersPreviewSection,
  TestimonialsSection,
  CertificationsSection,
  CTASection,
} from '@/components/sections'

/**
 * Page d'accueil NeZ ZeN
 * Assemblage de toutes les sections
 */
export default function HomePage() {
  return (
    <>
      {/* Hero - Accroche principale */}
      <HeroSection />

      {/* Introduction - Qui sommes-nous */}
      <IntroSection />

      {/* Philosophie - Les 4 principes */}
      <PhilosophieSection />

      {/* Parfums vedettes */}
      <FeaturedParfumsSection />

      {/* Refill Attitude - Éco-responsable */}
      <RefillSection />

      {/* Ateliers Preview */}
      <AteliersPreviewSection />

      {/* Témoignages clients */}
      <TestimonialsSection />

      {/* Certifications et récompenses */}
      <CertificationsSection />

      {/* CTA Final - Visiter la boutique */}
      <CTASection />
    </>
  )
}