// src/app/[locale]/uikit/page.tsx
'use client'

import { useState } from 'react'
import {
  Container,
  Button,
  Heading,
  Text,
  Badge,
  Card,
  CardImage,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Input,
  Textarea,
  Select,
  StyledLink,
  ExternalLink,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  ModalGallery,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsListPill,
  TabsTriggerPill,
  TabsListUnderlined,
  TabsTriggerUnderlined,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  FAQAccordion,
  Toast,
  useToast,
} from '@/components/ui'
import { 
  Search, 
  Mail, 
  Eye, 
  EyeOff,
  ArrowRight,
  ExternalLink as ExternalLinkIcon,
  Check,
  AlertCircle,
  Info,
  AlertTriangle,
  Image as ImageIcon
} from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Page UIKit
 * Affiche tous les composants UI du design system
 */
export default function UIKitPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge variant="default" size="md" className="mb-4">
            Design System
          </Badge>
          <Heading as="h1" size="h1">
            UIKit NeZ ZeN
          </Heading>
          <Text className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tous les composants UI du design system. Cette page sert de référence
            pour maintenir la cohérence visuelle du projet.
          </Text>
        </div>

        {/* Table of Contents */}
        <nav className="mb-16 rounded-lg border border-border bg-surface p-6">
          <Text className="mb-4 font-medium">
            Sommaire
          </Text>
          <div className="flex flex-wrap gap-3">
            {[
              'Typography',
              'Buttons',
              'Badges',
              'Cards',
              'Forms',
              'Links',
              'Modals',
              'Tabs',
              'Accordion',
              'Toasts',
            ].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {section}
              </a>
            ))}
          </div>
        </nav>

        {/* Sections */}
        <div className="space-y-24">
          <TypographySection />
          <ButtonsSection />
          <BadgesSection />
          <CardsSection />
          <FormsSection />
          <LinksSection />
          <ModalsSection />
          <TabsSection />
          <AccordionSection />
          <ToastsSection />
        </div>
      </Container>
    </div>
  )
}

/* ================================
   Section Wrapper
   ================================ */

interface SectionProps {
  id: string
  title: string
  description?: string
  children: React.ReactNode
}

function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-8 border-b border-border pb-4">
        <Heading as="h2" size="h2">
          {title}
        </Heading>
        {description && (
          <Text className="mt-2 text-muted-foreground">{description}</Text>
        )}
      </div>
      {children}
    </section>
  )
}

/* ================================
   Showcase Box
   ================================ */

interface ShowcaseProps {
  title: string
  children: React.ReactNode
  className?: string
}

