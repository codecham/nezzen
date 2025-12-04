export interface Product {
  id: string
  slug: string
  name: string
  brand: string
  description: string
  price: number
  images: string[]
  category: 'for-her' | 'for-him' | 'unisex'
  volumes: number[] // en ml
  notes: {
    top: string[]
    heart: string[]
    base: string[]
  }
  isNew?: boolean
  isBestSeller?: boolean
  createdAt: string
}

export type ProductCategory = Product['category'] | 'all'
