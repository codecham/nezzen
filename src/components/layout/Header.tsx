import { Container } from '@/components/ui'
import { Logo } from '@/components/shared'
import { MegaMenu } from './MegaMenu'
import { MobileMenu } from './MobileMenu'
import { LanguageSwitcher } from './LanguageSwitcher'

/**
 * Header principal du site
 * Inclut le logo, la navigation et le sélecteur de langue
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Navigation desktop */}
          <MegaMenu />

          {/* Right side: Language + Mobile menu */}
          <div className="flex items-center gap-4">
            {/* Language switcher (desktop only) */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile menu */}
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  )
}
