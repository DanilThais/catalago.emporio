import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import PageTransition from '../components/PageTransition';
import { catalogs } from '../data/catalogs';
import Button from '../components/Button';
import { FileText, ExternalLink, ChevronLeft, ChevronRight, Download } from 'lucide-react';

// Configurar o worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// Importar estilos do react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const PDFViewerPage: React.FC = () => {
  const { catalogId } = useParams<{ catalogId: string }>();
  const [searchParams] = useSearchParams();
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const catalog = useMemo(() => {
    return catalogs.find(cat => cat.id === catalogId);
  }, [catalogId]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('Erro ao carregar PDF:', error);
    setError('Erro ao carregar o catálogo. Tente novamente mais tarde.');
    setLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages));
  };

  if (!catalog) {
    return (
      <PageTransition>
        <div className="py-12 text-center">
          <h2 className="text-2xl font-bold text-rose">Catálogo não encontrado</h2>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="py-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-rose mb-2">
                {catalog.title}
              </h1>
              <p className="text-gray-700">
                {catalog.description}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open(catalog.pdfUrl, '_blank')}
                className="w-full sm:w-auto"
              >
                <Download className="w-4 h-4 mr-2" />
                <span>Download</span>
              </Button>
              <Button
                size="sm"
                variant="primary"
                onClick={() => window.open(catalog.pdfUrl, '_blank')}
                className="w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Nova Aba</span>
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-rose border border-rose/10 bg-white">
            <div className="bg-rose-dark text-white py-3 px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span className="font-medium">Visualizando Catálogo</span>
              </div>
              
              {numPages > 0 && (
                <div className="flex items-center gap-4">
                  <span className="text-sm">
                    Página {pageNumber} de {numPages}
                  </span>
                  <div className="flex gap-1">
                    <button
                      onClick={goToPrevPage}
                      disabled={pageNumber <= 1}
                      className="p-1 rounded hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={goToNextPage}
                      disabled={pageNumber >= numPages}
                      className="p-1 rounded hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 bg-gray-50 min-h-[600px] flex items-center justify-center">
              {loading && (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose mx-auto mb-4"></div>
                  <p className="text-gray-600">Carregando catálogo...</p>
                </div>
              )}
              
              {error && (
                <div className="text-center max-w-md">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <FileText className="w-12 h-12 text-red-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-red-800 mb-2">
                      Erro ao carregar catálogo
                    </h3>
                    <p className="text-red-600 mb-4">{error}</p>
                    <Button
                      onClick={() => window.open(catalog.pdfUrl, '_blank')}
                      variant="primary"
                      size="sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Abrir em nova aba
                    </Button>
                  </div>
                </div>
              )}
              
              {!loading && !error && (
                <div className="flex flex-col items-center">
                  <Document
                    file={catalog.pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose mx-auto mb-2"></div>
                        <p className="text-gray-600 text-sm">Carregando...</p>
                      </div>
                    }
                    error={
                      <div className="text-center max-w-md">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                          <FileText className="w-12 h-12 text-red-400 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-red-800 mb-2">
                            Erro ao carregar PDF
                          </h3>
                          <p className="text-red-600 mb-4">
                            Não foi possível carregar o catálogo. Tente abrir em uma nova aba.
                          </p>
                          <Button
                            onClick={() => window.open(catalog.pdfUrl, '_blank')}
                            variant="primary"
                            size="sm"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Abrir em nova aba
                          </Button>
                        </div>
                      </div>
                    }
                  >
                    <Page
                      pageNumber={pageNumber}
                      width={Math.min(800, window.innerWidth - 100)}
                      className="shadow-lg"
                    />
                  </Document>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PDFViewerPage;