// src/components/ui/Accordion.tsx
'use client'

import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useId,
  useRef,
  useEffect,
  type ComponentProps,
} from 'react'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ================================
   Types
   ================================ */

type AccordionType = 'single' | 'multiple'

interface AccordionContextValue {
  type: AccordionType
  expandedItems: string[]
  toggleItem: (value: string) => void
  baseId: string
}

interface AccordionProps {
  /** Type d'accordéon */
  type?: AccordionType
  /** Items ouverts par défaut */
  defaultValue?: string | string[]
  /** Valeur contrôlée (optionnel) */
  value?: string | string[]
  /** Callback de changement */
  onValueChange?: (value: string | string[]) => void
  /** Style de l'accordéon */
  variant?: 'default' | 'bordered' | 'separated'
  /** Classes supplémentaires */
  className?: string
  children: ReactNode
}

interface AccordionItemProps extends ComponentProps<'div'> {
  /** Identifiant unique de l'item */
  value: string
  /** Désactiver l'item */
  disabled?: boolean
  children: ReactNode
}

interface AccordionTriggerProps extends ComponentProps<'button'> {
  /** Style de l'icône */
  iconStyle?: 'chevron' | 'plus-minus' | 'none'
  children: ReactNode
}

interface AccordionContentProps extends ComponentProps<'div'> {
  children: ReactNode
}

/* ================================
   Context
   ================================ */

const AccordionContext = createContext<AccordionContextValue | null>(null)

interface AccordionItemContextValue {
  value: string
  isExpanded: boolean
  disabled: boolean
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null)

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion')
  }
  return context
}

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext)
  if (!context) {
    throw new Error('AccordionTrigger/Content must be used within an AccordionItem')
  }
  return context
}

/* ================================
   Variant Styles
   ================================ */

const variantClasses = {
  default: {
    root: 'divide-y divide-border',
    item: '',
  },
  bordered: {
    root: 'border border-border rounded-lg divide-y divide-border overflow-hidden',
    item: '',
  },
  separated: {
    root: 'space-y-3',
    item: 'border border-border rounded-lg overflow-hidden',
  },
}

/* ================================
   Accordion Root
   ================================ */

/**
 * Accordéon accessible avec animations fluides
 * Support mode single (un seul ouvert) ou multiple
 */
