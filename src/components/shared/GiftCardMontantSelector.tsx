// src/components/shared/GiftCardMontantSelector.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useToast } from '@/components/ui'
import { 
  Wallet,
  Check,
  Truck,
  Clock,
  ShoppingCart,
  Sparkles
} from 'lucide-react'

interface GiftCardMontantSelectorProps {
  image: string
  title: string
  description: string
  includes: string
  amountsLabel: string
  customLabel: string
  customPlaceholder: string
  shipping: string
  delivery: string
  cta: string
  ctaDisabled: string
  toastTitle: string
  toastDescription: string
  suggestedAmounts: number[]
}

export function GiftCardMontantSelector({
  image,
  title,
  description,
  includes,
  amountsLabel,
  customLabel,
  customPlaceholder,
  shipping,
  delivery,
  cta,
  ctaDisabled,
  toastTitle,
  toastDescription,
  suggestedAmounts,
}: GiftCardMontantSelectorProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isCustom, setIsCustom] = useState(false)
  const { addToast } = useToast()

  // Montant final (soit sélectionné, soit custom)
  const finalAmount = isCustom 
    ? (customAmount ? parseInt(customAmount, 10) : null)
    : selectedAmount

  const isValidAmount = finalAmount !== null && finalAmount > 0

  // Gérer la sélection d'un montant prédéfini
  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setIsCustom(false)
    setCustomAmount('')
  }

  // Gérer le focus sur le champ custom
  const handleCustomFocus = () => {
    setIsCustom(true)
    setSelectedAmount(null)
  }

  // Gérer le changement du montant custom
  const handleCustomChange = (value: string) => {
    // Accepter uniquement les chiffres
    const numericValue = value.replace(/[^0-9]/g, '')
    setCustomAmount(numericValue)
    setIsCustom(true)
    setSelectedAmount(null)
  }

  // Gérer l'ajout au panier
  const handleAddToCart = () => {
    if (!isValidAmount) return

    // TODO: Logique panier à implémenter plus tard
    console.log('Added to cart:', { type: 'bon-montant', amount: finalAmount })

    // Afficher le toast
    addToast({
      title: toastTitle,
      description: toastDescription.replace('%amount%', `${finalAmount}€`),
      variant: 'success',
    })

    // Reset la sélection après ajout
    setSelectedAmount(null)
    setCustomAmount('')
    setIsCustom(false)
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-sky-100 bg-surface transition-all duration-300 hover:border-sky-200 hover:shadow-lg">
      {/* Image avec fallback CSS */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sky-50">
        {/* Fallback icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-sky-500 opacity-20">
            <Wallet className="h-16 w-16" />
          </div>
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
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        {/* Header - Titre et description en haut */}
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="mt-3 text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Spacer - pousse tout le reste en bas */}
        <div className="flex-1" />

        {/* Bottom Section - Tout collé en bas */}
        <div className="space-y-5">
          {/* Includes */}
          <div className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
            <span className="text-muted-foreground">{includes}</span>
          </div>

          {/* Amount Selection */}
          <div>
            <p className="text-sm font-medium text-foreground">
              {amountsLabel}
            </p>
            
            {/* Suggested Amounts Grid */}
            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {suggestedAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountSelect(amount)}
                  className={cn(
                    'rounded-lg border-2 px-3 py-2.5 text-sm font-semibold transition-all duration-200',
                    'hover:border-sky-300 hover:bg-sky-50',
                    'focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2',
                    selectedAmount === amount && !isCustom
                      ? 'border-sky-500 bg-sky-50 text-sky-700'
                      : 'border-border bg-surface text-foreground'
                  )}
                >
                  {amount}€
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mt-4">
              <label className="text-sm text-muted-foreground">
                {customLabel}
              </label>
              <div className="relative mt-2">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={customAmount}
                  onChange={(e) => handleCustomChange(e.target.value)}
                  onFocus={handleCustomFocus}
                  placeholder={customPlaceholder}
                  className={cn(
                    'w-full rounded-lg border-2 px-4 py-2.5 pr-10 text-sm transition-all duration-200',
                    'placeholder:text-muted-foreground/50',
                    'focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2',
                    isCustom && customAmount
                      ? 'border-sky-500 bg-sky-50'
                      : 'border-border bg-surface'
                  )}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">
                  €
                </span>
              </div>
            </div>
          </div>

          {/* Shipping & Delivery */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Truck className="h-4 w-4" />
              <span>{shipping}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{delivery}</span>
            </div>
          </div>

          {/* Selected Summary */}
          {isValidAmount && (
            <div className="flex items-center justify-between rounded-lg bg-sky-50 px-4 py-3">
              <span className="text-sm text-sky-700">Montant sélectionné</span>
              <span className="font-heading text-xl font-bold text-sky-700">
                {finalAmount}€
              </span>
            </div>
          )}

          {/* CTA */}
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!isValidAmount}
            className={cn(
              'flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-offset-2',
              isValidAmount
                ? 'bg-foreground text-background hover:bg-foreground/90 focus:ring-foreground'
                : 'cursor-not-allowed bg-muted text-muted-foreground'
            )}
          >
            {isValidAmount ? (
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