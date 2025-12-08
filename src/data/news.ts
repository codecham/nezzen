// src/data/news.ts
// Données pour la section Nouveautés / À la une (Carousel)
// Structure modulaire pour différents types de contenu

// ============================================================================
// TYPES
// ============================================================================

/**
 * Type de highlight/nouveauté
 */
export type HighlightType = 
  | 'product'      // Nouveau produit (parfum, cosmétique, etc.)
  | 'workshop'     // Nouvel atelier ou dates
  | 'event'        // Événement spécial
  | 'announcement' // Annonce générale (horaires, fermeture, etc.)
  | 'promotion'    // Offre spéciale
  | 'news'         // Actualité générale

/**
 * Structure d'un élément du carousel
 * Tous les champs sont optionnels sauf id et type pour maximum de flexibilité
 */
export interface HighlightItem {
  /** Identifiant unique */
  id: string
  
  /** Type de contenu (pour le style) */
  type: HighlightType
  
  /** Titre principal */
  title?: string
  
  /** Sous-titre ou accroche */
  subtitle?: string
  
  /** Description plus longue */
  description?: string
  
  /** Image de fond ou d'illustration */
  image?: string
  
  /** Position de l'image: 'cover' (fond), 'left', 'right', 'top' */
  imagePosition?: 'cover' | 'left' | 'right' | 'top'
  
  /** Texte du bouton CTA */
  ctaLabel?: string
  
  /** Lien du bouton CTA */
  ctaHref?: string
  
  /** Badge affiché (ex: "Nouveau", "Complet", "Important") */
  badge?: string
  
  /** Style du badge */
  badgeStyle?: 'default' | 'accent' | 'warning' | 'success' | 'dark'
  
  /** Couleur de fond personnalisée (classe Tailwind) */
  backgroundColor?: string
  
  /** Couleur du texte: 'light' ou 'dark' */
  textColor?: 'light' | 'dark'
  
  /** Icône à afficher (nom lucide-react) */
  icon?: string
  
  /** Informations supplémentaires (dates, prix, etc.) */
  meta?: {
    dates?: string[]
    price?: string
    location?: string
    [key: string]: string | string[] | undefined
  }
  
  /** Ordre d'affichage (plus petit = plus prioritaire) */
  order: number
  
  /** Actif ou non */
  isActive: boolean
  
  /** Date de début d'affichage (ISO string) */
  startDate?: string
  
  /** Date de fin d'affichage (ISO string) */
  endDate?: string
}

// ============================================================================
// DONNÉES - EXEMPLES POUR TESTER L'UI
// ============================================================================

/**
 * Liste des highlights pour le carousel
 * Exemples variés pour tester toutes les combinaisons d'options
 */
