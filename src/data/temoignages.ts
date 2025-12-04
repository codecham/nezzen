// src/data/temoignages.ts
import type { Temoignage } from '@/types'

/**
 * Témoignages clients (basés sur les vrais avis Google)
 */
export const temoignages: Temoignage[] = [
  {
    id: 'temoignage-1',
    type: 'client',
    author: 'Marie L.',
    location: 'Namur',
    content: "Une expérience sensorielle inoubliable ! Dès mon entrée dans la parfumerie, j'ai été envoûtée par le charme de la boutique, chaque parfum racontant une histoire unique. Romain, passionné et à l'écoute, a su me guider avec une attention exceptionnelle.",
    shortContent: "Une expérience sensorielle inoubliable ! Chaque parfum raconte une histoire unique.",
    rating: 5,
    isFeatured: true,
    showOnHomepage: true,
  },
  {
    id: 'temoignage-2',
    type: 'client',
    author: 'Philippe D.',
    location: 'Bruxelles',
    content: "Un petit moment hors du temps niché au cœur de Namur. Romain est un Nez exceptionnel. Il a su nous guider judicieusement en nous posant quelques questions pour mieux nous cerner. Les parfums sont justes incroyables. Un vrai passionné amoureux de son métier.",
    shortContent: "Un petit moment hors du temps. Romain est un Nez exceptionnel.",
    rating: 5,
    isFeatured: true,
    showOnHomepage: true,
  },
  {
    id: 'temoignage-3',
    type: 'client',
    author: 'Sophie M.',
    location: 'Liège',
    content: "Fermez les yeux et laissez-vous guider par Romain pour un voyage olfactif d'exception : chaque parfum est une surprise et raconte une histoire unique. Le temps passé dans cette parfumerie est une véritable expérience sensorielle.",
    shortContent: "Fermez les yeux et laissez-vous guider pour un voyage olfactif d'exception.",
    rating: 5,
    isFeatured: true,
    showOnHomepage: true,
  },
  {
    id: 'temoignage-4',
    type: 'client',
    author: 'Jean-Pierre B.',
    location: 'Charleroi',
    content: "Comment ne pas craquer ? Des parfums originaux avec un univers expliqué, raconté par de jeunes parfumeurs qui vous communiquent leur passion. Le côté écologique puisque l'on peut ressourcer son flacon. Et le prix ? Moins cher que des marques luxueuses connues...",
    shortContent: "Des parfums originaux, un univers expliqué avec passion, et des prix accessibles.",
    rating: 5,
    showOnHomepage: true,
  },
  {
    id: 'temoignage-5',
    type: 'atelier',
    author: 'Émilie R.',
    location: 'Namur',
    content: "Un atelier exceptionnel ! Nous avons appris énormément sur le métier de parfumeur tout en passant un moment convivial. L'espace est magnifique et l'accueil chaleureux. Je recommande à 100% !",
    context: 'Atelier découverte parfumeur',
    rating: 5,
    isFeatured: true,
  },
  {
    id: 'temoignage-6',
    type: 'entreprise',
    author: 'StartUp Innovante',
    company: 'Tech Company',
    content: "Nous avons organisé un team building chez NeZ ZeN et ce fut une réussite totale. Une activité originale qui a permis de souder l'équipe autour d'une expérience créative et sensorielle unique.",
    context: 'Team building',
    rating: 5,
  },
]

/**
 * Récupérer les témoignages pour la homepage
 */
export function getHomepageTemoignages(limit = 3): Temoignage[] {
  return temoignages
    .filter((t) => t.showOnHomepage)
    .slice(0, limit)
}

/**
 * Récupérer les témoignages mis en avant
 */
export function getFeaturedTemoignages(): Temoignage[] {
  return temoignages.filter((t) => t.isFeatured)
}

/**
 * Récupérer les témoignages par type
 */
export function getTemoignagesByType(type: Temoignage['type']): Temoignage[] {
  return temoignages.filter((t) => t.type === type)
}
