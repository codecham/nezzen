# 🧴 NeZ ZeN - Project Tracker

## 📋 Informations Projet

- **Client** : NeZ ZeN - Parfumerie Artisanale
- **Localisation** : Rue Haute Marcelle 22, 5000 Namur, Belgique
- **Stack** : Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
- **Phase actuelle** : Phase 1 - Frontend (Maquette)
- **Langues** : FR (défaut), EN, NL

---

## 🎨 Direction Artistique

### Palette de Couleurs

```css
/* Basée sur le logo - Style zen/minimaliste */
--color-primary: #1a1a1a;        /* Noir profond (texte, accents) */
--color-secondary: #6b6b6b;      /* Gris moyen */
--color-muted: #9ca3af;          /* Gris clair */
--color-background: #faf9f7;     /* Blanc cassé/crème */
--color-surface: #ffffff;        /* Blanc pur (cards) */
--color-accent: #c9a962;         /* Doré discret (CTA luxe) - optionnel */
```

### Typographie

- **Headings** : Cormorant Garamond (serif élégant)
- **Body** : Inter (sans-serif lisible)

### Ambiance

- Minimaliste, zen, artisanal
- Beaucoup d'espace blanc
- Animations subtiles et fluides
- Photos mises en valeur

---

## 🗺️ Architecture du Site

### Navigation Principale (Mega-menu)

```
┌─────────────────────────────────────────────────────────────────────┐
│  [LOGO]     Créations  │  Ateliers  │  Sur Mesure  │  À Propos  │  Contact   [FR|EN|NL] │
└─────────────────────────────────────────────────────────────────────┘
                 │                              │              │
                 ▼                              ▼              ▼
        ┌────────────────┐              ┌─────────────┐  ┌──────────────────┐
        │ • Parfums      │              │ • Particuliers │  │ • Notre Approche │
        │ • NeZZen Home  │              │ • Entreprises  │  │ • L'Expérience   │
        │ • Cosmétiques  │              └─────────────┘  │ • Galerie Photos │
        │ • Pack Découverte │                            │ • Témoignages    │
        │ • Bons Cadeau  │                               └──────────────────┘
        └────────────────┘
```

### Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Accueil | Landing page immersive |
| `/creations` | Hub Créations | Vue d'ensemble des produits |
| `/creations/parfums` | Parfums | Liste des 20 parfums |
| `/creations/parfums/[slug]` | Détail Parfum | Page produit individuelle |
| `/creations/nezzen-home` | NeZZen Home | Parfums d'ambiance + bougies |
| `/creations/cosmetiques` | Cosmétiques | Gels douche, laits |
| `/creations/pack-decouverte` | Pack Découverte | 4 échantillons |
| `/creations/bons-cadeau` | Bons Cadeau | Cartes cadeaux |
| `/ateliers` | Ateliers | Liste + calendrier + inscription |
| `/sur-mesure/particuliers` | Sur Mesure Particuliers | Création personnalisée |
| `/sur-mesure/entreprises` | Sur Mesure B2B | Offre entreprises |
| `/a-propos` | À Propos | Hub vers sous-pages |
| `/a-propos/notre-approche` | Notre Approche | Histoire, philosophie |
| `/a-propos/experience` | Plus qu'une parfumerie | L'expérience boutique |
| `/a-propos/galerie` | Galerie Photos | Photos de la boutique |
| `/a-propos/temoignages` | Témoignages | "Ils nous ont fait confiance" |
| `/contact` | Contact | Formulaire + infos |

---

## ✅ Phase 1 : Setup Initial

- [x] Créer le projet Next.js 16
- [x] Configurer TypeScript strict
- [x] Installer les dépendances (clsx, tailwind-merge, lucide-react)
- [x] Configurer la structure des dossiers
- [x] Créer `lib/utils.ts` avec la fonction `cn()`
- [x] Configurer l'i18n (next-intl) - FR, EN, NL
- [x] Créer le middleware de routing i18n
- [x] Ajouter le logo dans `/public/images/`
- [x] Définir les design tokens dans globals.css
- [x] Configurer les fonts (Cormorant Garamond + Inter)

---

## ✅ Phase 2 : Design System (Composants UI)