export const highlights: HighlightItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 1 : Image COVER - Toutes les options
  // Layout : Image plein écran avec overlay gradient, texte à gauche
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-cover-full',
    type: 'product',
    title: 'Nouveau parfum',
    subtitle: '"Baby This Night"',
    description: 'Inspiré de la chanson qui a ouvert notre mariage, ce parfum vous transportera au gré de notes épicées et chaleureuses de cardamome, rhubarbe et santal.',
    image: '/images/parfums/baby_this_night.jpg',
    imagePosition: 'cover',
    ctaLabel: 'Découvrir',
    ctaHref: '/creations/parfums/baby-this-night',
    badge: 'Nouveau',
    badgeStyle: 'accent',
    meta: {
      price: 'À partir de 29€',
    },
    order: 1,
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 2 : Image COVER - Minimal (sans badge, sans meta, sans description)
  // Layout : Image plein écran, juste titre + sous-titre + CTA
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-cover-minimal',
    type: 'product',
    title: 'Collection',
    subtitle: 'Découvrez nos créations',
    image: '/images/a-la-une/decouvrez-nos-creation.jpg',
    imagePosition: 'cover',
    ctaLabel: 'Voir la collection',
    ctaHref: '/creations/parfums',
    order: 2,
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 3 : Image LEFT - Avec dates (atelier)
  // Layout : Image à gauche (50%), contenu à droite
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-left-workshop',
    type: 'workshop',
    title: 'Nouvel atelier',
    subtitle: 'Dégustation de bulles',
    description: 'Après les vins italiens, découvrez nos nouvelles dégustations autour des bulles. Un apéro sympa de 18h à 20h30 avec 3 dégustations.',
    image: '/images/a-la-une/atelier-bulles.jpg',
    imagePosition: 'left',
    ctaLabel: 'Réserver ma place',
    ctaHref: '/ateliers',
    badge: 'Places limitées',
    badgeStyle: 'warning',
    meta: {
      dates: ['6 décembre (4 places)', '9 janvier (complet)'],
      price: '35€ / personne',
    },
    order: 3,
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 4 : Image RIGHT - Avec prix et location
  // Layout : Contenu à gauche, image à droite (50%)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-right-event',
    type: 'event',
    title: 'A la recherche d\'une activité parfumée?',
    subtitle: 'Découvrez nos ateliers créatifs',
    description: 'Rejoignez un groupe et découvrez de nouvelles destinations olfactives grâce à nos différentes activités.',
    image: '/images/a-la-une/decouvrez-nos-ateliers.png',
    imagePosition: 'right',
    ctaLabel: 'Decouvrir',
    ctaHref: '/atliers',
    badge: 'Gratuit',
    badgeStyle: 'success',
    meta: {
      dates: ['15 décembre à 18h'],
      location: 'Boutique NeZ ZeN, Namur',
    },
    order: 4,
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 5 : Image LEFT - Minimal (sans badge, sans meta)
  // Layout : Image à gauche, juste titre + description + CTA
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-left-minimal',
    type: 'news',
    title: 'Refill Attitude',
    subtitle: 'Parce que chaque geste compte',
    description: 'Adoptez la "refill attitude" ! Nous proposons notre carte de fidélité au re-remplissage. Demandez votre carte lors de votre prochaine recharge.',
    image: '/images/a-la-une/refill-attitude.png',
    imagePosition: 'left',
    ctaLabel: 'En savoir plus',
    ctaHref: '/a-propos/notre-approche',
    backgroundColor: 'bg-emerald-50',
    textColor: 'dark',
    order: 5,
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 6 : SANS IMAGE - Avec icône et fond coloré (annonce)
  // Layout : Fond coloré, icône centrée, texte centré
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-no-image-icon',
    type: 'announcement',
    title: 'Horaires des fêtes',
    subtitle: 'Ouverture exceptionnelle',
    description: 'Nous ouvrons exceptionnellement les lundis et dimanches pendant la période des fêtes. Profitez-en pour vos cadeaux de Noël !',
    icon: 'calendar',
    backgroundColor: 'bg-amber-50',
    textColor: 'dark',
    badge: 'Info',
    badgeStyle: 'default',
    meta: {
      dates: ['Dimanches : 13h-18h', 'Lundis : 10h-18h'],
    },
    order: 6,
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 7 : SANS IMAGE - Minimal (juste texte, fond coloré)
  // Layout : Fond coloré, texte centré, pas d'icône
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-no-image-minimal',
    type: 'announcement',
    subtitle: 'Fermeture exceptionnelle',
    description: 'La boutique sera fermée le 25 décembre et le 1er janvier. Joyeuses fêtes à tous !',
    backgroundColor: 'bg-rose-50',
    textColor: 'dark',
    order: 7,
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 8 : SANS IMAGE - Avec CTA (promotion)
  // Layout : Fond coloré, icône, texte centré avec bouton
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-promo',
    type: 'promotion',
    title: 'Offre spéciale',
    subtitle: '-15% sur les coffrets',
    description: 'Profitez de 15% de réduction sur tous nos coffrets cadeaux jusqu\'au 24 décembre.',
    icon: 'tag',
    backgroundColor: 'bg-violet-50',
    textColor: 'dark',
    ctaLabel: 'Voir les coffrets',
    ctaHref: '/creations/bons-cadeau',
    badge: 'Promo',
    badgeStyle: 'accent',
    meta: {
      dates: ['Jusqu\'au 24 décembre'],
    },
    order: 8,
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 9 : Image TOP - Style blog/article
  // Layout : Image en haut (bandeau), contenu en bas centré
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-top-image',
    type: 'news',
    title: 'Dans les médias',
    subtitle: 'NeZ ZeN dans Femmes d\'Aujourd\'hui',
    description: 'Découvrez notre interview dans le dernier numéro de Femmes d\'Aujourd\'hui où nous parlons de notre parcours et de notre philosophie.',
    image: '/images/presse/femmes-aujourdhui.jpg',
    imagePosition: 'top',
    ctaLabel: 'Lire l\'article',
    ctaHref: '/a-propos/notre-approche',
    badge: 'Presse',
    badgeStyle: 'dark',
    backgroundColor: 'bg-slate-50',
    order: 9,
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 10 : Image COVER - Sans CTA (juste informatif)
  // Layout : Image plein écran, texte informatif sans action
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-cover-no-cta',
    type: 'news',
    title: 'Distinction',
    subtitle: 'Finaliste Art & Olfaction Awards',
    description: 'Notre parfum "La Bibliothèque" a été sélectionné parmi les finalistes des prestigieux Art & Olfaction Awards 2019 à Los Angeles.',
    image: '/images/awards/art-olfaction.jpg',
    imagePosition: 'cover',
    badge: 'Fierté',
    badgeStyle: 'success',
    order: 10,
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 11 : SANS IMAGE - Dark mode
  // Layout : Fond sombre, texte clair
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-dark-mode',
    type: 'event',
    title: 'Save the date',
    subtitle: 'Nocturne du 20 décembre',
    description: 'La boutique reste ouverte jusqu\'à 21h pour une soirée shopping exceptionnelle avec animations et surprises.',
    icon: 'sparkles',
    backgroundColor: 'bg-slate-900',
    textColor: 'light',
    ctaLabel: 'Plus d\'infos',
    ctaHref: '/contact',
    badge: 'Événement',
    badgeStyle: 'dark',
    meta: {
      dates: ['20 décembre, 17h-21h'],
      location: 'Boutique NeZ ZeN',
    },
    order: 11,
    isActive: true,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXEMPLE 12 : Image RIGHT - Sans description (très minimal)
  // Layout : Image à droite, juste titre + sous-titre + CTA
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'example-right-ultra-minimal',
    type: 'product',
    subtitle: 'Nouvelle collection bougies',
    image: '/images/bougies/collection.jpg',
    imagePosition: 'right',
    ctaLabel: 'Découvrir',
    ctaHref: '/creations/nezzen-home',
    backgroundColor: 'bg-orange-50',
    order: 12,
    isActive: true,
  },
]

