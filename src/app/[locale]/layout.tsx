// src/app/[locale]/layout.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { routing } from '@/i18n/routing'
import { 
  Header, 
  Footer, 
  NavigationProgress,
  ScrollIndicator,
  ScrollToTop,
} from '@/components/layout'
import { ToastProvider } from '@/components/ui'
import '../globals.css'
import '@/styles/animations.css'

// Font pour les titres (élégante, serif)
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

// Font pour le corps (lisible, sans-serif)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  // URL de base pour les métadonnées (Open Graph, Twitter, etc.)
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nezzen.vercel.app/fr'
  ),
  title: {
    default: 'NeZ ZeN - Parfumerie Artisanale à Namur',
    template: '%s | NeZ ZeN',
  },
  description:
    'Découvrez nos parfums artisanaux 100% vegan, créés et fabriqués à Namur. Ateliers, créations sur mesure et expérience olfactive unique.',
  keywords: [
    'parfumerie artisanale',
    'parfum vegan',
    'Namur',
    'Belgique',
    'atelier parfum',
    'création sur mesure',
  ],
  // Open Graph par défaut
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'NeZ ZeN - Parfumerie Artisanale',
  },
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Valider que la locale est supportée
  if (!routing.locales.includes(locale as 'fr' | 'en' | 'nl')) {
    notFound()
  }

  // Charger les messages pour la locale
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <NextIntlClientProvider messages={messages}>
          <ToastProvider position="bottom-right" maxToasts={5}>
            {/* Barre de progression de navigation */}
            <NavigationProgress />

            {/* Header sticky */}
            <Header />

            {/* Contenu principal avec transition */}
            <main className="min-h-screen">{children}</main>

            {/* Footer */}
            <Footer />

            {/* ═══════════════════════════════════════════════════════════
                NOUVEAUX COMPOSANTS UX
                ═══════════════════════════════════════════════════════════ */}
            
            {/* Indicateur de section (dots sur le côté) - Desktop uniquement */}
            <ScrollIndicator showOnlyOnHome />

            {/* Bouton retour en haut */}
            <ScrollToTop showAfter={400} />
            
          </ToastProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}