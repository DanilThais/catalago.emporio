import React, { useMemo, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { catalogs } from '../data/catalogs';
import Button from '../components/Button';
import { FileText, ExternalLink, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';

const PDFViewerPage: React.FC = () => {
  const { catalogId } = useParams<{ catalogId: string }>();
  const navigate = useNavigate();
  const [pdfOpened, setPdfOpened] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  
  const catalog = useMemo(() => {
    return catalogs.find(cat => cat.id === catalogId);
  }, [catalogId]);

  const openPDF = () => {
    if (catalog) {
      const newWindow = window.open(catalog.pdfUrl, '_blank');
      if (newWindow) {
        setPdfOpened(true);
        setShowInstructions(false);
      } else {
        setShowInstructions(true);
      }
    }
  };

  useEffect(() => {
    if (catalog) {
      // Abrir o PDF imediatamente sem setTimeout
      openPDF();
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
            
            {pdfOpened && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Catálogo aberto com sucesso!</span>
                </div>
                <p className="text-green-700 text-sm mt-2">
                  O catálogo foi aberto em uma nova aba do seu navegador.
                </p>
              </div>
            )}
            
            {showInstructions && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-amber-800 mb-2">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-semibold">Pop-ups bloqueados</span>
                </div>
                <p className="text-amber-700 text-sm">
                  Seu navegador bloqueou a abertura automática. Clique no botão abaixo para abrir o catálogo.
                </p>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={openPDF}
                variant="primary"
                className="w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {pdfOpened ? 'Abrir novamente' : 'Abrir catálogo'}
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
              <div className="text-left space-y-3">
                <h3 className="font-semibold text-gray-800 text-sm">
                  💡 Dicas para melhor experiência:
                </h3>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Desabilite o bloqueador de pop-ups para este site</li>
                  <li>• Certifique-se de que o JavaScript está habilitado</li>
                  <li>• Use um navegador atualizado (Chrome, Firefox, Safari, Edge)</li>
                  <li>• Se o PDF não carregar, tente atualizar a página</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PDFViewerPage;