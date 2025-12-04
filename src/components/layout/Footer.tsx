// src/components/layout/Footer.tsx
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Container } from '@/components/ui'
import { Logo } from '@/components/shared'
import { footerNavigation, socialLinks } from '@/data/navigation'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Leaf, Award } from 'lucide-react'

/**
 * Footer du site
 */
export function Footer() {
  const t = useTranslations()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background-alt">
      {/* Main footer */}
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-6">
            <Logo size="lg" asLink={false} />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t('footer.description')}
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.name}
                >
                  {social.icon === 'facebook' && <Facebook className="h-5 w-5" />}
                  {social.icon === 'instagram' && <Instagram className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Créations column */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-medium text-foreground">
              {t('footer.creations')}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.creations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-medium text-foreground">
              {t('footer.company')}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-medium text-foreground">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4">
              {/* Address */}
              <li>
                <a
                  href="https://maps.google.com/?q=Rue+Haute+Marcelle+22+5000+Namur+Belgique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Rue Haute Marcelle 22
                    <br />
                    5000 Namur, Belgique
                  </span>
                </a>
              </li>

              {/* Phone */}
              <li>
                <a
                  href="tel:+32478374858"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+32 478 37 48 58</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:info@nezzen.be"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>info@nezzen.be</span>
                </a>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {t('footer.hours.weekdays')}
                  <br />
                  {t('footer.hours.saturday')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-muted-foreground md:flex-row">
            <p>© {currentYear} NeZ ZeN. {t('footer.rights')}</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Leaf className="h-4 w-4" strokeWidth={1.5} />
                {t('footer.vegan')}
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4" strokeWidth={1.5} />
                {t('footer.artisan')}
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}