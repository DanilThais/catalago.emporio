import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import CatalogListPage from './pages/CatalogListPage';
import PDFViewerPage from './pages/PDFViewerPage';

// Components
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogs/:categoryId" element={<CatalogListPage />} />
            <Route path="/visualizar/:catalogId" element={<PDFViewerPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;