// ============================================================================
// FONCTIONS UTILITAIRES
// ============================================================================

/**
 * Récupérer les highlights actifs (vérifie les dates)
 */
export function getActiveHighlights(): HighlightItem[] {
  const now = new Date()
  
  return highlights
    .filter((item) => {
      if (!item.isActive) return false
      
      // Vérifier les dates de validité si définies
      if (item.startDate && new Date(item.startDate) > now) return false
      if (item.endDate && new Date(item.endDate) < now) return false
      
      return true
    })
    .sort((a, b) => a.order - b.order)
}

/**
 * Récupérer les highlights par type
 */
export function getHighlightsByType(type: HighlightType): HighlightItem[] {
  return getActiveHighlights().filter((item) => item.type === type)
}

/**
 * Récupérer les N premiers highlights
 */
export function getTopHighlights(limit: number = 5): HighlightItem[] {
  return getActiveHighlights().slice(0, limit)
}

/**
 * Récupérer un highlight par ID
 */
export function getHighlightById(id: string): HighlightItem | undefined {
  return highlights.find((item) => item.id === id)
}

// ============================================================================
// CONFIGURATION DES STYLES PAR TYPE
// ============================================================================

/**
 * Icônes par défaut pour chaque type
 */
export const typeDefaultIcons: Record<HighlightType, string> = {
  product: 'sparkles',
  workshop: 'calendar',
  event: 'party-popper',
  announcement: 'info',
  promotion: 'tag',
  news: 'newspaper',
}

/**
 * Couleurs par défaut pour chaque type (si pas de backgroundColor défini)
 */
export const typeDefaultColors: Record<HighlightType, string> = {
  product: 'bg-amber-50',
  workshop: 'bg-violet-50',
  event: 'bg-rose-50',
  announcement: 'bg-blue-50',
  promotion: 'bg-emerald-50',
  news: 'bg-slate-50',
}