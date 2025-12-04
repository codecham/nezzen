// src/data/parfums.ts
import type { Parfum } from '@/types'

/**
 * Collection des parfums NeZ ZeN
 * Images à placer dans /public/images/parfums/[slug].jpg
 */
export const parfums: Parfum[] = [
  // ============ LES CLASSIQUES ============
  {
    id: 'jasmin-ete',
    slug: 'jasmin-ete',
    name: "Jasmin d'été",
    category: 'classiques',
    shortDescription: 'Une interprétation moderne et rafraîchissante de ce classique de la parfumerie.',
    fullDescription: 'Jasmin chaud très floral agrémenté d\'ylang et de rose. Avec des notes chaudes rafraîchies par des agrumes et épicées par l\'ambre et le clou de girofle.',
    notes: {
      tete: ['Agrumes'],
      coeur: ['Rose', 'Ylang Ylang', 'Jasmin'],
      fond: ['Ambre', 'Violette', 'Clou de girofle'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/jasmin_ete.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'fougere-sauvage',
    slug: 'fougere-sauvage',
    name: 'Fougère sauvage',
    category: 'classiques',
    shortDescription: 'Une version sauvage et revisitée de ce grand classique.',
    fullDescription: 'Une fougère fraîche et aromatique aux facettes multiples de bergamote, néroli, lavande, géranium et patchouli.',
    notes: {
      tete: ['Bergamote', 'Citron', 'Orange'],
      coeur: ['Géranium', 'Lavande', 'Framboise'],
      fond: ['Patchouli', 'Coco', 'Ambre'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/fougere_sauvage.jpg',
    isVegan: true,
  },
  {
    id: 'vetiver-epice',
    slug: 'vetiver-epice',
    name: 'Vetiver épicé',
    category: 'classiques',
    shortDescription: 'Typique de la parfumerie masculine, ce vetiver est empli de finesse et de pureté.',
    fullDescription: 'Un vetiver profond de très grande qualité souligné par des notes légères fruitées de kumquat et de groseille; enrichi de l\'intensité boisée du cèdre de Virginie.',
    notes: {
      tete: ['Kumquat', 'Groseille'],
      coeur: ['Vetiver', 'Curcuma'],
      fond: ['Cèdre de Virginie', 'Ambre gris'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/vetiver_epice.jpg',
    isVegan: true,
  },
  {
    id: 'jardin-roses',
    slug: 'jardin-roses',
    name: 'Jardin des roses',
    category: 'classiques',
    shortDescription: 'Une variante douce poudrée et fraîche combinant la douceur et l\'énergie.',
    fullDescription: 'Cette rose combine à la fois la fraîcheur du géranium et d\'agrumes soulignée par une note de pomme, ainsi que la volupté florale de la rose, de la violette et du jasmin enrichie de notes boisées.',
    notes: {
      tete: ['Pomme', 'Citron', 'Bergamote'],
      coeur: ['Rose', 'Géranium', 'Jasmin', 'Violette'],
      fond: ['Cèdre', 'Musc', 'Ambre'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/jardin_des_roses.jpg',
    isVegan: true,
    isFeatured: true,
  },
  // ============ LES VOYAGES ============
  {
    id: 'baby-this-night',
    slug: 'baby-this-night',
    name: 'Baby this night',
    category: 'voyages',
    shortDescription: 'Inspiré de la chanson qui a ouvert notre mariage.',
    fullDescription: 'Ce parfum vous transportera au gré de notes épicées et chaleureuses. Une création romantique et enveloppante.',
    notes: {
      tete: ['Bergamote', 'Poivre rose'],
      coeur: ['Cannelle', 'Rose', 'Iris'],
      fond: ['Vanille', 'Bois de santal', 'Musc'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/baby_this_night.jpg',
    isVegan: true,
    isNew: true,
    isFeatured: true,
  },
  {
    id: 'la-bibliotheque',
    slug: 'la-bibliotheque',
    name: 'La Bibliothèque',
    category: 'voyages',
    shortDescription: 'Finaliste Art & Olfaction Awards 2019.',
    fullDescription: 'Un voyage olfactif entre les pages anciennes et le cuir des reliures. Une création qui a été reconnue parmi l\'élite mondiale de la parfumerie indépendante.',
    notes: {
      tete: ['Bergamote', 'Thé noir'],
      coeur: ['Cuir', 'Tabac', 'Oud'],
      fond: ['Vanille', 'Benjoin', 'Papyrus'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/la_bibliotheque.jpg',
    isVegan: true,
    isFeatured: true,
    awards: ['Finaliste Art & Olfaction Awards 2019'],
  },
]

/**
 * Récupérer les parfums mis en avant
 */
export function getFeaturedParfums(limit?: number): Parfum[] {
  const featured = parfums.filter((p) => p.isFeatured)
  return limit ? featured.slice(0, limit) : featured
}

/**
 * Récupérer un parfum par son slug
 */
export function getParfumBySlug(slug: string): Parfum | undefined {
  return parfums.find((p) => p.slug === slug)
}

/**
 * Récupérer les parfums par catégorie
 */
export function getParfumsByCategory(category: string): Parfum[] {
  return parfums.filter((p) => p.category === category)
}
