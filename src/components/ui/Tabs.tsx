// src/components/ui/Tabs.tsx
'use client'

import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useId,
  type ComponentProps,
} from 'react'
import { cn } from '@/lib/utils'

/* ================================
   Types
   ================================ */

interface TabsContextValue {
  activeTab: string
  setActiveTab: (value: string) => void
  baseId: string
  orientation: 'horizontal' | 'vertical'
}

interface TabsProps {
  /** Onglet actif par défaut */
  defaultValue: string
  /** Valeur contrôlée (optionnel) */
  value?: string
  /** Callback de changement */
  onValueChange?: (value: string) => void
  /** Orientation des onglets */
  orientation?: 'horizontal' | 'vertical'
  /** Classes supplémentaires */
  className?: string
  children: ReactNode
}

interface TabsListProps extends ComponentProps<'div'> {
  children: ReactNode
}

interface TabsTriggerProps extends ComponentProps<'button'> {
  /** Valeur de l'onglet (doit correspondre à un TabsContent) */
  value: string
  children: ReactNode
}

interface TabsContentProps extends ComponentProps<'div'> {
  /** Valeur de l'onglet */
  value: string
  children: ReactNode
}

/* ================================
   Context
   ================================ */

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider')
  }
  return context
}

/* ================================
   Tabs Root
   ================================ */

/**
 * Conteneur principal des Tabs
 * Gère l'état et le contexte
 */
export function Tabs({
  defaultValue,
  value,
  onValueChange,
  orientation = 'horizontal',
  className,
  children,
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const baseId = useId()

  // Support du mode contrôlé et non-contrôlé
  const activeTab = value ?? internalValue
  const setActiveTab = (newValue: string) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
  }

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, baseId, orientation }}>
      <div
        className={cn(
          orientation === 'vertical' && 'flex gap-6',
          className
        )}
        data-orientation={orientation}
      >
        {children}
      </div>
    </TabsContext.Provider>
  )
}

/* ================================
   Tabs List
   ================================ */

/**
 * Conteneur pour les boutons d'onglets
 */
export function TabsList({ className, children, ...props }: TabsListProps) {
  const { orientation } = useTabsContext()

  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      className={cn(
        // Base
        'inline-flex',
        // Horizontal
        orientation === 'horizontal' && [
          'flex-row items-center gap-1',
          'border-b border-border',
        ],
        // Vertical
        orientation === 'vertical' && [
          'flex-col items-stretch gap-1',
          'border-r border-border pr-4',
          'min-w-[200px]',
        ],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/* ================================
   Tabs Trigger
   ================================ */

/**
 * Bouton d'onglet individuel
 */
export function TabsTrigger({
  value,
  className,
  children,
  disabled,
  ...props
}: TabsTriggerProps) {
  const { activeTab, setActiveTab, baseId, orientation } = useTabsContext()
  const isActive = activeTab === value
  const tabId = `${baseId}-tab-${value}`
  const panelId = `${baseId}-panel-${value}`

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Navigation clavier selon l'orientation
    const isHorizontal = orientation === 'horizontal'
    const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp'
    const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown'

    if (e.key === prevKey || e.key === nextKey) {
      e.preventDefault()
      const tabs = e.currentTarget.parentElement?.querySelectorAll('[role="tab"]')
      if (!tabs) return

      const tabArray = Array.from(tabs) as HTMLButtonElement[]
      const currentIndex = tabArray.findIndex((tab) => tab === e.currentTarget)
      let nextIndex: number

      if (e.key === nextKey) {
        nextIndex = currentIndex === tabArray.length - 1 ? 0 : currentIndex + 1
      } else {
        nextIndex = currentIndex === 0 ? tabArray.length - 1 : currentIndex - 1
      }

      tabArray[nextIndex].focus()
      tabArray[nextIndex].click()
    }
  }

  return (
    <button
      role="tab"
      id={tabId}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        // Base
        'relative inline-flex items-center justify-center',
        'text-sm font-medium',
        'transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Horizontal styles
        orientation === 'horizontal' && [
          'px-4 py-3',
          'border-b-2 -mb-px',
          isActive
            ? 'border-foreground text-foreground'
            : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted',
        ],
        // Vertical styles
        orientation === 'vertical' && [
          'px-4 py-2.5 text-left',
          'rounded-l-md -mr-px',
          isActive
            ? 'bg-surface text-foreground border-r-2 border-foreground'
            : 'text-muted-foreground hover:text-foreground hover:bg-surface/50',
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

/* ================================
   Tabs Content
   ================================ */

/**
 * Contenu d'un onglet
 * Affiché seulement quand l'onglet correspondant est actif
 */
export function TabsContent({
  value,
  className,
  children,
  ...props
}: TabsContentProps) {
  const { activeTab, baseId } = useTabsContext()
  const isActive = activeTab === value
  const tabId = `${baseId}-tab-${value}`
  const panelId = `${baseId}-panel-${value}`

  if (!isActive) return null

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      tabIndex={0}
      className={cn(
        'focus:outline-none',
        'animate-fade-in',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/* ================================
   Styled Tabs Variants
   ================================ */

/**
 * Variante "pill" pour les tabs (style boutons)
 */
export function TabsListPill({ className, children, ...props }: TabsListProps) {
  const { orientation } = useTabsContext()

  return (
    <div
      role="tablist"
      aria-orientation={orientation}
      className={cn(
        'inline-flex p-1 bg-background-alt rounded-lg',
        orientation === 'horizontal' ? 'flex-row gap-1' : 'flex-col gap-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function TabsTriggerPill({
  value,
  className,
  children,
  disabled,
  ...props
}: TabsTriggerProps) {
  const { activeTab, setActiveTab, baseId, orientation } = useTabsContext()
  const isActive = activeTab === value
  const tabId = `${baseId}-tab-${value}`
  const panelId = `${baseId}-panel-${value}`

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(value)
    }
  }

  return (
    <button
      role="tab"
      id={tabId}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        // Base
        'relative inline-flex items-center justify-center',
        'px-4 py-2 rounded-md',
        'text-sm font-medium',
        'transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground',
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Active state
        isActive
          ? 'bg-surface text-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

/* ================================
   Underlined Tabs Variant
   ================================ */

/**
 * Variante avec ligne animée sous l'onglet actif
 * Plus élégante et zen
 */
export function TabsListUnderlined({ className, children, ...props }: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex items-center gap-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function TabsTriggerUnderlined({
  value,
  className,
  children,
  disabled,
  ...props
}: TabsTriggerProps) {
  const { activeTab, setActiveTab, baseId } = useTabsContext()
  const isActive = activeTab === value
  const tabId = `${baseId}-tab-${value}`
  const panelId = `${baseId}-panel-${value}`

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(value)
    }
  }

  return (
    <button
      role="tab"
      id={tabId}
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        // Base
        'relative pb-3',
        'text-sm font-medium tracking-wide uppercase',
        'transition-colors duration-200',
        'focus:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        // States
        isActive
          ? 'text-foreground'
          : 'text-muted-foreground hover:text-foreground',
        className
      )}
      {...props}
    >
      {children}
      {/* Animated underline */}
      <span
        className={cn(
          'absolute bottom-0 left-0 right-0 h-0.5 bg-foreground',
          'transition-transform duration-300 origin-left',
          isActive ? 'scale-x-100' : 'scale-x-0'
        )}
        aria-hidden="true"
      />
    </button>
  )
}