export function Accordion({
  type = 'single',
  defaultValue,
  value,
  onValueChange,
  variant = 'default',
  className,
  children,
}: AccordionProps) {
  const baseId = useId()

  // Normaliser la valeur par défaut en tableau
  const normalizeValue = (val: string | string[] | undefined): string[] => {
    if (val === undefined) return []
    return Array.isArray(val) ? val : [val]
  }

  const [internalValue, setInternalValue] = useState<string[]>(() =>
    normalizeValue(defaultValue)
  )

  // Support mode contrôlé et non-contrôlé
  const expandedItems = value !== undefined ? normalizeValue(value) : internalValue

  const toggleItem = (itemValue: string) => {
    let newValue: string[]

    if (type === 'single') {
      // En mode single, ferme si déjà ouvert, sinon ouvre le nouveau
      newValue = expandedItems.includes(itemValue) ? [] : [itemValue]
    } else {
      // En mode multiple, toggle l'item
      newValue = expandedItems.includes(itemValue)
        ? expandedItems.filter((v) => v !== itemValue)
        : [...expandedItems, itemValue]
    }

    if (value === undefined) {
      setInternalValue(newValue)
    }

    // Callback avec le bon format selon le type
    if (onValueChange) {
      if (type === 'single') {
        onValueChange(newValue[0] ?? '')
      } else {
        onValueChange(newValue)
      }
    }
  }

  return (
    <AccordionContext.Provider value={{ type, expandedItems, toggleItem, baseId }}>
      <div className={cn(variantClasses[variant].root, className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

/* ================================
   Accordion Item
   ================================ */

/**
 * Conteneur pour un item d'accordéon
 */
export function AccordionItem({
  value,
  disabled = false,
  className,
  children,
  ...props
}: AccordionItemProps) {
  const { expandedItems } = useAccordionContext()
  const isExpanded = expandedItems.includes(value)

  return (
    <AccordionItemContext.Provider value={{ value, isExpanded, disabled }}>
      <div
        data-state={isExpanded ? 'open' : 'closed'}
        data-disabled={disabled || undefined}
        className={cn(className)}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

/* ================================
   Accordion Trigger
   ================================ */

/**
 * Bouton pour ouvrir/fermer un item d'accordéon
 */
export function AccordionTrigger({
  iconStyle = 'chevron',
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  const { toggleItem, baseId } = useAccordionContext()
  const { value, isExpanded, disabled } = useAccordionItemContext()

  const triggerId = `${baseId}-trigger-${value}`
  const contentId = `${baseId}-content-${value}`

  const handleClick = () => {
    if (!disabled) {
      toggleItem(value)
    }
  }

  const renderIcon = () => {
    if (iconStyle === 'none') return null

    if (iconStyle === 'plus-minus') {
      return isExpanded ? (
        <Minus className="h-4 w-4 shrink-0 text-muted-foreground" />
      ) : (
        <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />
      )
    }

    // Default: chevron
    return (
      <ChevronDown
        className={cn(
          'h-4 w-4 shrink-0 text-muted-foreground',
          'transition-transform duration-300',
          isExpanded && 'rotate-180'
        )}
      />
    )
  }

  return (
    <button
      type="button"
      id={triggerId}
      aria-expanded={isExpanded}
      aria-controls={contentId}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        'flex w-full items-center justify-between gap-4',
        'py-4 px-1 text-left',
        'font-medium text-foreground',
        'transition-colors duration-200',
        'hover:text-foreground/80',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <span className="flex-1">{children}</span>
      {renderIcon()}
    </button>
  )
}

/* ================================
   Accordion Content
   ================================ */

/**
 * Contenu d'un item d'accordéon
 * Animation de hauteur fluide
 */
export function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  const { baseId } = useAccordionContext()
  const { value, isExpanded } = useAccordionItemContext()
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | 'auto'>(0)

  const triggerId = `${baseId}-trigger-${value}`
  const contentId = `${baseId}-content-${value}`

  // Mesurer et animer la hauteur
  useEffect(() => {
    if (!contentRef.current) return

    if (isExpanded) {
      // Mesurer la hauteur réelle
      const contentHeight = contentRef.current.scrollHeight
      setHeight(contentHeight)

      // Après l'animation, passer à auto pour supporter le contenu dynamique
      const timer = setTimeout(() => {
        setHeight('auto')
      }, 300) // Durée de l'animation

      return () => clearTimeout(timer)
    } else {
      // Avant de fermer, fixer la hauteur actuelle
      const currentHeight = contentRef.current.scrollHeight
      setHeight(currentHeight)

      // Puis animer vers 0 au prochain frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setHeight(0)
        })
      })
    }
  }, [isExpanded])

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      ref={contentRef}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
      }}
      className={cn(
        'overflow-hidden transition-all duration-300 ease-out',
        className
      )}
      {...props}
    >
      <div className={cn('pb-4 px-1', isExpanded ? 'opacity-100' : 'opacity-0')}>
        {children}
      </div>
    </div>
  )
}

/* ================================
   FAQ Accordion Preset
   ================================ */

interface FAQItem {
  question: string
  answer: string | ReactNode
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

/**
 * Preset FAQ prêt à l'emploi
 * Style optimisé pour les questions/réponses
 */
export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <Accordion type="single" variant="bordered" className={className}>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`faq-${index}`}>
          <AccordionTrigger iconStyle="plus-minus" className="text-base">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            {typeof item.answer === 'string' ? (
              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
            ) : (
              item.answer
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