### Tokens & Fondations
- [x] Finaliser la palette de couleurs dans `globals.css`
- [x] Configurer les fonts dans `layout.tsx`
- [x] Définir les espacements et breakpoints

### Composants de Base
- [x] `Button` — variants: primary, secondary, outline, ghost
- [x] `Container` — wrapper responsive avec max-width
- [x] `Card` — avec variants (product, testimonial, atelier)
- [x] `Badge` — étiquettes (Nouveau, Vegan, Artisan certifié)
- [x] `Input` — champs de formulaire
- [x] `Textarea` — zone de texte
- [x] `Select` — sélecteur
- [x] `Heading` — h1 à h4 stylisés
- [x] `Text` — paragraphes avec variants
- [x] `Link` — liens stylisés

### Composants Avancés
- [x] `Modal` — pour galerie photos
- [x] `Tabs` — pour les détails produits
- [x] `Accordion` — pour FAQ éventuelle
- [x] `Toast` — notifications

### Export centralisé
- [x] Créer `components/ui/index.ts`

---

## ✅ Phase 3 : Layout Global

### Header
- [x] Composant `Logo` (avec image + fallback SVG)
- [x] Composant `Navbar` (navigation desktop)
- [x] Composant `MegaMenu` (dropdown moderne)
- [x] Composant `MobileMenu` (menu burger responsive)
- [x] Composant `LanguageSwitcher` (FR/EN/NL)
- [x] Assembler `Header`

### Footer
- [x] Composant `Footer`
  - [x] Infos contact (adresse, téléphone, email)
  - [x] Horaires d'ouverture
  - [x] Liens navigation
  - [x] Réseaux sociaux
  - [x] Certifications (Artisan, Vegan)
  - [x] Copyright

### Intégration
- [x] Intégrer Header + Footer dans `app/[locale]/layout.tsx`

---

## ✅ Phase 4 : Types & Données Mockées

### Types TypeScript (`src/types/`)
- [ ] `Product` — type de base pour tous les produits
- [ ] `Parfum` — extends Product (notes, formats, histoire)
- [ ] `ParfumAmbiance` — parfums d'ambiance
- [ ] `Cosmetique` — gels douche, laits
- [ ] `Bougie` — bougies parfumées
- [ ] `PackDecouverte` — pack 4 échantillons
- [ ] `BonCadeau` — cartes cadeaux
- [ ] `Atelier` — ateliers (type, prix, durée, dates)
- [ ] `Temoignage` — témoignages clients
- [ ] `NavItem` — items de navigation

### Données Mockées (`src/data/`)
- [x] `parfums.ts` — les 20 parfums avec vraies infos
- [x] `parfums-ambiance.ts` — les 5 parfums d'ambiance
- [x] `cosmetiques.ts` — gels douche et laits
- [x] `bougies.ts` — les 2 bougies
- [x] `ateliers.ts` — types d'ateliers + dates exemple
- [x] `temoignages.ts` — basés sur vrais avis
- [x] `navigation.ts` — structure de navigation

---

## ✅ Phase 5 : Page d'Accueil

### Sections
- [x] `HeroSection` — bannière immersive avec CTA
- [x] `PhilosophieSection` — les 4 principes (jus, expérience, transparence, innovation)
- [x] `FeaturedParfums` — 3-4 parfums vedettes
- [x] `AteliersPreview` — teaser des ateliers
- [x] `TestimonialsSection` — avis clients (carousel)
- [x] `CertificationsSection` — badges Artisan, Art & Olfaction, Vegan
- [x] `CTASection` — invitation à visiter la boutique
- [x] `NewsletterSection` — inscription newsletter (optionnel)

### Composants partagés
- [x] `ProductCard` — carte produit réutilisable
- [x] `TestimonialCard` — carte témoignage
- [x] `SectionHeading` — titre de section avec ornement

### Assemblage
- [x] Assembler la page `app/[locale]/page.tsx`

---

## ✅ Phase 6 : Pages Créations (Produits)

### Hub Créations
- [x] Page `/creations` — vue d'ensemble avec liens vers catégories

### Page Parfums
- [x] Liste des 20 parfums avec `ProductCard`
- [x] Layout grid responsive
- [x] Animation au hover

