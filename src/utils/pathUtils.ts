/**
 * Utilitários para gerenciar paths no GitHub Pages
 */

// Utilitário para assets estáticos - usa paths relativos que funcionam com a tag <base>
export const getAssetPath = (assetPath: string): string => {
  // Remove leading slash se existir
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  
  // Retorna path relativo que será resolvido pela tag <base>
  return `/${cleanPath}`;
};

// Utilitário para verificar se estamos em produção
export const isProduction = (): boolean => {
  return import.meta.env.PROD;
};

// Utilitário para debug de paths
export const debugPaths = () => {
  if (!isProduction()) {
    console.log('Base Path:', document.querySelector('base')?.href || 'No base tag');
    console.log('Current URL:', window.location.href);
  }
};