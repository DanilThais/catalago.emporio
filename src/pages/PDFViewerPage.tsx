import React, { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { catalogs } from '../data/catalogs';
import Button from '../components/Button';
import { FileText, ExternalLink } from 'lucide-react';

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
          <h2 className="text-2xl font-bold text-gold">Catálogo não encontrado</h2>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-gold mb-2">
                {catalog.title}
              </h1>
              <p className="text-gray-300">
                {catalog.description}
              </p>
            </div>
            <Button
              size="sm"
              variant="primary"
              onClick={() => window.open(catalog.pdfUrl, '_blank')}
              className="w-full sm:w-auto"
            >
              <span>Abrir em Nova Aba</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-gold border border-gold/10">
            <div className="bg-brown-dark text-gold py-3 px-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span className="font-medium">Visualizando Catálogo</span>
            </div>
            <iframe
              src={catalog.pdfUrl}
              title={catalog.title}
              className="w-full h-[75vh] border-0 bg-white"
            />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PDFViewerPage;