function Showcase({ title, children, className }: ShowcaseProps) {
  return (
    <div className="mb-8">
      <Text size="sm" className="mb-3 font-medium text-muted-foreground">
        {title}
      </Text>
      <div
        className={cn(
          'rounded-lg border border-border bg-background-alt p-6',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

/* ================================
   Typography Section
   ================================ */

function TypographySection() {
  return (
    <Section
      id="typography"
      title="Typography"
      description="Headings et textes avec différentes tailles et styles"
    >
      <Showcase title="Headings">
        <div className="space-y-4">
          <Heading as="h1" size="h1">
            Heading H1
          </Heading>
          <Heading as="h2" size="h2">
            Heading H2
          </Heading>
          <Heading as="h3" size="h3">
            Heading H3
          </Heading>
          <Heading as="h4" size="h4">
            Heading H4
          </Heading>
        </div>
      </Showcase>

      <Showcase title="Text Sizes">
        <div className="space-y-3">
          <Text size="xl">Text XL - Pour les grandes citations</Text>
          <Text size="lg">Text Large - Pour les introductions</Text>
          <Text size="base">Text Base - Pour le contenu principal</Text>
          <Text size="sm">Text Small - Pour les détails</Text>
        </div>
      </Showcase>

      <Showcase title="Text Variants">
        <div className="space-y-3">
          <Text>Default text - couleur principale</Text>
          <Text variant="muted">Muted text - pour le contenu secondaire</Text>
          <Text variant="accent">Accent text - pour les mises en valeur</Text>
        </div>
      </Showcase>

      <Showcase title="Text Leading (Line Height)">
        <div className="space-y-6">
          <div>
            <Text size="sm" variant="muted" className="mb-1">Leading Tight</Text>
            <Text leading="tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </Text>
          </div>
          <div>
            <Text size="sm" variant="muted" className="mb-1">Leading Normal</Text>
            <Text leading="normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </Text>
          </div>
          <div>
            <Text size="sm" variant="muted" className="mb-1">Leading Relaxed (default)</Text>
            <Text leading="relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </Text>
          </div>
        </div>
      </Showcase>

      <Showcase title="Text with Custom Classes">
        <div className="space-y-3">
          <Text className="font-medium">Medium weight (via className)</Text>
          <Text className="font-semibold">Semibold weight (via className)</Text>
          <Text className="text-error">Error color (via className)</Text>
          <Text className="text-success">Success color (via className)</Text>
        </div>
      </Showcase>
    </Section>
  )
}

/* ================================
   Buttons Section
   ================================ */

function ButtonsSection() {
  const [loading, setLoading] = useState(false)

  const handleLoadingDemo = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Section
      id="buttons"
      title="Buttons"
      description="Boutons avec différents variants, tailles et états"
    >
      <Showcase title="Variants">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Showcase>

      <Showcase title="Sizes">
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Showcase>

      <Showcase title="With Icons">
        <div className="flex flex-wrap gap-4">
          <Button>
            Continuer <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> Contact
          </Button>
        </div>
      </Showcase>

      <Showcase title="States">
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button isLoading={loading} onClick={handleLoadingDemo}>
            {loading ? 'Chargement...' : 'Cliquez-moi'}
          </Button>
          <Button fullWidth className="mt-4">
            Full Width
          </Button>
        </div>
      </Showcase>
    </Section>
  )
}

/* ================================
   Badges Section
   ================================ */

function BadgesSection() {
  return (
    <Section
      id="badges"
      title="Badges"
      description="Étiquettes pour indiquer des statuts ou catégories"
    >
      <Showcase title="Variants">
        <div className="flex flex-wrap gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="dark">Dark</Badge>
        </div>
      </Showcase>

      <Showcase title="Sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
        </div>
      </Showcase>

      <Showcase title="Use Cases">
        <div className="flex flex-wrap gap-3">
          <Badge variant="dark">Nouveau</Badge>
          <Badge variant="success">100% Vegan</Badge>
          <Badge variant="outline">Artisan Certifié</Badge>
          <Badge>Best-seller</Badge>
        </div>
      </Showcase>
    </Section>
  )
}

/* ================================
   Cards Section
   ================================ */

function CardsSection() {
  return (
    <Section
      id="cards"
      title="Cards"
      description="Conteneurs pour regrouper du contenu"
    >
      <Showcase title="Variants" className="bg-muted/30">
        <div className="grid gap-6 md:grid-cols-3">
          <Card variant="default" padding="md">
            <CardTitle>Default</CardTitle>
            <CardDescription className="mt-2">
              Carte simple sans bordure
            </CardDescription>
          </Card>

          <Card variant="elevated" padding="md">
            <CardTitle>Elevated</CardTitle>
            <CardDescription className="mt-2">
              Carte avec ombre légère
            </CardDescription>
          </Card>

          <Card variant="outlined" padding="md">
            <CardTitle>Outlined</CardTitle>
            <CardDescription className="mt-2">
              Carte avec bordure
            </CardDescription>
          </Card>
        </div>
      </Showcase>

      <Showcase title="Product Card Style" className="bg-muted/30">
        <div className="max-w-xs">
          <Card variant="outlined" hoverable>
            <CardImage aspectRatio="portrait">
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
              </div>
            </CardImage>
            <CardContent padding="md">
              <Badge variant="dark" size="sm" className="mb-2">
                Nouveau
              </Badge>
              <CardTitle>Nom du Produit</CardTitle>
              <CardDescription className="mt-1">
                Description courte du produit
              </CardDescription>
              <Text className="mt-3 font-medium">À partir de 26,50€</Text>
            </CardContent>
          </Card>
        </div>
      </Showcase>

      <Showcase title="Full Card Structure">
        <Card variant="outlined" className="max-w-md">
          <CardHeader>
            <CardTitle>Titre de la carte</CardTitle>
            <CardDescription>
              Une description plus détaillée du contenu de cette carte.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text>
              Contenu principal de la carte. Peut contenir du texte, des images,
              des formulaires, etc.
            </Text>
          </CardContent>
          <CardFooter className="flex gap-3">
            <Button variant="outline" size="sm">
              Annuler
            </Button>
            <Button size="sm">Confirmer</Button>
          </CardFooter>
        </Card>
      </Showcase>
    </Section>
  )
}

/* ================================
   Forms Section
   ================================ */

function FormsSection() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Section
      id="forms"
      title="Forms"
      description="Champs de formulaire et contrôles"
    >
      <Showcase title="Input">
        <div className="max-w-md space-y-4">
          <Input label="Nom" placeholder="Votre nom" />
          <Input
            label="Email"
            type="email"
            placeholder="votre@email.com"
            leftIcon={<Mail className="h-4 w-4" />}
          />
          <Input
            label="Recherche"
            placeholder="Rechercher..."
            leftIcon={<Search className="h-4 w-4" />}
            hint="Tapez pour rechercher"
          />
          <Input
            label="Mot de passe"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            }
          />
          <Input
            label="Avec erreur"
            placeholder="Champ invalide"
            error="Ce champ est requis"
          />
          <Input label="Désactivé" placeholder="Non modifiable" disabled />
        </div>
      </Showcase>

      <Showcase title="Textarea">
        <div className="max-w-md space-y-4">
          <Textarea
            label="Message"
            placeholder="Votre message..."
            rows={4}
          />
          <Textarea
            label="Avec erreur"
            placeholder="Décrivez votre demande"
            error="Le message est trop court"
          />
        </div>
      </Showcase>

      <Showcase title="Select">
        <div className="max-w-md space-y-4">
          <Select
            label="Sujet"
            placeholder="Sélectionnez un sujet"
            options={[
              { value: 'info', label: 'Renseignement' },
              { value: 'order', label: 'Commande' },
              { value: 'atelier', label: 'Atelier' },
              { value: 'custom', label: 'Sur mesure' },
            ]}
          />
          <Select
            label="Format"
            options={[
              { value: '15ml', label: '15ml - 26,50€' },
              { value: '30ml', label: '30ml - 42,00€' },
              { value: '50ml', label: '50ml - 58,00€' },
              { value: '100ml', label: '100ml - 89,00€' },
            ]}
          />
          <Select
            label="Avec erreur"
            placeholder="Choisir..."
            options={[
              { value: 'opt1', label: 'Option 1' },
              { value: 'opt2', label: 'Option 2' },
            ]}
            error="Veuillez sélectionner une option"
          />
        </div>
      </Showcase>
    </Section>
  )
}