### Page Détail Parfum
- [x] `ProductGallery` — image(s) du parfum
- [x] `ProductInfo` — nom, description, histoire
- [x] `ProductNotes` — notes de tête/cœur/fond (visuel)
- [x] `ProductFormats` — sélection format + prix
- [x] `AddToCartCTA` — bouton commander (lien vers contact pour Phase 1)
- [x] `RelatedProducts` — parfums similaires

### Page NeZZen Home
- [x] Liste parfums d'ambiance
- [x] Liste bougies
- [x] Infos (durée, surface couverte)

### Page Cosmétiques
- [x] Liste gels douche
- [x] Liste laits hydratants
- [x] Infos (ingrédients naturels, hypoallergénique)

### Page Pack Découverte
- [x] Présentation du concept
- [x] Comment ça marche (4 étapes)
- [x] CTA commander

### Page Bons Cadeau
- [x] Options disponibles (montant libre, bon parfum)
- [x] CTA commander

---

## ✅ Phase 7 : Page Ateliers

### Contenu
- [x] Introduction aux ateliers
- [x] `AtelierCard` — carte pour chaque type d'atelier
- [x] Types d'ateliers :
  - [x] Découverte du métier de parfumeur
  - [x] Création de bougie
  - [x] Dégustation vin + parfumerie
  - [x] Ateliers dînatoires
  - [x] Événements privés (EVJF, team building)
- [ ] `AtelierCalendar` — prochaines dates (simple liste pour Phase 1)
- [ ] `AtelierInscription` — formulaire de contact/inscription
- [ ] Infos pratiques (lieu, durée, tarifs, capacité)

---

## ✅ Phase 8 : Pages Sur Mesure

### Particuliers
- [ ] Présentation du service
- [ ] Processus de création
- [ ] CTA contact

### Entreprises (B2B)
- [ ] Offres pour entreprises
- [ ] Cas d'usage (cadeaux clients, événements, parfum signature)
- [ ] CTA contact

---

## ✅ Phase 9 : Pages À Propos

### Notre Approche
- [ ] L'histoire de NeZ ZeN
- [ ] Le duo (Romain le NeZ, Aurélie le ZeN)
- [ ] Les 4 principes de création
- [ ] Valeurs (vegan, éco-responsable, artisanal)

### Plus qu'une Parfumerie (L'Expérience)
- [ ] Description de l'expérience en boutique
- [ ] Le concept atelier-boutique
- [ ] Photos ambiance

### Galerie Photos
- [ ] Grid de photos
- [ ] Lightbox pour agrandir
- [ ] Catégories (boutique, ateliers, produits, événements)

### Témoignages
- [ ] Histoires de clients/entreprises
- [ ] Format storytelling
- [ ] Photos si disponibles

---

## ✅ Phase 10 : Page Contact

- [ ] `ContactForm` — formulaire complet
  - [ ] Nom, email, téléphone
  - [ ] Sujet (dropdown: Renseignement, Commande, Atelier, Sur mesure, Autre)
  - [ ] Message
- [ ] Infos pratiques
  - [ ] Adresse avec lien Google Maps
  - [ ] Téléphone cliquable
  - [ ] Email cliquable
  - [ ] Horaires d'ouverture
- [ ] Carte interactive (embed Google Maps ou statique)

---

## ✅ Phase 11 : Finitions & Polish

### Responsive
- [ ] Tester toutes les pages sur mobile
- [ ] Tester sur tablette
- [ ] Ajuster les breakpoints si nécessaire

### Animations
- [ ] Transitions de page (optionnel)
- [ ] Animations au scroll (fade in)
- [ ] Hover states sur tous les éléments interactifs
- [ ] Loading states

### Performance
- [ ] Optimiser toutes les images avec `next/image`
- [ ] Lazy loading des images below the fold
- [ ] Vérifier les Core Web Vitals

### SEO
- [ ] Métadonnées pour chaque page (title, description)
- [ ] Open Graph tags
- [ ] Structured data (LocalBusiness, Product)
- [ ] Sitemap
- [ ] robots.txt

