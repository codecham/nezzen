// src/data/ateliers.ts
// Données réelles collectées depuis nezzen.be

import type { Atelier } from '@/types'

/**
 * Collection des ateliers NeZ ZeN
 * En partenariat avec Mel'a Table pour les ateliers dînatoires
 */
export const ateliers: Atelier[] = [
  {
    id: 'decouverte-parfumeur',
    slug: 'decouverte-parfumeur',
    type: 'decouverte-parfumeur',
    name: 'Découverte du métier de parfumeur',
    shortDescription: 'Initiez-vous aux bases de la création de parfum.',
    fullDescription: `Découvrez les principes de base de l'élaboration d'un parfum et de l'équilibre nécessaire entre les différents ingrédients. 

Une application pratique avec la création de votre premier accord. À la découverte des parfums : apprenez à reconnaître certains ingrédients et décrypter les ingrédients utilisés.

Et pour terminer votre formation, un petit test pour évaluer vos capacités olfactives.`,
    image: '/images/ateliers/decouverte_parfumeur.jpg',
    duration: '2h',
    price: 65,
    priceDetails: 'Orgue miniature, boissons et desserts inclus',
    minParticipants: 4,
    maxParticipants: 8,
    audience: ['tous', 'particuliers', 'groupes'],
    includes: [
      'Introduction aux familles olfactives',
      'Création de votre premier accord',
      'Test de vos capacités olfactives',
      'Notes de cours',
      'Un "orgue miniature" pour vous entraîner',
      'Boissons et desserts',
    ],
    takeAway: [
      'Orgue miniature avec échantillons',
      'Notes de cours',
    ],
    location: '22 rue Haute Marcelle, 5000 Namur (1er étage)',
    isFeatured: true,
  },
  {
    id: 'creation-bougie',
    slug: 'creation-bougie',
    type: 'creation-bougie',
    name: 'Création de votre bougie parfumée',
    shortDescription: 'Apprenez à créer votre propre bougie parfumée.',
    fullDescription: `Un atelier pour apprendre les bases de la création de bougies parfumées en toute sécurité.

Vous découvrirez les différents types de cires, les mèches adaptées et surtout comment parfumer votre bougie avec les notes de votre choix.

Vous repartirez avec votre création parfumée et des notes de cours.`,
    image: '/images/ateliers/creation_bougie.jpg',
    duration: '1h30',
    price: 55,
    priceDetails: 'Matériel et bougie inclus',
    minParticipants: 4,
    maxParticipants: 8,
    audience: ['tous', 'particuliers', 'groupes'],
    includes: [
      'Introduction aux types de cires',
      'Choix des parfums',
      'Création de votre bougie',
      'Notes de cours',
    ],
    takeAway: [
      'Votre bougie parfumée personnalisée',
      'Notes de cours',
    ],
    location: '22 rue Haute Marcelle, 5000 Namur (1er étage)',
    isFeatured: true,
  },
  {
    id: 'degustation-vin',
    slug: 'degustation-vin',
    type: 'degustation-vin',
    name: 'Dégustation Vin & Parfumerie',
    shortDescription: 'Dégustez des vins comme un parfumeur.',
    fullDescription: `Un atelier pour déguster des vins et champagnes comme un parfumeur, décomposer les différents accords présents dans les breuvages proposés.

Mieux comprendre les familles olfactives et leur application dans le monde du vin. Une expérience sensorielle unique qui allie deux passions.`,
    image: '/images/ateliers/degustation_vin.jpg',
    duration: '2h',
    price: 65,
    priceDetails: 'Vins et accompagnements inclus',
    minParticipants: 4,
    maxParticipants: 10,
    audience: ['tous', 'particuliers', 'groupes'],
    includes: [
      'Dégustation de plusieurs vins/champagnes',
      'Analyse olfactive comme un parfumeur',
      'Découverte des accords aromatiques',
      'Accompagnements',
    ],
    takeAway: [
      'Une nouvelle approche de la dégustation',
    ],
    location: '22 rue Haute Marcelle, 5000 Namur (1er étage)',
    isFeatured: false,
  },
  {
    id: 'atelier-dinatoire',
    slug: 'atelier-dinatoire',
    type: 'dinatoire',
    name: 'Atelier Dînatoire',
    shortDescription: 'Un repas découverte autour de la parfumerie culinaire.',
    fullDescription: `Nous vous proposons un atelier dînatoire où au cours d'un repas vous découvrirez différentes matières aromatiques et comment les utiliser en parfumerie et en parfumerie culinaire.

Vous deviendrez également parfumeur du goût en créant votre propre cocktail parfumé.

Inspiré par nos parfums Vetiver Épicé et Terre de Feu, découvrez notre interprétation de ces parfums dans un plat tout en douceur épicée. Découvrez comment la douceur de l'orchidée et de l'ylang-ylang métamorphose votre riz au lait.`,
    image: '/images/ateliers/atelier_dinatoire.jpg',
    duration: '3h',
    price: 65,
    priceDetails: 'Dîner, accord boissons/plats et recettes compris',
    minParticipants: 4,
    maxParticipants: 8,
    audience: ['tous', 'particuliers', 'groupes'],
    includes: [
      'Repas complet avec accord mets/parfums',
      'Découverte des matières aromatiques',
      'Création de votre cocktail parfumé',
      'Boissons accordées aux plats',
      'Recettes',
    ],
    takeAway: [
      'Les recettes des plats',
      'Une nouvelle vision de la cuisine parfumée',
    ],
    partner: 'Mel\'a Table',
    location: 'Mel\'a Table (en face de la boutique)',
    isFeatured: true,
  },
  {
    id: 'evenement-prive',
    slug: 'evenement-prive',
    type: 'evenement-prive',
    name: 'Événements Privés',
    shortDescription: 'EVJF, anniversaires, team building... Une activité spéciale.',
    fullDescription: `À la recherche d'une activité spéciale entre collègues, amis, pour un EVJF, un anniversaire ou un team building ? 

Nous créons des ateliers sur mesure adaptés à votre groupe et vos envies. Une expérience sensorielle unique et conviviale qui marquera les esprits.

N'hésitez pas à nous contacter pour en discuter et créer ensemble votre événement parfait !`,
    image: '/images/ateliers/evenement_prive.jpg',
    duration: 'Sur mesure',
    price: 0, // Prix sur devis
    priceDetails: 'Sur devis selon le type d\'événement',
    minParticipants: 4,
    maxParticipants: 16,
    audience: ['entreprises', 'groupes'],
    includes: [
      'Atelier personnalisé selon vos souhaits',
      'Animation par notre parfumeur',
      'Matériel fourni',
      'Possibilité de combiner plusieurs activités',
    ],
    takeAway: [
      'Créations personnalisées selon l\'atelier choisi',
      'Souvenirs inoubliables',
    ],
    location: '22 rue Haute Marcelle, 5000 Namur ou sur site',
    isFeatured: true,
  },
]

/**
 * Récupérer les ateliers mis en avant
 */
export function getFeaturedAteliers(): Atelier[] {
  return ateliers.filter((a) => a.isFeatured)
}

/**
 * Récupérer un atelier par son slug
 */
export function getAtelierBySlug(slug: string): Atelier | undefined {
  return ateliers.find((a) => a.slug === slug)
}

/**
 * Récupérer les ateliers par audience
 */
export function getAteliersByAudience(audience: string): Atelier[] {
  return ateliers.filter((a) => a.audience.includes(audience as Atelier['audience'][number]))
}

/**
 * Récupérer tous les ateliers
 */
export function getAllAteliers(): Atelier[] {
  return ateliers
}

/**
 * Récupérer les ateliers pour particuliers
 */
export function getAteliersParticuliers(): Atelier[] {
  return ateliers.filter((a) => 
    a.audience.includes('particuliers') || a.audience.includes('tous')
  )
}

/**
 * Récupérer les ateliers pour entreprises
 */
export function getAteliersEntreprises(): Atelier[] {
  return ateliers.filter((a) => 
    a.audience.includes('entreprises') || a.type === 'evenement-prive'
  )
}