/* ================================
   Links Section
   ================================ */

function LinksSection() {
  return (
    <Section
      id="links"
      title="Links"
      description="Liens stylisés pour la navigation"
    >
      <Showcase title="Styled Links">
        <div className="space-y-4">
          <div>
            <StyledLink href="/creations">Lien default</StyledLink>
          </div>
          <div>
            <StyledLink href="/creations" variant="muted">
              Lien muted
            </StyledLink>
          </div>
          <div>
            <StyledLink href="/creations" variant="underline">
              Lien souligné
            </StyledLink>
          </div>
          <div>
            <StyledLink href="/creations" variant="nav">
              Lien navigation (hover pour voir l&apos;effet)
            </StyledLink>
          </div>
          <div>
            <StyledLink href="/creations">
              Lien avec flèche <ArrowRight className="h-4 w-4" />
            </StyledLink>
          </div>
        </div>
      </Showcase>

      <Showcase title="External Links">
        <div className="space-y-4">
          <div>
            <ExternalLink href="https://example.com">Lien externe default</ExternalLink>
          </div>
          <div>
            <ExternalLink href="https://example.com" variant="muted">
              Lien externe muted
            </ExternalLink>
          </div>
          <div>
            <ExternalLink href="https://example.com" variant="underline">
              Lien externe souligné
            </ExternalLink>
          </div>
          <div>
            <ExternalLink href="https://example.com">
              Lien externe avec icône <ExternalLinkIcon className="h-3 w-3" />
            </ExternalLink>
          </div>
        </div>
      </Showcase>
    </Section>
  )
}

