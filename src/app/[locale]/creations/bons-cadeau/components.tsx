// src/app/[locale]/creations/bons-cadeau/components.tsx
'use client'

import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { Button, AnimateOnScroll } from '@/components/ui'
import { useInView } from '@/hooks'
import { ArrowRight, Phone } from 'lucide-react'

// =============================================================================
// GIFT CARDS GRID ANIMÉ
// =============================================================================

interface GiftCardsGridProps {
  children: React.ReactNode
}

/**
 * Grille des bons cadeau avec animation staggerée
 */
export function GiftCardsGrid({ children }: GiftCardsGridProps) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="grid gap-8 md:grid-cols-2"
    >
      {/* On wrap les children avec l'animation */}
      {Array.isArray(children) ? children.map((child, index) => (
        <div
          key={index}
          className={cn(
            'transition-all duration-600',
            hasBeenInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          )}
          style={{
            transitionDelay: hasBeenInView ? `${index * 150}ms` : '0ms',
          }}
        >
          {child}
        </div>
      )) : children}
    </div>
  )
}

// =============================================================================
// STEPS SECTION ANIMÉE
// =============================================================================

interface Step {
  number: number
  title: string
  description: string
}

interface StepsSectionProps {
  title: string
  steps: Step[]
  validityNote: string
}

/**
 * Section étapes avec animation staggerée
 */
export function StepsSection({ title, steps, validityNote }: StepsSectionProps) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="mx-auto max-w-4xl">
      <AnimateOnScroll animation="fade-in-up" duration={500}>
        <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
          {title}
        </h2>
      </AnimateOnScroll>

      {/* Steps - Design moderne avec ligne de connexion */}
      <div className="relative mt-16">
        {/* Ligne de connexion (desktop) */}
        <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-border sm:block" />
        
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid gap-8 sm:grid-cols-3"
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                'relative text-center transition-all duration-500',
                hasBeenInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              )}
              style={{
                transitionDelay: hasBeenInView ? `${index * 150}ms` : '0ms',
              }}
            >
              {/* Numéro avec cercle */}
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-surface text-2xl font-bold text-accent shadow-sm transition-transform duration-300 hover:scale-110">
                {step.number}
              </div>
              
              {/* Contenu */}
              <h3 className="mt-4 font-heading text-lg font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Validity note avec animation */}
      <AnimateOnScroll animation="fade-in-up" delay={400} duration={500}>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          {validityNote}
        </p>
      </AnimateOnScroll>
    </div>
  )
}

// =============================================================================
// CONTACT CTA SECTION ANIMÉE
// =============================================================================

interface ContactCtaSectionProps {
  contactText: string
}

/**
 * Section CTA contact avec fond noir élégant
 */
export function ContactCtaSection({ contactText }: ContactCtaSectionProps) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'mx-auto mt-12 max-w-2xl rounded-2xl bg-foreground p-8 text-center text-background lg:p-12',
        'transition-all duration-600',
        hasBeenInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      )}
    >
      <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
        {contactText}
      </h3>

      {/* Contact buttons */}
      <div 
        className={cn(
          'mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row',
          'transition-all duration-500',
          hasBeenInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        )}
        style={{ transitionDelay: hasBeenInView ? '200ms' : '0ms' }}
      >
        <Button 
          asChild 
          size="lg" 
          className="bg-background text-foreground hover:bg-background/90 transition-transform duration-300 hover:scale-105"
        >
          <Link href="/contact">
            Nous contacter
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <div className="flex items-center gap-3 text-sm">
          <span className="text-background/60">ou appelez-nous</span>
          <a 
            href="tel:+3281222565" 
            className="inline-flex items-center gap-2 font-medium text-background hover:underline transition-colors"
          >
            <Phone className="h-4 w-4" />
            +32 81 22 25 65
          </a>
        </div>
      </div>
    </div>
  )
}