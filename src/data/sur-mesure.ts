// src/data/sur-mesure.ts
// =============================================================================
// DONNÉES SUR MESURE - NeZ ZeN
// Basé sur le contenu réel du site nezzen.be
// =============================================================================

// =============================================================================
// TYPES
// =============================================================================

export type ForfaitType = 'ambiance' | 'parfum'

export interface Forfait {
  id: string
  name: string
  type: ForfaitType
  price: number
  includes: {
    flacons: number
    consultationHours: number
    prototypes: number
  }
  supplementPrice: string // "~30€/flacon" ou "130€/100ml"
  supplementUnit: string
}

export interface TarifInclus {
  id: string
  icon: string
}

// =============================================================================
// CRÉATION SUR MESURE - Forfaits (données réelles)
// =============================================================================

export const forfaits: Forfait[] = [
  {
    id: 'turquoise',
    name: 'Turquoise',
    type: 'ambiance',
    price: 1950,
    includes: {
      flacons: 2,
      consultationHours: 2,
      prototypes: 3,
    },
    supplementPrice: '~30€',
    supplementUnit: 'flacon',
  },
  {
    id: 'topaze',
    name: 'Topaze',
    type: 'ambiance',
    price: 2150,
    includes: {
      flacons: 2,
      consultationHours: 4,
      prototypes: 5,
    },
    supplementPrice: '~30€',
    supplementUnit: 'flacon',
  },
  {
    id: 'platinum',
    name: 'Platinum',
    type: 'parfum',
    price: 2000,
    includes: {
      flacons: 1,
      consultationHours: 2,
      prototypes: 3,
    },
    supplementPrice: '130€',
    supplementUnit: '100ml',
  },
  {
    id: 'diamant',
    name: 'Diamant',
    type: 'parfum',
    price: 2500,
    includes: {
      flacons: 1,
      consultationHours: 4,
      prototypes: 5,
    },
    supplementPrice: '130€',
    supplementUnit: '100ml',
  },
]

// =============================================================================
// CRÉATION SUR MESURE - Ce qui est inclus dans les tarifs
// =============================================================================

export const tarifsInclus: TarifInclus[] = [
  { id: 'registration', icon: 'FileCheck' },
  { id: 'samples', icon: 'Beaker' },
  { id: 'stability', icon: 'FlaskConical' },
  { id: 'sessions', icon: 'Users' },
  { id: 'bottles', icon: 'Package' },
]

// =============================================================================
// ENTREPRISES B2B - Services
// =============================================================================

export interface ServiceB2B {
  id: string
  icon: string
  image: string | null
  hasDetailedPricing?: boolean
  hasActivityList?: boolean
}

export const servicesB2B: ServiceB2B[] = [
  {
    id: 'fragrance',
    icon: 'Sparkles',
    image: '/images/sur-mesure/service-fragrance.jpg',
    hasDetailedPricing: true,
  },
  {
    id: 'marketing',
    icon: 'Store',
    image: '/images/sur-mesure/service-marketing.jpg',
  },
  {
    id: 'ateliers',
    icon: 'Users',
    image: '/images/sur-mesure/service-ateliers.jpg',
    hasActivityList: true,
  },
  {
    id: 'cadeaux',
    icon: 'Gift',
    image: '/images/sur-mesure/service-cadeaux.jpg',
  },
]

// =============================================================================
// HELPERS
// =============================================================================

/**
 * Récupère les forfaits par type
 */
export function getForfaitsByType(type: ForfaitType): Forfait[] {
  return forfaits.filter((f) => f.type === type)
}

/**
 * Récupère les forfaits parfum d'ambiance
 */
export function getAmbianceForfaits(): Forfait[] {
  return getForfaitsByType('ambiance')
}

/**
 * Récupère les forfaits parfum
 */
export function getParfumForfaits(): Forfait[] {
  return getForfaitsByType('parfum')
}