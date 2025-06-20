import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import CatalogListPage from './pages/CatalogListPage';
import PDFViewerPage from './pages/PDFViewerPage';

// Components
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  // Use different basename for development and production
  const basename = import.meta.env.MODE === 'development' ? '/' : '/catalago.emporio/';

  return (
    <ErrorBoundary>
      <Router basename={basename}>
        <AnimatePresence mode="wait">
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalogs/:categoryId" element={<CatalogListPage />} />
              <Route path="/visualizar/:catalogId" element={<PDFViewerPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Layout>
        </AnimatePresence>
      </Router>
    </ErrorBoundary>
  );
}

export default App;