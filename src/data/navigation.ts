import type { NavigationItem } from '@/types'

/**
 * Navigation principale du site
 * Les labelKey correspondent aux clés dans messages/[locale].json
 */
export const mainNavigation: NavigationItem[] = [
  {
    labelKey: 'navigation.creations',
    children: [
      {
        labelKey: 'navigation.parfums',
        href: '/creations/parfums',
      },
      {
        labelKey: 'navigation.nezzenHome',
        href: '/creations/nezzen-home',
      },
      {
        labelKey: 'navigation.cosmetiques',
        href: '/creations/cosmetiques',
      },
      {
        labelKey: 'navigation.packDecouverte',
        href: '/creations/pack-decouverte',
      },
      {
        labelKey: 'navigation.bonsCadeau',
        href: '/creations/bons-cadeau',
      },
    ],
  },
  {
    labelKey: 'navigation.ateliers',
    href: '/ateliers',
  },
  {
    labelKey: 'navigation.surMesure',
    children: [
      {
        labelKey: 'navigation.particuliers',
        href: '/sur-mesure/particuliers',
      },
      {
        labelKey: 'navigation.entreprises',
        href: '/sur-mesure/entreprises',
      },
    ],
  },
  {
    labelKey: 'navigation.aPropos',
    children: [
      {
        labelKey: 'navigation.notreApproche',
        href: '/a-propos/notre-approche',
      },
      {
        labelKey: 'navigation.experience',
        href: '/a-propos/experience',
      },
      {
        labelKey: 'navigation.galerie',
        href: '/a-propos/galerie',
      },
      {
        labelKey: 'navigation.temoignages',
        href: '/a-propos/temoignages',
      },
    ],
  },
  {
    labelKey: 'navigation.contact',
    href: '/contact',
  },
]

/**
 * Navigation du footer
 */
export const footerNavigation = {
  creations: [
    { labelKey: 'navigation.parfums', href: '/creations/parfums' },
    { labelKey: 'navigation.nezzenHome', href: '/creations/nezzen-home' },
    { labelKey: 'navigation.cosmetiques', href: '/creations/cosmetiques' },
    { labelKey: 'navigation.packDecouverte', href: '/creations/pack-decouverte' },
  ],
  company: [
    { labelKey: 'navigation.notreApproche', href: '/a-propos/notre-approche' },
    { labelKey: 'navigation.experience', href: '/a-propos/experience' },
    { labelKey: 'navigation.ateliers', href: '/ateliers' },
    { labelKey: 'navigation.contact', href: '/contact' },
  ],
}

/**
 * Réseaux sociaux
 */
export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/nezzenperfume',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nezzen_parfumerie',
    icon: 'instagram',
  },
]