// src/app/[locale]/contact/page.tsx
'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { 
  Container, 
  Button, 
  Input, 
  Textarea, 
  Select,
  AnimateOnScroll 
} from '@/components/ui'
import { PageHero } from '@/components/shared'
import { useInView } from '@/hooks'
import { cn } from '@/lib/utils'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Instagram,
  ExternalLink,
} from 'lucide-react'

// =============================================================================
// TYPES
// =============================================================================

type ContactSubject =
  | 'renseignement'
  | 'commande'
  | 'atelier'
  | 'surMesure'
  | 'autre'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: ContactSubject | ''
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

// =============================================================================
// PAGE COMPONENT
// =============================================================================

export default function ContactPage() {
  const t = useTranslations('contact')

  return (
    <>
      <PageHero
        badge={t('hero.badge')}
        badgeIcon="message-circle"
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        variant="gradient"
        size="lg"
      />
      <ContactSection />
      <MapSection />
    </>
  )
}

// =============================================================================
// CONTACT SECTION (Form + Info)
// =============================================================================

function ContactSection() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Formulaire - 3 colonnes */}
          <div className="lg:col-span-3">
            <AnimateOnScroll animation="fade-in-up" duration={500}>
              <ContactForm />
            </AnimateOnScroll>
          </div>

          {/* Infos pratiques - 2 colonnes */}
          <div className="lg:col-span-2">
            <AnimateOnScroll animation="fade-in-up" delay={150} duration={500}>
              <ContactInfo />
            </AnimateOnScroll>
          </div>
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// CONTACT FORM
// =============================================================================

function ContactForm() {
  const t = useTranslations('contact')
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulation d'envoi (à remplacer par vraie API en Phase 2)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simuler succès
    setStatus('success')
  }

  const subjectOptions = [
    { value: '', label: t('form.subjectPlaceholder') },
    { value: 'renseignement', label: t('form.subjects.renseignement') },
    { value: 'commande', label: t('form.subjects.commande') },
    { value: 'atelier', label: t('form.subjects.atelier') },
    { value: 'surMesure', label: t('form.subjects.surMesure') },
    { value: 'autre', label: t('form.subjects.autre') },
  ]

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm lg:p-8 transition-shadow duration-300 hover:shadow-md">
      <h2 className="font-heading text-2xl font-semibold text-foreground">
        {t('form.title')}
      </h2>
      <p className="mt-2 text-muted-foreground">{t('form.subtitle')}</p>

      {status === 'success' ? (
        <div className="mt-8 rounded-lg bg-emerald-50 p-6 text-center animate-fade-in">
          <CheckCircle className="mx-auto h-12 w-12 text-emerald-600" />
          <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
            {t('form.success.title')}
          </h3>
          <p className="mt-2 text-muted-foreground">{t('form.success.message')}</p>
          <Button
            variant="outline"
            className="mt-6 transition-transform hover:scale-105"
            onClick={() => {
              setStatus('idle')
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
              })
            }}
          >
            Envoyer un autre message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Nom / Prénom */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label={t('form.firstName')}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t('form.firstNamePlaceholder')}
              required
              className="transition-all duration-200 focus:scale-[1.01]"
            />
            <Input
              label={t('form.lastName')}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t('form.lastNamePlaceholder')}
              required
              className="transition-all duration-200 focus:scale-[1.01]"
            />
          </div>

          {/* Email */}
          <Input
            label={t('form.email')}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('form.emailPlaceholder')}
            required
            className="transition-all duration-200 focus:scale-[1.01]"
          />

          {/* Téléphone */}
          <Input
            label={t('form.phone')}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('form.phonePlaceholder')}
            className="transition-all duration-200 focus:scale-[1.01]"
          />

          {/* Sujet */}
          <Select
            label={t('form.subject')}
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            options={subjectOptions}
            required
            className="transition-all duration-200 focus:scale-[1.01]"
          />

          {/* Message */}
          <Textarea
            label={t('form.message')}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('form.messagePlaceholder')}
            rows={5}
            required
            className="transition-all duration-200 focus:scale-[1.01]"
          />

          {/* Error state */}
          {status === 'error' && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-700 animate-fade-in">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p className="text-sm">{t('form.error')}</p>
            </div>
          )}

          {/* Privacy notice */}
          <p className="text-xs text-muted-foreground">
            {t('form.privacy')}
          </p>

          {/* Submit */}
          <Button
            type="submit"
            size="lg"
            className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                {t('form.sending')}
              </>
            ) : (
              <>
                {t('form.submit')}
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}

