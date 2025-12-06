// src/data/parfums-ambiance.ts
// =============================================================================
// DONNÉES NEZZEN HOME - NeZ ZeN
// Bougies, Parfums d'ambiance bâtonnets, Parfums d'intérieur (sprays)
// Données réelles depuis nezzen.be
// =============================================================================

import type { ParfumAmbiance, Bougie } from '@/types'

/**
 * Collection des bougies NeZ ZeN
 * Cire de soja naturelle sans OGM - 40h de brûlage
 * Prix: 15€
 */
export const bougies: Bougie[] = [
  {
    id: 'bougie-figuiers',
    slug: 'bougie-sieste-figuiers',
    name: 'Sieste sous les figuiers',
    shortDescription: 'Une note végétale de feuille de figuiers bercée par la douceur de notes ambrées et vanillées.',
    fullDescription: 'Inspirée par une sieste sous les figuiers du jardin de ma grand-mère. Une note végétale de feuille de figuiers bercée par la douceur de notes ambrées et vanillées.',
    burnTime: '40h',
    weight: '200g',
    price: 15,
    image: '/images/nezzen-home/bougie.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'bougie-plaid',
    slug: 'bougie-sieste-plaid',
    name: 'Sieste sous un plaid',
    shortDescription: 'Une note chaleureuse de bois de Santal, une pointe d\'orange et d\'épices.',
    fullDescription: 'Sous un plaid, la neige duveteuse dehors, la sérénité du repos. Une note chaleureuse de bois de Santal, une pointe d\'orange et d\'épices.',
    burnTime: '40h',
    weight: '200g',
    price: 15,
    image: '/images/nezzen-home/bougie.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'bougie-florence',
    slug: 'bougie-sieste-florence',
    name: 'Sieste à Florence',
    shortDescription: 'Une note douce d\'Iris Florentin, de violette sur un fond boisé.',
    fullDescription: 'Comme une balade à Santa Croce. Une note douce d\'Iris Florentin, de violette sur un fond boisé.',
    burnTime: '40h',
    weight: '200g',
    price: 15,
    image: '/images/nezzen-home/bougie.jpg',
    isVegan: true,
  },
  {
    id: 'bougie-sapin',
    slug: 'bougie-sieste-sapin',
    name: 'Sieste sous le sapin',
    shortDescription: 'De douces notes de pommes, cannelle, pin.',
    fullDescription: 'Comme une sieste au pied du sapin. De douces notes de pommes, cannelle, pin.',
    burnTime: '40h',
    weight: '200g',
    price: 15,
    image: '/images/nezzen-home/bougie.jpg',
    isVegan: true,
    isNew: true,
  },
]

/**
 * Collection des parfums d'ambiance NeZ ZeN
 * Diffuseurs à bâtonnets (28€) et Sprays d'intérieur (15-28€)
 */
