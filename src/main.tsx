import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';

// Registrar o Service Worker com atualização automática
registerSW({
  onNeedRefresh() {
    if (confirm('Nova versão disponível. Recarregar?')) {
      window.location.reload();
    }
  },
  onOfflineReady() {
    console.log('Aplicativo pronto para uso offline');
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);