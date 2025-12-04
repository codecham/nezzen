// src/components/layout/MobileMenu.tsx
'use client'

import { useState, useEffect, useCallback, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown } from 'lucide-react'
import { mainNavigation } from '@/data/navigation'
import { hasChildren, type NavigationItem } from '@/types'
import { LanguageSwitcher } from './LanguageSwitcher'

/**
 * Hook pour détecter si on est côté client (évite les erreurs d'hydration)
 */
const emptySubscribe = () => () => {}

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,  // Côté client
    () => false  // Côté serveur (SSR)
  )
}

/**
 * Menu mobile avec burger
 * Utilise un Portal pour que l'overlay couvre tout l'écran
 */
export function MobileMenu() {
  const t = useTranslations()
  const isClient = useIsClient()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  // Bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [])
  
  const closeMenu = useCallback(() => {
    setIsOpen(false)
    setExpandedItems([])
  }, [])

  const toggleExpanded = useCallback((labelKey: string) => {
    setExpandedItems((prev) =>
      prev.includes(labelKey)
        ? prev.filter((key) => key !== labelKey)
        : [...prev, labelKey]
    )
  }, [])

  // Contenu du menu (overlay + panel)
  const menuContent = (
    <>
      {/* Overlay - couvre tout l'écran */}
      <div
        className={cn(
          'fixed inset-0 z-100 bg-foreground/30 backdrop-blur-sm',
          'transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Menu panel - slide depuis la droite */}
      <div
        className={cn(
          'fixed right-0 top-0 z-101 h-full w-[300px] max-w-[85vw]',
          'bg-background shadow-2xl',
          'transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        {/* Header du menu */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <span className="font-heading text-lg font-medium text-foreground">
            Menu
          </span>
          <button
            onClick={closeMenu}
            className={cn(
              'p-2 text-foreground rounded-md',
              'hover:bg-muted/50 transition-colors',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
            )}
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 pb-24">
          <ul className="space-y-1">
            {mainNavigation.map((item) => (
              <MobileNavItem
                key={item.labelKey}
                item={item}
                isExpanded={expandedItems.includes(item.labelKey)}
                onToggle={() => toggleExpanded(item.labelKey)}
                onClose={closeMenu}
                t={t}
              />
            ))}
          </ul>
        </nav>

        {/* Footer avec sélecteur de langue */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Langue</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="lg:hidden">
      {/* Bouton burger */}
      <button
        onClick={toggleMenu}
        className={cn(
          'p-2 text-foreground rounded-md',
          'hover:bg-muted/50 transition-colors',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
        )}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Render le menu dans un Portal (côté client uniquement) */}
      {isClient && createPortal(menuContent, document.body)}
    </div>
  )
}

/* ================================
   Mobile Nav Item
   ================================ */

interface MobileNavItemProps {
  item: NavigationItem
  isExpanded: boolean
  onToggle: () => void
  onClose: () => void
  t: ReturnType<typeof useTranslations>
}

function MobileNavItem({
  item,
  isExpanded,
  onToggle,
  onClose,
  t,
}: MobileNavItemProps) {
  const withChildren = hasChildren(item)

  if (!withChildren) {
    // Item simple sans sous-menu
    return (
      <li>
        <Link
          href={item.href}
          onClick={onClose}
          className={cn(
            'block py-3 px-2 text-base font-medium text-foreground',
            'rounded-md hover:bg-muted/50 transition-colors'
          )}
        >
          {t(item.labelKey)}
        </Link>
      </li>
    )
  }

  // Item avec sous-menu (accordéon)
  return (
    <li>
      <button
        onClick={onToggle}
        className={cn(
          'flex w-full items-center justify-between',
          'py-3 px-2 text-base font-medium text-foreground',
          'rounded-md hover:bg-muted/50 transition-colors'
        )}
        aria-expanded={isExpanded}
      >
        <span>{t(item.labelKey)}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-muted-foreground transition-transform duration-200',
            isExpanded && 'rotate-180'
          )}
        />
      </button>

      {/* Sous-menu avec animation */}
      <ul
        className={cn(
          'overflow-hidden transition-all duration-200 ease-out',
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="py-1 pl-4">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onClose}
                className={cn(
                  'block py-2.5 px-3 text-sm text-muted-foreground',
                  'rounded-md hover:text-foreground hover:bg-muted/30',
                  'transition-colors'
                )}
              >
                {t(child.labelKey)}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </li>
  )
}