export const parfumsAmbiance: ParfumAmbiance[] = [
  // ============ DIFFUSEURS À BÂTONNETS (28€) ============
  {
    id: 'ambiance-souvenir-enfance',
    slug: 'souvenir-enfance',
    name: 'Souvenir d\'enfance',
    shortDescription: 'Le velouté de l\'abricot et les notes sucrées et chaudes de la vanille.',
    fullDescription: 'Inspiré par mes souvenirs d\'enfance, tel une madeleine de Proust. Ce parfum d\'ambiance balance entre le velouté de l\'abricot et les notes sucrées et chaudes de la vanille pour une atmosphère douce et réconfortante.',
    type: 'diffuseur',
    duration: '~3 mois',
    coverage: '30m²',
    price: 28,
    image: '/images/nezzen-home/souvenir-enfance.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'ambiance-jardin-sicile',
    slug: 'jardin-sicile',
    name: 'Jardin en Sicile',
    shortDescription: 'Notes fraîches de rosée du matin, d\'herbe fraîche et de zestes d\'agrumes.',
    fullDescription: 'Inspiré par une promenade rafraîchissante et tonique au gré des citronniers à l\'aube de juillet. Ce parfum d\'ambiance vous entourera de notes fraîches de rosée du matin, d\'herbe fraîche et de zestes d\'agrumes fraîchement coupés.',
    type: 'diffuseur',
    duration: '~3 mois',
    coverage: '30m²',
    price: 28,
    image: '/images/nezzen-home/jardin-en-sicile.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'ambiance-vallee-roses',
    slug: 'vallee-roses',
    name: 'Vallée des roses',
    shortDescription: 'Notes délicates de roses, de clous de girofle, de musk et d\'ambre.',
    fullDescription: 'Inspiré par une promenade aux sensations feutrées et apaisantes au gré des rosiers. Ce parfum d\'ambiance vous entourera de notes délicates de roses, de clous de girofle, de musk et d\'ambre pour créer une atmosphère douce et délicate.',
    type: 'diffuseur',
    duration: '~3 mois',
    coverage: '30m²',
    price: 28,
    image: '/images/nezzen-home/vallee-roses.jpg',
    isVegan: true,
  },
  {
    id: 'ambiance-soiree-nil',
    slug: 'soiree-bord-nil',
    name: 'Soirée au bord du Nil',
    shortDescription: 'Notes douces et envoûtantes de jasmin, d\'ylang ylang, de violette et d\'ambre.',
    fullDescription: 'Inspiré par les voyages au Caire où les soirs d\'été les marchands ambulants vous vendent des colliers de fleurs de jasmin. Ce parfum d\'ambiance vous entourera de notes douces et envoûtantes de jasmin, d\'ylang ylang, de violette et d\'ambre.',
    type: 'diffuseur',
    duration: '~3 mois',
    coverage: '30m²',
    price: 28,
    image: '/images/nezzen-home/soiree-bord-du-nil.jpg',
    isVegan: true,
  },
  {
    id: 'ambiance-balade-provence',
    slug: 'balade-provence',
    name: 'Balade en Provence',
    shortDescription: 'Les champs de lavande provençaux.',
    fullDescription: 'Inspiré par mes origines du Sud de la France, ce parfum d\'ambiance vous amènera dans les champs de lavande provençaux.',
    type: 'diffuseur',
    duration: '~3 mois',
    coverage: '30m²',
    price: 28,
    image: '/images/nezzen-home/balade-en-provence.jpg',
    isVegan: true,
  },
  {
    id: 'ambiance-chicago-jazz',
    slug: 'chicago-jazz-club',
    name: 'Chicago Jazz Club',
    shortDescription: 'Notes de Orange, Pin Sylvestre, Cèdre, Santal Ambré.',
    fullDescription: 'Inspiré par une soirée au Andy\'s Jazz Club de Chicago. Baignez votre intérieur dans des notes de Orange, Pin Sylvestre, Cèdre, Santal Ambré...',
    type: 'diffuseur',
    duration: '~3 mois',
    coverage: '30m²',
    price: 28,
    image: '/images/nezzen-home/chicago-jazz-club.jpg',
    isVegan: true,
    isFeatured: true,
  },

  // ============ PARFUMS D'INTÉRIEUR / SPRAYS ============
  {
    id: 'spray-foret-brume',
    slug: 'foret-dans-brume',
    name: 'Forêt dans la brume',
    shortDescription: 'Une odeur fraîche et chaude de forêt pour votre intérieur.',
    fullDescription: 'Inspiré par une balade en forêt, une odeur fraîche et chaude de forêt pour votre intérieur. Pin Sylvestre, Cèdre Atlas, Accord Ambré.',
    type: 'spray',
    price: 28,
    image: '/images/nezzen-home/parfum-interieur.jpg',
    isVegan: true,
  },
  {
    id: 'spray-meditation-brume',
    slug: 'meditation-dans-brume',
    name: 'Méditation dans la brume',
    shortDescription: 'Une odeur apaisante pour un moment de sérénité.',
    fullDescription: 'À la recherche d\'une odeur apaisante pour votre intérieur? Un moment pour s\'endormir, une bulle de lecture apaisée ou une ambiance aérienne? Agrumes, Lavande, Cèdre de l\'Atlas.',
    type: 'spray',
    price: 28,
    image: '/images/nezzen-home/parfum-interieur.jpg',
    isVegan: true,
  },
  {
    id: 'spray-noel-brume',
    slug: 'noel-dans-brume',
    name: 'Noël dans la brume',
    shortDescription: 'L\'esprit de Noël pour votre intérieur.',
    fullDescription: 'À la recherche d\'une odeur apaisante pour votre intérieur? Un moment pour s\'endormir, une bulle de lecture apaisée ou une ambiance aérienne? Pomme, Cannelle, Santal.',
    type: 'spray',
    price: 15,
    image: '/images/nezzen-home/parfum-interieur.jpg',
    isVegan: true,
    isNew: true,
  },
]

// =============================================================================
// FONCTIONS UTILITAIRES
// =============================================================================

/**
 * Récupérer les bougies mises en avant
 */
export function getFeaturedBougies(): Bougie[] {
  return bougies.filter((b) => b.isFeatured)
}

/**
 * Récupérer toutes les bougies
 */
export function getAllBougies(): Bougie[] {
  return bougies
}

/**
 * Récupérer une bougie par son slug
 */
export function getBougieBySlug(slug: string): Bougie | undefined {
  return bougies.find((b) => b.slug === slug)
}

/**
 * Récupérer les parfums d'ambiance mis en avant
 */
export function getFeaturedParfumsAmbiance(): ParfumAmbiance[] {
  return parfumsAmbiance.filter((p) => p.isFeatured)
}

/**
 * Récupérer tous les parfums d'ambiance
 */
export function getAllParfumsAmbiance(): ParfumAmbiance[] {
  return parfumsAmbiance
}

/**
 * Récupérer un parfum d'ambiance par son slug
 */
export function getParfumAmbianceBySlug(slug: string): ParfumAmbiance | undefined {
  return parfumsAmbiance.find((p) => p.slug === slug)
}

/**
 * Récupérer les diffuseurs à bâtonnets
 */
export function getDiffuseurs(): ParfumAmbiance[] {
  return parfumsAmbiance.filter((p) => p.type === 'diffuseur')
}

/**
 * Récupérer les sprays d'intérieur
 */
export function getSprays(): ParfumAmbiance[] {
  return parfumsAmbiance.filter((p) => p.type === 'spray')
}