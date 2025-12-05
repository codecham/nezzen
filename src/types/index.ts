// src/types/index.ts
// =============================================================================
// EXPORTS CENTRALISÉS - TYPES NeZ ZeN
// =============================================================================

// Produits
export type {
  BaseProduct,
  FragranceNotes,
  ParfumFormat,
  Parfum,
  AmbianceType,
  ParfumAmbiance,
  Bougie,
  CosmetiqueType,
  Cosmetique,
  PackDecouverteType,
  PackDecouverte,
  BonCadeauType,
  BonCadeau,
  Product,
  ProductCategory,
  ProductFilter,
} from './product'

// Ateliers
export type {
  AtelierType,
  AtelierAudience,
  AtelierSession,
  Atelier,
  AtelierBookingRequest,
  PrivateEventType,
} from './atelier'
export { PRIVATE_EVENT_TYPES } from './atelier'

// =============================================================================
// TYPES TÉMOIGNAGES
// =============================================================================

/**
 * Type de témoignage
 */
export type TemoignageType = 
  | 'client'
  | 'atelier'
  | 'entreprise'
  | 'evenement'

/**
 * Témoignage client
 */
export interface Temoignage {
  id: string
  type: TemoignageType
  author: string
  location?: string
  company?: string
  content: string
  shortContent?: string
  context?: string
  date?: string
  image?: string
  rating?: 1 | 2 | 3 | 4 | 5
  isFeatured?: boolean
  showOnHomepage?: boolean
}

// =============================================================================
// TYPES NAVIGATION
// =============================================================================

/**
 * Item de navigation simple
 */
export interface NavItem {
  /** Clé de traduction pour le label */
  labelKey: string
  /** URL de destination */
  href: string
  /** Icône optionnelle (nom Lucide) */
  icon?: string
  /** Description pour mega-menu */
  description?: string
}

/**
 * Item de navigation avec sous-menu
 */
export interface NavItemWithChildren extends Omit<NavItem, 'href'> {
  /** URL optionnelle (si le parent est cliquable) */
  href?: string
  /** Sous-items */
  children: NavItem[]
}

/**
 * Type union pour tous les items de navigation
 */
export type NavigationItem = NavItem | NavItemWithChildren

/**
 * Helper pour vérifier si un item a des enfants
 */
export function hasChildren(item: NavigationItem): item is NavItemWithChildren {
  return 'children' in item && Array.isArray(item.children)
}

// =============================================================================
// TYPES CONTACT
// =============================================================================

/**
 * Sujet de contact
 */
export type ContactSubject = 
  | 'renseignement'
  | 'commande'
  | 'atelier'
  | 'sur-mesure-particulier'
  | 'sur-mesure-entreprise'
  | 'autre'

/**
 * Formulaire de contact
 */
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  subject: ContactSubject
  message: string
  newsletter?: boolean
  productInterest?: string
  eventDate?: string
  numberOfPeople?: number
}

// =============================================================================
// TYPES CERTIFICATIONS & BADGES
// =============================================================================

/**
 * Certification ou récompense
 */
export interface Certification {
  id: string
  name: string
  description: string
  year?: number
  image?: string
  link?: string
}

// =============================================================================
// TYPES SEO
// =============================================================================

/**
 * Métadonnées SEO pour une page
 */
export interface PageSEO {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}

// =============================================================================
// TYPES UTILITAIRES
// =============================================================================

/**
 * Langues supportées
 */
export type Locale = 'fr' | 'en' | 'nl'

/**
 * Informations de la boutique
 */
export interface StoreInfo {
  name: string
  address: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  phone: string
  email: string
  coordinates?: {
    lat: number
    lng: number
  }
  openingHours: {
    [key: string]: string | null
  }
  socialLinks: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
}

/**
 * Réponse API générique
 */
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}