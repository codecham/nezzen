// src/components/layout/NavigationProgress.tsx
'use client'

import { SimpleProgressBar } from '@/components/ui'

/**
 * Wrapper client pour la barre de progression de navigation
 * À utiliser dans le layout principal
 */
export function NavigationProgress() {
  return <SimpleProgressBar color="var(--color-accent)" height={2} />
}