/* ================================
   Modals Section
   ================================ */

function ModalsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md')
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const galleryImages = [
    { src: '/images/placeholder-1.jpg', alt: 'Image 1', caption: 'Première image de la galerie' },
    { src: '/images/placeholder-2.jpg', alt: 'Image 2', caption: 'Deuxième image' },
    { src: '/images/placeholder-3.jpg', alt: 'Image 3', caption: 'Troisième image' },
  ]

  return (
    <Section
      id="modals"
      title="Modals"
      description="Fenêtres modales pour le contenu overlay"
    >
      <Showcase title="Basic Modal">
        <div className="flex flex-wrap gap-4">
          {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <Button
              key={size}
              variant="outline"
              onClick={() => {
                setModalSize(size)
                setIsModalOpen(true)
              }}
            >
              Modal {size.toUpperCase()}
            </Button>
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          size={modalSize}
          title="Exemple de Modal"
        >
          <ModalHeader>
            <ModalTitle>Titre du Modal</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Text>
              Ceci est le contenu du modal. Il peut contenir n&apos;importe quel
              élément : texte, formulaires, images, etc.
            </Text>
            <Text className="mt-4 text-muted-foreground">
              Taille actuelle : <strong>{modalSize}</strong>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Annuler
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>Confirmer</Button>
          </ModalFooter>
        </Modal>
      </Showcase>

      <Showcase title="Gallery Modal">
        <Button onClick={() => setIsGalleryOpen(true)}>
          <ImageIcon className="mr-2 h-4 w-4" />
          Ouvrir la galerie
        </Button>

        <ModalGallery
          images={galleryImages}
          currentIndex={galleryIndex}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          onIndexChange={setGalleryIndex}
        />

        <Text size="sm" className="mt-4 text-muted-foreground">
          Navigation : flèches clavier ← → ou cliquez sur les boutons
        </Text>
      </Showcase>
    </Section>
  )
}

/* ================================
   Tabs Section
   ================================ */