### Accessibilité
- [ ] Navigation clavier
- [ ] Attributs ARIA
- [ ] Contraste des couleurs
- [ ] Alt text sur toutes les images

### Pages utilitaires
- [ ] Page 404 personnalisée
- [ ] Page loading (optionnel)

---

## ✅ Phase 12 : Déploiement Maquette

- [ ] Build de production sans erreurs
- [ ] Déployer sur Vercel
- [ ] Configurer le domaine (si disponible)
- [ ] Tester en production
- [ ] Partager le lien au client pour validation

---

## ✅ Phase 13 : Backend & Administration (Après validation client)

> **Prérequis** : Phase 12 complétée + validation du frontend par le client

### Décisions techniques

| Aspect | Décision | Raison |
|--------|----------|--------|
| **Architecture** | CMS Headless | Interface admin prête à l'emploi, moins de dev custom |
| **CMS recommandé** | Sanity ou Payload CMS | Intégration Next.js, TypeScript natif, i18n, images |
| **Alternative** | Strapi (si auto-hébergement) | Open source, API REST/GraphQL |

### Ce qui est déjà préparé
- [x] Types TypeScript définis (`Parfum`, `Atelier`, `Temoignage`, etc.)
- [x] Composants découplés (données via props)
- [x] Structure claire dans `/data/*.ts`
- [x] Support i18n (FR/EN/NL)

### Tâches

#### Configuration CMS
- [ ] Choisir le CMS final (Sanity, Payload, ou Strapi)
- [ ] Définir les schémas (basés sur les types existants)
- [ ] Configurer l'upload d'images
- [ ] Migrer les données mockées vers le CMS

#### Intégration
- [ ] Remplacer les imports `/data/*.ts` par des appels API/CMS
- [ ] Configurer le revalidation/ISR pour les pages statiques
- [ ] Tester les performances

#### Interface Admin
- [ ] Gestion des parfums (CRUD + images + notes olfactives)
- [ ] Gestion des ateliers (CRUD + calendrier)
- [ ] Gestion des témoignages
- [ ] Gestion des autres produits (cosmétiques, bougies, etc.)
- [ ] Modification du contenu des pages
- [ ] Gestion des traductions (FR/EN/NL)

#### Authentification & Sécurité
- [ ] Configurer l'accès admin
- [ ] Définir les rôles (admin, éditeur)

---

## ✅ Phase 14 : E-commerce (Optionnel)

> **Prérequis** : Phase 13 complétée + décision client

- [ ] Panier & Checkout
- [ ] Paiement en ligne (Stripe ou Mollie)
- [ ] Gestion des commandes
- [ ] Emails transactionnels
- [ ] Gestion des stocks

---

## ✅ Phase 15 : Fonctionnalités Avancées (Optionnel)

- [ ] Système de réservation ateliers avec paiement
- [ ] Espace client (compte, historique)
- [ ] Programme fidélité refill
- [ ] Wishlist / Favoris
- [ ] Avis produits
- [ ] Blog / Actualités

---

## 📝 Notes & Décisions

| Date | Décision |
|------|----------|
| 2024-XX-XX | Mega-menu choisi pour la navigation (style moderne) |
| 2024-XX-XX | Palette basée sur le logo (noir/gris/blanc cassé) |
| 2024-XX-XX | Parfums unisexes, pas de catégorie homme/femme |
| 2024-XX-XX | Pack découverte = produit à acheter en ligne |

---

## 🐛 Bugs & Issues

*Liste des bugs à corriger*

- ...

---

## 💡 Idées Futures (Phase 2 - Backend)

- [ ] Authentification client
- [ ] Panier & Checkout complet
- [ ] Paiement en ligne (Stripe/Mollie)
- [ ] Panel administrateur
- [ ] Gestion des stocks
- [ ] Système de réservation ateliers avec paiement
- [ ] Wishlist / Favoris
- [ ] Avis produits
- [ ] Blog / Actualités
- [ ] Programme fidélité refill

---

## 📊 Métriques de Succès (à définir avec le client)

- [ ] Temps passé sur le site
- [ ] Taux de conversion (demandes de contact)
- [ ] Inscriptions aux ateliers
- [ ] Trafic organique

---

*Dernière mise à jour : [DATE]*