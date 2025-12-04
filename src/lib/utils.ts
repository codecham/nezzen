import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combine les classes CSS avec clsx et tailwind-merge
 * Permet de gérer les classes conditionnelles et les conflits Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formate un prix en euros
 */
export function formatPrice(price: number, locale: string = 'fr'): string {
  return new Intl.NumberFormat(locale === 'en' ? 'en-GB' : locale, {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}

/**
 * Génère un slug à partir d'une chaîne de caractères
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}