import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { routing } from '@/i18n/routing'
import '../globals.css'

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
  title: 'Parfumerie | L\'Art des Fragrances',
  description: 'Découvrez notre collection exclusive de parfums d\'exception',
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
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}