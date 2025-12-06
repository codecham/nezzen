// src/app/[locale]/uikit/layout.tsx
import { ToastProvider } from '@/components/ui'

interface UIKitLayoutProps {
  children: React.ReactNode
}

/**
 * Layout pour la page UIKit
 * Inclut le ToastProvider pour les démonstrations
 */
export default function UIKitLayout({ children }: UIKitLayoutProps) {
  return (
    <ToastProvider position="bottom-right" maxToasts={5}>
      {children}
    </ToastProvider>
  )
}