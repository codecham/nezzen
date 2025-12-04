// =============================================================================
// TYPES TÉMOIGNAGES - NeZ ZeN
// =============================================================================

/**
 * Type de témoignage
 */
export type TemoignageType = 
  | 'client'           // Achat en boutique
  | 'atelier'          // Participation à un atelier
  | 'entreprise'       // Client B2B
  | 'evenement'        // Événement privé

/**
 * Témoignage client
 */
export interface Temoignage {
  id: string
  type: TemoignageType
  
  // Auteur
  author: string                 // Prénom ou nom
  location?: string              // Ville/Pays
  company?: string               // Si témoignage B2B
  
  // Contenu
  content: string                // Le témoignage
  shortContent?: string          // Version courte pour cards
  
  // Contexte
  context?: string               // Ex: "Atelier EVJF", "Achat Mont Blanc"
  date?: string                  // Date du témoignage
  
  // Média
  image?: string                 // Photo du client (si autorisé)
  
  // Rating
  rating?: 1 | 2 | 3 | 4 | 5
  
  // Affichage
  isFeatured?: boolean
  showOnHomepage?: boolean
}

// =============================================================================
// TYPES NAVIGATION - NeZ ZeN
// =============================================================================

/**
 * Élément de navigation
 */
export interface NavItem {
  id: string
  label: string                  // Clé de traduction ou texte
  href: string
  children?: NavItem[]
  isExternal?: boolean
  icon?: string                  // Nom de l'icône Lucide
  description?: string           // Pour mega-menu
  image?: string                 // Image pour mega-menu
}

/**
 * Configuration du mega-menu
 */
export interface MegaMenuConfig {
  columns: MegaMenuColumn[]
  featuredItem?: MegaMenuFeatured
}

export interface MegaMenuColumn {
  title?: string
  items: NavItem[]
}

export interface MegaMenuFeatured {
  title: string
  description: string
  image: string
  href: string
  cta: string
}

// =============================================================================
// TYPES CONTACT - NeZ ZeN
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
  
  // Pour demandes spécifiques
  productInterest?: string       // Si commande
  eventDate?: string             // Si atelier/événement
  numberOfPeople?: number        // Si atelier/événement
}

// =============================================================================
// TYPES CERTIFICATIONS & BADGES - NeZ ZeN
// =============================================================================

/**
 * Certification ou récompense
 */
export interface Certification {
  id: string
  name: string
  description: string
  year?: number
  image?: string                 // Logo/Badge
  link?: string                  // Lien externe
}

// =============================================================================
// TYPES SEO - NeZ ZeN
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
    [key: string]: string | null  // null = fermé
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
