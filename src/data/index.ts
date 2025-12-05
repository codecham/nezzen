// src/data/index.ts
// Export centralisé de toutes les données mockées

// ============ PARFUMS ============
export {
  parfums,
  getFeaturedParfums,
  getParfumBySlug,
  getParfumsByCategory,
  getAllParfums,
  getNewParfums,
} from './parfums'

// ============ ATELIERS ============
export {
  ateliers,
  getFeaturedAteliers,
  getAtelierBySlug,
  getAteliersByAudience,
  getAllAteliers,
  getAteliersParticuliers,
  getAteliersEntreprises,
} from './ateliers'

// ============ PARFUMS D'AMBIANCE & BOUGIES ============
export {
  parfumsAmbiance,
  bougies,
  getFeaturedParfumsAmbiance,
  getAllParfumsAmbiance,
  getParfumAmbianceBySlug,
  getFeaturedBougies,
  getAllBougies,
  getBougieBySlug,
} from './parfums-ambiance'

// ============ COSMÉTIQUES ============
export {
  cosmetiques,
  getFeaturedCosmetiques,
  getAllCosmetiques,
  getCosmetiqueBySlug,
  getGelsDouche,
  getLaitsHydratants,
} from './cosmetiques'

// ============ PACK DÉCOUVERTE ============
export {
  packsDecouverte,
  getPackByType,
  discoverySteps,
} from './pack-decouverte'

// ============ TÉMOIGNAGES ============
export {
  temoignages,
  getHomepageTemoignages,
  getFeaturedTemoignages,
  getTemoignagesByType,
} from './temoignages'

// ============ NAVIGATION ============
export {
  mainNavigation,
  footerNavigation,
  socialLinks,
} from './navigation'