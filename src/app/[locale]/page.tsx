import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('home')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-heading text-5xl font-semibold tracking-tight text-foreground">
          {t('hero.title')}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10">
          <button className="border border-foreground bg-foreground px-8 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-foreground">
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </main>
  )
}