// =============================================================================
// CONTACT INFO
// =============================================================================

function ContactInfo() {
  const t = useTranslations('contact')
  const { ref, hasBeenInView } = useInView({ threshold: 0.1, triggerOnce: true })

  const infoItems = [
    {
      icon: MapPin,
      title: t('info.address.title'),
      content: (
        <>
          <p className="mt-1 text-muted-foreground">
            Rue Haute Marcelle 22<br />
            5000 Namur, Belgique
          </p>
          <a
            href="https://maps.google.com/?q=Rue+Haute+Marcelle+22+5000+Namur+Belgique"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-sm text-accent hover:underline transition-colors"
          >
            {t('info.address.directions')}
            <ExternalLink className="h-3 w-3" />
          </a>
        </>
      ),
    },
    {
      icon: Phone,
      title: t('info.phone.title'),
      content: (
        <a
          href="tel:+32493542818"
          className="mt-1 block text-muted-foreground hover:text-foreground transition-colors"
        >
          +32 493 54 28 18
        </a>
      ),
    },
    {
      icon: Mail,
      title: t('info.email.title'),
      content: (
        <a
          href="mailto:info@nezzen.be"
          className="mt-1 block text-muted-foreground hover:text-foreground transition-colors"
        >
          info@nezzen.be
        </a>
      ),
    },
    {
      icon: Clock,
      title: t('info.hours.title'),
      content: (
        <div className="mt-1 space-y-1 text-sm text-muted-foreground">
          <p>{t('info.hours.weekdays')}</p>
          <p className="text-xs">{t('info.hours.note')}</p>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      {/* Carte d'infos */}
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className="rounded-2xl border border-border bg-surface p-6 lg:p-8 transition-shadow duration-300 hover:shadow-md"
      >
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          {t('info.title')}
        </h2>

        <div className="mt-6 space-y-6">
          {infoItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className={cn(
                  'flex items-start gap-4 transition-all duration-500',
                  hasBeenInView 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-4'
                )}
                style={{
                  transitionDelay: hasBeenInView ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-transform duration-300 hover:scale-110">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  {item.content}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Réseaux sociaux */}
      <AnimateOnScroll animation="fade-in-up" delay={400} duration={500}>
        <div className="rounded-2xl border border-border bg-surface p-6 lg:p-8 transition-shadow duration-300 hover:shadow-md">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {t('social.title')}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('social.subtitle')}
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.facebook.com/nezzenparfumerie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground transition-all duration-300 hover:bg-accent/10 hover:text-accent hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/nezzen_parfumerie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground transition-all duration-300 hover:bg-accent/10 hover:text-accent hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}

// =============================================================================
// MAP SECTION
// =============================================================================

function MapSection() {
  const t = useTranslations('contact')

  return (
    <section className="border-t border-border bg-muted/20 py-16 lg:py-24">
      <Container>
        <AnimateOnScroll animation="fade-in-up" duration={600}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              {t('map.title')}
            </h2>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" delay={200} duration={600}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.7776!2d4.862!3d50.464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzUwLjQiTiA0wrA1MSc0My4yIkU!5e0!3m2!1sfr!2sbe!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('map.title')}
              className="transition-opacity duration-500"
            />
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}