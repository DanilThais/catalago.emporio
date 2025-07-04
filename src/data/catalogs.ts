import { Catalog } from "../types";

// Lista inicial de catálogos - mais de 10 catálogos serão adicionados no futuro
export const catalogs: Catalog[] = [
  {
    id: "lattafa-main",
    categoryId: "lattafa",
    title: "Lattafa - Catálogo Principal",
    description: "Catálogo completo de perfumes Lattafa com todas as fragrâncias disponíveis",
    thumbnailUrl: "/assets/lattafa-catalog.jpg",
    pdfUrl: "https://drive.google.com/file/d/1Eb2aHLnar0j642Jhtxgf8z9dxUAYiUAV/view?usp=sharing",
  },
  {
    id: "maison-alhambra-main",
    categoryId: "maison-alhambra",
    title: "Maison Alhambra - Coleção Exclusiva",
    description: "Coleção exclusiva Maison Alhambra com perfumes premium",
    thumbnailUrl: "/assets/maison-alhambra-catalog.jpg",
    pdfUrl: "https://drive.google.com/file/d/17WqYs4Kl2Ad7__V5F8JYJehT6NCAN-aG/view?usp=sharing",
  },
  {
    id: "orientica-main",
    categoryId: "orientica",
    title: "Orientica - Coleção Oriental",
    description: "Descubra a elegância das fragrâncias orientais Orientica, com notas exóticas e sofisticadas",
    thumbnailUrl: "/assets/AFNAN .jpg",
    pdfUrl: "https://drive.google.com/file/d/1K-UtQ9BlQGAYZDJgv_Mq67zbaDuY7D9q/view?usp=sharing",
  },
  {
    id: "diversos-main",
    categoryId: "diversos",
    title: "Diversos - Produtos Variados",
    description: "Catálogo de produtos diversos da nossa coleção",
    thumbnailUrl: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg",
    pdfUrl: "https://drive.google.com/file/d/1xldP6m-Dd0WsfG6V0pRhYJVAJdbF4pOK/view?usp=sharing",
  },
];