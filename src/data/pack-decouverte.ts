// src/data/pack-decouverte.ts
import type { PackDecouverte } from '@/types'

/**
 * Options de packs découverte (tous en ligne)
 * - Pack Découverte : 4 échantillons + 1 flacon 50ml
 * - Pack Échantillons : 5 échantillons seuls
 */
export const packsDecouverte: PackDecouverte[] = [
  {
    id: 'pack-decouverte',
    type: 'online',
    name: 'Pack Découverte',
    description: 'Recevez 4 échantillons pour les tester chez vous. Une fois votre choix fait, nous vous envoyons le flacon de 50ml de votre parfum préféré.',
    numberOfSamples: 4,
    price: 100,
    shippingInfo: 'Frais de port offerts en Belgique',
    deliveryTime: '3 à 5 jours',
    image: '/images/packs/pack-decouverte.jpg',
    features: [
      '4 échantillons au choix',
      '1 flacon 50ml inclus',
      'Frais de port offerts (Belgique)',
      'Testez avant de choisir',
    ],
    ctaType: 'order',
    includesFullSize: true,
    fullSizeFormat: '50ml',
  },
  {
    id: 'pack-echantillons',
    type: 'online',
    name: 'Pack Échantillons',
    description: 'Choisissez 5 échantillons de parfums et recevez-les directement chez vous. Idéal pour découvrir notre collection à petit prix.',
    numberOfSamples: 5,
    price: 28,
    shippingInfo: 'Frais de port non compris',
    deliveryTime: '3 à 5 jours',
    image: '/images/packs/pack-echantillons.jpg',
    features: [
      '5 échantillons au choix',
      'Prix accessible',
      'Livraison à domicile',
      'Testez à votre rythme',
    ],
    ctaType: 'order',
    includesFullSize: false,
  },
]

/**
 * Récupérer un pack par son ID
 */
export function getPackById(id: string): PackDecouverte | undefined {
  return packsDecouverte.find(pack => pack.id === id)
}

/**
 * Récupérer un pack par son type (legacy)
 */
export function getPackByType(type: 'boutique' | 'online'): PackDecouverte | undefined {
  return packsDecouverte.find(pack => pack.type === type)
}

/**
 * Étapes du processus de découverte
 */
export const discoverySteps = [
  {
    number: 1,
    titleKey: 'steps.choose.title',
    descriptionKey: 'steps.choose.description',
    icon: 'Sparkles',
  },
  {
    number: 2,
    titleKey: 'steps.test.title',
    descriptionKey: 'steps.test.description',
    icon: 'Heart',
  },
  {
    number: 3,
    titleKey: 'steps.find.title',
    descriptionKey: 'steps.find.description',
    icon: 'Star',
  },
  {
    number: 4,
    titleKey: 'steps.order.title',
    descriptionKey: 'steps.order.description',
    icon: 'Package',
  },
]