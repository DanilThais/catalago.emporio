import { Catalog } from "../types";

// Função para converter URL do Google Drive para download direto
const convertGoogleDriveUrl = (url: string): string => {
  const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (fileIdMatch) {
    const fileId = fileIdMatch[1];
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  }
  return url;
};

// Lista inicial de catálogos - mais de 10 catálogos serão adicionados no futuro
export const catalogs: Catalog[] = [
  {
    id: "lattafa-main",
    categoryId: "lattafa",
    title: "Lattafa - Catálogo Principal",
    description: "Catálogo completo de perfumes Lattafa com todas as fragrâncias disponíveis",
    thumbnailUrl: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
    pdfUrl: convertGoogleDriveUrl("https://drive.google.com/file/d/1McTwe-9hcxxZNFJquPzqxyMepKb0at6e/view?usp=drive_link")
  },
  {
    id: "maison-alhambra-main",
    categoryId: "maison-alhambra",
    title: "Maison Alhambra - Coleção Exclusiva",
    description: "Coleção exclusiva Maison Alhambra com perfumes premium",
    thumbnailUrl: "https://images.pexels.com/photos/3766121/pexels-photo-3766121.jpeg",
    pdfUrl: convertGoogleDriveUrl("https://drive.google.com/file/d/17WqYs4Kl2Ad7__V5F8JYJehT6NCAN-aG/view?usp=drive_link")
  },
  {
    id: "diversos-main",
    categoryId: "diversos",
    title: "Diversos - Produtos Variados",
    description: "Catálogo de produtos diversos da nossa coleção",
    thumbnailUrl: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg",
    pdfUrl: convertGoogleDriveUrl("https://drive.google.com/file/d/1xldP6m-Dd0WsfG6V0pRhYJVAJdbF4pOK/view?usp=drive_link")
  }
];