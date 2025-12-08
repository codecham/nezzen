// src/data/parfums.ts
// Données réelles collectées depuis nezzen.be
// CORRIGÉ : Notes et prix vérifiés sur le site officiel

import type { Parfum } from '@/types'

/**
 * Collection complète des parfums NeZ ZeN
 * 22 parfums selon le site officiel
 * Créateur : Romain Pantoustier
 * 
 * PRIX : Deux gammes existent
 * - Gamme Standard (26.50€/15ml) : Verbier, Jasmin d'été, Jardin des roses, La ballerine, 1001 Nuits, Pleine Lune, etc.
 * - Gamme Premium (29€/15ml) : Niwa, Deep in a Dream, Fireflies, Mont Blanc, New York, Lemon Tree, Violet Rain, Cefalù, Baby this night
 */

// Prix standards
const PRIX_STANDARD = [
  { size: '15ml' as const, price: 26.5 },
  { size: '30ml' as const, price: 42 },
  { size: '50ml' as const, price: 62 },
  { size: '100ml' as const, price: 95 },
]

// Prix premium (parfums plus récents ou plus complexes)
const PRIX_PREMIUM = [
  { size: '15ml' as const, price: 29 },
  { size: '30ml' as const, price: 52 },
  { size: '50ml' as const, price: 78 },
  { size: '100ml' as const, price: 128 },
]

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
      tete: ['Cèdre', 'Amande', 'Jasmin'],
      coeur: ['Santal', 'Cuir', 'Patchouli'],
      fond: ['Ambre', 'Tonka', 'Musc', 'Vanille', 'Girofle'],
    },
    formats: PRIX_STANDARD,
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
    formats: PRIX_STANDARD,
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
    formats: PRIX_STANDARD,
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
    formats: PRIX_STANDARD,
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
    formats: PRIX_STANDARD,
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
    formats: PRIX_STANDARD,
    image: '/images/parfums/jasmin_ete.jpg',
    isVegan: true,
  },
  {
    id: 'new-york',
    slug: 'new-york',
    name: 'New York',
    category: 'floraux',
    shortDescription: 'La Simplicité est la Sophistication suprême.',
    fullDescription: '"La Simplicité est la Sophistication suprême" - Léonard de Vinci. Comme cette fragrance... comme cette ville... L\'opulence délicate de la tubéreuse rafraîchie par la fleur d\'oranger.',
    notes: {
      tete: ['Fleur d\'oranger', 'Soupçon de rose'],
      coeur: ['Tubéreuse', 'Soupçon de jasmin'],
      fond: ['Muscs blancs', 'Ambre gris'],
    },
    formats: PRIX_PREMIUM,
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
    formats: PRIX_STANDARD,
    image: '/images/parfums/la_ballerine.jpg',
    isVegan: true,
  },

  // ============ LES VOYAGES / DESTINATIONS ============
  {
    id: 'niwa',
    slug: 'niwa',
    name: 'Niwa',
    category: 'voyages',
    shortDescription: 'Une fraîcheur unique inspirée des jardins japonais.',
    fullDescription: '"La fleur de quel arbre. Impossible de savoir. Mais un tel parfum." - Matsuo Bashô. Une fraîcheur unique en son genre inspirée du vent dans les bambous, par la sérénité et la puissance des jardins japonais. Niwa signifie "jardin" en japonais.',
    notes: {
      tete: ['Pamplemousse rose', 'Bourgeons de cassis'],
      coeur: ['Iris', 'Feuilles de figuier'],
      fond: ['Mousse de chêne', 'Poivres'],
    },
    formats: PRIX_PREMIUM,
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
    fullDescription: 'Un parfum qui allie la pureté des sommets enneigés, la force de la roche millénaire et la fraîcheur des alpages.',
    notes: {
      tete: ['Menthes', 'Cassis', 'Pastèque'],
      coeur: ['Muguet', 'Galbanum', 'Myrrhe douce'],
      fond: ['Coriandre', 'Ambre', 'Bois de Gaïac'],
    },
    formats: PRIX_PREMIUM,
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
    formats: PRIX_STANDARD,
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
    fullDescription: 'Inspiré des notes de folklore du carnaval, chaud en couleur et en émotion pour une journée pleine de peps et de fraîcheur. Cette fragrance dégage de la fraîcheur grâce à sa multitude d\'agrumes soulignés par la profondeur épicée de la marjolaine et de l\'ylang-ylang.',
    notes: {
      tete: ['Citron', 'Myrte', 'Orange amère'],
      coeur: ['Ylang-Ylang', 'Marjolaine'],
      fond: ['Musc', 'Benjoin'],
    },
    formats: PRIX_STANDARD,
    image: '/images/parfums/carnaval.jpg',
    isVegan: true,
  },
  {
    id: 'cefalu',
    slug: 'cefalu',
    name: 'Cefalù',
    category: 'voyages',
    shortDescription: 'Inspiré de la ville sicilienne.',
    fullDescription: 'Inspiré par la beauté de cette ville côtière sicilienne, ce parfum capture l\'essence de la Méditerranée avec ses notes florales et solaires.',
    notes: {
      tete: ['Agrumes', 'Bergamote'],
      coeur: ['Tubéreuse', 'Fleur d\'oranger'],
      fond: ['Musc blanc', 'Bois'],
    },
    formats: PRIX_PREMIUM,
    image: '/images/parfums/cefalu.jpg',
    isVegan: true,
  },
  {
    id: 'verbier',
    slug: 'verbier',
    name: 'Verbier',
    category: 'voyages',
    shortDescription: 'La fraîcheur des montagnes suisses.',
    fullDescription: 'Inspiré par les pistes enneigées et l\'air pur des Alpes suisses, ce parfum évoque la fraîcheur et l\'évasion.',
    notes: {
      tete: ['Agrumes frais', 'Notes vertes'],
      coeur: ['Conifères', 'Notes aromatiques'],
      fond: ['Bois', 'Musc'],
    },
    formats: PRIX_STANDARD,
    image: '/images/parfums/verbier.png',
    isVegan: true,
  },

  // ============ LES GOURMANDS ============
  {
    id: '1001-nuits',
    slug: '1001-nuits',
    name: '1001 Nuits',
    category: 'gourmands',
    shortDescription: 'Un parfum doux, sucré, chaud et épicé.',
    fullDescription: 'Ce parfum respire le rêve et l\'envoûtement vous transportant dans un palais du Sud lors d\'une soirée chaude et sensuelle. Ce parfum est doux, sucré, chaud relevé par des notes épicées et quelques notes de fleurs blanches.',
    notes: {
      tete: ['Pomme', 'Poire', 'Fraise'],
      coeur: ['Jasmin', 'Coco', 'Cannelle'],
      fond: ['Tonka', 'Vanille', 'Girofle'],
    },
    formats: PRIX_STANDARD,
    image: '/images/parfums/1001_nuits.jpg',
    isVegan: true,
  },
  {
    id: 'earl-grey',
    slug: 'earl-grey',
    name: 'Earl Grey',
    category: 'gourmands',
    shortDescription: 'Découvrez toute la fraîcheur d\'un thé à la bergamote.',
    fullDescription: 'Une expression de la palette des agrumes pour une fraîcheur intense soulignée par la subtilité aérienne de notes florales épicées.',
    notes: {
      tete: ['Citron', 'Bergamote', 'Bigarade', 'Pamplemousse'],
      coeur: ['Géranium', 'Eau de rose'],
      fond: ['Ambre', 'Jasmin'],
    },
    formats: PRIX_STANDARD,
    image: '/images/parfums/earl_grey.png',
    isVegan: true,
  },
  {
    id: 'pleine-lune',
    slug: 'pleine-lune',
    name: 'Pleine Lune',
    category: 'gourmands',
    shortDescription: 'Laissez-vous envoûter par le côté sensuel et mystique.',
    fullDescription: 'Laissez-vous envoûter par le côté sensuel et mystique de ce parfum. Un parfum délicat qui marie les notes chyprées et musquées avec une pointe de violette pour lui donner cette petite touche de sensualité.',
    notes: {
      tete: ['Feuille de violette', 'Agrumes'],
      coeur: ['Tubéreuse', 'Rose'],
      fond: ['Bois précieux', 'Soupçon de patchouli'],
    },
    formats: PRIX_STANDARD,
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
    fullDescription: '"Baby this night, This night\'s for us. And baby this night, Can only be seen as yours and mine, Like a blessing dear..." - Hawksley Workman. Ce parfum vous transportera au gré de notes épicées et chaleureuses. Inspiré de la chanson qui a ouvert le mariage des fondateurs.',
    // NOTES CORRIGÉES selon le site officiel
    notes: {
      tete: ['Cardamome', 'Rhubarbe', 'Myrte'],
      coeur: ['Elemi', 'Violette', 'Lavande'],
      fond: ['Santal', 'Benjoin', 'Baume du Pérou'],
    },
    // PRIX CORRIGÉS selon le site officiel
    formats: PRIX_PREMIUM,
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
    formats: PRIX_PREMIUM,
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
    formats: PRIX_PREMIUM,
    image: '/images/parfums/lemon_tree.jpg',
    isVegan: true,
  },
  {
    id: 'deep-in-a-dream',
    slug: 'deep-in-a-dream',
    name: 'Deep in a Dream',
    category: 'voyages',
    shortDescription: 'The walls of my room fade away in the blue...',
    fullDescription: '"The walls of my room fade away in the blue, and I\'m deep in a dream of you." - Chet Baker. Un parfum onirique et enveloppant.',
    notes: {
      tete: ['Notes fraîches', 'Agrumes'],
      coeur: ['Fleurs blanches', 'Notes poudrées'],
      fond: ['Bois', 'Musc', 'Ambre'],
    },
    formats: PRIX_PREMIUM,
    image: '/images/parfums/deep_in_a_dream.jpg',
    isVegan: true,
  },
  {
    id: 'fireflies',
    slug: 'fireflies',
    name: 'Fireflies',
    category: 'voyages',
    shortDescription: 'You would not believe your eyes if ten million fireflies...',
    fullDescription: '"You would not believe your eyes if ten million fireflies lit up the world as I fell asleep..." - Owl City. Une ambiance chaleureuse et envoûtante inspirée par cette chanson magique.',
    notes: {
      tete: ['Encens', 'Agrumes'],
      coeur: ['Oud', 'Fleurs blanches'],
      fond: ['Vanille', 'Bois précieux', 'Ambre'],
    },
    formats: PRIX_PREMIUM,
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

/**
 * Nombre total de parfums
 */
export function getParfumsCount(): number {
  return parfums.length
}