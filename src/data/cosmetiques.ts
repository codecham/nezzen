// src/data/cosmetiques.ts
// =============================================================================
// DONNÉES COSMÉTIQUES - NeZ ZeN
// Données réelles depuis nezzen.be
// =============================================================================

import type { Cosmetique } from '@/types'

/**
 * Collection des cosmétiques NeZ ZeN
 * Gels douche (9,80€) et laits hydratants (16,50€)
 * Base noix de coco 100% naturelle, hypoallergéniques
 */
export const cosmetiques: Cosmetique[] = [
  // ============ GELS DOUCHE (9,80€) ============
  {
    id: 'gel-douche-tiare-ylang',
    slug: 'gel-douche-tiare-ylang',
    name: 'Gel Douche Fleur de Tiaré & Ylang Ylang',
    type: 'gel-douche',
    shortDescription: 'Profitez de la douceur du Tiaré mêlée à la sérénité de l\'Ylang Ylang.',
    fullDescription: 'À base d\'agents lavants issus de la noix de coco 100% naturelle et renouvelable. Profitez de la douceur du Tiaré mêlée à la sérénité de l\'Ylang Ylang.',
    volume: '200ml',
    price: 9.80,
    image: '/images/cosmetiques/gel-douche.png',
    isVegan: true,
    isFeatured: true,
    ingredients: [
      'Agents lavants noix de coco',
      '100% naturel',
      'Sans parabène',
    ],
  },
  {
    id: 'gel-douche-orange-mangue',
    slug: 'gel-douche-orange-mangue',
    name: 'Gel Douche Orange & Mangue',
    type: 'gel-douche',
    shortDescription: 'Profitez de la fraîcheur des agrumes mêlée à l\'exotisme fruité de la mangue.',
    fullDescription: 'À base d\'agents lavants issus de la noix de coco 100% naturelle et renouvelable. Profitez de la fraîcheur des agrumes mêlée à l\'exotisme fruité de la mangue.',
    volume: '200ml',
    price: 9.80,
    image: '/images/cosmetiques/gel-douche.png',
    isVegan: true,
    isFeatured: true,
    ingredients: [
      'Agents lavants noix de coco',
      '100% naturel',
      'Sans parabène',
    ],
  },
  {
    id: 'gel-douche-citron-gingembre',
    slug: 'gel-douche-citron-gingembre',
    name: 'Gel Douche Citron & Gingembre',
    type: 'gel-douche',
    shortDescription: 'Profitez de la vivacité du citron mêlée à la tonicité du gingembre.',
    fullDescription: 'À base d\'agents lavants issus de la noix de coco 100% naturelle et renouvelable. Profitez de la vivacité du citron mêlée à la tonicité du gingembre.',
    volume: '200ml',
    price: 9.80,
    image: '/images/cosmetiques/gel-douche.png',
    isVegan: true,
    ingredients: [
      'Agents lavants noix de coco',
      '100% naturel',
      'Sans parabène',
    ],
  },

  // ============ LAITS HYDRATANTS (16,50€) ============
  {
    id: 'lait-tiare-ylang',
    slug: 'lait-tiare-ylang',
    name: 'Lait Hydratant Fleur de Tiaré & Ylang Ylang',
    type: 'lait-hydratant',
    shortDescription: 'Profitez de la douceur du Tiaré mêlée à la sérénité de l\'Ylang Ylang.',
    fullDescription: 'À base de matières premières 100% naturelles et renouvelables. Profitez de la douceur du Tiaré mêlée à la sérénité de l\'Ylang Ylang.',
    volume: '200ml',
    price: 16.50,
    image: '/images/cosmetiques/lait-hydratant.png',
    isVegan: true,
    isFeatured: true,
    ingredients: [
      'Matières premières naturelles',
      '100% naturel',
      'Sans parabène',
    ],
  },
  {
    id: 'lait-citron-gingembre',
    slug: 'lait-citron-gingembre',
    name: 'Lait Hydratant Citron & Gingembre',
    type: 'lait-hydratant',
    shortDescription: 'Profitez de la vivacité du citron mêlée à la tonicité du gingembre.',
    fullDescription: 'À base de matières premières 100% naturelles et renouvelables. Profitez de la vivacité du citron mêlée à la tonicité du gingembre.',
    volume: '200ml',
    price: 16.50,
    image: '/images/cosmetiques/lait-hydratant.png',
    isVegan: true,
    ingredients: [
      'Matières premières naturelles',
      '100% naturel',
      'Sans parabène',
    ],
  },
]

/**
 * Récupérer les cosmétiques mis en avant
 */
export function getFeaturedCosmetiques(): Cosmetique[] {
  return cosmetiques.filter((c) => c.isFeatured)
}

/**
 * Récupérer tous les cosmétiques
 */
export function getAllCosmetiques(): Cosmetique[] {
  return cosmetiques
}

/**
 * Récupérer un cosmétique par son slug
 */
export function getCosmetiqueBySlug(slug: string): Cosmetique | undefined {
  return cosmetiques.find((c) => c.slug === slug)
}

/**
 * Récupérer les gels douche
 */
export function getGelsDouche(): Cosmetique[] {
  return cosmetiques.filter((c) => c.type === 'gel-douche')
}

/**
 * Récupérer les laits hydratants
 */
export function getLaitsHydratants(): Cosmetique[] {
  return cosmetiques.filter((c) => c.type === 'lait-hydratant')
}