function TabsSection() {
  return (
    <Section
      id="tabs"
      title="Tabs"
      description="Navigation par onglets avec différents styles"
    >
      <Showcase title="Default Tabs">
        <Tabs defaultValue="description">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="formats">Formats</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <Text>
              Contenu de l&apos;onglet Description. Ce style utilise une ligne
              sous l&apos;onglet actif.
            </Text>
          </TabsContent>
          <TabsContent value="notes" className="mt-4">
            <Text>
              Contenu de l&apos;onglet Notes. La navigation clavier est supportée.
            </Text>
          </TabsContent>
          <TabsContent value="formats" className="mt-4">
            <Text>
              Contenu de l&apos;onglet Formats. Accessible et animé.
            </Text>
          </TabsContent>
        </Tabs>
      </Showcase>

      <Showcase title="Pill Tabs">
        <Tabs defaultValue="tab1">
          <TabsListPill>
            <TabsTriggerPill value="tab1">Parfums</TabsTriggerPill>
            <TabsTriggerPill value="tab2">Cosmétiques</TabsTriggerPill>
            <TabsTriggerPill value="tab3">Bougies</TabsTriggerPill>
          </TabsListPill>
          <TabsContent value="tab1" className="mt-4">
            <Text>Style &quot;pill&quot; avec fond arrondi sur l&apos;onglet actif.</Text>
          </TabsContent>
          <TabsContent value="tab2" className="mt-4">
            <Text>Idéal pour les filtres ou les catégories.</Text>
          </TabsContent>
          <TabsContent value="tab3" className="mt-4">
            <Text>Design moderne et épuré.</Text>
          </TabsContent>
        </Tabs>
      </Showcase>

      <Showcase title="Underlined Tabs">
        <Tabs defaultValue="histoire">
          <TabsListUnderlined>
            <TabsTriggerUnderlined value="histoire">Histoire</TabsTriggerUnderlined>
            <TabsTriggerUnderlined value="inspiration">Inspiration</TabsTriggerUnderlined>
            <TabsTriggerUnderlined value="creation">Création</TabsTriggerUnderlined>
          </TabsListUnderlined>
          <TabsContent value="histoire" className="mt-6">
            <Text>
              Style minimaliste avec ligne animée. Parfait pour un design zen.
            </Text>
          </TabsContent>
          <TabsContent value="inspiration" className="mt-6">
            <Text>
              L&apos;animation de la ligne suit l&apos;onglet actif.
            </Text>
          </TabsContent>
          <TabsContent value="creation" className="mt-6">
            <Text>
              Élégant et raffiné, idéal pour les détails produits.
            </Text>
          </TabsContent>
        </Tabs>
      </Showcase>

      <Showcase title="Vertical Tabs">
        <Tabs defaultValue="option1" orientation="vertical">
          <TabsList>
            <TabsTrigger value="option1">Option 1</TabsTrigger>
            <TabsTrigger value="option2">Option 2</TabsTrigger>
            <TabsTrigger value="option3">Option 3</TabsTrigger>
          </TabsList>
          <TabsContent value="option1" className="flex-1 pl-6">
            <Text>Navigation verticale pour les menus latéraux.</Text>
          </TabsContent>
          <TabsContent value="option2" className="flex-1 pl-6">
            <Text>Utile pour les paramètres ou les sous-sections.</Text>
          </TabsContent>
          <TabsContent value="option3" className="flex-1 pl-6">
            <Text>Support complet du clavier (↑ ↓).</Text>
          </TabsContent>
        </Tabs>
      </Showcase>
    </Section>
  )
}

/* ================================
   Accordion Section
   ================================ */

