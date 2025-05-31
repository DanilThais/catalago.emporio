import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import CatalogCard from '../components/CatalogCard';
import { categories } from '../data/categories';
import { catalogs } from '../data/catalogs';

const CatalogListPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const category = useMemo(() => {
    return categories.find(cat => cat.id === categoryId);
  }, [categoryId]);
  
  const categoryCatalogs = useMemo(() => {
    return catalogs.filter(catalog => catalog.categoryId === categoryId);
  }, [categoryId]);

  if (!category) {
    return (
      <PageTransition>
        <div className="py-12 text-center">
          <h2 className="text-2xl font-bold text-rose-800">Categoria não encontrada</h2>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="py-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-rose-800 mb-2 text-center">
          {category.name}
        </h1>
        <p className="text-center text-gray-600 mb-8">
          {category.description}
        </p>
        
        {categoryCatalogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryCatalogs.map((catalog, index) => (
              <CatalogCard 
                key={catalog.id} 
                catalog={catalog}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              Nenhum catálogo disponível para esta categoria no momento.
            </p>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default CatalogListPage;