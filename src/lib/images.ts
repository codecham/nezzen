// src/lib/images.ts
// =============================================================================
// GESTION CENTRALISÉE DES IMAGES - NeZ ZeN
// =============================================================================
// Ce fichier centralise tous les chemins d'images du projet.
// Avantages :
// - Un seul endroit pour modifier les chemins
// - Autocomplétion TypeScript
// - Fallbacks automatiques pour les images manquantes
// - Facilite la migration future vers un CDN/CMS
// =============================================================================

// =============================================================================
// PLACEHOLDERS
// =============================================================================

export const placeholders = {
  parfum: '/images/placeholders/parfum-placeholder.jpg',
  product: '/images/placeholders/product-placeholder.jpg',
  bougie: '/images/placeholders/bougie-placeholder.jpg',
  cosmetique: '/images/placeholders/cosmetique-placeholder.jpg',
  atelier: '/images/placeholders/atelier-placeholder.jpg',
  galerie: '/images/placeholders/galerie-placeholder.jpg',
  hero: '/images/placeholders/hero-placeholder.jpg',
  avatar: '/images/placeholders/avatar-placeholder.jpg',
} as const

// =============================================================================
// LOGO
// =============================================================================

export const logo = {
  default: '/images/logo/nezzen-logo.png',
  white: '/images/logo/nezzen-logo-white.png',
  dark: '/images/logo/nezzen-logo-dark.png',
  icon: '/images/logo/nezzen-icon.png',
} as const

// =============================================================================
// HERO & AMBIANCE
// =============================================================================

export const hero = {
  home: '/images/hero/hero-home.jpg',
  creations: '/images/hero/hero-creations.jpg',
  ateliers: '/images/hero/hero-ateliers.jpg',
  contact: '/images/hero/hero-contact.jpg',
  about: '/images/hero/hero-about.jpg',
} as const

// =============================================================================
// PARFUMS
// =============================================================================

export const parfums = {
  // Les Classiques
  'la-bibliotheque': '/images/parfums/la_bibliotheque.png',
  'vetiver-epice': '/images/parfums/vetivier_epice.jpg',
  'fougere-sauvage': '/images/parfums/fougere_sauvage.jpg',
  'doudou': '/images/parfums/doudou.jpg',
  
  // Les Gourmands
  '1001-nuits': '/images/parfums/1001_nuits.jpg',
  'pleine-lune': '/images/parfums/pleine_lune.jpg',
  
  // Les Floraux
  'jasmin-ete': '/images/parfums/jasmin_ete.jpg',
  'new-york': '/images/parfums/new_york.jpg',
  'la-ballerine': '/images/parfums/la_ballerine.jpg',
  'jardin-des-roses': '/images/parfums/jardin_des_roses.jpg',
  'violet-rain': '/images/parfums/violet_rain.jpg',
  
  // Les Voyages / Destinations
  'niwa': '/images/parfums/niwa.jpg',
  'mont-blanc': '/images/parfums/mont_blanc.jpg',
  'terre-de-feu': '/images/parfums/terre_de_feu.jpg',
  'carnaval': '/images/parfums/carnaval.jpg',
  'cefalu': '/images/parfums/cefalu.jpg',
  'verbier': '/images/parfums/verbier.jpg',
  'lemon-tree': '/images/parfums/lemon_tree.jpg',
  'deep-in-a-dream': '/images/parfums/deep_in_a_dream.jpg',
  'fireflies': '/images/parfums/fireflies.jpg',
  'baby-this-night': '/images/parfums/baby_this_night.jpg',
  'road-66': '/images/parfums/road_66.jpg',
} as const

// =============================================================================
// NEZZEN HOME (Bougies & Parfums d'ambiance)
// =============================================================================

export const nezzenHome = {
  // Bougies
  bougies: {
    'sieste-figuiers': '/images/nezzen-home/bougie-figuiers.jpg',
    'sieste-plaid': '/images/nezzen-home/bougie-plaid.jpg',
    'sieste-florence': '/images/nezzen-home/bougie-florence.jpg',
    'sieste-sapin': '/images/nezzen-home/bougie-sapin.jpg',
    default: '/images/nezzen-home/bougie.jpg',
  },
  // Diffuseurs à bâtonnets
  diffuseurs: {
    'souvenir-enfance': '/images/nezzen-home/diffuseur-souvenir.jpg',
    'sieste-figuiers': '/images/nezzen-home/diffuseur-figuiers.jpg',
    'sieste-plaid': '/images/nezzen-home/diffuseur-plaid.jpg',
    'noel-brume': '/images/nezzen-home/diffuseur-noel.jpg',
    default: '/images/nezzen-home/diffuseur.jpg',
  },
  // Sprays d'intérieur
  sprays: {
    'parfum-interieur': '/images/nezzen-home/parfum-interieur.jpg',
    'noel-dans-brume': '/images/nezzen-home/spray-noel.jpg',
    default: '/images/nezzen-home/spray.jpg',
  },
} as const

// =============================================================================
// COSMÉTIQUES
// =============================================================================

export const cosmetiques = {
  gelsDouche: {
    'bibliotheque': '/images/cosmetiques/gel-bibliotheque.jpg',
    'doudou': '/images/cosmetiques/gel-doudou.jpg',
    'niwa': '/images/cosmetiques/gel-niwa.jpg',
    default: '/images/cosmetiques/gel-douche.jpg',
  },
  laitsHydratants: {
    'bibliotheque': '/images/cosmetiques/lait-bibliotheque.jpg',
    'doudou': '/images/cosmetiques/lait-doudou.jpg',
    'niwa': '/images/cosmetiques/lait-niwa.jpg',
    default: '/images/cosmetiques/lait-hydratant.jpg',
  },
} as const

