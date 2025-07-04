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
    id: "internacionais-catalog-1",
    categoryId: "internacionais",
    title: "Internacionais - Coleção Premium Vol. 1",
    description: "Primeira coleção de perfumes internacionais com fragrâncias exclusivas e sofisticadas",
    thumbnailUrl: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg",
    pdfUrl: "https://drive.google.com/file/d/1VUgN65etczMht7DWFm0bt7GaMLsORo6w/view?usp=drive_link",
  },
  {
    id: "internacionais-catalog-2",
    categoryId: "internacionais",
    title: "Internacionais - Coleção Premium Vol. 2",
    description: "Segunda coleção de perfumes internacionais com as mais refinadas fragrâncias do mercado global",
    thumbnailUrl: "https://drive.google.com/file/d/10OSyWG1OWBcqlyyl3sIEvtP7cXOwaowH/view?usp=drive_link",
    pdfUrl: "",
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