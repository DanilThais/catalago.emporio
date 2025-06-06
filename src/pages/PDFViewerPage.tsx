import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { catalogs } from '../data/catalogs';
import Button from '../components/Button';
import { FileText, ExternalLink, ArrowLeft } from 'lucide-react';

const PDFViewerPage: React.FC = () => {
  const { catalogId } = useParams<{ catalogId: string }>();
  const navigate = useNavigate();
  
  const catalog = useMemo(() => {
    return catalogs.find(cat => cat.id === catalogId);
  }, [catalogId]);

  useEffect(() => {
    if (catalog) {
      // Abrir o PDF automaticamente em uma nova aba
      window.open(catalog.pdfUrl, '_blank');
    }
  }, [catalog]);

  if (!catalog) {
    return (
      <PageTransition>
        <div className="py-12 text-center">
          <div className="max-w-md mx-auto">
            <FileText className="w-16 h-16 text-rose/50 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-rose mb-4">Catálogo não encontrado</h2>
            <p className="text-gray-600 mb-6">
              O catálogo solicitado não foi encontrado em nossa base de dados.
            </p>
            <Button onClick={() => navigate('/')} variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Button>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-xl shadow-rose border border-rose/10 p-8">
            <div className="w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-rose" />
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-rose mb-4">
              {catalog.title}
            </h1>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {catalog.description}
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 text-sm">
                <span className="font-semibold">✓ Catálogo aberto!</span>
                <br />
                O catálogo foi aberto em uma nova aba do seu navegador.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => window.open(catalog.pdfUrl, '_blank')}
                variant="primary"
                className="w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Abrir novamente
              </Button>
              
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                className="w-full sm:w-auto"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                Se o catálogo não abriu automaticamente, verifique se o bloqueador de pop-ups está desabilitado 
                ou clique em "Abrir novamente" acima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PDFViewerPage;