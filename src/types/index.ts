export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Catalog {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  pdfUrl: string;
}