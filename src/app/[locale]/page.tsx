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
// import { SectionDivider } from '@/components/shared'

/**
 * Page d'accueil NeZ ZeN
 * 
 * Structure avec :
 * - Ancres pour navigation (#intro, #philosophie, etc.)
 * - Fonds alternés pour délimiter les sections
 * - Séparateurs zen entre certaines sections
 */
export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO - Accroche principale
          Fond: background (blanc cassé)
          La flèche "Découvrir" scrolle vers #intro
          ═══════════════════════════════════════════════════════════════════ */}
      <HeroSection />

      {/* ═══════════════════════════════════════════════════════════════════
          INTRO - L'histoire de NeZ ZeN
          Fond: surface (blanc pur) - contraste subtil avec le hero
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="intro" className="scroll-mt-20 bg-surface">
        <IntroSection />
      </section>

      {/* Séparateur zen */}
      <div className="bg-surface">
        {/* <SectionDivider variant="enso" size="md" /> */}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          PHILOSOPHIE - Les 4 principes
          Fond: muted/30 (gris très léger) - transition douce
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="philosophie" className="scroll-mt-20 bg-muted/30">
        <PhilosophieSection className="bg-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PARFUMS VEDETTES
          Fond: background (blanc cassé)
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="parfums" className="scroll-mt-20 bg-background">
        <FeaturedParfumsSection />
      </section>

      {/* Séparateur gradient */}
      {/* <SectionDivider variant="gradient" size="lg" /> */}

      {/* ═══════════════════════════════════════════════════════════════════
          REFILL ATTITUDE - Éco-responsabilité
          Fond: surface avec bordure top - mise en avant
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="refill" className="scroll-mt-20 border-t border-border bg-surface">
        <RefillSection />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ATELIERS PREVIEW
          Fond: muted/20 (gris très subtil)
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="ateliers" className="scroll-mt-20 bg-muted/20">
        <AteliersPreviewSection className="bg-transparent" />
      </section>

      {/* Séparateur trois points */}
      {/* <SectionDivider variant="dots" size="lg" className="bg-muted/20" /> */}

      {/* ═══════════════════════════════════════════════════════════════════
          TÉMOIGNAGES
          Fond: background (blanc cassé)
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="temoignages" className="scroll-mt-20 bg-background">
        <TestimonialsSection />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CERTIFICATIONS & RÉCOMPENSES
          Fond: surface avec bordure - distinction visuelle
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="certifications" className="scroll-mt-20 border-y border-border bg-surface">
        <CertificationsSection className="bg-transparent" />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA FINAL - Invitation à visiter
          Fond: muted/30 (gris léger) - fermeture élégante
          ═══════════════════════════════════════════════════════════════════ */}
      <section id="visite" className="scroll-mt-20 bg-muted/30">
        <CTASection className="bg-transparent" />
      </section>
    </>
  )
}