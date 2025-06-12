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
  // Use different basename for development and production
  const basename = import.meta.env.MODE === 'development' ? '/' : '/catalago.emporio/';

  return (
<<<<<<< HEAD
    <Router basename="/catalago.emporio/">
=======
    <Router basename={basename}>
>>>>>>> 66e1f6e1d3309f67c4ec7fc74c7d55ab8e113885
      <AnimatePresence>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalogs/:categoryId" element={<CatalogListPage />} />
            <Route path="/visualizar/:catalogId" element={<PDFViewerPage />} />
          </Routes>
        </Layout>
      </AnimatePresence>
    </Router>
  );
}

export default App;