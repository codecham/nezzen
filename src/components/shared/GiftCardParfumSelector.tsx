// src/components/shared/GiftCardParfumSelector.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useToast } from '@/components/ui'
import { 
  Heart,
  Check,
  Truck,
  Clock,
  ShoppingCart,
  Sparkles
} from 'lucide-react'

// Formats disponibles avec leurs prix
const parfumFormats = [
  { size: '15ml', price: 29 },
  { size: '50ml', price: 78 },
  { size: '100ml', price: 128 },
]

interface GiftCardParfumSelectorProps {
  image: string
  title: string
  description: string
  includes: string
  formatsLabel: string
  shipping: string
  delivery: string
  cta: string
  ctaDisabled: string
  toastTitle: string
  toastDescription: string
}

export function GiftCardParfumSelector({
  image,
  title,
  description,
  includes,
  formatsLabel,
  shipping,
  delivery,
  cta,
  ctaDisabled,
  toastTitle,
  toastDescription,
}: GiftCardParfumSelectorProps) {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null)
  const { addToast } = useToast()

  // Trouver le prix du format sélectionné
  const selectedPrice = parfumFormats.find(f => f.size === selectedFormat)?.price

  const isValidSelection = selectedFormat !== null

  // Gérer l'ajout au panier
  const handleAddToCart = () => {
    if (!isValidSelection) return

    // TODO: Logique panier à implémenter plus tard
    console.log('Added to cart:', { type: 'bon-parfum', format: selectedFormat, price: selectedPrice })

    // Afficher le toast
    addToast({
      title: toastTitle,
      description: toastDescription.replace('%format%', selectedFormat!).replace('%price%', `${selectedPrice}€`),
      variant: 'success',
    })

    // Reset la sélection après ajout
    setSelectedFormat(null)
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-rose-100 bg-surface transition-all duration-300 hover:border-rose-200 hover:shadow-lg">
      {/* Image avec fallback CSS */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-rose-50">
        {/* Fallback icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-rose-500 opacity-20">
            <Heart className="h-16 w-16" />
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
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
            <span className="text-muted-foreground">{includes}</span>
          </div>

          {/* Format Selection */}
          <div>
            <p className="text-sm font-medium text-foreground">
              {formatsLabel}
            </p>
            
            {/* Format Buttons */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {parfumFormats.map((format) => (
                <button
                  key={format.size}
                  type="button"
                  onClick={() => setSelectedFormat(format.size)}
                  className={cn(
                    'flex flex-col items-center rounded-lg border-2 px-3 py-3 transition-all duration-200',
                    'hover:border-rose-300 hover:bg-rose-50',
                    'focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2',
                    selectedFormat === format.size
                      ? 'border-rose-500 bg-rose-50'
                      : 'border-border bg-surface'
                  )}
                >
                  <span className={cn(
                    'text-sm font-semibold',
                    selectedFormat === format.size ? 'text-rose-700' : 'text-foreground'
                  )}>
                    {format.size}
                  </span>
                  <span className={cn(
                    'mt-1 text-lg font-bold',
                    selectedFormat === format.size ? 'text-rose-700' : 'text-foreground'
                  )}>
                    {format.price}€
                  </span>
                </button>
              ))}
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
          {isValidSelection && (
            <div className="flex items-center justify-between rounded-lg bg-rose-50 px-4 py-3">
              <span className="text-sm text-rose-700">Bon {selectedFormat} sélectionné</span>
              <span className="font-heading text-xl font-bold text-rose-700">
                {selectedPrice}€
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