// =============================================================================
// ATELIERS
// =============================================================================

export const ateliers = {
  'decouverte-parfumeur': '/images/ateliers/atelier-decouverte.jpg',
  'creation-bougie': '/images/ateliers/atelier-bougie.jpg',
  'degustation-vin': '/images/ateliers/atelier-vin.jpg',
  'atelier-dinatoire': '/images/ateliers/atelier-dinatoire.jpg',
  'evenement-prive': '/images/ateliers/atelier-prive.jpg',
  'teambuilding': '/images/ateliers/atelier-teambuilding.jpg',
  hero: '/images/ateliers/ateliers-hero.jpg',
  ambiance: '/images/ateliers/ateliers-ambiance.jpg',
} as const

// =============================================================================
// SUR MESURE
// =============================================================================

export const surMesure = {
  particuliers: {
    hero: '/images/sur-mesure/particuliers-hero.jpg',
    process: '/images/sur-mesure/particuliers-process.jpg',
  },
  entreprises: {
    hero: '/images/sur-mesure/entreprises-hero.jpg',
    fragrance: '/images/sur-mesure/service-fragrance.jpg',
    marketing: '/images/sur-mesure/service-marketing.jpg',
    ateliers: '/images/sur-mesure/service-ateliers.jpg',
    cadeaux: '/images/sur-mesure/service-cadeaux.jpg',
  },
} as const

// =============================================================================
// À PROPOS
// =============================================================================

export const about = {
  boutique: {
    exterior: '/images/about/boutique-exterior.jpg',
    interior: '/images/about/boutique-interior.jpg',
    atelier: '/images/about/boutique-atelier.jpg',
  },
  team: {
    romain: '/images/about/romain-pantoustier.jpg',
    aurelie: '/images/about/aurelie-gillon.jpg',
    both: '/images/about/romain-aurelie.jpg',
  },
  certifications: {
    artisan: '/images/about/certification-artisan.png',
    vegan: '/images/about/certification-vegan.png',
    artOlfaction: '/images/about/art-olfaction-awards.png',
  },
} as const

// =============================================================================
// GALERIE
// =============================================================================

export const galerie = {
  boutique: [
    '/images/galerie/boutique-1.jpg',
    '/images/galerie/boutique-2.jpg',
    '/images/galerie/boutique-3.jpg',
  ],
  creation: [
    '/images/galerie/creation-1.jpg',
    '/images/galerie/creation-2.jpg',
    '/images/galerie/creation-3.jpg',
  ],
  produits: [
    '/images/galerie/produits-1.jpg',
    '/images/galerie/produits-2.jpg',
    '/images/galerie/produits-3.jpg',
  ],
  ateliers: [
    '/images/galerie/ateliers-1.jpg',
    '/images/galerie/ateliers-2.jpg',
    '/images/galerie/ateliers-3.jpg',
  ],
  evenements: [
    '/images/galerie/evenements-1.jpg',
    '/images/galerie/evenements-2.jpg',
  ],
} as const

// =============================================================================
// HELPERS
// =============================================================================

/**
 * Récupère l'image d'un parfum par son slug avec fallback
 */
export function getParfumImage(slug: string): string {
  return parfums[slug as keyof typeof parfums] ?? placeholders.parfum
}

/**
 * Récupère l'image d'une bougie par son slug avec fallback
 */
export function getBougieImage(slug: string): string {
  const key = slug.replace('bougie-', '') as keyof typeof nezzenHome.bougies
  return nezzenHome.bougies[key] ?? nezzenHome.bougies.default
}

/**
 * Récupère l'image d'un diffuseur par son slug avec fallback
 */
export function getDiffuseurImage(slug: string): string {
  const key = slug.replace('ambiance-', '') as keyof typeof nezzenHome.diffuseurs
  return nezzenHome.diffuseurs[key] ?? nezzenHome.diffuseurs.default
}

/**
 * Récupère l'image d'un cosmétique par type et parfum
 */
export function getCosmetiqueImage(
  type: 'gel-douche' | 'lait-hydratant',
  parfumSlug: string
): string {
  if (type === 'gel-douche') {
    return cosmetiques.gelsDouche[parfumSlug as keyof typeof cosmetiques.gelsDouche] 
      ?? cosmetiques.gelsDouche.default
  }
  return cosmetiques.laitsHydratants[parfumSlug as keyof typeof cosmetiques.laitsHydratants] 
    ?? cosmetiques.laitsHydratants.default
}

/**
 * Récupère l'image d'un atelier par son slug avec fallback
 */
export function getAtelierImage(slug: string): string {
  return ateliers[slug as keyof typeof ateliers] ?? placeholders.atelier
}

/**
 * Vérifie si une image existe (utile pour les conditionnels)
 * Note: En production, cela devrait vérifier réellement l'existence du fichier
 */
export function imageExists(path: string): boolean {
  // Pour l'instant, on retourne toujours true
  // En Phase 2, on pourra implémenter une vraie vérification
  return !path.includes('placeholder')
}

// =============================================================================
// EXPORT GLOBAL
// =============================================================================

export const images = {
  logo,
  hero,
  parfums,
  nezzenHome,
  cosmetiques,
  ateliers,
  surMesure,
  about,
  galerie,
  placeholders,
} as const

export default images