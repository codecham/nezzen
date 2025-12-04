export const SITE_NAME = 'Parfumerie'

export const NAV_ITEMS = [
  { href: '/', labelKey: 'navigation.home' },
  { href: '/products', labelKey: 'navigation.products' },
  { href: '/about', labelKey: 'navigation.about' },
  { href: '/contact', labelKey: 'navigation.contact' },
] as const

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
  pinterest: 'https://pinterest.com/',
} as const