function AccordionSection() {
  const faqItems = [
    {
      question: 'Vos parfums sont-ils vraiment 100% vegan ?',
      answer:
        'Oui, absolument ! Nous n\'utilisons aucun ingrédient d\'origine animale dans nos créations. Nos parfums sont formulés exclusivement avec des matières végétales et synthétiques éthiques.',
    },
    {
      question: 'Comment fonctionne le système de recharge ?',
      answer:
        'Vous pouvez ramener votre flacon vide en boutique et nous le remplissons sur place. Cela vous permet d\'économiser sur le prix du flacon tout en réduisant votre impact environnemental.',
    },
    {
      question: 'Proposez-vous des créations sur mesure ?',
      answer:
        'Oui ! Nous créons des parfums personnalisés pour les particuliers et les entreprises. Contactez-nous pour discuter de votre projet.',
    },
  ]

  return (
    <Section
      id="accordion"
      title="Accordion"
      description="Contenu dépliable pour FAQ et informations détaillées"
    >
      <Showcase title="Default (Single)">
        <Accordion type="single" defaultValue="item-1" className="max-w-xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>Premier élément</AccordionTrigger>
            <AccordionContent>
              <Text className="text-muted-foreground">
                Contenu du premier élément. En mode &quot;single&quot;, un seul élément
                peut être ouvert à la fois.
              </Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Deuxième élément</AccordionTrigger>
            <AccordionContent>
              <Text className="text-muted-foreground">
                Contenu du deuxième élément. L&apos;animation de hauteur est fluide.
              </Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Troisième élément</AccordionTrigger>
            <AccordionContent>
              <Text className="text-muted-foreground">
                Contenu du troisième élément.
              </Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Showcase>

      <Showcase title="Multiple + Bordered">
        <Accordion type="multiple" variant="bordered" className="max-w-xl">
          <AccordionItem value="a">
            <AccordionTrigger iconStyle="plus-minus">
              Peut-on ouvrir plusieurs items ?
            </AccordionTrigger>
            <AccordionContent>
              <Text className="text-muted-foreground">
                Oui ! En mode &quot;multiple&quot;, plusieurs éléments peuvent être
                ouverts simultanément.
              </Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger iconStyle="plus-minus">
              Comment changer l&apos;icône ?
            </AccordionTrigger>
            <AccordionContent>
              <Text className="text-muted-foreground">
                Utilisez la prop iconStyle : &quot;chevron&quot;, &quot;plus-minus&quot; ou &quot;none&quot;.
              </Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Showcase>

      <Showcase title="Separated Variant">
        <Accordion type="single" variant="separated" className="max-w-xl">
          <AccordionItem value="x">
            <AccordionTrigger>Item séparé 1</AccordionTrigger>
            <AccordionContent>
              <Text className="text-muted-foreground">
                Les items sont visuellement séparés avec des bordures individuelles.
              </Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="y">
            <AccordionTrigger>Item séparé 2</AccordionTrigger>
            <AccordionContent>
              <Text className="text-muted-foreground">
                Idéal pour des sections distinctes.
              </Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Showcase>

      <Showcase title="FAQ Preset">
        <FAQAccordion items={faqItems} className="max-w-xl" />
      </Showcase>
    </Section>
  )
}

/* ================================
   Toasts Section
   ================================ */

function ToastsSection() {
  const { addToast } = useToast()

  const showToast = (variant: 'default' | 'success' | 'error' | 'warning' | 'info') => {
    const messages = {
      default: { title: 'Notification', description: 'Ceci est une notification par défaut.' },
      success: { title: 'Succès !', description: 'L\'action a été effectuée avec succès.' },
      error: { title: 'Erreur', description: 'Une erreur est survenue. Veuillez réessayer.' },
      warning: { title: 'Attention', description: 'Cette action nécessite votre attention.' },
      info: { title: 'Information', description: 'Voici une information utile.' },
    }

    addToast({
      ...messages[variant],
      variant,
    })
  }

  return (
    <Section
      id="toasts"
      title="Toasts"
      description="Notifications temporaires pour les actions utilisateur"
    >
      <Showcase title="Toast Variants">
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" onClick={() => showToast('default')}>
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() => showToast('success')}
            className="text-success border-success/50"
          >
            <Check className="mr-2 h-4 w-4" />
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => showToast('error')}
            className="text-error border-error/50"
          >
            <AlertCircle className="mr-2 h-4 w-4" />
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() => showToast('warning')}
            className="text-warning border-warning/50"
          >
            <AlertTriangle className="mr-2 h-4 w-4" />
            Warning
          </Button>
          <Button
            variant="outline"
            onClick={() => showToast('info')}
            className="text-info border-info/50"
          >
            <Info className="mr-2 h-4 w-4" />
            Info
          </Button>
        </div>
        <Text size="sm" className="mt-4 text-muted-foreground">
          Les toasts disparaissent automatiquement après 5 secondes. La barre de
          progression indique le temps restant.
        </Text>
      </Showcase>

      <Showcase title="Static Toast Preview">
        <div className="space-y-4">
          <Toast
            title="Commande confirmée"
            description="Votre commande #1234 a bien été enregistrée."
            variant="success"
          />
          <Toast
            title="Erreur de paiement"
            description="Le paiement n'a pas pu être traité."
            variant="error"
          />
        </div>
      </Showcase>
    </Section>
  )
}