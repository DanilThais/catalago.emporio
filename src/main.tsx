import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';

// Registrar o Service Worker com atualização automática
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm('Nova versão disponível. Recarregar para atualizar?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log('Aplicativo pronto para uso offline');
  },
  onRegisterError(error) {
    console.error('Erro ao registrar Service Worker:', error);
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);