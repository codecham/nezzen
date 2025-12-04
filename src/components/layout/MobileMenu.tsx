'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown } from 'lucide-react'
import { mainNavigation } from '@/data/navigation'
import { hasChildren, type NavigationItem } from '@/types'
import { LanguageSwitcher } from './LanguageSwitcher'

/**
 * Menu mobile avec burger
 */
export function MobileMenu() {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const toggleExpanded = (labelKey: string) => {
    setExpandedItems((prev) =>
      prev.includes(labelKey)
        ? prev.filter((key) => key !== labelKey)
        : [...prev, labelKey]
    )
  }

  return (
    <div className="lg:hidden">
      {/* Burger button */}
      <button
        onClick={toggleMenu}
        className={cn(
          'p-2 text-foreground',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'
        )}
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-[300px] bg-surface',
          'transform transition-transform duration-300 ease-in-out',
          'shadow-xl',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <span className="font-heading text-lg font-medium">Menu</span>
          <button
            onClick={closeMenu}
            className="p-2 text-foreground"
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
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

        {/* Footer with language switcher */}
        <div className="border-t border-border p-4">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}

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
    return (
      <li>
        <Link
          href={item.href}
          onClick={onClose}
          className="block py-3 text-base font-medium text-foreground"
        >
          {t(item.labelKey)}
        </Link>
      </li>
    )
  }

  return (
    <li>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3 text-base font-medium text-foreground"
        aria-expanded={isExpanded}
      >
        {t(item.labelKey)}
        <ChevronDown
          className={cn(
            'h-5 w-5 transition-transform duration-200',
            isExpanded && 'rotate-180'
          )}
        />
      </button>

      {/* Submenu */}
      <ul
        className={cn(
          'overflow-hidden pl-4 transition-all duration-200',
          isExpanded ? 'max-h-96' : 'max-h-0'
        )}
      >
        {item.children.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={onClose}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {t(child.labelKey)}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}
