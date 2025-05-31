import React, { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { catalogs } from '../data/catalogs';
import Button from '../components/Button';

const PDFViewerPage: React.FC = () => {
  const { catalogId } = useParams<{ catalogId: string }>();
  const [searchParams] = useSearchParams();
  
  const catalog = useMemo(() => {
    return catalogs.find(cat => cat.id === catalogId);
  }, [catalogId]);

  if (!catalog) {
    return (
      <PageTransition>
        <div className="py-12 text-center">
          <h2 className="text-2xl font-bold text-rose-800">Catálogo não encontrado</h2>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-rose-800 mb-2">
            {catalog.title}
          </h1>
          <p className="text-gray-600 mb-6">
            {catalog.description}
          </p>
          
          <div className="rounded-lg overflow-hidden shadow-lg border border-rose-100">
            <div className="bg-rose-800 text-white py-3 px-4 flex items-center justify-between">
              <span className="font-medium">Visualizando Catálogo</span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => window.open(catalog.pdfUrl, '_blank')}
                >
                  Abrir em Nova Aba
                </Button>
              </div>
            </div>
            <iframe
              src={catalog.pdfUrl}
              title={catalog.title}
              className="w-full h-[75vh] border-0"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PDFViewerPage;