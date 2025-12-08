// src/app/[locale]/template.tsx
'use client'

import { type ReactNode } from 'react'
import { PageTransition } from '@/components/ui/PageTransition'

interface TemplateProps {
  children: ReactNode
}

/**
 * Template de transition de page
 * 
 * Dans Next.js App Router, le template.tsx est recréé à chaque navigation,
 * contrairement au layout.tsx qui persiste.
 * Cela permet d'animer les transitions entre pages.
 * 
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates
 */
export default function Template({ children }: TemplateProps) {
  return (
    <PageTransition variant="fade-up" duration={400}>
      {children}
    </PageTransition>
  )
}