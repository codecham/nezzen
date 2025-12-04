# 🧴 Parfumerie - Project Tracker

## 📋 Informations Projet

- **Nom du projet** : Site Parfumerie
- **Stack** : Next.js 15 + React 19 + TypeScript + Tailwind CSS 4
- **Type** : Frontend (maquette) → puis Backend (phase 2)

---

## 🏗️ Architecture des Dossiers

```
src/
├── app/                    # App Router (pages et layouts)
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   ├── about/
│   │   └── page.tsx
│   ├── products/
│   │   ├── page.tsx        # Liste des produits
│   │   └── [slug]/
│   │       └── page.tsx    # Page produit individuel
│   ├── contact/
│   │   └── page.tsx
│   └── globals.css
│
├── components/
│   ├── ui/                 # Composants UI réutilisables (Design System)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Container.tsx
│   │   └── index.ts        # Export centralisé
│   │
│   ├── layout/             # Composants de structure
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   └── index.ts
│   │
│   ├── sections/           # Sections de pages (non réutilisables)
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   └── Testimonials.tsx
│   │   └── products/
│   │       ├── ProductGrid.tsx
│   │       ├── ProductFilters.tsx
│   │       └── ProductSort.tsx
│   │
│   └── shared/             # Composants partagés métier
│       ├── ProductCard.tsx
│       ├── Logo.tsx
│       ├── SocialLinks.tsx
│       └── index.ts
│
├── lib/                    # Utilitaires et helpers
│   ├── utils.ts            # Fonctions utilitaires (cn, formatPrice, etc.)
│   └── constants.ts        # Constantes (liens nav, config)
│
├── hooks/                  # Hooks personnalisés
│   ├── useMediaQuery.ts
│   └── useScrollPosition.ts
│
├── types/                  # Types TypeScript
│   ├── product.ts
│   └── index.ts
│
└── data/                   # Données mockées (pour la maquette)
    ├── products.ts
    └── testimonials.ts
```

---

## ✅ Phase 1 : Setup Initial

- [ ] Créer le projet Next.js
- [ ] Pousser sur GitHub
- [ ] Lier le repo GitHub au projet
- [ ] Installer les dépendances supplémentaires
  - [ ] `clsx` (gestion conditionnelle des classes)
  - [ ] `tailwind-merge` (merge des classes Tailwind)
  - [ ] `lucide-react` (icônes)
- [ ] Configurer la structure des dossiers
- [ ] Créer le fichier `lib/utils.ts` avec la fonction `cn()`
- [ ] Nettoyer les fichiers par défaut (page.tsx, globals.css)

---

## ✅ Phase 2 : Design System (Composants UI)

- [ ] Définir la palette de couleurs dans Tailwind config
- [ ] Définir la typographie (fonts)
- [ ] Créer les composants UI de base :
  - [ ] `Button` (variants: primary, secondary, outline, ghost)
  - [ ] `Container` (wrapper responsive)
  - [ ] `Card` (avec variants)
  - [ ] `Input` (champ de formulaire)
  - [ ] `Badge` (étiquettes produits)
  - [ ] `Heading` (titres h1-h6 stylisés)
  - [ ] `Text` (paragraphes stylisés)
- [ ] Créer le fichier d'export centralisé `components/ui/index.ts`

---

## ✅ Phase 3 : Layout Global

- [ ] Créer le composant `Logo`
- [ ] Créer le composant `Navbar`
- [ ] Créer le composant `MobileMenu` (menu burger)
- [ ] Créer le composant `Header` (assemble Logo + Navbar)
- [ ] Créer le composant `Footer`
- [ ] Créer le composant `SocialLinks`
- [ ] Intégrer Header et Footer dans `app/layout.tsx`

---

## ✅ Phase 4 : Page d'Accueil

- [ ] Créer les données mockées (`data/products.ts`)
- [ ] Créer le type `Product` (`types/product.ts`)
- [ ] Créer le composant `ProductCard`
- [ ] Créer les sections :
  - [ ] `HeroSection` (bannière principale)
  - [ ] `FeaturedProducts` (produits vedettes)
  - [ ] `AboutPreview` (aperçu "À propos")
  - [ ] `BrandsSection` (marques disponibles)
  - [ ] `Testimonials` (avis clients)
  - [ ] `Newsletter` (inscription newsletter)
- [ ] Assembler la page d'accueil

---

## ✅ Phase 5 : Page Produits

- [ ] Créer la page liste des produits `/products`
- [ ] Créer le composant `ProductGrid`
- [ ] Créer le composant `ProductFilters` (sidebar filtres)
- [ ] Créer le composant `ProductSort` (tri)
- [ ] Créer la page produit individuel `/products/[slug]`
- [ ] Créer la section `ProductGallery` (images produit)
- [ ] Créer la section `ProductInfo` (détails, prix, CTA)
- [ ] Créer la section `RelatedProducts` (produits similaires)

---

## ✅ Phase 6 : Pages Secondaires

- [ ] Créer la page `/about` (À propos / Histoire)
- [ ] Créer la page `/contact` (Formulaire de contact)
- [ ] Créer le composant `ContactForm`
- [ ] Créer la page `/brands` (optionnel - marques)

---

## ✅ Phase 7 : Finitions & Polish

- [ ] Ajouter les animations/transitions (hover, scroll)
- [ ] Vérifier le responsive (mobile, tablet, desktop)
- [ ] Optimiser les images (next/image)
- [ ] Ajouter les métadonnées SEO (metadata API)
- [ ] Créer une page 404 personnalisée
- [ ] Tester la navigation complète
- [ ] Faire une review du code

---

## ✅ Phase 8 : Déploiement Maquette

- [ ] Déployer sur Vercel
- [ ] Tester en production
- [ ] Partager le lien au client pour validation

---

## 🎨 Design Notes

### Palette de Couleurs (à définir avec le client)

```
Primary     : #_____ (couleur principale - élégance)
Secondary   : #_____ (couleur secondaire)
Accent      : #_____ (doré/champagne pour le luxe ?)
Background  : #_____ (fond clair)
Text        : #_____ (texte principal)
Muted       : #_____ (texte secondaire)
```

### Typographie

```
Headings : [Font à choisir] (élégante, serif ?)
Body     : [Font à choisir] (lisible, sans-serif ?)
```

### Inspirations / Références

- [ ] Collecter des références visuelles
- [ ] Définir le mood (luxe, accessible, naturel, moderne ?)

---

## 📝 Notes & Décisions

*Ajoute ici les décisions importantes prises pendant le développement*

- ...

---

## 🐛 Bugs & Issues

*Liste des bugs à corriger*

- ...

---

## 💡 Idées Futures (Phase 2 - Backend)

- [ ] Authentification client
- [ ] Panier & Checkout
- [ ] Panel administrateur
- [ ] Gestion des stocks
- [ ] Système de recherche
- [ ] Wishlist / Favoris
- [ ] Avis produits

---
