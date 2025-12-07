// src/app/[locale]/contact/page.tsx
'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Container, Button, Badge, Input, Textarea, Select } from '@/components/ui'
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
  | 'sur-mesure'
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
      <HeroSection t={t} />
      <ContactSection t={t} />
      <MapSection t={t} />
    </>
  )
}

// =============================================================================
// SECTION PROPS TYPE
// =============================================================================

interface SectionProps {
  t: ReturnType<typeof useTranslations<'contact'>>
}

// =============================================================================
// HERO SECTION
// =============================================================================

function HeroSection({ t }: SectionProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-surface py-20 lg:py-32">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="accent" className="mb-6">
            {t('hero.badge')}
          </Badge>

          <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t('hero.subtitle')}
          </p>
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// CONTACT SECTION (Form + Info)
// =============================================================================

function ContactSection({ t }: SectionProps) {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Formulaire - 3 colonnes */}
          <div className="lg:col-span-3">
            <ContactForm t={t} />
          </div>

          {/* Infos pratiques - 2 colonnes */}
          <div className="lg:col-span-2">
            <ContactInfo t={t} />
          </div>
        </div>
      </Container>
    </section>
  )
}

// =============================================================================
// CONTACT FORM
// =============================================================================

function ContactForm({ t }: SectionProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  // Options du select avec traductions
  const subjectOptions = [
    { value: 'renseignement', label: t('form.subjects.renseignement') },
    { value: 'commande', label: t('form.subjects.commande') },
    { value: 'atelier', label: t('form.subjects.atelier') },
    { value: 'sur-mesure', label: t('form.subjects.surMesure') },
    { value: 'autre', label: t('form.subjects.autre') },
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, subject: e.target.value as ContactSubject }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulation d'envoi (pour la maquette)
    // En Phase 2, tu remplaceras par un vrai appel API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simuler le succès
    setStatus('success')

    // Reset après 5 secondes
    setTimeout(() => {
      setStatus('idle')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }, 5000)
  }

  const isValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.subject &&
    formData.message

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 lg:p-8">
      <h2 className="font-heading text-2xl font-semibold text-foreground">
        {t('form.title')}
      </h2>
      <p className="mt-2 text-muted-foreground">
        {t('form.subtitle')}
      </p>

      {status === 'success' ? (
        <div className="mt-8 rounded-xl bg-emerald-50 p-6 text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-emerald-600" />
          <h3 className="mt-4 font-heading text-xl font-semibold text-emerald-900">
            {t('form.success.title')}
          </h3>
          <p className="mt-2 text-emerald-700">
            {t('form.success.message')}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Nom et Prénom */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label={`${t('form.firstName')} *`}
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder={t('form.firstNamePlaceholder')}
              required
              disabled={status === 'submitting'}
            />
            <Input
              label={`${t('form.lastName')} *`}
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder={t('form.lastNamePlaceholder')}
              required
              disabled={status === 'submitting'}
            />
          </div>

          {/* Email et Téléphone */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label={`${t('form.email')} *`}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t('form.emailPlaceholder')}
              required
              disabled={status === 'submitting'}
            />
            <Input
              label={t('form.phone')}
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t('form.phonePlaceholder')}
              disabled={status === 'submitting'}
            />
          </div>

          {/* Sujet */}
          <Select
            label={`${t('form.subject')} *`}
            name="subject"
            value={formData.subject}
            onChange={handleSelectChange}
            options={subjectOptions}
            placeholder={t('form.subjectPlaceholder')}
            disabled={status === 'submitting'}
          />

          {/* Message */}
          <Textarea
            label={`${t('form.message')} *`}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t('form.messagePlaceholder')}
            rows={5}
            disabled={status === 'submitting'}
          />

          {/* Erreur */}
          {status === 'error' && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-700">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p className="text-sm">{t('form.error')}</p>
            </div>
          )}

          {/* Mentions légales */}
          <p className="text-xs text-muted-foreground">
            {t('form.privacy')}
          </p>

          {/* Bouton Submit */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={!isValid || status === 'submitting'}
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

function ContactInfo({ t }: SectionProps) {
  return (
    <div className="space-y-8">
      {/* Carte d'infos */}
      <div className="rounded-2xl border border-border bg-surface p-6 lg:p-8">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          {t('info.title')}
        </h2>

        <div className="mt-6 space-y-6">
          {/* Adresse */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{t('info.address.title')}</h3>
              <p className="mt-1 text-muted-foreground">
                Rue Haute Marcelle 22<br />
                5000 Namur, Belgique
              </p>
              <a
                href="https://maps.google.com/?q=Rue+Haute+Marcelle+22+5000+Namur+Belgique"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm text-accent hover:underline"
              >
                {t('info.address.directions')}
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Téléphone */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <Phone className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{t('info.phone.title')}</h3>
              <a
                href="tel:+3281241294"
                className="mt-1 block text-muted-foreground hover:text-accent"
              >
                +32 81 24 12 94
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <Mail className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{t('info.email.title')}</h3>
              <a
                href="mailto:nez.zen.namur@gmail.com"
                className="mt-1 block text-muted-foreground hover:text-accent"
              >
                nez.zen.namur@gmail.com
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
              <Clock className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{t('info.hours.title')}</h3>
              <div className="mt-1 space-y-1 text-muted-foreground">
                <p>{t('info.hours.weekdays')}</p>
                <p className="text-sm text-muted-foreground/70">
                  {t('info.hours.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="rounded-2xl border border-border bg-surface p-6 lg:p-8">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {t('social.title')}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {t('social.subtitle')}
        </p>

        <div className="mt-4 flex gap-3">
          <a
            href="https://www.facebook.com/nezzenperfume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-accent/10 hover:border-accent/50"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 text-muted-foreground" />
          </a>
          <a
            href="https://www.instagram.com/nez.zen.namur"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-accent/10 hover:border-accent/50"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-muted-foreground" />
          </a>
        </div>
      </div>

      {/* Note urgence */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm text-amber-800">
          <strong>{t('info.urgent.title')}</strong>{' '}
          {t('info.urgent.message')}
        </p>
      </div>
    </div>
  )
}

// =============================================================================
// MAP SECTION
// =============================================================================

function MapSection({ t }: SectionProps) {
  return (
    <section className="pb-20 lg:pb-32">
      <Container>
        <div className="overflow-hidden rounded-2xl border border-border">
          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps?q=NeZ+ZeN+Parfumerie+Artisanale+Rue+Haute+Marcelle+22+Namur+Belgium&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('map.title')}
            className="transition-all duration-300 hover:grayscale-0"
          />
        </div>

        {/* Info sous la carte */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span>Rue Haute Marcelle 22, 5000 Namur</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            <span>{t('info.hours.weekdays')}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}