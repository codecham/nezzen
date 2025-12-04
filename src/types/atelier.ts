// =============================================================================
// TYPES ATELIERS - NeZ ZeN
// =============================================================================

/**
 * Type d'atelier
 */
export type AtelierType = 
  | 'decouverte-parfumeur'
  | 'creation-bougie'
  | 'degustation-vin'
  | 'dinatoire'
  | 'evenement-prive'

/**
 * Public cible de l'atelier
 */
export type AtelierAudience = 
  | 'tous'
  | 'particuliers'
  | 'entreprises'
  | 'groupes'

/**
 * Session d'atelier (date spécifique)
 */
export interface AtelierSession {
  id: string
  date: string                   // Format ISO
  time: string                   // Ex: "14:00"
  duration: string               // Ex: "2h30"
  spotsTotal: number
  spotsAvailable: number
  isFull: boolean
}

/**
 * Atelier
 */
export interface Atelier {
  id: string
  slug: string
  type: AtelierType
  name: string
  shortDescription: string
  fullDescription: string
  image: string
  images?: string[]
  
  // Détails pratiques
  duration: string               // Durée standard
  price: number
  priceDetails?: string          // Ex: "dîner inclus"
  minParticipants?: number
  maxParticipants: number
  
  // Public
  audience: AtelierAudience[]
  
  // Ce qui est inclus
  includes?: string[]
  
  // Ce que le participant repart avec
  takeAway?: string[]
  
  // Infos supplémentaires
  partner?: string               // Ex: "Mel'a Table"
  location?: string              // Si différent de la boutique
  
  // Sessions à venir
  upcomingSessions?: AtelierSession[]
  
  // SEO
  isFeatured?: boolean
}

/**
 * Demande de réservation d'atelier
 */
export interface AtelierBookingRequest {
  atelierId: string
  sessionId?: string             // Si session spécifique
  
  // Contact
  firstName: string
  lastName: string
  email: string
  phone: string
  
  // Détails
  numberOfParticipants: number
  message?: string
  
  // Pour événements privés
  eventType?: string             // Ex: "EVJF", "Team building"
  preferredDate?: string
  specialRequests?: string
}

/**
 * Types d'événements privés
 */
export const PRIVATE_EVENT_TYPES = [
  'anniversaire',
  'evjf',
  'evg',
  'team-building',
  'entre-amis',
  'entre-collegues',
  'autre'
] as const

export type PrivateEventType = typeof PRIVATE_EVENT_TYPES[number]