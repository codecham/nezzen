// src/types/product.ts

/**
 * Notes olfactives d'un parfum
 */
export interface FragranceNotes {
  tete: string[]   // Notes de tête (première impression)
  coeur: string[]  // Notes de cœur (après quelques minutes)
  fond: string[]   // Notes de fond (plusieurs heures)
}

/**
 * Format disponible pour un parfum
 */
export interface ParfumFormat {
  size: '15ml' | '30ml' | '50ml' | '100ml'
  price: number
}

/**
 * Produit de base
 */
export interface BaseProduct {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  image: string
  images?: string[]
  isVegan: boolean
  isNew?: boolean
  isFeatured?: boolean
}

/**
 * Parfum
 */
export interface Parfum extends BaseProduct {
  category: 'classiques' | 'voyages' | 'gourmands' | 'floraux' | 'boisés'
  notes: FragranceNotes
  formats: ParfumFormat[]
  awards?: string[]
  inspiration?: string
}

/**
 * Parfum d'ambiance
 */
export type AmbianceType = 'diffuseur' | 'spray'

export interface ParfumAmbiance extends BaseProduct {
  type: AmbianceType
  duration?: string    // Ex: "3 mois"
  coverage?: string    // Ex: "50m²"
  price: number
}

/**
 * Bougie
 */
export interface Bougie extends BaseProduct {
  burnTime: string     // Ex: "40h"
  weight: string       // Ex: "200g"
  price: number
}

/**
 * Cosmétique (gel douche, lait)
 */
export type CosmetiqueType = 'gel-douche' | 'lait-hydratant'

export interface Cosmetique extends BaseProduct {
  type: CosmetiqueType
  volume: string       // Ex: "200ml"
  price: number
  ingredients?: string[]
}

/**
 * Pack découverte
 */
export interface PackDecouverte {
  id: string
  name: string
  description: string
  numberOfSamples: number
  price: number
  image: string
}

/**
 * Bon cadeau
 */
export type BonCadeauType = 'parfum' | 'montant'

export interface BonCadeau {
  id: string
  type: BonCadeauType
  name: string
  description: string
  value?: number       // Pour type 'montant'
  image: string
}

/**
 * Union de tous les types de produits
 */
export type Product = Parfum | ParfumAmbiance | Bougie | Cosmetique

/**
 * Catégories de produits
 */
export type ProductCategory = 
  | 'parfums'
  | 'parfums-ambiance'
  | 'bougies'
  | 'cosmetiques'
  | 'pack-decouverte'
  | 'bons-cadeau'

/**
 * Filtre pour les produits
 */
export interface ProductFilter {
  category?: ProductCategory
  priceRange?: [number, number]
  isVegan?: boolean
  isNew?: boolean
}
