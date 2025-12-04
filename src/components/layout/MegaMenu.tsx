'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { mainNavigation } from '@/data/navigation'
import { hasChildren, type NavigationItem } from '@/types'

/**
 * Navigation principale desktop avec mega-menu
 */
export function MegaMenu() {
  const t = useTranslations()
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const handleMouseEnter = (labelKey: string) => {
    setOpenMenu(labelKey)
  }

  const handleMouseLeave = () => {
    setOpenMenu(null)
  }

  return (
    <nav className="hidden lg:block" aria-label="Navigation principale">
      <ul className="flex items-center gap-8">
        {mainNavigation.map((item) => (
          <NavItem
            key={item.labelKey}
            item={item}
            isOpen={openMenu === item.labelKey}
            onMouseEnter={() => handleMouseEnter(item.labelKey)}
            onMouseLeave={handleMouseLeave}
            t={t}
          />
        ))}
      </ul>
    </nav>
  )
}

interface NavItemProps {
  item: NavigationItem
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  t: ReturnType<typeof useTranslations>
}

function NavItem({ item, isOpen, onMouseEnter, onMouseLeave, t }: NavItemProps) {
  const withChildren = hasChildren(item)

  if (!withChildren) {
    // Item simple sans sous-menu
    return (
      <li>
        <Link
          href={item.href}
          className={cn(
            'relative py-2 text-sm font-medium text-foreground',
            'transition-colors duration-200',
            'hover:text-muted-foreground',
            // Underline animation
            'after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground',
            'after:transition-all after:duration-300',
            'hover:after:w-full'
          )}
        >
          {t(item.labelKey)}
        </Link>
      </li>
    )
  }

  // Item avec sous-menu
  return (
    <li
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className={cn(
          'flex items-center gap-1 py-2 text-sm font-medium text-foreground',
          'transition-colors duration-200',
          'hover:text-muted-foreground',
          isOpen && 'text-muted-foreground'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {t(item.labelKey)}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {/* Dropdown */}
      <div
        className={cn(
          'absolute left-0 top-full z-50 pt-2',
          'transition-all duration-200',
          isOpen
            ? 'pointer-events-auto opacity-100 translate-y-0'
            : 'pointer-events-none opacity-0 -translate-y-2'
        )}
      >
        <ul
          className={cn(
            'min-w-[200px] border border-border bg-surface p-4',
            'shadow-lg'
          )}
        >
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={cn(
                  'block py-2 text-sm text-foreground',
                  'transition-colors duration-200',
                  'hover:text-accent'
                )}
              >
                {t(child.labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
