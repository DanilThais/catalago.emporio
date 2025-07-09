/**
 * Utilitários para gerenciar paths no GitHub Pages
 */

// Base path para GitHub Pages
const BASE_PATH = '/catalago.emporio';

// Utilitário para assets estáticos
export const getAssetPath = (assetPath: string): string => {
  // Remove leading slash se existir
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  
  // Para GitHub Pages, sempre usar o base path completo
  return `${BASE_PATH}/${cleanPath}`;
};

// Utilitário para verificar se estamos em produção
export const isProduction = (): boolean => {
  return import.meta.env.PROD;
};

// Utilitário para debug de paths
export const debugPaths = () => {
  if (!isProduction()) {
    console.log('Base Path:', BASE_PATH);
    console.log('Current URL:', window.location.href);
  }
};