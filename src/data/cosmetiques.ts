// src/data/cosmetiques.ts
// Données réelles collectées depuis nezzen.be

import type { Cosmetique } from '@/types'

/**
 * Collection des cosmétiques NeZ ZeN
 * Gels douche et laits hydratants parfumés
 * Base noix de coco, hypoallergéniques, sans parabène
 */
export const cosmetiques: Cosmetique[] = [
  // ============ GELS DOUCHE ============
  {
    id: 'gel-douche-bibliotheque',
    slug: 'gel-douche-bibliotheque',
    name: 'Gel Douche La Bibliothèque',
    type: 'gel-douche',
    shortDescription: 'Le parfum iconique de La Bibliothèque en gel douche.',
    fullDescription: 'Retrouvez les notes envoûtantes de notre parfum La Bibliothèque dans un gel douche doux et hydratant. Base noix de coco, hypoallergénique et sans parabène.',
    volume: '200ml',
    price: 18,
    image: '/images/cosmetiques/gel_bibliotheque.jpg',
    isVegan: true,
    isFeatured: true,
    ingredients: [
      'Base noix de coco',
      'Parfum La Bibliothèque',
      'Sans parabène',
      'Hypoallergénique',
    ],
  },
  {
    id: 'gel-douche-niwa',
    slug: 'gel-douche-niwa',
    name: 'Gel Douche Niwa',
    type: 'gel-douche',
    shortDescription: 'La fraîcheur des jardins japonais sous la douche.',
    fullDescription: 'Découvrez la fraîcheur unique de Niwa dans un gel douche revigorant. Base noix de coco, hypoallergénique et sans parabène.',
    volume: '200ml',
    price: 18,
    image: '/images/cosmetiques/gel_niwa.jpg',
    isVegan: true,
    isFeatured: true,
    ingredients: [
      'Base noix de coco',
      'Parfum Niwa',
      'Sans parabène',
      'Hypoallergénique',
    ],
  },
  {
    id: 'gel-douche-terre-de-feu',
    slug: 'gel-douche-terre-de-feu',
    name: 'Gel Douche Terre de Feu',
    type: 'gel-douche',
    shortDescription: 'L\'aventure commence sous la douche.',
    fullDescription: 'Les notes boisées et épicées de Terre de Feu dans un gel douche énergisant. Base noix de coco, hypoallergénique et sans parabène.',
    volume: '200ml',
    price: 18,
    image: '/images/cosmetiques/gel_terre_de_feu.jpg',
    isVegan: true,
    ingredients: [
      'Base noix de coco',
      'Parfum Terre de Feu',
      'Sans parabène',
      'Hypoallergénique',
    ],
  },

  // ============ LAITS HYDRATANTS ============
  {
    id: 'lait-bibliotheque',
    slug: 'lait-bibliotheque',
    name: 'Lait Hydratant La Bibliothèque',
    type: 'lait-hydratant',
    shortDescription: 'Hydratez-vous avec les notes de La Bibliothèque.',
    fullDescription: 'Un lait hydratant onctueux aux notes envoûtantes de La Bibliothèque. Nourrissant et non gras, il laisse la peau douce et délicatement parfumée.',
    volume: '200ml',
    price: 20,
    image: '/images/cosmetiques/lait_bibliotheque.jpg',
    isVegan: true,
    isFeatured: true,
    ingredients: [
      'Base noix de coco',
      'Parfum La Bibliothèque',
      'Sans parabène',
      'Hypoallergénique',
    ],
  },
  {
    id: 'lait-niwa',
    slug: 'lait-niwa',
    name: 'Lait Hydratant Niwa',
    type: 'lait-hydratant',
    shortDescription: 'La fraîcheur de Niwa pour votre peau.',
    fullDescription: 'Un lait hydratant léger et frais aux notes de Niwa. Pénètre rapidement et laisse la peau douce et parfumée.',
    volume: '200ml',
    price: 20,
    image: '/images/cosmetiques/lait_niwa.jpg',
    isVegan: true,
    isFeatured: true,
    ingredients: [
      'Base noix de coco',
      'Parfum Niwa',
      'Sans parabène',
      'Hypoallergénique',
    ],
  },
  {
    id: 'lait-terre-de-feu',
    slug: 'lait-terre-de-feu',
    name: 'Lait Hydratant Terre de Feu',
    type: 'lait-hydratant',
    shortDescription: 'L\'aventure continue sur votre peau.',
    fullDescription: 'Un lait hydratant aux notes boisées et épicées de Terre de Feu. Nourrit intensément et laisse un sillage subtil.',
    volume: '200ml',
    price: 20,
    image: '/images/cosmetiques/lait_terre_de_feu.jpg',
    isVegan: true,
    ingredients: [
      'Base noix de coco',
      'Parfum Terre de Feu',
      'Sans parabène',
      'Hypoallergénique',
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