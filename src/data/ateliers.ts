// src/data/ateliers.ts
// =============================================================================
// DONNÉES ATELIERS - NeZ ZeN
// Données réelles depuis nezzen.be
// =============================================================================

import type { Atelier } from '@/types'

/**
 * Collection des ateliers NeZ ZeN
 * Tous les ateliers se déroulent au 22 rue Haute Marcelle, 5000 Namur (1er étage)
 */
export const ateliers: Atelier[] = [
  {
    id: 'decouverte-parfumeur',
    slug: 'decouverte-parfumeur',
    type: 'decouverte-parfumeur',
    name: 'À la découverte du métier de parfumeur',
    shortDescription: 'Plongez dans l\'univers fascinant de la parfumerie et créez votre premier accord.',
    fullDescription: `Un atelier complet pour découvrir le métier de parfumeur et ses secrets.

Contenu :
• L'histoire de la parfumerie depuis 2000 AJC à nos jours (découverte olfactive)
• Découvrir les familles olfactives et leurs ingrédients clés
• La découverte des principes de base de l'élaboration d'un parfum et de l'équilibre nécessaire entre les différents ingrédients
• Application pratique avec la création de votre premier accord
• Et pour terminer votre formation, un petit test pour évaluer vos capacités olfactives`,
    image: '/images/ateliers/atelier-decouverte-metier-parfumeur.jpg',
    duration: '3h30-4h',
    price: 60,
    priceDetails: 'Matériel inclus',
    minParticipants: 2,
    maxParticipants: 8,
    audience: ['tous', 'particuliers', 'groupes'],
    includes: [
      'Histoire de la parfumerie (découverte olfactive)',
      'Découverte des familles olfactives',
      'Principes de l\'élaboration d\'un parfum',
      'Création de votre premier accord',
      'Test de vos capacités olfactives',
    ],
    takeAway: [
      'Votre premier accord parfumé',
      'Notes de cours',
    ],
    location: '22 rue Haute Marcelle, 5000 Namur (1er étage)',
    isFeatured: true,
  },
  {
    id: 'creation-brume',
    slug: 'creation-brume-linge',
    type: 'creation-bougie', // On réutilise ce type ou on pourrait créer 'creation-brume'
    name: 'Création d\'une brume de linge / ambiance',
    shortDescription: 'Créez une ambiance unique pour votre chez vous avec votre propre brume.',
    fullDescription: `Envie de créer une ambiance unique pour votre chez vous? Lors de cet atelier vous réaliserez une brume de linge/d'ambiance sur base de propriétés d'aromathérapie si vous le souhaitez.

Contenu :
• Découverte des matières et de leurs propriétés
• Bases théoriques sur la création d'un spray
• Création de votre brume personnalisée`,
    image: '/images/ateliers/atelier-creation-brume.jpg',
    duration: '2h',
    price: 40,
    priceDetails: 'Création incluse',
    minParticipants: 2,
    maxParticipants: 8,
    audience: ['tous', 'particuliers', 'groupes'],
    includes: [
      'Découverte des matières et propriétés',
      'Bases théoriques sur la création d\'un spray',
      'Création de votre brume personnalisée',
      'Option aromathérapie',
    ],
    takeAway: [
      'Votre brume de linge/ambiance',
    ],
    location: '22 rue Haute Marcelle, 5000 Namur (1er étage)',
    isFeatured: false,
  },
  {
    id: 'creation-bougie',
    slug: 'creation-bougie',
    type: 'creation-bougie',
    name: 'Création de bougie',
    shortDescription: 'Apprenez les bases de la création de bougies parfumées en toute sécurité.',
    fullDescription: `Un atelier pour apprendre les bases de la création de bougies parfumées en toute sécurité.

Contenu :
• Création d'une bougie parfumée
• Différentes cires : que choisir ?
• Les règles à respecter pour la création de parfums pour bougies

Vous repartirez avec votre création et la fiche technique pour de futures créations.`,
    image: '/images/ateliers/atelier-creation-bougie.jpg',
    duration: '2h-2h30',
    price: 40,
    priceDetails: 'Bougie et matériel inclus',
    minParticipants: 2,
    maxParticipants: 8,
    audience: ['tous', 'particuliers', 'groupes'],
    includes: [
      'Création d\'une bougie parfumée',
      'Découverte des différentes cires',
      'Règles de sécurité et bonnes pratiques',
      'Tout le matériel fourni',
    ],
    takeAway: [
      'Votre bougie parfumée personnalisée',
      'Fiche technique pour futures créations',
    ],
    location: '22 rue Haute Marcelle, 5000 Namur (1er étage)',
    isFeatured: true,
  },
  {
    id: 'creation-accord',
    slug: 'creation-accord-parfume',
    type: 'decouverte-parfumeur',
    name: 'Création d\'un accord parfumé',
    shortDescription: 'Mieux comprendre les familles olfactives et créer votre propre accord.',
    fullDescription: `Mieux comprendre les familles olfactives et mise en pratique avec la création d'un accord, la première étape du métier du parfumeur.

Contenu :
• Découverte des familles olfactives
• L'architecture d'un parfum
• Création d'un accord parfumé

Vous repartirez avec votre création parfumée et des notes de cours.`,
    image: '/images/ateliers/atelier-accord-parfume.jpg',
    duration: '2h-2h30',
    price: 40,
    priceDetails: 'Création incluse',
    minParticipants: 2,
    maxParticipants: 8,
    audience: ['tous', 'particuliers', 'groupes'],
    includes: [
      'Découverte des familles olfactives',
      'L\'architecture d\'un parfum',
      'Création d\'un accord parfumé',
    ],
    takeAway: [
      'Votre accord parfumé',
      'Notes de cours',
    ],
    location: '22 rue Haute Marcelle, 5000 Namur (1er étage)',
    isFeatured: true,
  },
  {
    id: 'degustation-vin',
    slug: 'vin-comme-parfumeur',
    type: 'degustation-vin',
    name: 'Le vin comme un parfumeur',
    shortDescription: 'Dégustez des vins et champagnes comme un parfumeur.',
    fullDescription: `Un atelier pour déguster des vins/champagnes comme un parfumeur, décomposer les différents accords présents dans les breuvages proposés.

Contenu :
• Dégustation de vins (minimum 3) en fonction de nos découvertes
• Découverte des arômes à travers la palette du parfumeur

Le nombre de dégustations varie en fonction des sessions et des produits proposés.`,
    image: '/images/ateliers/atelier-vin.jpg',
    duration: '1h30-2h',
    price: 40,
    priceDetails: 'Vins et accompagnements inclus',
    minParticipants: 4,
    maxParticipants: 10,
    audience: ['tous', 'particuliers', 'groupes'],
    includes: [
      'Dégustation de minimum 3 vins',
      'Découverte des arômes avec la palette du parfumeur',
      'Accompagnements',
    ],
    takeAway: [
      'Une nouvelle approche de la dégustation',
    ],
    location: '22 rue Haute Marcelle, 5000 Namur (1er étage)',
    isFeatured: true,
  },
]

// =============================================================================
// FONCTIONS UTILITAIRES
// =============================================================================

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

/**
 * Récupérer les ateliers réguliers (pas les événements privés)
 */
export function getRegularAteliers(): Atelier[] {
  return ateliers.filter((a) => a.type !== 'evenement-prive')
}