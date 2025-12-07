// src/app/[locale]/uikit/layout.tsx

interface UIKitLayoutProps {
  children: React.ReactNode
}

/**
 * Layout pour la page UIKit
 * Le ToastProvider est maintenant dans le layout principal
 */
export default function UIKitLayout({ children }: UIKitLayoutProps) {
  return <>{children}</>
}