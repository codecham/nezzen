// src/data/parfums.ts
// Données réelles collectées depuis nezzen.be et Fragrantica

import type { Parfum } from '@/types'

/**
 * Collection complète des parfums NeZ ZeN
 * 15 parfums listés sur Fragrantica + parfums additionnels
 * Créateur : Romain Pantoustier
 */
export const parfums: Parfum[] = [
  // ============ LES CLASSIQUES ============
  {
    id: 'la-bibliotheque',
    slug: 'la-bibliotheque',
    name: 'La Bibliothèque',
    category: 'classiques',
    shortDescription: 'Finaliste Art & Olfaction Awards 2019.',
    fullDescription: 'Dans cette pièce aux vieilles boiseries, sur un sofa en cuir, je voyage à travers les pages jaunies par le temps. Un patchouli très précieux sublimé par les épices, le bois et le cuir.',
    notes: {
      tete: ['Amande', 'Cèdre', 'Jasmin'],
      coeur: ['Bois de santal', 'Patchouli', 'Cuir'],
      fond: ['Fève de tonka', 'Ambre', 'Vanille', 'Musc', 'Clou de girofle'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/la_bibliotheque.png',
    isVegan: true,
    isFeatured: true,
    awards: ['Finaliste Art & Olfaction Awards 2019'],
  },
  {
    id: 'vetiver-epice',
    slug: 'vetiver-epice',
    name: 'Vetiver Épicé',
    category: 'classiques',
    shortDescription: 'Un vetiver profond de très grande qualité.',
    fullDescription: 'Typique de la parfumerie masculine, ce vetiver est plein de finesse et de pureté. Un vetiver profond de très grande qualité souligné par des notes légères fruitées de kumquat et de groseille ; enrichi de l\'intensité boisée du cèdre de Virginie.',
    notes: {
      tete: ['Kumquat', 'Groseille rouge'],
      coeur: ['Vétiver', 'Curcuma'],
      fond: ['Ambre gris', 'Cèdre de Virginie'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/vetivier_epice.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'fougere-sauvage',
    slug: 'fougere-sauvage',
    name: 'Fougère Sauvage',
    category: 'classiques',
    shortDescription: 'Une fougère fraîche et aromatique aux facettes multiples.',
    fullDescription: 'Une version sauvage et revisitée de ce grand classique. Une fougère fraîche et aromatique aux facettes multiples de bergamote, néroli, lavande, géranium et patchouli.',
    notes: {
      tete: ['Bergamote', 'Néroli'],
      coeur: ['Lavande', 'Géranium'],
      fond: ['Patchouli', 'Mousse de chêne'],
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
    id: 'l-indomptable',
    slug: 'l-indomptable',
    name: 'L\'Indomptable',
    category: 'classiques',
    shortDescription: 'Une ode à la force et la noblesse des notes boisées.',
    fullDescription: 'Cette fragrance unit la puissance animale du lion indomptable et la puissance végétale de la forêt impénétrable. Une ode à la force et à la noblesse des notes boisées réunissant cèdre, chêne, bois de santal soulignés par une pointe de fève de tonka et de vétiver.',
    notes: {
      tete: ['Bergamote'],
      coeur: ['Vétiver', 'Fève de tonka'],
      fond: ['Mousse de chêne', 'Bois de santal', 'Cèdre'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/indomptable.jpg',
    isVegan: true,
  },

  // ============ LES FLORAUX ============
  {
    id: 'jardin-des-roses',
    slug: 'jardin-des-roses',
    name: 'Jardin des Roses',
    category: 'floraux',
    shortDescription: 'La rose, ingrédient intemporel avec ses mille senteurs.',
    fullDescription: 'Typique de la parfumerie féminine, la rose est un ingrédient intemporel avec ses mille senteurs. Cette rose combine à la fois la fraîcheur du géranium et d\'agrumes soulignée par une note de pomme, ainsi que la volupté florale de la rose, de la violette et du jasmin enrichie de notes boisées.',
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
  {
    id: 'jasmin-d-ete',
    slug: 'jasmin-d-ete',
    name: 'Jasmin d\'Été',
    category: 'floraux',
    shortDescription: 'Un jasmin chaud très floral agrémenté d\'ylang et de rose.',
    fullDescription: 'Découvrez une interprétation moderne et rafraîchissante de ce classique de la parfumerie. Un jasmin chaud très floral agrémenté d\'ylang et de rose. Avec des notes chaudes rafraîchies par des agrumes et épicées par l\'ambre et le clou de girofle.',
    notes: {
      tete: ['Agrumes', 'Bergamote'],
      coeur: ['Jasmin', 'Ylang-Ylang', 'Rose'],
      fond: ['Ambre', 'Clou de girofle', 'Musc'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/jasmin_ete.jpg',
    isVegan: true,
  },
  {
    id: 'new-york',
    slug: 'new-york',
    name: 'New York',
    category: 'floraux',
    shortDescription: 'Une tubéreuse pure et très classe.',
    fullDescription: 'Une tubéreuse pure et très classe, légèrement poudrée et cosmétique. Un parfum qui sent naturel grâce à la qualité des ingrédients et de la composition.',
    notes: {
      tete: ['Rose', 'Fleur d\'oranger'],
      coeur: ['Tubéreuse', 'Jasmin'],
      fond: ['Ambre gris', 'Musc blanc'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/new_york.jpg',
    isVegan: true,
  },
  {
    id: 'la-ballerine',
    slug: 'la-ballerine',
    name: 'La Ballerine',
    category: 'floraux',
    shortDescription: 'Une ode aux danseuses, légèreté d\'un tutu et énergie d\'un grand jeté.',
    fullDescription: 'Une ode aux danseuses, cette création inspirée par la légèreté d\'un tutu et l\'énergie d\'un grand jeté combine des notes blanches poudrées avec une légère note d\'agrumes.',
    notes: {
      tete: ['Tilleul', 'Néroli'],
      coeur: ['Rose', 'Ylang-Ylang'],
      fond: ['Musc', 'Cèdre'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/la_ballerine.jpg',
    isVegan: true,
  },

  // ============ LES VOYAGES ============
  {
    id: 'niwa',
    slug: 'niwa',
    name: 'Niwa',
    category: 'voyages',
    shortDescription: 'Une fraîcheur unique inspirée des jardins japonais.',
    fullDescription: 'Une fraîcheur unique en son genre inspirée du vent dans les bambous, par la sérénité et la puissance des jardins japonais. Niwa signifie "jardin" en japonais.',
    notes: {
      tete: ['Cassis', 'Pamplemousse rose'],
      coeur: ['Feuille de figuier', 'Iris'],
      fond: ['Poivre', 'Mousse de chêne'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/niwa.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'mont-blanc',
    slug: 'mont-blanc',
    name: 'Mont Blanc',
    category: 'voyages',
    shortDescription: 'La pureté des sommets enneigés.',
    fullDescription: 'Un parfum qui combine la pureté des sommets enneigés, la force de la roche ancienne et la fraîcheur des pâturages de montagne.',
    notes: {
      tete: ['Menthe', 'Cassis', 'Pastèque'],
      coeur: ['Muguet', 'Galbanum', 'Myrrhe'],
      fond: ['Coriandre', 'Ambre', 'Bois de Gaïac'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/mont_blanc.jpg',
    isVegan: true,
  },
  {
    id: 'terre-de-feu',
    slug: 'terre-de-feu',
    name: 'Terre de Feu',
    category: 'voyages',
    shortDescription: 'Une ode à l\'aventurier vers des terres inconnues.',
    fullDescription: 'Un parfum qui vous fera voyager vers des terres inconnues, brutes, sauvages... une ode à l\'aventurier. Alliant la force de la nature et son côté sauvage, ce parfum très affirmé combine les notes de bois, de sous-bois avec la fraîcheur du citron et du poivre.',
    notes: {
      tete: ['Orange', 'Pamplemousse', 'Framboise'],
      coeur: ['Bois exotiques'],
      fond: ['Ambre', 'Poivre'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/terre_de_feu.jpg',
    isVegan: true,
    isFeatured: true,
  },
  {
    id: 'carnaval',
    slug: 'carnaval',
    name: 'Carnaval',
    category: 'voyages',
    shortDescription: 'Inspiré par les notes du folklore carnavalesque.',
    fullDescription: 'Inspiré par les notes du folklore carnavalesque, chaud en couleur et en émotion pour une journée pleine de peps et de fraîcheur. Cette fragrance dégage de la fraîcheur grâce à sa multitude d\'agrumes soulignés par la profondeur épicée de la marjolaine et de l\'ylang-ylang.',
    notes: {
      tete: ['Citron', 'Myrte', 'Orange amère'],
      coeur: ['Ylang-Ylang', 'Marjolaine'],
      fond: ['Musc', 'Benjoin'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/carnaval.jpg',
    isVegan: true,
  },

  // ============ LES GOURMANDS ============
  {
    id: '1001-nuits',
    slug: '1001-nuits',
    name: '1001 Nuits',
    category: 'gourmands',
    shortDescription: 'Un parfum doux, sucré, chaud et épicé.',
    fullDescription: 'Ce parfum est doux, sucré, chaud relevé par des notes épicées et quelques notes de fleurs blanches. Un voyage oriental envoûtant.',
    notes: {
      tete: ['Pomme', 'Poire', 'Fraise'],
      coeur: ['Jasmin', 'Noix de coco', 'Cannelle'],
      fond: ['Fève de tonka', 'Vanille', 'Clou de girofle'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/1001_nuits.jpg',
    isVegan: true,
  },
  {
    id: 'earl-grey',
    slug: 'earl-grey',
    name: 'Earl Grey',
    category: 'gourmands',
    shortDescription: 'Inspiré par le célèbre thé anglais.',
    fullDescription: 'Une création inspirée par le célèbre thé anglais, avec ses notes de bergamote caractéristiques et une touche de sophistication britannique.',
    notes: {
      tete: ['Bergamote', 'Agrumes'],
      coeur: ['Thé noir', 'Fleurs blanches'],
      fond: ['Bois', 'Musc'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/earl_grey.png',
    isVegan: true,
  },
  {
    id: 'pleine-lune',
    slug: 'pleine-lune',
    name: 'Pleine Lune',
    category: 'gourmands',
    shortDescription: 'Laissez-vous envoûter par le côté sensuel et mystique.',
    fullDescription: 'Laissez-vous envoûter par le côté sensuel et mystique de ce parfum. Une fragrance délicate qui marie les notes chyprées et musquées avec une pointe de violette pour lui donner cette petite touche de sensualité.',
    notes: {
      tete: ['Feuille de violette', 'Agrumes'],
      coeur: ['Rose', 'Tubéreuse'],
      fond: ['Bois précieux', 'Patchouli'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/pleine_lune.jpg',
    isVegan: true,
  },

  // ============ LES INSPIRATIONS MUSICALES ============
  {
    id: 'baby-this-night',
    slug: 'baby-this-night',
    name: 'Baby This Night',
    category: 'voyages',
    shortDescription: 'Inspiré de la chanson qui a ouvert notre mariage.',
    fullDescription: 'Ce parfum vous transportera au gré de notes épicées et chaleureuses. Inspiré de la chanson qui a ouvert le mariage des fondateurs, une création romantique et enveloppante.',
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
    id: 'violet-rain',
    slug: 'violet-rain',
    name: 'Violet Rain',
    category: 'voyages',
    shortDescription: 'Une fraîcheur pétillante aux notes acidulées.',
    fullDescription: 'Une fraîcheur pétillante aux notes acidulées, transparente comme une pluie violette avec une pointe réconfortante. Inspiré par Prince et son univers musical.',
    notes: {
      tete: ['Poire', 'Fruit de la passion', 'Pamplemousse rose'],
      coeur: ['Violette', 'Fleurs blanches'],
      fond: ['Musc', 'Bois blanc'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/violet_rain.jpg',
    isVegan: true,
  },
  {
    id: 'lemon-tree',
    slug: 'lemon-tree',
    name: 'Lemon Tree',
    category: 'voyages',
    shortDescription: 'Et pourquoi ne pas réinventer les notes d\'agrumes...',
    fullDescription: 'Entre fruits, feuilles, fleurs et troncs, découvrez un agrume qui vous fera découvrir le citron autrement. Inspiré par la chanson de Fools Garden.',
    notes: {
      tete: ['Mandarine verte', 'Bergamote', 'Citron'],
      coeur: ['Géranium', 'Feuille de figuier', 'Myrte'],
      fond: ['Bois', 'Musc blanc'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/lemon_tree.jpg',
    isVegan: true,
  },
  {
    id: 'fireflies',
    slug: 'fireflies',
    name: 'Fireflies',
    category: 'gourmands',
    shortDescription: 'Une chanson qui parle de lucioles pendant un feu d\'artifice.',
    fullDescription: 'Une ambiance chaleureuse et envoûtante aux notes de oud, vanille combinées à la fraîcheur de l\'encens. Une chanson qui parle de lucioles pendant un feu d\'artifice.',
    notes: {
      tete: ['Encens', 'Agrumes'],
      coeur: ['Oud', 'Fleurs blanches'],
      fond: ['Vanille', 'Bois précieux', 'Ambre'],
    },
    formats: [
      { size: '15ml', price: 26.5 },
      { size: '30ml', price: 42 },
      { size: '50ml', price: 62 },
      { size: '100ml', price: 95 },
    ],
    image: '/images/parfums/fireflies.jpg',
    isVegan: true,
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
export function getParfumsByCategory(category: Parfum['category']): Parfum[] {
  return parfums.filter((p) => p.category === category)
}

/**
 * Récupérer tous les parfums
 */
export function getAllParfums(): Parfum[] {
  return parfums
}

/**
 * Récupérer les nouveaux parfums
 */
export function getNewParfums(): Parfum[] {
  return parfums.filter((p) => p.isNew)
}