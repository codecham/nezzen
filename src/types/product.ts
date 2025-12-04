// =============================================================================
// TYPES PRODUITS - NeZ ZeN
// =============================================================================

/**
 * Type de base pour tous les produits
 */
export interface BaseProduct {
  id: string
  slug: string
  name: string
  description: string
  price: number
  image: string
  images?: string[]
  isNew?: boolean
  isFeatured?: boolean
  createdAt?: string
}

// -----------------------------------------------------------------------------
// PARFUMS
// -----------------------------------------------------------------------------

/**
 * Notes olfactives d'un parfum
 */
export interface FragranceNotes {
  top: string[]      // Notes de tête
  heart: string[]    // Notes de cœur
  base: string[]     // Notes de fond
}

/**
 * Format disponible pour un parfum
 */
export interface ParfumFormat {
  size: '15ml' | '30ml' | '50ml' | '100ml'
  price: number
  inStock?: boolean
}

/**
 * Parfum - Produit principal
 */
export interface Parfum extends BaseProduct {
  type: 'parfum'
  inspiration?: string           // Histoire/inspiration du parfum
  notes: FragranceNotes
  formats: ParfumFormat[]
  concentration?: string         // Ex: "Eau de Parfum", "Extrait"
  longevity?: string            // Durée de tenue
  spicinessLevel?: 1 | 2 | 3 | 4 | 5  // Optionnel: intensité
}

// -----------------------------------------------------------------------------
// PARFUMS D'AMBIANCE (NeZZen Home)
// -----------------------------------------------------------------------------

/**
 * Type de parfum d'ambiance
 */
export type AmbianceType = 'diffuseur' | 'spray' | 'bougie'

/**
 * Parfum d'ambiance
 */
export interface ParfumAmbiance extends BaseProduct {
  type: 'ambiance'
  ambianceType: AmbianceType
  inspiration?: string
  duration?: string              // Ex: "3 mois dans 50m²"
  coverage?: string              // Surface couverte
  volume?: string                // Ex: "200ml"
}

// -----------------------------------------------------------------------------
// BOUGIES
// -----------------------------------------------------------------------------

/**
 * Bougie parfumée
 */
export interface Bougie extends BaseProduct {
  type: 'bougie'
  burnTime?: string              // Durée de combustion
  weight?: string                // Poids
  inspiration?: string
  notes?: Partial<FragranceNotes>
}

// -----------------------------------------------------------------------------
// COSMÉTIQUES
// -----------------------------------------------------------------------------

/**
 * Type de cosmétique
 */
export type CosmetiqueType = 'gel-douche' | 'lait-hydratant'

/**
 * Cosmétique
 */
export interface Cosmetique extends BaseProduct {
  type: 'cosmetique'
  cosmetiqueType: CosmetiqueType
  volume: string                 // Ex: "200ml"
  fragrance: string              // Parfum du produit
  ingredients?: string[]         // Ingrédients clés
  benefits?: string[]            // Bénéfices (hypoallergénique, etc.)
}

// -----------------------------------------------------------------------------
// PACK DÉCOUVERTE
// -----------------------------------------------------------------------------

/**
 * Pack découverte (échantillons)
 */
export interface PackDecouverte extends BaseProduct {
  type: 'pack-decouverte'
  numberOfSamples: number        // Nombre d'échantillons
  sampleSize: string             // Taille de chaque échantillon
  howItWorks: string[]           // Étapes du processus
}

// -----------------------------------------------------------------------------
// BONS CADEAU
// -----------------------------------------------------------------------------

/**
 * Type de bon cadeau
 */
export type BonCadeauType = 'parfum' | 'montant'

/**
 * Bon cadeau
 */
export interface BonCadeau extends BaseProduct {
  type: 'bon-cadeau'
  bonType: BonCadeauType
  value?: number                 // Montant si type "montant"
  validityPeriod?: string        // Durée de validité
}

// -----------------------------------------------------------------------------
// UNION TYPE - Tous les produits
// -----------------------------------------------------------------------------

export type Product = 
  | Parfum 
  | ParfumAmbiance 
  | Bougie 
  | Cosmetique 
  | PackDecouverte 
  | BonCadeau

/**
 * Catégorie de produits pour la navigation
 */
export type ProductCategory = 
  | 'parfums' 
  | 'nezzen-home' 
  | 'cosmetiques' 
  | 'pack-decouverte' 
  | 'bons-cadeau'

/**
 * Filtre pour les produits
 */
export interface ProductFilter {
  category?: ProductCategory
  priceMin?: number
  priceMax?: number
  isNew?: boolean
  isFeatured?: boolean
  search?: string
}