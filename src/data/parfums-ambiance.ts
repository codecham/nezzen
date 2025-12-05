// src/data/parfums-ambiance.ts
// Données réelles collectées depuis nezzen.be

import type { ParfumAmbiance, Bougie } from '@/types'

/**
 * Collection des parfums d'ambiance NeZ ZeN
 * Diffuseurs à bâtonnets et sprays d'intérieur
 */
export const parfumsAmbiance: ParfumAmbiance[] = [
  {
    id: 'ambiance-rose',
    slug: 'ambiance-rose',
    name: 'Rose Délicate',
    shortDescription: 'Une atmosphère douce et délicate.',
    fullDescription: 'Ce parfum d\'ambiance vous entourera de notes délicates de roses, de clous de girofle, de musc et d\'ambre pour créer une atmosphère douce et délicate.',
    type: 'diffuseur',
    duration: '3 mois',
    coverage: '30m²',
    price: 35,
    image: '/images/ambiance/rose_delicate.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'ambiance-citronnier',
    slug: 'ambiance-citronnier',
    name: 'Aube de Juillet',
    shortDescription: 'Une promenade rafraîchissante au gré des citronniers.',
    fullDescription: 'Inspiré par une promenade rafraîchissante et tonique au gré des citronniers à l\'aube de juillet. Ce parfum d\'ambiance vous entourera de notes fraîches de rosée du matin, d\'herbe fraîche et de zestes d\'agrumes fraîchement coupés.',
    type: 'diffuseur',
    duration: '3 mois',
    coverage: '30m²',
    price: 35,
    image: '/images/ambiance/aube_juillet.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'ambiance-jasmin-caire',
    slug: 'ambiance-jasmin-caire',
    name: 'Nuits du Caire',
    shortDescription: 'Les soirs d\'été où les marchands vendent des colliers de jasmin.',
    fullDescription: 'Inspiré par les voyages au Caire où les soirs d\'été les marchands ambulants vous vendent des colliers de fleurs de jasmin. Ce parfum d\'ambiance vous entourera de notes douces et envoûtantes de jasmin, d\'ylang-ylang, de violette et d\'ambre.',
    type: 'diffuseur',
    duration: '3 mois',
    coverage: '30m²',
    price: 35,
    image: '/images/ambiance/nuits_caire.jpg',
    isVegan: true,
  },
  {
    id: 'ambiance-madeleine',
    slug: 'ambiance-madeleine',
    name: 'Madeleine de Proust',
    shortDescription: 'Inspiré par les souvenirs d\'enfance.',
    fullDescription: 'Inspiré par mes souvenirs d\'enfance, tel une madeleine de Proust. Ce parfum d\'ambiance balance entre le velouté de l\'abricot et les notes sucrées et chaudes de la vanille pour une atmosphère douce et réconfortante.',
    type: 'diffuseur',
    duration: '3 mois',
    coverage: '30m²',
    price: 35,
    image: '/images/ambiance/madeleine_proust.jpg',
    isVegan: true,
  },
  {
    id: 'ambiance-lavande',
    slug: 'ambiance-lavande',
    name: 'Champs de Lavande',
    shortDescription: 'Les cueillettes dans les champs de lavandes.',
    fullDescription: 'Inspiré par mon pays d\'origine et les cueillettes dans les champs de lavandes. Ce parfum d\'ambiance balance entre le pétillant des agrumes et la fraîcheur aromatique de la lavande pour donner une atmosphère printanière à votre pièce.',
    type: 'diffuseur',
    duration: '3 mois',
    coverage: '30m²',
    price: 35,
    image: '/images/ambiance/champs_lavande.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'ambiance-pluie',
    slug: 'ambiance-pluie',
    name: 'Après l\'Averse',
    shortDescription: 'La fraîcheur après une belle averse.',
    fullDescription: 'Inspiré par les rayons de soleil après une belle averse qui dégage une sensation unique de fraîcheur revigorante. Ce parfum d\'ambiance vous entourera de notes d\'herbes humides et de soleil.',
    type: 'diffuseur',
    duration: '3 mois',
    coverage: '30m²',
    price: 35,
    image: '/images/ambiance/apres_averse.jpg',
    isVegan: true,
  },
]

/**
 * Collection des bougies parfumées NeZ ZeN
 */
export const bougies: Bougie[] = [
  {
    id: 'bougie-detente',
    slug: 'bougie-detente',
    name: 'Instant Détente',
    shortDescription: 'Une bougie pour un moment de relaxation.',
    fullDescription: 'Laissez-vous envelopper par cette bougie aux notes apaisantes, idéale pour vos moments de détente et de méditation.',
    burnTime: '40h',
    weight: '200g',
    price: 32,
    image: '/images/bougies/instant_detente.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'bougie-cocooning',
    slug: 'bougie-cocooning',
    name: 'Soirée Cocooning',
    shortDescription: 'L\'ambiance parfaite pour une soirée à la maison.',
    fullDescription: 'Créez une atmosphère chaleureuse et enveloppante avec cette bougie aux notes gourmandes et réconfortantes.',
    burnTime: '40h',
    weight: '200g',
    price: 32,
    image: '/images/bougies/soiree_cocooning.jpg',
    isVegan: true,
    isFeatured: true,
  },
]

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