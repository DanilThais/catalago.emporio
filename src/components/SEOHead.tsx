import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Empório Dubai Perfumaria - Catálogos',
  description = 'Explore nossa coleção exclusiva de perfumes e produtos de beleza. Catálogos digitais da Empório Dubai Perfumaria.',
  keywords = 'perfumes, fragrâncias, beleza, catálogo, Lattafa, Maison Alhambra, Dubai',
  image = 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
  url = 'https://heroic-gelato-1d4b31.netlify.app/catalago.emporio/'
  url = 'https://heroic-gelato-1d4b31.netlify.app/'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Empório Dubai Perfumaria" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Empório Dubai Perfumaria" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#E91E63" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHead;