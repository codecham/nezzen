// src/components/shared/GiftCardSelector.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useToast } from '@/components/ui'
import { 
  Gift,
  Truck,
  Clock,
  ShoppingCart,
  Sparkles
} from 'lucide-react'

/* ================================
   Types
   ================================ */

interface FormatOption {
  label: string
  price: number
}

interface GiftCardSelectorProps {
  /** Type de bon */
  type: 'parfum' | 'montant'
  /** Image du produit */
  image: string
  /** Titre */
  title: string
  /** Description */
  description: string
  /** Label pour la sélection */
  selectionLabel: string
  /** Info livraison */
  shipping: string
  /** Délai de livraison */
  delivery: string
  /** Texte du bouton actif */
  cta: string
  /** Texte du bouton désactivé */
  ctaDisabled: string
  /** Titre du toast */
  toastTitle: string
  /** Description du toast */
  toastDescription: string
  /** Options de format (pour type parfum) */
  formatOptions?: FormatOption[]
  /** Montants suggérés (pour type montant) */
  suggestedAmounts?: number[]
  /** Label pour montant personnalisé */
  customAmountLabel?: string
  /** Placeholder pour montant personnalisé */
  customAmountPlaceholder?: string
}

/* ================================
   Component
   ================================ */

export function GiftCardSelector({
  type,
  image,
  title,
  description,
  selectionLabel,
  shipping,
  delivery,
  cta,
  ctaDisabled,
  toastTitle,
  toastDescription,
  formatOptions = [],
  suggestedAmounts = [],
  customAmountLabel,
  customAmountPlaceholder,
}: GiftCardSelectorProps) {
  // State
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isCustom, setIsCustom] = useState(false)
  const { addToast } = useToast()

  // Calculer le prix/montant final
  const getFinalValue = (): { label: string; price: number } | null => {
    if (type === 'parfum') {
      const format = formatOptions.find(f => f.label === selectedValue)
      return format ? { label: format.label, price: format.price } : null
    } else {
      if (isCustom && customAmount) {
        const amount = parseInt(customAmount, 10)
        return amount > 0 ? { label: `${amount}€`, price: amount } : null
      }
      if (selectedValue) {
        const amount = parseInt(selectedValue, 10)
        return { label: `${amount}€`, price: amount }
      }
      return null
    }
  }

  const finalValue = getFinalValue()
  const isValidSelection = finalValue !== null

  // Handlers
  const handleSelect = (value: string) => {
    setSelectedValue(value)
    setIsCustom(false)
    setCustomAmount('')
  }

  const handleCustomFocus = () => {
    setIsCustom(true)
    setSelectedValue(null)
  }

  const handleCustomChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '')
    setCustomAmount(numericValue)
    setIsCustom(true)
    setSelectedValue(null)
  }

  const handleAddToCart = () => {
    if (!isValidSelection || !finalValue) return

    // TODO: Logique panier à implémenter
    console.log('Added to cart:', { type, ...finalValue })

    // Afficher le toast
    const toastDesc = toastDescription
      .replace('%format%', finalValue.label)
      .replace('%price%', `${finalValue.price}€`)
      .replace('%amount%', `${finalValue.price}€`)

    addToast({
      title: toastTitle,
      description: toastDesc,
      variant: 'success',
    })

    // Reset
    setSelectedValue(null)
    setCustomAmount('')
    setIsCustom(false)
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {/* Fallback icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Gift className="h-16 w-16 text-muted-foreground/20" />
        </div>
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="relative z-10 object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Header */}
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom Section */}
        <div className="mt-6 space-y-4">
          {/* Selection */}
          <div>
            <p className="mb-3 text-sm font-medium text-foreground">
              {selectionLabel}
            </p>
            
            {type === 'parfum' ? (
              /* Format Selection - 3 colonnes */
              <div className="grid grid-cols-3 gap-2">
                {formatOptions.map((format) => (
                  <button
                    key={format.label}
                    type="button"
                    onClick={() => handleSelect(format.label)}
                    className={cn(
                      'flex flex-col items-center rounded-lg border-2 px-2 py-3 transition-all duration-200',
                      'hover:border-accent/50 hover:bg-accent/5',
                      'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
                      selectedValue === format.label
                        ? 'border-accent bg-accent/10'
                        : 'border-border bg-surface'
                    )}
                  >
                    <span className={cn(
                      'text-sm font-medium',
                      selectedValue === format.label ? 'text-accent' : 'text-foreground'
                    )}>
                      {format.label}
                    </span>
                    <span className={cn(
                      'mt-1 text-base font-bold',
                      selectedValue === format.label ? 'text-accent' : 'text-foreground'
                    )}>
                      {format.price}€
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              /* Amount Selection */
              <>
                <div className="grid grid-cols-5 gap-2">
                  {suggestedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleSelect(String(amount))}
                      className={cn(
                        'rounded-lg border-2 px-2 py-2.5 text-sm font-semibold transition-all duration-200',
                        'hover:border-accent/50 hover:bg-accent/5',
                        'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
                        selectedValue === String(amount) && !isCustom
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border bg-surface text-foreground'
                      )}
                    >
                      {amount}€
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                {customAmountLabel && (
                  <div className="mt-3">
                    <label className="text-xs text-muted-foreground">
                      {customAmountLabel}
                    </label>
                    <div className="relative mt-1.5">
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={customAmount}
                        onChange={(e) => handleCustomChange(e.target.value)}
                        onFocus={handleCustomFocus}
                        placeholder={customAmountPlaceholder}
                        className={cn(
                          'w-full rounded-lg border-2 px-3 py-2 pr-8 text-sm transition-all duration-200',
                          'placeholder:text-muted-foreground/50',
                          'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
                          isCustom && customAmount
                            ? 'border-accent bg-accent/10'
                            : 'border-border bg-surface'
                        )}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                        €
                      </span>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Shipping & Delivery */}
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Truck className="h-3.5 w-3.5" />
              <span>{shipping}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{delivery}</span>
            </div>
          </div>

          {/* Summary */}
          {isValidSelection && finalValue && (
            <div className="flex items-center justify-between rounded-lg bg-accent/10 px-4 py-2.5">
              <span className="text-sm text-foreground">
                {type === 'parfum' ? `Bon ${finalValue.label}` : 'Montant'}
              </span>
              <span className="font-heading text-lg font-bold text-foreground">
                {finalValue.price}€
              </span>
            </div>
          )}

          {/* CTA */}
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!isValidSelection}
            className={cn(
              'flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-offset-2',
              isValidSelection
                ? 'bg-foreground text-background hover:bg-foreground/90 focus:ring-foreground'
                : 'cursor-not-allowed bg-muted text-muted-foreground'
            )}
          >
            {isValidSelection ? (
              <>
                <ShoppingCart className="h-4 w-4" />
                {cta}
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                {ctaDisabled}
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  )
}